import React, { useState } from 'react';
import { 
  Package, 
  Search, 
  Mail, 
  CheckCircle2, 
  Clock,
  AlertCircle,
  Phone
} from 'lucide-react';

interface TrackingStatus {
  status: 'processing' | 'confirmed' | 'shipped' | 'out-for-delivery' | 'delivered';
  orderDetails: {
    orderId: string;
    orderDate: string;
    estimatedDelivery: string;
    items: number;
    status: string;
  };
  trackingSteps: {
    title: string;
    description: string;
    date: string;
    completed: boolean;
  }[];
}

const OrderTracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState<TrackingStatus | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock tracking data - In real app, this would come from an API
  const mockTrackingData: TrackingStatus = {
    status: 'out-for-delivery',
    orderDetails: {
      orderId: 'ORD-2024-1234',
      orderDate: '2024-10-05',
      estimatedDelivery: '2024-10-08',
      items: 3,
      status: 'Out for Delivery'
    },
    trackingSteps: [
      {
        title: 'Order Placed',
        description: 'Your order has been placed successfully',
        date: '2024-10-05 09:30 AM',
        completed: true
      },
      {
        title: 'Order Confirmed',
        description: 'Your order has been confirmed and is being processed',
        date: '2024-10-05 10:15 AM',
        completed: true
      },
      {
        title: 'Order Shipped',
        description: 'Your order has been picked up by our delivery partner',
        date: '2024-10-06 02:30 PM',
        completed: true
      },
      {
        title: 'Out for Delivery',
        description: 'Your order is out for delivery in your area',
        date: '2024-10-07 09:45 AM',
        completed: true
      },
      {
        title: 'Delivered',
        description: 'Your order has been delivered',
        date: 'Pending',
        completed: false
      }
    ]
  };

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (trackingNumber.trim() === '') {
        setError('Please enter a tracking number');
        setTrackingInfo(null);
      } else if (trackingNumber === 'TRACK123') { // Mock successful tracking
        setTrackingInfo(mockTrackingData);
        setError('');
      } else {
        setError('Invalid tracking number. Please try again.');
        setTrackingInfo(null);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Track Your Order</h1>
        <p className="text-gray-600">
          Enter your tracking number to get real-time updates on your delivery
        </p>
      </div>

      {/* Tracking Form */}
      <div className="mb-12">
        <form onSubmit={handleTracking} className="max-w-xl mx-auto">
          <div className="flex gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number (try TRACK123)"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 pl-12"
                />
                <Package className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
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
                  <span>Tracking...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Track</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Tracking Results */}
      {trackingInfo && (
        <div className="space-y-8">
          {/* Order Details */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Order ID</p>
                <p className="font-semibold">{trackingInfo.orderDetails.orderId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Order Date</p>
                <p className="font-semibold">{trackingInfo.orderDetails.orderDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
                <p className="font-semibold">{trackingInfo.orderDetails.estimatedDelivery}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Items</p>
                <p className="font-semibold">{trackingInfo.orderDetails.items} items</p>
              </div>
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-6">Tracking Timeline</h2>
            <div className="space-y-8">
              {trackingInfo.trackingSteps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Timeline Line */}
                  {index !== trackingInfo.trackingSteps.length - 1 && (
                    <div className={`absolute left-3.5 top-6 h-full w-0.5 ${
                      step.completed ? 'bg-blue-500' : 'bg-gray-200'
                    }`} />
                  )}
                  
                  {/* Status Icon */}
                  <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full ${
                    step.completed ? 'bg-blue-500' : 'bg-gray-200'
                  }`}>
                    {step.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : (
                      <Clock className="w-5 h-5 text-gray-500" />
                    )}
                  </div>

                  {/* Status Content */}
                  <div className="flex-grow pb-8">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <span className="text-sm text-gray-500">{step.date}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Instructions */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Delivery Instructions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Please keep your phone accessible for delivery updates</li>
                  <li>• Have your order ID ready for verification</li>
                  <li>• Our delivery partner will call before arrival</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Help Section */}
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about your delivery, our support team is here to help
        </p>
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            <Phone className="w-5 h-5" />
            <span>Contact Support</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            <Mail className="w-5 h-5" />
            <span>Email Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;