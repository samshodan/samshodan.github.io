---
title: "Kubernetes Best Practices: Production-Ready Container Orchestration"
excerpt: "Master Kubernetes with proven best practices for security, scalability, and reliability in production environments. Learn from real-world implementations."
date: "2024-02-12"
author: "Sarah Kim"
category: "Cloud Engineering"
tags: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud Native", "Microservices"]
image: "/images/blog/kubernetes-best-practices.jpg"
---

# Kubernetes Best Practices: Production-Ready Container Orchestration

Kubernetes has become the de facto standard for container orchestration, but running it successfully in production requires deep understanding of best practices, security considerations, and operational excellence. This comprehensive guide covers everything you need to know to run Kubernetes effectively at scale.

## Cluster Architecture and Design

### 1. Multi-Zone High Availability Setup

```yaml
# High-availability cluster configuration
apiVersion: kubeadm.k8s.io/v1beta3
kind: ClusterConfiguration
metadata:
  name: production-cluster
kubernetesVersion: v1.28.0
controlPlaneEndpoint: "k8s-api.example.com:6443"
networking:
  serviceSubnet: "10.96.0.0/12"
  podSubnet: "10.244.0.0/16"
etcd:
  external:
    endpoints:
    - "https://etcd1.example.com:2379"
    - "https://etcd2.example.com:2379" 
    - "https://etcd3.example.com:2379"
    caFile: "/etc/kubernetes/pki/etcd/ca.crt"
    certFile: "/etc/kubernetes/pki/apiserver-etcd-client.crt"
    keyFile: "/etc/kubernetes/pki/apiserver-etcd-client.key"
apiServer:
  extraArgs:
    audit-log-maxage: "30"
    audit-log-maxbackup: "10"
    audit-log-maxsize: "100"
    audit-log-path: "/var/log/audit.log"
    enable-admission-plugins: "NodeRestriction,PodSecurityPolicy,ResourceQuota"
controllerManager:
  extraArgs:
    bind-address: "0.0.0.0"
scheduler:
  extraArgs:
    bind-address: "0.0.0.0"
```

### 2. Node Pool Strategy

```yaml
# Node pool configuration for different workload types
apiVersion: v1
kind: Node
metadata:
  name: worker-node-compute
  labels:
    node-type: "compute-optimized"
    workload: "cpu-intensive"
    zone: "us-east-1a"
spec:
  taints:
  - key: "workload"
    value: "compute"
    effect: "NoSchedule"

---
apiVersion: v1
kind: Node
metadata:
  name: worker-node-memory
  labels:
    node-type: "memory-optimized"
    workload: "memory-intensive"
    zone: "us-east-1b"
spec:
  taints:
  - key: "workload"
    value: "memory"
    effect: "NoSchedule"

---
apiVersion: v1
kind: Node
metadata:
  name: worker-node-gpu
  labels:
    node-type: "gpu-enabled"
    workload: "ml-training"
    zone: "us-east-1c"
spec:
  taints:
  - key: "nvidia.com/gpu"
    value: "true"
    effect: "NoSchedule"
```

## Resource Management and Optimization

### 1. Resource Requests and Limits

```yaml
# Proper resource configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-application
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-application
  template:
    metadata:
      labels:
        app: web-application
    spec:
      containers:
      - name: web-app
        image: myapp:v1.2.3
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        # Startup probe for slow-starting applications
        startupProbe:
          httpGet:
            path: /health/startup
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 30
        # Liveness probe to restart unhealthy containers
        livenessProbe:
          httpGet:
            path: /health/live
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 5
          failureThreshold: 3
        # Readiness probe to control traffic routing
        readinessProbe:
          httpGet:
            path: /health/ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5
          timeoutSeconds: 3
          failureThreshold: 3
        # Environment variables
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database-url
        - name: REDIS_URL
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: redis-url
        # Volume mounts
        volumeMounts:
        - name: app-storage
          mountPath: /app/data
        - name: config-volume
          mountPath: /app/config
      volumes:
      - name: app-storage
        persistentVolumeClaim:
          claimName: app-storage-pvc
      - name: config-volume
        configMap:
          name: app-config
```

### 2. Horizontal Pod Autoscaler (HPA)

```yaml
# HPA configuration with multiple metrics
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-application-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-application
  minReplicas: 3
  maxReplicas: 50
  metrics:
  # CPU-based scaling
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  # Memory-based scaling
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  # Custom metrics scaling
  - type: Pods
    pods:
      metric:
        name: http_requests_per_second
      target:
        type: AverageValue
        averageValue: "100"
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Percent
        value: 50
        periodSeconds: 60
      - type: Pods
        value: 5
        periodSeconds: 60
      selectPolicy: Max
```

### 3. Vertical Pod Autoscaler (VPA)

```yaml
# VPA for automatic resource optimization
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: web-application-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-application
  updatePolicy:
    updateMode: "Auto"  # Auto, Off, or Initial
  resourcePolicy:
    containerPolicies:
    - containerName: web-app
      minAllowed:
        cpu: 100m
        memory: 128Mi
      maxAllowed:
        cpu: 2
        memory: 2Gi
      controlledResources: ["cpu", "memory"]
      controlledValues: RequestsAndLimits
```

## Security Best Practices

### 1. Pod Security Standards

```yaml
# Pod Security Policy (deprecated) replacement with Pod Security Standards
apiVersion: v1
kind: Namespace
metadata:
  name: production-apps
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/warn: restricted

---
# Security Context configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: secure-application
  namespace: production-apps
spec:
  template:
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        runAsGroup: 3000
        fsGroup: 2000
        seccompProfile:
          type: RuntimeDefault
      containers:
      - name: app
        image: myapp:v1.2.3
        securityContext:
          allowPrivilegeEscalation: false
          readOnlyRootFilesystem: true
          runAsNonRoot: true
          runAsUser: 1000
          capabilities:
            drop:
            - ALL
            add:
            - NET_BIND_SERVICE
        volumeMounts:
        - name: tmp-volume
          mountPath: /tmp
        - name: var-run-volume
          mountPath: /var/run
      volumes:
      - name: tmp-volume
        emptyDir: {}
      - name: var-run-volume
        emptyDir: {}
```

### 2. Network Policies

```yaml
# Comprehensive network policy
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: web-application-netpol
  namespace: production-apps
spec:
  podSelector:
    matchLabels:
      app: web-application
  policyTypes:
  - Ingress
  - Egress
  ingress:
  # Allow traffic from ingress controller
  - from:
    - namespaceSelector:
        matchLabels:
          name: ingress-nginx
    ports:
    - protocol: TCP
      port: 8080
  # Allow traffic from same namespace
  - from:
    - namespaceSelector:
        matchLabels:
          name: production-apps
    ports:
    - protocol: TCP
      port: 8080
  egress:
  # Allow DNS resolution
  - to: []
    ports:
    - protocol: UDP
      port: 53
  # Allow database access
  - to:
    - namespaceSelector:
        matchLabels:
          name: database
    ports:
    - protocol: TCP
      port: 5432
  # Allow external API calls
  - to: []
    ports:
    - protocol: TCP
      port: 443
```

### 3. RBAC Configuration

```yaml
# Service Account
apiVersion: v1
kind: ServiceAccount
metadata:
  name: web-application-sa
  namespace: production-apps

---
# Role with minimal permissions
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: production-apps
  name: web-application-role
rules:
- apiGroups: [""]
  resources: ["configmaps", "secrets"]
  verbs: ["get", "list"]
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list"]

---
# RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: web-application-rolebinding
  namespace: production-apps
subjects:
- kind: ServiceAccount
  name: web-application-sa
  namespace: production-apps
roleRef:
  kind: Role
  name: web-application-role
  apiGroup: rbac.authorization.k8s.io

---
# ClusterRole for cross-namespace access (if needed)
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: monitoring-reader
rules:
- apiGroups: [""]
  resources: ["nodes", "nodes/metrics", "services", "endpoints", "pods"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["extensions"]
  resources: ["ingresses"]
  verbs: ["get", "list", "watch"]
```

## Configuration Management

### 1. ConfigMaps and Secrets

```yaml
# ConfigMap for application configuration
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  namespace: production-apps
data:
  app.properties: |
    server.port=8080
    logging.level.root=INFO
    spring.profiles.active=production
  redis.conf: |
    maxmemory 256mb
    maxmemory-policy allkeys-lru
  nginx.conf: |
    upstream backend {
        server app1:8080;
        server app2:8080;
    }
    server {
        listen 80;
        location / {
            proxy_pass http://backend;
        }
    }

---
# Secret for sensitive data
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
  namespace: production-apps
type: Opaque
data:
  database-url: cG9zdGdyZXNxbDovL3VzZXI6cGFzc0BkYi5leGFtcGxlLmNvbS9teWRi
  api-key: YWJjZGVmZ2hpams=
  jwt-secret: c3VwZXJzZWNyZXRqd3RrZXk=

---
# External Secrets Operator configuration
apiVersion: external-secrets.io/v1beta1
kind: SecretStore
metadata:
  name: vault-backend
  namespace: production-apps
spec:
  provider:
    vault:
      server: "https://vault.example.com"
      path: "secret"
      version: "v2"
      auth:
        kubernetes:
          mountPath: "kubernetes"
          role: "production-apps"

---
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: vault-secret
  namespace: production-apps
spec:
  refreshInterval: 15s
  secretStoreRef:
    name: vault-backend
    kind: SecretStore
  target:
    name: app-secrets-vault
    creationPolicy: Owner
  data:
  - secretKey: database-password
    remoteRef:
      key: database
      property: password
```

### 2. Helm Charts Best Practices

```yaml
# values.yaml for environment-specific configuration
# Production values
replicaCount: 3

image:
  repository: myapp
  tag: "v1.2.3"
  pullPolicy: IfNotPresent

resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 250m
    memory: 256Mi

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 50
  targetCPUUtilizationPercentage: 70
  targetMemoryUtilizationPercentage: 80

ingress:
  enabled: true
  className: "nginx"
  annotations:
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    nginx.ingress.kubernetes.io/rate-limit: "100"
  hosts:
    - host: api.example.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: api-tls
      hosts:
        - api.example.com

monitoring:
  enabled: true
  serviceMonitor:
    enabled: true
    interval: 30s
    path: /metrics

security:
  podSecurityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 2000
  securityContext:
    allowPrivilegeEscalation: false
    readOnlyRootFilesystem: true
    runAsNonRoot: true
    runAsUser: 1000
    capabilities:
      drop:
      - ALL
```

```yaml
# templates/deployment.yaml with best practices
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "myapp.fullname" . }}
  labels:
    {{- include "myapp.labels" . | nindent 4 }}
spec:
  {{- if not .Values.autoscaling.enabled }}
  replicas: {{ .Values.replicaCount }}
  {{- end }}
  selector:
    matchLabels:
      {{- include "myapp.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      annotations:
        checksum/config: {{ include (print $.Template.BasePath "/configmap.yaml") . | sha256sum }}
        checksum/secret: {{ include (print $.Template.BasePath "/secret.yaml") . | sha256sum }}
      labels:
        {{- include "myapp.selectorLabels" . | nindent 8 }}
    spec:
      {{- with .Values.imagePullSecrets }}
      imagePullSecrets:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      serviceAccountName: {{ include "myapp.serviceAccountName" . }}
      securityContext:
        {{- toYaml .Values.security.podSecurityContext | nindent 8 }}
      containers:
        - name: {{ .Chart.Name }}
          securityContext:
            {{- toYaml .Values.security.securityContext | nindent 12 }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - name: http
              containerPort: 8080
              protocol: TCP
          livenessProbe:
            httpGet:
              path: /health/live
              port: http
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /health/ready
              port: http
            initialDelaySeconds: 5
            periodSeconds: 5
          resources:
            {{- toYaml .Values.resources | nindent 12 }}
          env:
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: POD_NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
          envFrom:
            - configMapRef:
                name: {{ include "myapp.fullname" . }}-config
            - secretRef:
                name: {{ include "myapp.fullname" . }}-secret
      {{- with .Values.nodeSelector }}
      nodeSelector:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      {{- with .Values.affinity }}
      affinity:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      {{- with .Values.tolerations }}
      tolerations:
        {{- toYaml . | nindent 8 }}
      {{- end }}
```

## Monitoring and Observability

### 1. Prometheus Monitoring Setup

```yaml
# ServiceMonitor for Prometheus
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: web-application-metrics
  namespace: production-apps
  labels:
    app: web-application
spec:
  selector:
    matchLabels:
      app: web-application
  endpoints:
  - port: metrics
    interval: 30s
    path: /metrics
    honorLabels: true

---
# PrometheusRule for alerting
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: web-application-alerts
  namespace: production-apps
spec:
  groups:
  - name: web-application.rules
    rules:
    - alert: HighErrorRate
      expr: |
        (
          rate(http_requests_total{job="web-application",status=~"5.."}[5m])
          /
          rate(http_requests_total{job="web-application"}[5m])
        ) > 0.05
      for: 5m
      labels:
        severity: warning
      annotations:
        summary: "High error rate detected"
        description: "Error rate is {{ $value | humanizePercentage }} for {{ $labels.instance }}"
    
    - alert: HighLatency
      expr: |
        histogram_quantile(0.95, 
          rate(http_request_duration_seconds_bucket{job="web-application"}[5m])
        ) > 0.5
      for: 5m
      labels:
        severity: warning
      annotations:
        summary: "High latency detected"
        description: "95th percentile latency is {{ $value }}s for {{ $labels.instance }}"
    
    - alert: PodCrashLooping
      expr: |
        rate(kube_pod_container_status_restarts_total{namespace="production-apps"}[15m]) > 0
      for: 5m
      labels:
        severity: critical
      annotations:
        summary: "Pod is crash looping"
        description: "Pod {{ $labels.pod }} in namespace {{ $labels.namespace }} is crash looping"
```

### 2. Distributed Tracing

```yaml
# Jaeger deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: jaeger
  namespace: observability
spec:
  replicas: 1
  selector:
    matchLabels:
      app: jaeger
  template:
    metadata:
      labels:
        app: jaeger
    spec:
      containers:
      - name: jaeger
        image: jaegertracing/all-in-one:1.45
        env:
        - name: COLLECTOR_OTLP_ENABLED
          value: "true"
        ports:
        - containerPort: 16686
          name: ui
        - containerPort: 14250
          name: grpc
        - containerPort: 4317
          name: otlp-grpc
        - containerPort: 4318
          name: otlp-http

---
# OpenTelemetry Collector
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: otel-collector
  namespace: observability
spec:
  selector:
    matchLabels:
      app: otel-collector
  template:
    metadata:
      labels:
        app: otel-collector
    spec:
      containers:
      - name: otel-collector
        image: otel/opentelemetry-collector-contrib:0.80.0
        command:
        - "/otelcol-contrib"
        - "--config=/conf/otel-collector-config.yaml"
        volumeMounts:
        - name: config
          mountPath: /conf
        env:
        - name: K8S_NODE_NAME
          valueFrom:
            fieldRef:
              fieldPath: spec.nodeName
      volumes:
      - name: config
        configMap:
          name: otel-collector-config
```

## Deployment Strategies

### 1. Blue-Green Deployment

```yaml
# Blue-Green deployment with Argo Rollouts
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: web-application-rollout
spec:
  replicas: 5
  strategy:
    blueGreen:
      activeService: web-application-active
      previewService: web-application-preview
      autoPromotionEnabled: false
      scaleDownDelaySeconds: 30
      prePromotionAnalysis:
        templates:
        - templateName: success-rate
        args:
        - name: service-name
          value: web-application-preview
      postPromotionAnalysis:
        templates:
        - templateName: success-rate
        args:
        - name: service-name
          value: web-application-active
  selector:
    matchLabels:
      app: web-application
  template:
    metadata:
      labels:
        app: web-application
    spec:
      containers:
      - name: web-application
        image: myapp:v1.2.3
        ports:
        - containerPort: 8080

---
# Analysis Template
apiVersion: argoproj.io/v1alpha1
kind: AnalysisTemplate
metadata:
  name: success-rate
spec:
  args:
  - name: service-name
  metrics:
  - name: success-rate
    interval: 60s
    count: 5
    successCondition: result[0] >= 0.95
    failureLimit: 3
    provider:
      prometheus:
        address: http://prometheus.monitoring.svc.cluster.local:9090
        query: |
          sum(rate(
            http_requests_total{service="{{args.service-name}}",status!~"5.*"}[2m]
          )) /
          sum(rate(
            http_requests_total{service="{{args.service-name}}"}[2m]
          ))
```

### 2. Canary Deployment

```yaml
# Canary deployment with traffic splitting
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: web-application-canary
spec:
  replicas: 10
  strategy:
    canary:
      steps:
      - setWeight: 10
      - pause: {duration: 2m}
      - setWeight: 20
      - pause: {duration: 2m}
      - setWeight: 50
      - pause: {duration: 2m}
      - setWeight: 80
      - pause: {duration: 2m}
      canaryService: web-application-canary
      stableService: web-application-stable
      trafficRouting:
        nginx:
          stableIngress: web-application-stable
          additionalIngressAnnotations:
            canary-by-header: X-Canary
      analysis:
        templates:
        - templateName: canary-success-rate
        startingStep: 2
        args:
        - name: service-name
          value: web-application-canary
  selector:
    matchLabels:
      app: web-application
  template:
    metadata:
      labels:
        app: web-application
    spec:
      containers:
      - name: web-application
        image: myapp:v1.2.4
```

## Backup and Disaster Recovery

### 1. Velero Backup Configuration

```yaml
# Velero backup schedule
apiVersion: velero.io/v1
kind: Schedule
metadata:
  name: daily-backup
  namespace: velero
spec:
  schedule: "0 2 * * *"  # Daily at 2 AM
  template:
    includedNamespaces:
    - production-apps
    - database
    excludedResources:
    - events
    - events.events.k8s.io
    storageLocation: default
    volumeSnapshotLocations:
    - default
    ttl: 720h0m0s  # 30 days

---
# Backup with hooks for database consistency
apiVersion: velero.io/v1
kind: Backup
metadata:
  name: database-consistent-backup
  namespace: velero
spec:
  includedNamespaces:
  - database
  hooks:
    resources:
    - name: postgres-backup-hook
      includedNamespaces:
      - database
      labelSelector:
        matchLabels:
          app: postgresql
      pre:
      - exec:
          container: postgresql
          command:
          - /bin/bash
          - -c
          - "pg_dump -U postgres mydb > /tmp/backup.sql"
      post:
      - exec:
          container: postgresql
          command:
          - /bin/bash
          - -c
          - "rm -f /tmp/backup.sql"
```

### 2. Disaster Recovery Procedures

```bash
#!/bin/bash
# Disaster recovery script

set -e

BACKUP_NAME="disaster-recovery-$(date +%Y%m%d-%H%M%S)"
NAMESPACE="production-apps"

echo "Starting disaster recovery process..."

# 1. Create emergency backup
echo "Creating emergency backup..."
velero backup create $BACKUP_NAME \
  --include-namespaces $NAMESPACE \
  --wait

# 2. Verify backup completion
echo "Verifying backup..."
velero backup describe $BACKUP_NAME

# 3. Scale down applications
echo "Scaling down applications..."
kubectl scale deployment --all --replicas=0 -n $NAMESPACE

# 4. Restore from latest good backup
echo "Restoring from backup..."
LATEST_BACKUP=$(velero backup get --output json | jq -r '.items[0].metadata.name')
velero restore create restore-$BACKUP_NAME \
  --from-backup $LATEST_BACKUP \
  --wait

# 5. Verify restoration
echo "Verifying restoration..."
kubectl get pods -n $NAMESPACE
kubectl get services -n $NAMESPACE

# 6. Run health checks
echo "Running health checks..."
./scripts/health-check.sh

echo "Disaster recovery completed successfully!"
```

## Performance Optimization

### 1. Resource Optimization

```yaml
# Cluster Autoscaler configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cluster-autoscaler
  namespace: kube-system
spec:
  template:
    spec:
      containers:
      - image: k8s.gcr.io/autoscaling/cluster-autoscaler:v1.27.0
        name: cluster-autoscaler
        command:
        - ./cluster-autoscaler
        - --v=4
        - --stderrthreshold=info
        - --cloud-provider=aws
        - --skip-nodes-with-local-storage=false
        - --expander=least-waste
        - --node-group-auto-discovery=asg:tag=k8s.io/cluster-autoscaler/enabled,k8s.io/cluster-autoscaler/production-cluster
        - --balance-similar-node-groups
        - --scale-down-enabled=true
        - --scale-down-delay-after-add=10m
        - --scale-down-unneeded-time=10m
        - --scale-down-utilization-threshold=0.5

---
# Pod Disruption Budget
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: web-application-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: web-application

---
# Priority Classes
apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: high-priority
value: 1000
globalDefault: false
description: "High priority class for critical applications"

---
apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: low-priority
value: 100
globalDefault: false
description: "Low priority class for batch jobs"
```

### 2. Node Affinity and Anti-Affinity

```yaml
# Advanced scheduling configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-application-ha
spec:
  replicas: 6
  template:
    spec:
      # Pod anti-affinity to spread across nodes
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
              - key: app
                operator: In
                values:
                - web-application
            topologyKey: kubernetes.io/hostname
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            podAffinityTerm:
              labelSelector:
                matchExpressions:
                - key: app
                  operator: In
                  values:
                  - web-application
              topologyKey: topology.kubernetes.io/zone
        # Node affinity for specific instance types
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: node.kubernetes.io/instance-type
                operator: In
                values:
                - m5.large
                - m5.xlarge
                - c5.large
                - c5.xlarge
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 50
            preference:
              matchExpressions:
              - key: topology.kubernetes.io/zone
                operator: In
                values:
                - us-east-1a
                - us-east-1b
      # Tolerations for tainted nodes
      tolerations:
      - key: "workload"
        operator: "Equal"
        value: "web"
        effect: "NoSchedule"
      # Topology spread constraints
      topologySpreadConstraints:
      - maxSkew: 1
        topologyKey: topology.kubernetes.io/zone
        whenUnsatisfiable: DoNotSchedule
        labelSelector:
          matchLabels:
            app: web-application
```

## Conclusion

Running Kubernetes successfully in production requires attention to numerous details across security, reliability, performance, and operations. The best practices outlined in this guide provide a solid foundation for building and operating production-ready Kubernetes clusters.

**Key Takeaways:**

1. **Security First** - Implement Pod Security Standards, Network Policies, and RBAC from day one
2. **Resource Management** - Properly configure requests, limits, and autoscaling
3. **Observability** - Comprehensive monitoring, logging, and tracing are essential
4. **Deployment Safety** - Use progressive deployment strategies with automated rollbacks
5. **Disaster Recovery** - Regular backups and tested recovery procedures
6. **Performance Optimization** - Right-size resources and optimize scheduling

**Expected Benefits:**

- **Improved Reliability**: 99.9%+ uptime with proper configuration
- **Better Security**: Reduced attack surface and compliance adherence
- **Cost Optimization**: 20-40% cost reduction through right-sizing and autoscaling
- **Faster Deployments**: Automated, safe deployment processes
- **Operational Excellence**: Reduced manual intervention and faster incident response

**Common Pitfalls to Avoid:**

- Running containers as root
- Missing resource requests and limits
- Inadequate monitoring and alerting
- Lack of network segmentation
- Poor backup and recovery planning
- Insufficient testing of deployment processes

Remember, Kubernetes is a powerful platform, but with great power comes great responsibility. Following these best practices will help you harness Kubernetes' capabilities while maintaining security, reliability, and performance at scale.

---

*Ready to optimize your Kubernetes infrastructure? Our cloud engineering experts can help you implement these best practices and build a production-ready Kubernetes platform. [Contact us](/contact) to get started.*