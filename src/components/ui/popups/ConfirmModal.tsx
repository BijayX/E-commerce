import React from 'react';
import { HiShoppingBag } from "react-icons/hi2";
import './css/ConfirmModal.css'
import { useNavigate } from 'react-router-dom';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 animate-fadeIn">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <HiShoppingBag className="w-6 h-6" />
          </div>
          
          <h2 className="text-2xl font-semibold mb-2">Your order is confirmed</h2>
          <p className="text-gray-600 mb-8">
            Thanks for shopping! your order hasn't shipped yet, 
            but we will send you and email when it done.
          </p>

          <button
            onClick={() =>navigate("/profile/my-order")}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mb-3"
          >
            View Order
          </button>

          <button
            onClick={() => onClose()}
            className="w-full bg-white text-black py-3 rounded-lg border border-black hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;