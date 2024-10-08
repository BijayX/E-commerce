import React, { useState } from 'react';
import { Home, CreditCard, ClipboardCheck, Trash2 } from 'lucide-react';
import { FiEdit } from "react-icons/fi";
import {useNavigate } from 'react-router-dom';
interface Address {
    name: string;
    address: string;
}

const ShippingAddress: React.FC = () => {
    const [selectedAddress, setSelectedAddress] = useState<string>('Robert Fox');
    const [discountCode, setDiscountCode] = useState<string>('FLAT50');

    const addresses: Address[] = [
        { name: "Robert Fox", address: "4517 Washington Ave. Manchester, Kentucky 39495" },
        { name: "John Willions", address: "3891 Ranchview Dr. Richardson, California 62639" }
    ];
    const navigate = useNavigate()

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-2xl font-semibold mb-6">Shipping Address</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {/* Progress Steps */}
                    {/* <div className="flex items-center justify-between mb-8">
            {['Address', 'Payment Method', 'Review'].map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div className={`${index === 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} p-2 rounded-full mb-1`}>
                  {index === 0 ? <Home size={20} /> : index === 1 ? <CreditCard size={20} /> : <ClipboardCheck size={20} />}
                </div>
                <span className="text-xs">{step}</span>
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
                        <div className="flex-1 border-t border-dashed mx-4"></div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-400 text-white p-2 rounded-lg">
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

                    {/* Select a delivery address */}
                    <h2 className="text-lg font-semibold mb-2">Select a delivery address</h2>
                    <p className="text-sm text-gray-600 mb-4">
                        Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can enter a new delivery address.
                    </p>

                    {/* Address options */}
                    <div className="space-y-4 mb-6">
                        {addresses.map((addr) => (
                            <AddressOption
                                key={addr.name}
                                name={addr.name}
                                address={addr.address}
                                isSelected={selectedAddress === addr.name}
                                onSelect={() => setSelectedAddress(addr.name)}
                            />
                        ))}
                    </div>

                    {/* Deliver Here button */}
                    <button className="w-48 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mb-6" onClick={()=>navigate("/payment")}>
                        Deliver Here
                    </button>

                    {/* Add a new address */}
                    <h2 className="text-lg font-semibold mb-4">Add a new address</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                        />
                        <input
                            type="tel"
                            placeholder="Enter Mobile Number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                        />
                        <input
                            type="text"
                            placeholder="Flat, House no., Building, Company, Apartment"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                        />
                        <input
                            type="text"
                            placeholder="Area, Colony, Street, Sector, Village"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                        />
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black appearance-none">
                            <option value="">Select City</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Enter Pin Code"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                        />
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black appearance-none">
                            <option value="">Select State</option>
                        </select>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="defaultAddress" className="rounded accent-black border-black" />
                            <label htmlFor="defaultAddress" className="text-sm">Use as my default address</label>
                        </div>
                        <button className="w-48 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors" onClick={()=>navigate("/payment")}>
                            Add New Address
                        </button>
                    </form>
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
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDiscountCode(e.target.value)}
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

interface AddressOptionProps {
    name: string;
    address: string;
    isSelected: boolean;
    onSelect: () => void;
}

const AddressOption: React.FC<AddressOptionProps> = ({ name, address, isSelected, onSelect }) => {
    return (
        <div className={`border p-4 rounded-lg ${isSelected ? 'border-black' : 'border-gray-300'}`}>
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <input
                        type="radio"
                        checked={isSelected}
                        onChange={onSelect}
                        className="form-radio accent-black text-black cursor-pointer"
                    />
                    <span className="font-medium">{name}</span>
                </div>
            </div>
            <p className="text-sm text-gray-600 ml-6 mb-2">{address}</p>
            <div className="flex justify-between ml-6">
                <button className="text-sm text-gray-600 hover:text-black flex items-center">
                    <FiEdit size={16} className="mr-1" /> Edit
                </button>
                <button className="text-sm text-red-500 flex items-center">
                    <Trash2 size={16} className="mr-1" /> Delete
                </button>
            </div>
        </div>
    );
};

export default ShippingAddress;