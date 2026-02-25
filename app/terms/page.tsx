import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service - Samshodan | Legal Terms & Conditions',
  description: 'Samshodan\'s Terms of Service outline the legal terms and conditions for using our AI products and developer tools.',
  keywords: 'terms of service, terms and conditions, legal terms, service agreement, Samshodan terms',
  openGraph: {
    title: 'Terms of Service - Samshodan',
    description: 'Legal terms and conditions for using Samshodan\'s AI products and developer tools.',
    type: 'website',
  },
  alternates: {
    canonical: '/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <main>
      <Header />
      
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Last updated: January 1, 2026
            </p>
            <p className="text-lg text-gray-700">
              These Terms of Service (&quot;Terms&quot;) govern your use of Samshodan&apos;s website, products, and services. 
              By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              
              <p className="text-gray-700 mb-4">
                By accessing, browsing, or using Samshodan&apos;s website, products, or services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, 
                you must not use our services.
              </p>

              <p className="text-gray-700 mb-6">
                These Terms apply to all users, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Website visitors and browsers</li>
                <li>Users of our AI chatbot (Ultron)</li>
                <li>Users of our API portal (Specly)</li>
                <li>Customers of our products and services</li>
                <li>Partners and vendors</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              
              <p className="text-gray-700 mb-4">
                Samshodan provides the following services:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Solutions</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Ultron AI Chatbot:</strong> Intelligent conversational AI powered by RAG agents with configurable LLM backends</li>
                <li>Custom AI model integration and configuration</li>
                <li>AI training and optimization services</li>
                <li>AI consulting and strategy development</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Developer Tools</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Specly API Portal:</strong> Comprehensive API specification and documentation platform</li>
                <li>API management and cataloging services</li>
                <li>Developer collaboration tools</li>
                <li>Integration support and consulting</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Product Support Services</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Product documentation and guides</li>
                <li>Technical support and troubleshooting</li>
                <li>Product updates and maintenance</li>
                <li>Integration assistance and consulting</li>
                <li>Custom development and enhancements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Creation</h3>
              <p className="text-gray-700 mb-4">
                To access certain services, you may need to create an account. When creating an account, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your login credentials secure and confidential</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Eligibility</h3>
              <p className="text-gray-700 mb-6">
                You must be at least 18 years old and have the legal capacity to enter into contracts to use our services. 
                By using our services, you represent and warrant that you meet these requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Permitted Uses</h3>
              <p className="text-gray-700 mb-4">
                You may use our services for lawful business purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Implementing AI solutions for customer service and support</li>
                <li>Managing and documenting APIs and development resources</li>
                <li>Developing and deploying business applications</li>
                <li>Consulting on technology strategy and implementation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Uses</h3>
              <p className="text-gray-700 mb-4">
                You agree not to use our services for any of the following prohibited activities:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Illegal activities or violation of applicable laws and regulations</li>
                <li>Harassment, abuse, or harm to other users or third parties</li>
                <li>Spam, phishing, or other fraudulent communications</li>
                <li>Unauthorized access to systems, networks, or data</li>
                <li>Distribution of malware, viruses, or harmful code</li>
                <li>Intellectual property infringement</li>
                <li>Reverse engineering, decompiling, or attempting to extract source code</li>
                <li>Interfering with or disrupting our services or infrastructure</li>
                <li>Creating competing products or services using our technology</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Intellectual Property</h3>
              <p className="text-gray-700 mb-4">
                Samshodan retains all rights, title, and interest in and to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Our software, platforms, and technology (including Ultron and Specly)</li>
                <li>Proprietary algorithms, models, and methodologies</li>
                <li>Trademarks, service marks, and brand names</li>
                <li>Website content, documentation, and materials</li>
                <li>Trade secrets and confidential information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Content and Data</h3>
              <p className="text-gray-700 mb-4">
                You retain ownership of your data and content. By using our services, you grant us a limited license to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Process and store your data to provide services</li>
                <li>Use aggregated, anonymized data for service improvement</li>
                <li>Create backups and ensure data security</li>
                <li>Comply with legal requirements and court orders</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Content</h3>
              <p className="text-gray-700 mb-6">
                Our services may include third-party content, APIs, or integrations. You are responsible for complying with 
                third-party terms and licenses when using such content.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms and Billing</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fees and Payment</h3>
              <p className="text-gray-700 mb-4">
                Fees for our services are as specified in your service agreement or as posted on our website. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Pay all fees when due according to the agreed payment terms</li>
                <li>Provide accurate billing and payment information</li>
                <li>Update payment information as needed</li>
                <li>Pay applicable taxes and transaction fees</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Billing and Invoicing</h3>
              <p className="text-gray-700 mb-4">
                Unless otherwise specified:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Fees are billed in advance for subscription services</li>
                <li>Consulting services are billed monthly or upon project completion</li>
                <li>Late payments may incur additional fees and service suspension</li>
                <li>Disputed charges must be reported within 30 days</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Refunds and Cancellations</h3>
              <p className="text-gray-700 mb-6">
                Refund policies vary by service type and are specified in your service agreement. 
                Generally, fees for completed services are non-refundable.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Level Agreements</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Availability and Performance</h3>
              <p className="text-gray-700 mb-4">
                We strive to provide reliable services with high availability. However, we do not guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Uninterrupted or error-free service operation</li>
                <li>Specific performance metrics unless specified in writing</li>
                <li>Compatibility with all third-party systems or software</li>
                <li>Recovery of data lost due to user error or system failures</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Maintenance and Updates</h3>
              <p className="text-gray-700 mb-6">
                We may perform scheduled maintenance, updates, and improvements to our services. 
                We will provide reasonable notice for planned maintenance that may affect service availability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Security and Privacy</h2>
              
              <p className="text-gray-700 mb-4">
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security assessments and monitoring</li>
                <li>Incident response and breach notification procedures</li>
              </ul>

              <p className="text-gray-700 mb-6">
                For detailed information about our data practices, please refer to our Privacy Policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Samshodan&apos;s liability is limited as follows:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Disclaimer of Warranties</h3>
              <p className="text-gray-700 mb-4">
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Merchantability or fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Accuracy, completeness, or reliability of results</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Limitation of Damages</h3>
              <p className="text-gray-700 mb-4">
                In no event shall Samshodan be liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Business interruption or system downtime</li>
                <li>Third-party claims or actions</li>
              </ul>

              <p className="text-gray-700 mb-6">
                Our total liability for any claim shall not exceed the amount paid by you for the specific service 
                giving rise to the claim in the 12 months preceding the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              
              <p className="text-gray-700 mb-6">
                You agree to indemnify, defend, and hold harmless Samshodan, its officers, directors, employees, and agents from and against 
                any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising from or relating to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Your use of our services in violation of these Terms</li>
                <li>Your violation of applicable laws or regulations</li>
                <li>Infringement of third-party intellectual property rights</li>
                <li>Your data, content, or business operations</li>
                <li>Negligent or wrongful conduct by you or your users</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Termination by You</h3>
              <p className="text-gray-700 mb-4">
                You may terminate your use of our services at any time by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Providing written notice according to your service agreement</li>
                <li>Canceling your account through our platform</li>
                <li>Ceasing to use our services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Termination by Us</h3>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, if:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>You breach these Terms or any service agreement</li>
                <li>You fail to pay fees when due</li>
                <li>Your use poses security or legal risks</li>
                <li>We discontinue services or cease business operations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Effect of Termination</h3>
              <p className="text-gray-700 mb-6">
                Upon termination, your right to use our services ceases immediately. We will provide reasonable assistance 
                for data export, subject to technical limitations and applicable fees.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Governing Law</h3>
              <p className="text-gray-700 mb-4">
                These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction], 
                without regard to conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dispute Resolution</h3>
              <p className="text-gray-700 mb-4">
                We encourage resolving disputes through direct communication. For formal disputes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Initial disputes should be addressed through our customer support</li>
                <li>Unresolved disputes may be subject to mediation</li>
                <li>Legal proceedings must be filed in the courts of [Your Jurisdiction]</li>
                <li>Class action lawsuits are waived to the extent permitted by law</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. General Provisions</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Entire Agreement</h3>
              <p className="text-gray-700 mb-4">
                These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement 
                between you and Samshodan regarding the use of our services.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Modifications</h3>
              <p className="text-gray-700 mb-4">
                We may modify these Terms at any time by posting updated terms on our website. 
                Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Severability</h3>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Assignment</h3>
              <p className="text-gray-700 mb-6">
                You may not assign or transfer your rights under these Terms without our written consent. 
                We may assign our rights and obligations without restriction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms or need to contact us regarding legal matters:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Samshodan Legal Department</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> <a href="mailto:hello@samshodan.com" className="text-primary-600 hover:text-primary-700">hello@samshodan.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
                </p>
              </div>

              <p className="text-sm text-gray-600">
                These Terms of Service are effective as of the date last updated above and will remain in effect until modified or terminated.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}