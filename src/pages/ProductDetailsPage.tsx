import React, { useState } from 'react';
import { Heart, Minus, Plus, Box, DollarSign, Headphones, CreditCard } from 'lucide-react';
import image5 from '../assets/image5.png';
import lengha1 from '../assets/lengha1.png';
import lengha2 from '../assets/lengha2.png';
import CheckoutModal from '../components/ui/popups/CheckoutModal';


interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  colors: string[];
  sizes: string[];
  images: string[];
}

interface RelatedProduct {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
}

interface CartProduct {
  id: number;
  name: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
}

const ProductDetailsPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>('Descriptions');
  const [showModal, setShowModal] = useState(false);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const product: Product = {
    id: 1,
    name: "Girls Pink Moana Printed Dress",
    brand: "YK Disney",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    price: 80.00,
    originalPrice: 100.00,
    rating: 5.0,
    reviewCount: 121,
    colors: ['#e57373', '#5c6bc0', '#ffb74d', '#212121', '#aed581', '#fff176'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [image5, image5, image5, image5]
  };

  const relatedProducts: RelatedProduct[] = [
    { id: 2, name: "Tailored Cotton Casual Shirt", brand: "US Polo", price: 40.00, originalPrice: 50.00, image: lengha1 },
    { id: 3, name: "Printed Blazer for Men", brand: "Roadstar", price: 60.00, originalPrice: 70.00, image: lengha1 },
    { id: 4, name: "Red Printed T-Shirt", brand: "YK Disney", price: 30.00, originalPrice: 35.00, image: lengha2 },
    { id: 5, name: "Leather Hand Purse", brand: "Flora", price: 35.00, originalPrice: 45.00, image: lengha2 },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    const newCartItem: CartProduct = {
      id: product.id,
      name: product.name,
      size: selectedSize,
      price: product.price,
      image: product.images[0],
      quantity: quantity
    };

    setCartProducts(prev => {
      const existingProduct = prev.find(p => p.id === product.id && p.size === selectedSize);
      if (existingProduct) {
        return prev.map(p => 
          p.id === product.id && p.size === selectedSize
            ? { ...p, quantity: p.quantity + quantity }
            : p
        );
      }
      return [...prev, newCartItem];
    });

    setShowModal(true);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <>
      <div className="container mx-auto px-12 py-8">
        <div className="text-sm breadcrumbs mb-4">
          <ul className="flex">
            <li><a href="#" className="text-gray-500">Home</a></li>
            <li className="mx-2 text-gray-500">&gt;</li>
            <li><a href="#" className="text-gray-500">Shop</a></li>
            <li className="mx-2 text-gray-500">&gt;</li>
            <li className="text-gray-900">Women Textured Handheld Bag</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img src={product.images[0]} alt={product.name} className="w-full h-auto rounded-lg" />
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <img key={index} src={image} alt={`${product.name} ${index + 1}`} className="w-full h-auto rounded-lg cursor-pointer" />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">{product.brand}</h1>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">In Stock</span>
            </div>
            <h2 className="text-xl">{product.name}</h2>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <span className="text-sm">{product.rating} ({product.reviewCount} Reviews)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              <span className="text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
            </div>
            <p className="text-gray-600">{product.description}</p>
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full ${selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-800' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 border rounded ${selectedSize === size ? 'bg-gray-800 text-white' : 'text-gray-800'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-black rounded-lg py-2">
                <button className="px-3 py-1" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                <input type="text" className="w-12 text-center" value={quantity} readOnly />
                <button className="px-3 py-1" onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
              </div>
              <button 
                className="bg-gray-800 text-white px-4 py-3 rounded-lg flex-grow hover:bg-gray-700"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button className="border border-gray-300 p-2 rounded-lg px-3 py-3"><Heart /></button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex border-b">
            {['Descriptions', 'Additional Information', 'Reviews'].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-gray-800 font-semibold' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-4">
            {activeTab === 'Descriptions' && (
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                <br /><br />
                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            )}
            {activeTab === 'Additional Information' && (
              <div>
                <p><strong>Color  </strong> <span className="px-3"> White, Pink , Blue , Red </span></p>
                <p><strong>Size   </strong> <span className='px-3'> XL, SM ,XXl </span></p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="border rounded p-4">
                <img src={product.image} alt={product.name} className="w-90 h-90 object-cover rounded-lg mb-2" />
                <h3 className="font-semibold">{product.brand}</h3>
                <p className="text-sm text-gray-600">{product.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid px-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="flex items-center space-x-2">
            <Box />
            <div>
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-gray-600">Free shipping for order above $150</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign />
            <div>
              <h3 className="font-semibold">Money Guarantee</h3>
              <p className="text-sm text-gray-600">Within 30 days for an exchange</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Headphones />
            <div>
              <h3 className="font-semibold">Online Support</h3>
              <p className="text-sm text-gray-600">24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard />
            <div>
              <h3 className="font-semibold">Flexible Payment</h3>
              <p className="text-sm text-gray-600">Pay with multiple credit cards</p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <CheckoutModal
          products={cartProducts}
          onClose={() => setShowModal(false)}
          onRemoveProduct={handleRemoveFromCart}
        />
      )}
    </>
  );
};

export default ProductDetailsPage;