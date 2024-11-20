import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { Filter, SlidersHorizontal } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'men', name: 'Men' },
  { id: 'women', name: 'Women' },
  { id: 'sneakers', name: 'Sneakers' },
  { id: 'backpacks', name: 'Backpacks' },
  { id: 'clothing', name: 'Clothing' },
];

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'newest';

  const updateFilters = (type: 'category' | 'sort', value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(type, value);
    setSearchParams(newParams);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">
          {currentCategory === 'all' 
            ? 'All Products' 
            : currentCategory === 'men' 
              ? "Men's Collection"
              : currentCategory === 'women'
                ? "Women's Collection"
                : `${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}`}
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 px-4 py-2 border rounded-lg"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            <select
              value={currentSort}
              onChange={(e) => updateFilters('sort', e.target.value)}
              className="border border-neutral-200 p-2 rounded-md text-sm focus:ring-0 outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => updateFilters('category', category.id)}
                    className={`block w-full text-left px-4 py-2 rounded-lg ${
                      currentCategory === category.id
                        ? 'bg-gray-900 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Price Range</h3>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>$0</span>
                  <span>$1000</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <ProductGrid category={currentCategory} sort={currentSort} />
        </div>
      </div>
    </div>
  );
}