import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';
import khalti from '../../../assets/khalti-seeklogo.svg'
import esewa from '../../../assets/esewa-seeklogo.svg'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <footer className="bg-black text-white py-8 px-4 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Krist</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(+977) 9704523456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">thdcollection@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">Bus-Park chowk, KamalBinayak, Bhaktapur</span>
              </div>
            </div>
          </div>

          {/* Information Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Information</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/myProfile" className="text-sm hover:text-gray-300 transition-colors">
                My Account
              </Link>
              <Link to="/sign-in" className="text-sm hover:text-gray-300 transition-colors">
                Login
              </Link>
              <Link to="/cart" className="text-sm hover:text-gray-300 transition-colors">
                My Cart
              </Link>
              <Link to="/profile/wishlist" className="text-sm hover:text-gray-300 transition-colors">
                My Wishlist
              </Link>
              <Link to="/checkout" className="text-sm hover:text-gray-300 transition-colors">
                Checkout
              </Link>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Service</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/about-us" className="text-sm hover:text-gray-300 transition-colors">
                About Us
              </Link>
              <Link to="/careers" className="text-sm hover:text-gray-300 transition-colors">
                Careers
              </Link>
              <Link to="/delivery-info" className="text-sm hover:text-gray-300 transition-colors">
                Delivery Information
              </Link>
              <Link to="/privacy-policy" className="text-sm hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-sm hover:text-gray-300 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/return-refund" className="text-sm hover:text-gray-300 transition-colors">
                Return & Refund
              </Link>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Subscribe</h4>
            <p className="text-sm">
              Enter your email below to be the first to know about new collections and product launches.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow px-3 py-2 bg-gray-800 text-white text-sm rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-gray-900 px-4 py-2 rounded-r-md hover:bg-gray-200 transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <CreditCard className="h-6 w-6" />
              <img src={khalti} alt="Payment 1" className="h-6" />
              <img src={esewa} alt="Payment 2" className="h-6" />
            </div>

            {/* Copyright */}
            <p className="text-sm text-center">
              &copy; {currentYear} ThdCollection. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link to="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;