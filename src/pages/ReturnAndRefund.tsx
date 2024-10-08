import React, { useState } from 'react';
import {
  RotateCcw,
  DollarSign,
  Truck,
  ClipboardCheck,
  HelpCircle,
  Search,
  Package,
  Mail,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ReturnRefund: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [returnOrderId, setReturnOrderId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const returnProcess = [
    {
      title: 'Initiate Return',
      description: 'Start your return by entering your order ID and selecting items',
      icon: Package,
    },
    {
      title: 'Return Approval',
      description: 'We ll review your return request within 24 hours',
      icon: ClipboardCheck,
    },
    {
      title: 'Ship Items Back',
      description: 'Use our prepaid shipping label to send items back',
      icon: Truck,
    },
    {
      title: 'Refund Processed',
      description: 'Refund initiated once return is received and inspected',
      icon: DollarSign,
    },
  ];

  const faqItems = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Items must be unused and in their original packaging. Some restrictions apply to certain products for hygiene reasons.',
    },
    {
      question: 'How long does it take to process my refund?',
      answer: 'Once we receive your return, it typically takes 3-5 business days to inspect and process. Refunds are then initiated and may take an additional 5-10 business days to appear in your account, depending on your payment method.',
    },
    {
      question: 'Do I have to pay for return shipping?',
      answer: 'For standard returns, we provide a prepaid shipping label at no cost to you. However, for returns due to preference rather than defect, a shipping fee may be deducted from your refund.',
    },
    {
      question: 'Can I exchange an item instead of returning it?',
      answer: 'Yes! We offer exchanges for different sizes or colors when available. You can select the exchange option when initiating your return.',
    },
  ];

  const handleReturnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (returnOrderId.trim() === '') {
        setError('Please enter an order ID');
      } else if (returnOrderId === 'ORDER123') {
        // Successful return initiation simulation
        // You would typically handle this with actual API logic
      } else {
        setError('Invalid order ID. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Returns & Refunds</h1>
        <p className="text-gray-600">
          Easy returns and hassle-free refunds. We're here to help!
        </p>
      </div>

      {/* Return Process Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Return Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {returnProcess.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative p-6 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className={`mb-4 p-2 rounded-full inline-block ${
                  activeStep === index ? 'bg-blue-500 text-white' : 'bg-gray-100'
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < returnProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Initiate Return Form */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Start Your Return</h2>
        <form onSubmit={handleReturnSubmit} className="max-w-xl mx-auto">
          <div className="flex gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  value={returnOrderId}
                  onChange={(e) => setReturnOrderId(e.target.value)}
                  placeholder="Enter your order ID (try ORDER123)"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 pl-12"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300 flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <RotateCcw className="w-5 h-5" />
                  <span>Start Return</span>
                </>
              )}
            </button>
          </div>
        </form>
      </section>

      {/* FAQs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Need Help Section */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-start gap-3">
          <HelpCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-2">Need More Help?</h3>
            <p className="text-gray-600 mb-4">
              Our customer service team is available 24/7 to assist you with any questions about returns or refunds.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/chats" className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Live Chat
              </Link>
              <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnRefund;