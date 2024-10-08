interface ShopCategory {
    title: string;
    items: string[];
}

interface HeaderProps {


}
import React, { useState } from 'react';
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';


const Header: React.FC<HeaderProps> = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isShopListOpen, setIsShopListOpen] = useState<boolean>(false);
    const navigate = useNavigate()

    const shopCategories: ShopCategory[] = [
        {
            title: 'Men',
            items: ['T-Shirts', 'Casual Shirts', 'Formal Shirts', 'Jackets', 'Blazers & Coats', 'Indian & Festive Wear', 'Kurtas & Kurta Sets', 'Sherwanis']
        },
        {
            title: 'Women',
            items: ['Kurtas & Suits', 'Sarees', 'Ethnic Wear', 'Lehenga Cholis', 'Jackets', 'Western Wear', 'Dresses', 'Jumpsuits']
        },
        {
            title: 'Kids',
            items: ['T-Shirts', 'Shirts', 'Jeans', 'Trousers', 'Party Wear', 'Innerwear & Thermal', 'Track Pants', 'Value Pack']
        },
    ];

    const toggleShopList = () => {
        setIsShopListOpen(!isShopListOpen);
    };

    return (
        <header className="bg-white shadow-sm relative z-50">
            <div className="container mx-auto px-12 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">Krist</div>
                    <nav className="hidden lg:flex space-x-6">
                        <Link to="/" className="text-black hover:text-gray-900">Home</Link>
                        <div className="relative group">
                            <a  className="text-black hover:text-black cursor-pointer">Shop</a>
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[50vw] max-w-7xl bg-white shadow-lg rounded-lg py-6 px-4 hidden group-hover:block">
                                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
                                    {shopCategories.map((category, index) => (
                                        <div key={index} className="p-2">
                                            <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                                            <ul className="space-y-1">
                                                {category.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <a onClick={() => navigate("/product-lists")} className="text-sm text-black hover:text-gray-900 block py-1 cursor-pointer">{item}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Link to="/about-us" className="text-black hover:text-gray-900">About Us</Link>
                        <Link to="/contact-us" className="text-black hover:text-gray-900">Contact Us</Link>
                    </nav>
                    <div className="hidden lg:flex items-center space-x-4">
                        <FiSearch className="text-black hover:text-gray-900 cursor-pointer" />
                        <Link to='/profile/wishlist'>
                            <FiHeart className="text-black hover:text-gray-900 " />
                        </Link>
                        <Link to="/profile/my-order">
                            <FiShoppingBag className="text-black hover:text-gray-900" />
                        </Link>
                        <Link
                            to="/sign-in"
                            className="bg-black text-white px-4 py-2 rounded-md inline-block"
                        >
                            Login
                        </Link>
                    </div>
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <nav className="px-4 pt-2 pb-4 space-y-2">
                <Link to="/" className="block text-black hover:text-gray-900">Home</Link>
                    <div className="space-y-2">
                        <button
                            onClick={toggleShopList}
                            className="flex items-center justify-between w-full text-black hover:text-gray-900 py-2"
                        >
                            <span>Shop</span>
                            {isShopListOpen ? <FiChevronUp /> : <FiChevronDown />}
                        </button>
                        <div className={`pl-4 space-y-2 transition-all duration-300 ${isShopListOpen ? 'block' : 'hidden'}`}>
                            {shopCategories.map((category, index) => (
                                <div key={index} className="py-2">
                                    <h3 className="font-semibold text-gray-900">{category.title}</h3>
                                    <ul className="pl-4 space-y-1 mt-1">
                                        {category.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <a onClick={() => navigate("/product-lists")} className="text-sm text-black hover:text-gray-900 block py-1">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Link to="/about-us" className="block text-black hover:text-gray-900">About us</Link>
                    <Link to="/contact-us" className="block text-black hover:text-gray-900">Contact Us</Link>
                </nav>
                <div className="px-4 pt-2 pb-4 flex items-center space-x-4">
                    <FiSearch className="text-black hover:text-gray-900 cursor-pointer" />
                    <Link to='/profile/wishlist'>
                    <FiHeart className="text-black hover:text-gray-900 cursor-pointer" />
                    </Link>
                    <Link to="/profile/my-order">
                    <FiShoppingBag className="text-black hover:text-gray-900 cursor-pointer" />
                    </Link>
                    <Link
                        to="/sign-in" className="bg-black text-white px-4 py-2 rounded-md">Login</Link>
                </div>
            </div>
        </header>
    );
};
export default Header;