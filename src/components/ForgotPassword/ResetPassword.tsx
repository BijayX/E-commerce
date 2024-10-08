import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import image5 from '../../assets/image5.png'
import { Link } from 'react-router-dom';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const ResetPassword: React.FC = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordsMatch(false);
            return;
        }
        setPasswordsMatch(true);
        console.log('Reset password submitted', { password });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
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
                    <h2 className="text-2xl font-bold mb-2">Reset Password</h2>
                    <p className="text-gray-400 text-sm mb-8">Secure your account with a strong password</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 relative">
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

                        <div className="mb-6 relative">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={`w-full px-3 py-3 border rounded-lg pr-10 ${
                                        !passwordsMatch ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="••••••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showConfirmPassword ? (
                                        <VscEyeClosed className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <VscEye className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                            {!passwordsMatch && (
                                <p className="text-red-500 text-sm mt-1">
                                    Passwords do not match
                                </p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;