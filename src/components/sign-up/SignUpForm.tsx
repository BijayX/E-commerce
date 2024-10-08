import React, { useState } from 'react';
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import image4 from '../../assets/image4.png'
import { Link } from 'react-router-dom';

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login submitted', { firstName, lastName, email, password, rememberMe });

    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex min-h-screen">
            {/* Left side - Image */}
            <div className="hidden lg:block lg:w-1/2">
                <img
                    src={image4}
                    alt="Fashion model"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right side - Login form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-2">Create New Account</h2>
                    <p className="text-gray-400  text-sm mb-8">Please enter details</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg"
                                placeholder="Thd"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg"
                                placeholder="Collection"
                                required
                            />
                        </div>
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
                        <div className="mb-6 relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-3 py-3 border border-gray-300 rounded-lg pr-10"
                                    placeholder="••••••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <VscEyeClosed className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <VscEye className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="h-4 w-4 text-black focus:ring-black accent-black border-black rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-black">
                                    I agree to the {" "}
                                    <span className='text-black font-bold'>Terms & Conditions</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-black"
                            >
                                Signup
                            </button>
                        </div>
                    </form>
                    <div className='mt-6'>
                        <p className="text-sm text-black">
                            Already have an account?{' '}
                            <Link to="/sign-in" className="font-semibold text-black hover:text-gray-700 transition-colors">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;