import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Package, Heart, MapPin, CreditCard, Bell, Settings } from 'lucide-react';
import huba2 from '../../assets/huba2.png';  


interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const location = useLocation();

    const navItems = [
        { icon: <User size={20} />, label: 'Personal Information', path: '/myProfile' },
        { icon: <Package size={20} />, label: 'My Orders', path: '/profile/my-order' },
        { icon: <Heart size={20} />, label: 'My Wishlists', path: '/profile/wishlist' },
        { icon: <MapPin size={20} />, label: 'Manage Addresses', path: '/profile/addresses' },
        { icon: <CreditCard size={20} />, label: 'Saved Cards', path: '/profile/cards' },
        { icon: <Bell size={20} />, label: 'Notifications', path: '/profile/notifications' },
        { icon: <Settings size={20} />, label: 'Settings', path: '/profile/settings' }
    ];

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-medium mb-4 md:mb-0">My Profile</h1>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Sidebar - Takes 3 columns */}
                <div className="md:col-span-3 ">
                    <div className="bg-white rounded-lg p-6 border shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src={huba2}  // Replace with your profile image path
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <div className="flex items-center gap-1">
                                    <span>Hello</span>
                                    <span className="text-yellow-400">👋</span>
                                </div>
                                <h2 className="font-semibold">Robert Fox</h2>
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="p-2 border-t ">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center gap-2 px-3 py-3 rounded-lg transition-colors ${
                                        location.pathname === item.path
                                            ? 'bg-black text-white'
                                            : 'hover:bg-gray-100'
                                    }`}
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Main Content - Takes 9 columns */}
                <div className="md:col-span-9">
                    {/* Replace this with your main content */}
                    <div className="bg-white ">
                    {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
