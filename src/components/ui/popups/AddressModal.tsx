import React, { useState } from 'react';
import {ChevronDown } from 'lucide-react';

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AddressForm {
  name: string;
  mobile: string;
  flatNumber: string;
  area: string;
  city: string;
  pinCode: string;
  state: string;
  isDefault: boolean;
}

const AddressModal: React.FC<AddressModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AddressForm>({
    name: '',
    mobile: '',
    flatNumber: '',
    area: '',
    city: '',
    pinCode: '',
    state: '',
    isDefault: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 z-50">
      <div className="bg-white w-full max-w-[500px] rounded-2xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Add a new address</h2>
          
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="space-y-1.5">
              <label className="text-sm text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-gray-700">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-gray-700">Flat, House no., Building, Company, Apartment</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                value={formData.flatNumber}
                onChange={(e) => setFormData({...formData, flatNumber: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-gray-700">Area, Colony, Street, Sector, Village</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                value={formData.area}
                onChange={(e) => setFormData({...formData, area: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-gray-700">City</label>
              <div className="relative">
                <select
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-black bg-white"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                >
                  <option value="">Select City</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-gray-700">Pin Code</label>
              <input
                type="text"
                placeholder="Enter Pin Code"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                value={formData.pinCode}
                onChange={(e) => setFormData({...formData, pinCode: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-gray-700">State</label>
              <div className="relative">
                <select
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-black bg-white"
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                >
                  <option value="">Select State</option>
                  <option value="delhi">Delhi</option>
                  <option value="maharashtra">Maharashtra</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="default-address"
                className="w-4 h-4 rounded accent-black border-gray-300"
                checked={formData.isDefault}
                onChange={(e) => setFormData({...formData, isDefault: e.target.checked})}
              />
              <label htmlFor="default-address" className="text-sm text-gray-700">
                Use as my default address
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 rounded-lg bg-black text-white hover:bg-black/90"
              >
                Add New Address
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;