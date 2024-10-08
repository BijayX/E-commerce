import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="container mx-auto px-12 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-gray-600">Last updated: October 7, 2024</p>
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to Krist. By accessing and using our website, you accept and agree to be bound by these Terms and Conditions. 
            If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        {/* User Account */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">2. User Account</h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              When creating an account on our website, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>
          </div>
        </section>

        {/* Products and Services */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3. Products and Services</h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              All products and services are subject to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Availability and stock limitations</li>
              <li>Pricing changes without prior notice</li>
              <li>Description accuracy to the best of our knowledge</li>
              <li>Color variations due to display settings</li>
            </ul>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4. Payment Terms</h2>
          <p className="text-gray-700">
            We accept various payment methods including credit cards and digital wallets. All payments are processed securely through our authorized payment partners. Prices are in Nepalese Rupees unless otherwise stated.
          </p>
        </section>

        {/* Shipping and Delivery */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5. Shipping and Delivery</h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              Our shipping and delivery terms include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Delivery timeframes are estimates only</li>
              <li>Shipping costs are calculated at checkout</li>
              <li>Risk of loss transfers upon delivery</li>
              <li>Delivery confirmation may be required</li>
            </ul>
          </div>
        </section>

        {/* Returns and Refunds */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">6. Returns and Refunds</h2>
          <p className="text-gray-700">
            Our return policy allows returns within 14 days of delivery. Items must be unused and in original packaging. 
            Refunds will be processed using the original payment method.
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">7. Privacy Policy</h2>
          <p className="text-gray-700">
            Your use of our website is also governed by our Privacy Policy. Please review our{' '}
            <Link to="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            {' '}for information on how we collect, use, and protect your data.
          </p>
        </section>

        {/* Contact Information */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">8. Contact Information</h2>
          <p className="text-gray-700">
            For any questions regarding these Terms and Conditions, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">Email: support@krist.com</p>
            <p className="text-gray-700">Phone: (+977) 9704523456</p>
            <p className="text-gray-700">Address: Bus-Park chowk, KamalBinayak, Bhaktapur</p>
          </div>
        </section>

        {/* Footer Note */}
        <section className="pt-8 border-t">
          <p className="text-sm text-gray-600">
            These terms and conditions are subject to change without notice. Please check this page regularly for updates.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;