import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-12 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: October 7, 2024</p>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="text-gray-700">
            At Krist, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you visit our website or make purchases. 
            Please read this privacy policy carefully. If you disagree with its terms, please discontinue use of our website.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Name and contact details</li>
              <li>Billing and shipping addresses</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment information (processed securely through our payment partners)</li>
              <li>Account login credentials</li>
            </ul>

            <h3 className="text-lg font-medium">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Browsing history on our website</li>
              <li>Cookie data</li>
            </ul>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
          <p className="text-gray-700">We use the collected information for:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Processing your orders and payments</li>
            <li>Providing customer support</li>
            <li>Sending order confirmations and updates</li>
            <li>Marketing communications (with your consent)</li>
            <li>Improving our website and services</li>
            <li>Preventing fraud and maintaining security</li>
          </ul>
        </section>

        {/* Cookie Policy */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Cookie Policy</h2>
          <p className="text-gray-700">
            We use cookies and similar tracking technologies to track activity on our website and store certain information. 
            Cookies are files with small amount of data which may include an anonymous unique identifier.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="font-medium">Types of cookies we use:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for targeted advertising</li>
            </ul>
          </div>
        </section>

        {/* Data Security */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational security measures to protect your personal data against 
            unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission 
            over the internet or electronic storage is 100% secure.
          </p>
        </section>

        {/* Third-Party Disclosure */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Third-Party Disclosure</h2>
          <p className="text-gray-700">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Payment processors for transaction handling</li>
            <li>Shipping partners for order delivery</li>
            <li>Analytics providers to improve our services</li>
            <li>Marketing partners (with your consent)</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Request data portability</li>
            <li>Lodge a complaint with supervisory authorities</li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Children's Privacy</h2>
          <p className="text-gray-700">
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
            information from children under 13. If you are a parent or guardian and believe your child has provided 
            us with personal information, please contact us.
          </p>
        </section>

        {/* Changes to Privacy Policy */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">9. Changes to Privacy Policy</h2>
          <p className="text-gray-700">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        {/* Contact Information */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">10. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">Email: privacy@krist.com</p>
            <p className="text-gray-700">Phone: (+977) 9704523456</p>
            <p className="text-gray-700">Address: Bus-Park chowk, KamalBinayak, Bhaktapur</p>
          </div>
        </section>

        {/* Footer Links */}
        <section className="pt-8 border-t">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <Link to="/terms" className="hover:underline">
              Terms and Conditions
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;