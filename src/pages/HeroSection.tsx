import React from 'react';
import hero from '../assets/login.png'

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 px-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Classic Exclusive</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Women's Collection</h2>
          <p className="text-xl md:text-2xl mb-6">UPTO 40% OFF</p>
          <button className="bg-black text-white px-6 py-3 rounded-md flex items-center">
            Shop Now
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="md:w-1/2">
          <img src={hero} alt="Woman in fashion" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;