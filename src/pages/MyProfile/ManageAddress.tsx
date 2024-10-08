import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { FiEdit } from "react-icons/fi";
import AddressModal from '../../components/ui/popups/AddressModal';

interface Address {
    id: number;
    name: string;
    address: string;
    phone: string;
}

const ManageAddress: React.FC = () => {
    const [addresses, setAddresses] = useState<Address[]>([
        {
            id: 1,
            name: 'Robert Fox',
            address: '4517 Washington Ave. Manchester, Kentucky 39495',
            phone: '(209) 555-0104'
        },
        {
            id: 2,
            name: 'John Willions',
            address: '3891 Ranchview Dr. Richardson, California 62639',
            phone: '(270) 555-0117'
        },
        {
            id: 3,
            name: 'Alexa Johnson',
            address: '4517 Washington Ave. Manchester, Kentucky 39495',
            phone: '(208) 555-0112'
        }
    ]);

    const handleDelete = (id: number) => {
        setAddresses(addresses.filter(address => address.id !== id));
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const AddressCard: React.FC<{ address: Address }> = ({ address }) => (
        <div className="py-6 px-4 border-b last:border-b-0">
            <div className="flex justify-between items-start">
                <div className="space-y-1">
                    <h3 className="text-[17px] font-semibold text-black">{address.name}</h3>
                    <p className="text-[15px] text-gray-700 pt-1">{address.address}</p>
                    <div className="flex items-center pt-1">
                        <span className="text-[15px] text-gray-700">{address.phone}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-50"
                    >
                        <FiEdit size={18} />
                        <span className="text-[14px]">Edit</span>
                    </button>
                    <button
                        onClick={() => handleDelete(address.id)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-red-500 bg-red-50"
                    >
                        <Trash2 size={18} />
                        <span className="text-[14px]">Delete</span>
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="max-w-3xl w-full">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-56 bg-black text-white rounded-lg py-3 mb-6 flex items-center justify-center gap-2 hover:bg-black/90 transition-colors"
                >
                    <Plus size={20} />
                    <span className="text-[15px] font-medium">Add New Address</span>
                </button>

                <div className="bg-white rounded-[14px] ">
                    {addresses.map((address, index) => (
                        <AddressCard key={index} address={address} />
                    ))}
                </div>
            </div>
            <AddressModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default ManageAddress;