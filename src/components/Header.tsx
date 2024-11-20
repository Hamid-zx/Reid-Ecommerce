import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.items);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/shop?search=${searchQuery}`);
  };

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-sm transition-colors">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-black dark:text-white">R</span>
          <span className="text-gray-600 dark:text-gray-400">eid</span>
        </Link>
        
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <select className="absolute outline-none left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400 bg-transparent border-r">
              <option>All Categories</option>
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-32 pr-12 py-2 border rounded-lg focus:outline-none focus:border-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <button type="submit">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </button>
          </div>
        </form>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link to="/login" className="flex items-center gap-2 hover:text-gray-600 dark:text-white dark:hover:text-gray-300">
              <User className="w-5 h-5" />
              <span>Account</span>
            </Link>
          </div>
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 dark:text-white" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden dark:text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <nav className="backdrop-blur-xl bg-gray-900/80 text-white">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex items-center space-x-8 h-12">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/shop" className="hover:text-yellow-400">Shop</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-400">Blog</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-t shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><Link to="/" className="block py-2 dark:text-white">Home</Link></li>
              <li><Link to="/shop" className="block py-2 dark:text-white">Shop</Link></li>
              <li><Link to="/blog" className="block py-2 dark:text-white">Blog</Link></li>
              <li><Link to="/about" className="block py-2 dark:text-white">About Us</Link></li>
              <li><Link to="/contact" className="block py-2 dark:text-white">Contact Us</Link></li>
              <li><Link to="/login" className="block py-2 dark:text-white">Login</Link></li>
              <li><Link to="/register" className="block py-2 dark:text-white">Register</Link></li>
              <li className="py-2">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}