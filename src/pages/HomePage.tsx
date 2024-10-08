import React from 'react';
import Header from '../components/ui/header/Header';
import Footer from '../components/ui/footer/Footer';
import HeroSection from './HeroSection';
import ShopByCategories from './ShopCategories';
import Bestsellers from './BestSellers';
import DealsOfMonth from './DealsOfMonth';
import Testimonials from './Testimonials';


const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
       <HeroSection/>
       <ShopByCategories/>
       <Bestsellers/>
       <DealsOfMonth/>
       <Testimonials/>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;