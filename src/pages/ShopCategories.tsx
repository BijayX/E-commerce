import React from 'react';
import imagewear from '../assets/login.png'

interface CategoryProps {
  image: string;
  title: string;
}

const Category: React.FC<CategoryProps> = ({ image, title }) => (
  <div className="relative group cursor-pointer">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
    </div>
  </div>
);

const ShopByCategories: React.FC = () => {
  const categories = [
    { image: imagewear, title: 'Casual Wear' },
    { image: imagewear, title: 'Western Wear' },
    { image: imagewear, title: 'Ethnic Wear' },
    { image: imagewear, title: 'Kids Wear' },
  ];

  return (
    <section className="py-16 px-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Category key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;