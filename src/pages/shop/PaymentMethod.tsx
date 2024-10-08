import React, { useState } from 'react';
import { Home, CreditCard, ClipboardCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentMethod: React.FC = () => {
    const [paymentMethod, setPaymentMethod] = useState<string>('credit_card');
    const [cardNumber, setCardNumber] = useState<string>('3897 22XX 1900 3890');
    const [cardName, setCardName] = useState<string>('Robert Fox');
    const [expiryDate, setExpiryDate] = useState<string>('09/26');
    const [cvv, setCvv] = useState<string>('');
    const [discountCode, setDiscountCode] = useState<string>('FLAT50');
    const navigate = useNavigate()

    const handlePaymentMethodChange = (method: string) => {
        setPaymentMethod(method);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-2xl font-semibold mb-6">Payment Method</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {/* <div className="flex items-center  justify-between mb-8">
                        {[
                            { title: 'Address', icon: Home, active: false },
                            { title: 'Payment Method', icon: CreditCard, active: true },
                            { title: 'Review', icon: ClipboardCheck, active: false }
                        ].map((step) => (
                            <div key={step.title} className="flex flex-col items-center">
                                <div className={`${step.active ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} p-2 rounded-full mb-1`}>
                                    <step.icon size={20} />
                                </div>
                                <span className="text-xs">{step.title}</span>
                            </div>
                        ))}
                    </div> */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-4">
                            <div className="bg-black text-white p-2 rounded-lg">
                                <Home size={20} />
                            </div>
                            <span>Address</span>
                        </div>
                        <div className="flex-1 border-t border-dashed border-black mx-4"></div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-black text-white p-2 rounded-lg">
                                <CreditCard size={20} />
                            </div>
                            <span>Payment Method</span>
                        </div>
                        <div className="flex-1 border-t border-dashed mx-4"></div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-400 text-white p-2 rounded-lg">
                                <ClipboardCheck size={20} />
                            </div>
                            <span>Review</span>
                        </div>
                    </div>

                    {/* Payment Method Selection */}
                    <h2 className="text-lg font-semibold mb-4">Select a payment method</h2>

                    <div className="space-y-4">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                checked={paymentMethod === 'credit_card'}
                                onChange={() => handlePaymentMethodChange('credit_card')}
                                className="form-radio accent-black"
                            />
                            <span>Debit/Credit Card</span>
                        </label>

                        {paymentMethod === 'credit_card' && (
                            <div className="space-y-4 ml-6">
                                <div>
                                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="1234 5678 9012 3456"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Card Name</label>
                                    <input
                                        type="text"
                                        id="cardName"
                                        value={cardName}
                                        onChange={(e) => setCardName(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="flex space-x-4">
                                    <div className="flex-1">
                                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                        <input
                                            type="text"
                                            id="expiryDate"
                                            value={expiryDate}
                                            onChange={(e) => setExpiryDate(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                            placeholder="MM/YY"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                        <input
                                            type="password"
                                            id="cvv"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                            placeholder="***"
                                        />
                                    </div>
                                </div>
                                <button className="w-48 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                    Add Card
                                </button>
                            </div>
                        )}
                        <label className="flex items-center  space-x-2">
                            <input
                                type="radio"
                                checked={paymentMethod === 'google_pay'}
                                onChange={() => handlePaymentMethodChange('google_pay')}
                                className="form-radio accent-black"
                            />
                            <span>Google Pay</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                checked={paymentMethod === 'paypal'}
                                onChange={() => handlePaymentMethodChange('paypal')}
                                className="form-radio accent-black"
                            />
                            <span>Paypal</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                checked={paymentMethod === 'cash'}
                                onChange={() => handlePaymentMethodChange('cash')}
                                className="form-radio accent-black"
                            />
                            <span>Cash on Delivery</span>
                        </label>
                    </div>

                    <button className="w-48 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mt-6" onClick={()=>navigate("/review-order")}>
                        Continue
                    </button>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>$200.00</span>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="discount" className="block text-sm">
                                    Enter Discount Code
                                </label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        id="discount"
                                        value={discountCode}
                                        onChange={(e) => setDiscountCode(e.target.value)}
                                        className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
                                    />
                                    <button className="px-4 py-2 bg-black text-white rounded-r-lg">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <span>Delivery Charge</span>
                                <span>$5.00</span>
                            </div>

                            <div className="border-t pt-4">
                                <div className="flex justify-between font-semibold">
                                    <span>Grand Total</span>
                                    <span>$205.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;