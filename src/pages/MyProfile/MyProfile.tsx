import React, { useState } from 'react';
import { Edit } from 'lucide-react';
import huba2 from '../../assets/huba2.png'

// Types
interface ProfileData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
}
interface InputFieldProps {
  label: string;
  value: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, disabled = true }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-gray-600">{label}</label>
    <input
      type="text"
      value={value}
      disabled={disabled}
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black disabled:bg-white"
    />
  </div>
);

// Profile Page Component
const MyProfile: React.FC = () => {
  const [profileData] = useState<ProfileData>({
    firstName: 'Robert',
    lastName: 'Fox',
    phone: '(252) 555-0126',
    email: 'robertfox@example.com',
    address: '2464 Royal Ln. Mesa, New Jersey 45463'
  });

  return (
    <div className="">
      <div className="">
        
        <div className="">
          
          {/* Main Content */}
          <div className="">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <img 
                  src={huba2}
                  alt="Profile" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="h-20 w-20 flex items-center justify-center border border-gray-200 rounded-full">
                  <Edit size={20} className="text-gray-400" />
                </div>
              </div>
              
              <button className="px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2">
                <Edit size={16} />
                Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="First Name" value={profileData.firstName} />
              <InputField label="Last Name" value={profileData.lastName} />
              <InputField label="Phone Number" value={profileData.phone} />
              <InputField label="Email Address" value={profileData.email} />
              <InputField 
                label="Address" 
                value={profileData.address} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;