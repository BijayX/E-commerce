import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import image5 from '../../assets/image5.png'
import Popover from '../ui/Popover';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [popover, setPopover] = useState<{
    isOpen: boolean;
    isSuccess: boolean;
    title: string;
    message: string;
  }>({
    isOpen: false,
    isSuccess: true,
    title: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating API call
    if (email.includes('@')) {
      setPopover({
        isOpen: true,
        isSuccess: true,
        title: 'Success',
        message: 'Password reset link has been sent to your email.',
      });
    } else {
      setPopover({
        isOpen: true,
        isSuccess: false,
        title: 'Error',
        message: 'Please enter a valid email address.',
      });
    }
  };

  const closePopover = () => {
    setPopover(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block lg:w-1/2">
        <img
          src={image5}
          alt="Fashion model"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="flex items-center mb-6">
            <IoIosArrowBack className="text-black text-xl mr-2" />
            <Link to="/sign-in" className="text-black text-sm font-medium">Back</Link>
          </div>
          <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>
          <p className="text-gray-400 text-sm mb-8">Enter your registered email address. We'll send you a link to reset your password</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg"
                placeholder="example@example.com"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-black"
              >
                Send Link
              </button>
            </div>
          </form>
        </div>
      </div>
      <Popover
        isOpen={popover.isOpen}
        onClose={closePopover}
        title={popover.title}
        message={popover.message}
        buttonText="Close"
      />
    </div>
    
  );
};

export default ForgotPassword;