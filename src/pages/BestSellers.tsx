import React from 'react';
import { FiStar, FiEye, FiHeart } from 'react-icons/fi';
import bestseller from '../assets/login.png';
import { useNavigate } from 'react-router-dom';

interface ProductProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
}

const Product: React.FC<ProductProps> = ({ image, name, price, originalPrice }) => {
  const navigate = useNavigate(); // useNavigate hook inside the component

  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <button
            className="bg-white p-2 rounded-full"
            onClick={() => navigate('/product-details')} 
          >
            <FiEye className="text-gray-800" />
          </button>
          <button className="bg-white p-2 rounded-full">
            <FiHeart className="text-gray-800" />
          </button>
        </div>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
      <div className="flex items-center mt-1">
        <span className="text-gray-800 font-bold">${price.toFixed(2)}</span>
        {originalPrice && (
          <span className="ml-2 text-gray-500 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      <div className="flex items-center mt-1">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className="text-yellow-400 fill-current" />
        ))}
      </div>
    </div>
  );
};

const Bestsellers: React.FC = () => {
  const products = [
    { image: bestseller, name: 'Roadstar Printed Cotton T-Shirt', price: 38, originalPrice: 40 },
    { image: bestseller, name: 'Allen Solly Women Textured Handheld Bag', price: 80, originalPrice: 100 },
    { image: bestseller, name: 'Louis Philippe Sport Polo Collar T-Shirt', price: 50, originalPrice: 55 },
    { image: bestseller, name: 'Adidas Men adi-dash Running Shoes', price: 60, originalPrice: 75 },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Bestseller</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
