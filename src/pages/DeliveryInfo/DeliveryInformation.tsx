import React from 'react';
import { 
  Truck, 
  Clock, 
  MapPin, 
  Shield, 
  AlertCircle, 
  PackageCheck,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DeliveryInformation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Delivery Information</h1>
        <p className="text-gray-600">
          Everything you need to know about our shipping and delivery services
        </p>
      </div>

      {/* Delivery Options */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Delivery Options</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-6 h-6 text-black" />
              <h3 className="font-semibold text-lg">Standard Delivery</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Delivery within 2-4 business days</li>
              <li>• Free shipping on orders above Rs. 1000</li>
              <li>• Regular tracking updates</li>
              <li>• Standard shipping fee: Rs. 100</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-black" />
              <h3 className="font-semibold text-lg">Express Delivery</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Same-day delivery (order before 2 PM)</li>
              <li>• Available in select areas</li>
              <li>• Priority handling</li>
              <li>• Express shipping fee: Rs. 200</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Delivery Areas</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Areas We Serve</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Kathmandu Valley (All areas)</li>
                    <li>• Bhaktapur (All areas)</li>
                    <li>• Lalitpur (All areas)</li>
                    <li>• Pokhara (Select areas)</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Chitwan (Select areas)</li>
                    <li>• Biratnagar (Select areas)</li>
                    <li>• Butwal (Select areas)</li>
                    <li>• Other major cities (Standard delivery only)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking & Support */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tracking & Support</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <PackageCheck className="w-6 h-6 text-black flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Track Your Order</h3>
              <p className="text-gray-600 mb-4">
                Once your order is dispatched, you will receive a tracking number via email and SMS.
                You can track your order status using our tracking portal.
              </p>
              <Link to="/order-status" className="bg-black text-white px-4 py-2 rounded hover:bg-black transition-colors">
                Track Order
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-6 h-6 text-black flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Delivery Support</h3>
              <p className="text-gray-600">
                Our delivery support team is available 7 days a week from 9 AM to 6 PM.
                Contact us for any delivery-related queries:
              </p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>Phone: (+977) 9704523456</li>
                <li>Email: delivery@krist.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Important Information</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-black flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Safe Delivery Promise</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• All items are carefully packaged to ensure safe delivery</li>
                <li>• Contactless delivery available upon request</li>
                <li>• Real-time delivery updates</li>
                <li>• Package insurance included</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-black flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Delivery Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Please ensure someone is available to receive the package</li>
                <li>• Keep your phone accessible for delivery updates</li>
                <li>• Provide accurate delivery address and landmarks</li>
                <li>• Have your order ID ready for reference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What happens if I'm not available to receive my delivery?",
              a: "Our delivery partner will attempt delivery up to 3 times. After that, the package will be returned to our warehouse, and our team will contact you to arrange redelivery."
            },
            {
              q: "Can I change my delivery address after placing an order?",
              a: "Yes, you can change your delivery address before the order is dispatched. Please contact our customer support team with your order ID to request the change."
            },
            {
              q: "Do you deliver on public holidays?",
              a: "Standard delivery services are not available on public holidays. However, express delivery might be available in select areas depending on the holiday schedule."
            },
            {
              q: "What is the cut-off time for same-day delivery?",
              a: "Orders must be placed before 2 PM to be eligible for same-day delivery. This service is only available in select areas within Kathmandu Valley."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DeliveryInformation;