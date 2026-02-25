import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Samshodan | Data Protection & Privacy Rights',
  description: 'Samshodan\'s Privacy Policy explains how we collect, use, and protect your personal information. Learn about your privacy rights and our data protection practices.',
  keywords: 'privacy policy, data protection, GDPR, personal information, data privacy, Samshodan privacy',
  openGraph: {
    title: 'Privacy Policy - Samshodan',
    description: 'Learn about Samshodan\'s data protection practices and your privacy rights.',
    type: 'website',
  },
  alternates: {
    canonical: '/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <main>
      <Header />
      
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Last updated: January 1, 2026
            </p>
            <p className="text-lg text-gray-700">
              At Samshodan, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our services.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Fill out contact forms on our website</li>
                <li>Request information about our products or services</li>
                <li>Subscribe to our newsletters or communications</li>
                <li>Participate in surveys or feedback forms</li>
                <li>Apply for employment opportunities</li>
              </ul>

              <p className="text-gray-700 mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Professional background and experience</li>
                <li>Project requirements and business needs</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information about your device and usage patterns:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or source</li>
                <li>Device information (screen size, device type)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              
              <p className="text-gray-700 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our AI products and developer tools</li>
                <li><strong>Communication:</strong> To respond to your inquiries, provide customer support, and send service-related communications</li>
                <li><strong>Business Development:</strong> To understand your needs and develop customized solutions</li>
                <li><strong>Marketing:</strong> To send you information about our products, services, and industry insights (with your consent)</li>
                <li><strong>Analytics:</strong> To analyze website usage and improve user experience</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
              
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Providers</h3>
              <p className="text-gray-700 mb-4">
                We may share information with trusted third-party service providers who assist us in:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Website hosting and maintenance</li>
                <li>Email delivery and communication services</li>
                <li>Analytics and performance monitoring</li>
                <li>Customer relationship management</li>
                <li>Payment processing (if applicable)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Legal Requirements</h3>
              <p className="text-gray-700 mb-6">
                We may disclose your information if required by law, court order, or government regulation, or to protect our rights, 
                property, or safety, or that of our users or the public.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Business Transfers</h3>
              <p className="text-gray-700 mb-6">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, 
                subject to the same privacy protections.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Unauthorized access, use, or disclosure</li>
                <li>Accidental loss or destruction</li>
                <li>Malicious attacks and data breaches</li>
                <li>Alteration or corruption of data</li>
              </ul>

              <p className="text-gray-700 mb-6">
                Our security measures include encryption, secure servers, access controls, and regular security assessments. 
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Privacy Rights</h2>
              
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">General Rights</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information we hold</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
                <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">GDPR Rights (EU Residents)</h3>
              <p className="text-gray-700 mb-4">
                If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Right to withdraw consent at any time</li>
                <li>Right to lodge a complaint with a supervisory authority</li>
                <li>Right to be informed about data processing activities</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">CCPA Rights (California Residents)</h3>
              <p className="text-gray-700 mb-4">
                If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>

              <p className="text-gray-700 mb-6">
                To exercise any of these rights, please contact us at <a href="mailto:hello@samshodan.com" className="text-primary-600 hover:text-primary-700">hello@samshodan.com</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Cookies</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
              </ul>

              <p className="text-gray-700 mb-6">
                You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              
              <p className="text-gray-700 mb-4">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>A longer retention period is required by law</li>
                <li>You have consented to longer retention</li>
                <li>We need the information for legal claims or compliance</li>
              </ul>

              <p className="text-gray-700 mb-6">
                Typical retention periods:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Contact inquiries:</strong> 3 years from last contact</li>
                <li><strong>Marketing communications:</strong> Until you unsubscribe</li>
                <li><strong>Website analytics:</strong> 26 months</li>
                <li><strong>Legal documents:</strong> As required by applicable law</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
              
              <p className="text-gray-700 mb-6">
                Your information may be transferred to and processed in countries other than your country of residence. 
                We ensure appropriate safeguards are in place to protect your information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Standard contractual clauses approved by the European Commission</li>
                <li>Adequacy decisions by relevant authorities</li>
                <li>Certification schemes and codes of conduct</li>
                <li>Binding corporate rules for intra-group transfers</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
              
              <p className="text-gray-700 mb-6">
                Our services are not directed to children under the age of 16. We do not knowingly collect personal information from children under 16. 
                If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information promptly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              
              <p className="text-gray-700 mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, 
                or other factors. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Updating the &quot;Last updated&quot; date</li>
                <li>Sending email notifications for significant changes</li>
                <li>Providing prominent notice on our website</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Samshodan Privacy Team</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> <a href="mailto:hello@samshodan.com" className="text-primary-600 hover:text-primary-700">hello@samshodan.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Response Time:</strong> We will respond to your inquiry within 30 days
                </p>
              </div>

              <p className="text-gray-700">
                For EU residents, you also have the right to lodge a complaint with your local data protection authority if you believe 
                we have not addressed your concerns adequately.
              </p>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}