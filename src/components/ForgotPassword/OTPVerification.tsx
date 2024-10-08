import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import image5 from '../../assets/image5.png';

const OTPVerification: React.FC = () => {
    const [otp, setOtp] = useState<string[]>(new Array(5).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Move to next input if current field is filled
        if (element.value && index < 4 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        // Move to previous input on backspace if current field is empty
        if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const otpString = otp.join('');
        console.log('OTP submitted:', otpString);
        // Add your verification logic here
    };

    return (
        <div className="flex min-h-screen">
            {/* Left side - Image */}
            <div className="hidden lg:block lg:w-1/2">
                <img
                    src={image5}
                    alt="Fashion model"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right side - OTP Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-md">
                    {/* Back Button */}
                    <div className="flex items-center mb-8">
                        <IoIosArrowBack className="text-xl mr-2" />
                        <Link to="/sign-up" className="text-sm font-medium">Back</Link>
                    </div>

                    {/* Header */}
                    <h2 className="text-2xl font-bold mb-2">Enter OTP</h2>
                    <p className="text-gray-500 text-sm mb-8">
                        We have sent a code to your registered email address
                        <span className="block text-gray-400 mt-1">robertfox@example.com</span>
                    </p>

                    {/* OTP Input Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center gap-6 mb-8">
                            {otp.map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    ref={el => inputRefs.current[index] = el}
                                    value={otp[index]}
                                    onChange={e => handleChange(e.target, index)}
                                    onKeyDown={e => handleKeyDown(e, index)}
                                    className="w-14 h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                />
                            ))}
                        </div>

                        {/* Verify Button */}
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-black transition-colors"
                        >
                            Verify
                        </button>

                        {/* Resend Code */}
                        <p className="mt-6 text-sm text-gray-600">
                            Didn't receive the code?{' '}
                            <button 
                                type="button"
                                className="font-medium text-black hover:text-gray-800 transition-colors"
                                onClick={() => console.log('Resend code')}
                            >
                                Resend
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OTPVerification;