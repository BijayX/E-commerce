import React, { useState } from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import lengha1 from '../../assets/lengha1.png';

interface Product {
  id: number;
  brand: string;
  name: string;
  currentPrice: number;
  originalPrice: number;
  imageUrl: string;
}

const MyWishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([
    {
      id: 1,
      brand: 'Allen Sally',
      name: 'Women Textured Handheld Bag',
      currentPrice: 80.00,
      originalPrice: 100.00,
      imageUrl: lengha1
    },
    {
      id: 2,
      brand: 'Louis Philippe Sport',
      name: 'Polo Collar T-Shirt',
      currentPrice: 50.00,
      originalPrice: 55.00,
      imageUrl: lengha1
    },
    {
      id: 3,
      brand: 'Adidas',
      name: 'Men adi-dash Running Shoes',
      currentPrice: 60.00,
      originalPrice: 75.00,
      imageUrl: lengha1
    },
    {
      id: 4,
      brand: 'Allen Sally',
      name: 'Brown Leather Jacket',
      currentPrice: 60.00,
      originalPrice: 70.00,
      imageUrl: lengha1
    },
    {
      id: 5,
      brand: 'US Polo',
      name: 'Casual Shoe for Men',
      currentPrice: 40.00,
      originalPrice: 50.00,
      imageUrl: lengha1
    },
    {
      id: 6,
      brand: 'Gucci',
      name: 'Leather Hand Purse',
      currentPrice: 40.00,
      originalPrice: 60.00,
      imageUrl: lengha1
    }
  ]);

  const handleDelete = (productId: number) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="bg-white p-4 rounded-lg relative group">
      <button 
        onClick={() => handleDelete(product.id)}
        className="absolute top-6 right-6 z-10 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100"
        aria-label="Delete item"
      >
        <Trash2 size={16} className="text-gray-600 hover:text-red-500" />
      </button>
      
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <button className="absolute bottom-4 left-1/2 text-xs transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
          <ShoppingCart size={16} />
          Move to Cart
        </button>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-medium">{product.brand}</h3>
        <p className="text-gray-600">{product.name}</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">${product.currentPrice.toFixed(2)}</span>
          <span className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-600">{wishlistItems.length} Items</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default MyWishlist;