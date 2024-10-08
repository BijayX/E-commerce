import React, { useState } from 'react';
import { Eye, Heart, ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import huba2 from '../../assets/huba2.png';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
}

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
}

interface FilterSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, isOpen, onToggle, children }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full py-4 flex justify-between items-center hover:bg-gray-50"
      onClick={onToggle}
    >
      <span className="font-bold text-black">{title}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-black" />
      ) : (
        <ChevronDown className="w-5 h-5 text-black" />
      )}
    </button>
    <div className={`py-4 ${isOpen ? 'block' : 'hidden'}`}>
      {children}
    </div>
  </div>
);

const ProductListing: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('latest');
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 2000],
    colors: [],
    sizes: [],
  });
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    color: true,
    size: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  

  const products: Product[] = [
    {
      id: 1,
      brand: 'Allen Solly',
      name: 'Women Textured Handheld Bag',
      price: 80.00,
      originalPrice: 100.00,
      image: huba2,
      category: 'Bags'
    },
    {
      id: 2,
      brand: 'Louis Philippe Sport',
      name: 'Polo Collar T-Shirt',
      price: 50.00,
      originalPrice: 55.00,
      image: huba2,
      category: 'Men'
    },
    {
        id: 3,
        brand: 'Allen Solly',
        name: 'Women Textured Handheld Bag',
        price: 80.00,
        originalPrice: 100.00,
        image: huba2,
        category: 'Bags'
      },
      {
        id: 4,
        brand: 'Louis Philippe Sport',
        name: 'Polo Collar T-Shirt',
        price: 50.00,
        originalPrice: 55.00,
        image: huba2,
        category: 'Men'
      },
      {
        id: 6,
        brand: 'Allen Solly',
        name: 'Women Textured Handheld Bag',
        price: 80.00,
        originalPrice: 100.00,
        image: huba2,
        category: 'Bags'
      },
      {
        id: 7,
        brand: 'Louis Philippe Sport',
        name: 'Polo Collar T-Shirt',
        price: 50.00,
        originalPrice: 55.00,
        image: huba2,
        category: 'Men'
      },
  ];

  const categories = [
    { name: 'Men', count: 20 },
    { name: 'Women', count: 15 },
    { name: 'Kids', count: 10 },
    { name: 'Bags', count: 8 },
    { name: 'Belts', count: 5 },
    { name: 'Wallets', count: 12 },
    { name: 'Watches', count: 7 },
    { name: 'Accessories', count: 9 },
    { name: 'Winter Wear', count: 6 }
  ];

  const colors = [
    { name: 'Red', count: 10, code: '#FF0000' },
    { name: 'Blue', count: 14, code: '#0000FF' },
    { name: 'Orange', count: 8, code: '#FFA500' },
    { name: 'Black', count: 9, code: '#000000' },
    { name: 'Green', count: 4, code: '#00FF00' },
    { name: 'Yellow', count: 2, code: '#FFFF00' }
  ];

  const sizes = [
    { name: 'S', count: 6 },
    { name: 'M', count: 20 },
    { name: 'L', count: 7 },
    { name: 'XL', count: 16 },
    { name: 'XXL', count: 10 },
    { name: 'XXXL', count: 2 }
  ];

  return (
    <div className="container mx-auto px-12 py-8">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-6">
        <ul className="flex">
          <li><a href="#" className="text-gray-500">Shop</a></li>
          <li className="mx-2 text-gray-500">&gt;</li>
          <li>All Products</li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4">
          <FilterSection
            title="Product Categories"
            isOpen={openSections.categories}
            onToggle={() => toggleSection('categories')}
          >
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.name} className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    className="rounded border-black accent-black"
                    checked={filters.categories.includes(category.name)}
                    onChange={(e) => {
                      const newCategories = e.target.checked
                        ? [...filters.categories, category.name]
                        : filters.categories.filter(c => c !== category.name);
                      setFilters({ ...filters, categories: newCategories });
                    }}
                  />
                  <span className="text-sm text-black">{category.name}</span>
                  <span className="text-sm text-black">({category.count})</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection
            title="Filter by Price"
            isOpen={openSections.price}
            onToggle={() => toggleSection('price')}
          >
            <div className="px-2">
              <input
                type="range"
                min="0"
                max="2000"
                className="w-full accent-black "
                value={filters.priceRange[1]}
                onChange={(e) => setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], parseInt(e.target.value)]
                })}
              />
              <div className="flex justify-between mt-2 text-sm text-black">
                <span>$0</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          </FilterSection>

          <FilterSection
            title="Filter by Color"
            isOpen={openSections.color}
            onToggle={() => toggleSection('color')}
          >
            <div className="space-y-2">
              {colors.map((color) => (
                <label key={color.name} className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    className="rounded border-black accent-black"
                    checked={filters.colors.includes(color.name)}
                    onChange={(e) => {
                      const newColors = e.target.checked
                        ? [...filters.colors, color.name]
                        : filters.colors.filter(c => c !== color.name);
                      setFilters({ ...filters, colors: newColors });
                    }}
                  />
                  <div 
                    className="w-4 h-4 rounded-sm border "
                    style={{ backgroundColor: color.code }}
                  />
                  <span className="text-sm text-black">{color.name}</span>
                  <span className="text-sm text-black">({color.count})</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection
            title="Filter by Size"
            isOpen={openSections.size}
            onToggle={() => toggleSection('size')}
          >
            <div className="space-y-2">
              {sizes.map((size) => (
                <label key={size.name} className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    className="rounded border-black accent-black"
                    checked={filters.sizes.includes(size.name)}
                    onChange={(e) => {
                      const newSizes = e.target.checked
                        ? [...filters.sizes, size.name]
                        : filters.sizes.filter(s => s !== size.name);
                      setFilters({ ...filters, sizes: newSizes });
                    }}
                  />
                  <span className="text-sm text-black">{size.name}</span>
                  <span className="text-sm text-black">({size.count})</span>
                </label>
              ))}
            </div>
          </FilterSection>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          {/* Toolbar */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <button
                className={`p-2 ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                className={`p-2 ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <span className="text-gray-500">Showing 1-16 of 72 results</span>
            </div>
            <select
              className="focus:outline-none  w-36 py-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="latest">Sort by latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
            {products.map((product) => (
              <div key={product.id} className="group relative">
                {/* Image Container */}
                <div className="relative w-full h-[200px] mb-4 overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                    <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors" onClick={()=>navigate("/product-details")} >
                        <Eye className="w-5 h-5" />
                      </button>
                      {/* <button className="bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
                        Add to Cart
                      </button> */}
                    </div>
                    <div className="absolute bottom-4 left-0 right-0  flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <button className="bg-black text-white text-xs px-3 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="text-sm text-gray-700">{product.brand}</h3>
                  <p className="text-sm text-gray-500">{product.name}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            <button className="p-2 rounded-lg border hover:bg-gray-100">
              <ArrowLeft className="w-5 h-5" />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg border ${currentPage === page ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button className="p-2 rounded-lg border hover:bg-gray-100">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;