import React, { useState } from 'react';
import { Home, CreditCard, ClipboardCheck } from 'lucide-react';
import { FiEdit } from "react-icons/fi";
import huba2 from '../../assets/huba2.png'
import ConfirmModal from '../../components/ui/popups/ConfirmModal';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
}

interface ReviewOrderProps {
  orderItems: OrderItem[];
  shippingAddress: {
    name: string;
    address: string;
  };
  paymentMethod: {
    type: string;
    lastFour: string;
  };
  estimatedDelivery: string;
}

const ReviewOrder: React.FC<ReviewOrderProps> = () => {
  const [discountCode, setDiscountCode] = React.useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deliveryCharge = 5.00;
  const subtotal = 200.00;

  const orderItems = [
    {
      id: 1,
      name: "Girls Pink Moana Printed Dress",
      price: 80.00,
      size: "S",
      image: huba2
    },
    {
      id: 2,
      name: "Women Textured Handheld Bag",
      price: 80.00,
      size: "Regular",
      image: huba2
    },
    {
      id: 3,
      name: "Tailored Cotton Casual Shirt",
      price: 40.00,
      size: "M",
      image: huba2
    }
  ];

  return (
    <>
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Review Your Order</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-black text-white p-2 rounded-lg">
                <Home size={20} />
              </div>
              <span>Address</span>
            </div>
            <div className="flex-1 border-t border-dashed border-black mx-4"></div>
            <div className="flex items-center space-x-4">
              <div className="bg-black text-white p-2 rounded-lg">
                <CreditCard size={20} />
              </div>
              <span>Payment Method</span>
            </div>
            <div className="flex-1 border-t border-dashed border-black mx-4"></div>
            <div className="flex items-center space-x-4">
              <div className="bg-black text-white p-2 rounded-lg">
                <ClipboardCheck size={20} />
              </div>
              <span>Review</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Estimated delivery: 04 Oct 2024</h2>
          </div>

          {/* Order Items */}
          <div className="space-y-6">
            {orderItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500">Size: {item.size}</p>
                  <p className="font-semibold">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Shipping Address */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Shipping Address</h2>
              <button className="text-black ">
                <FiEdit size={20} />
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">Robert Fox</p>
              <p className="text-gray-600">4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Payment Method</h2>
              <button className="text-black">
                <FiEdit size={20} />
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">Debit Card (.... .... .... ..89)</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="space-y-2">
                <label htmlFor="discount" className="block text-sm">
                  Enter Discount Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="discount"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
                    placeholder="FLAT50"
                  />
                  <button className="px-4 py-2 bg-black text-white rounded-r-lg">
                    Apply
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <span>Delivery Charge</span>
                <span>${deliveryCharge.toFixed(2)}</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Grand Total</span>
                  <span>${(subtotal + deliveryCharge).toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"  onClick={() => setIsModalOpen(true)}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
     <ConfirmModal 
     isOpen={isModalOpen}
     onClose={() => setIsModalOpen(false)}
   />
   </>
  );
};

export default ReviewOrder;