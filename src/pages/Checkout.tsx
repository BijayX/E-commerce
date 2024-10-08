import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
}
import huba2 from '../assets/huba2.png'
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Girls Pink Moana Printed Dress",
      size: "S",
      price: 80.00,
      image: huba2,
      quantity: 1
    },
    {
      id: 2,
      name: "Women Textured Handheld Bag",
      size: "Regular",
      price: 80.00,
      image: huba2,
      quantity: 1
    },
    {
      id: 3,
      name: "Tailored Cotton Casual Shirt",
      size: "M",
      price: 40.00,
      image: huba2,
      quantity: 1
    }
  ]);

  const [discountCode, setDiscountCode] = useState<string>('');
  const deliveryCharge = 5.00;

  const updateQuantity = (id: number, delta: number) => {
    setProducts(products.map(product => 
      product.id === id ? { 
        ...product, 
        quantity: Math.max(1, product.quantity + delta) 
      } : product
    ));
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const subtotal = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const grandTotal = subtotal + deliveryCharge;
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Products</th>
                  <th className="text-right py-4">Price</th>
                  <th className="text-center py-4">Quantity</th>
                  <th className="text-right py-4">Subtotal</th>
                  <th className="py-4"></th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-lg mr-4"
                        />
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-gray-500">Size: {product.size}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">${product.price.toFixed(2)}</td>
                    <td className="text-center">
                      <div className="flex items-center justify-center">
                        <button 
                          onClick={() => updateQuantity(product.id, -1)}
                          className="p-1"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-2 w-8 text-center">{product.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(product.id, 1)}
                          className="p-1"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </td>
                    <td className="text-right">${(product.price * product.quantity).toFixed(2)}</td>
                    <td className="text-right">
                      <button 
                        onClick={() => removeProduct(product.id)}
                        className="text-red-500 p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="mb-4">
              <label htmlFor="discount" className="block text-sm mb-2">Enter Discount Code</label>
              <div className="flex">
                <input
                  type="text"
                  id="discount"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-l focus:outline-none"
                  placeholder="FLAT50"
                />
                <button className="px-4 py-2 bg-black text-white rounded-r-lg">
                  Apply
                </button>
              </div>
            </div>
            
            <div className="flex justify-between mb-4">
              <span>Delivery Charge</span>
              <span>${deliveryCharge.toFixed(2)}</span>
            </div>
            
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between font-semibold">
                <span>Grand Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors" onClick={()=>navigate("/shipping-address")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;