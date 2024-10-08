import React from 'react';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CartProduct {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
}

interface CheckoutModalProps {
  products: CartProduct[];
  onClose: () => void;
  onRemoveProduct: (id: number) => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ products, onClose, onRemoveProduct }) => {
  const subtotal = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">You have {products.length} items in your cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
          </div>
          
          <div className="space-y-4">
            {products.map(product => (
              <div key={product.id} className="flex items-start">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-500">Size: {product.size}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-semibold">{product.quantity} × ${product.price.toFixed(2)}</p>
                    <button 
                      onClick={() => onRemoveProduct(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={onClose}
              className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg mb-2 hover:bg-gray-300"
            >
              Continue Shopping
            </button>
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800" onClick={()=> navigate("/checkout")}>
             Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;