import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart, Heart } from 'lucide-react';
import { products } from '../constants/products';

interface ProductGridProps {
  category?: string;
  sort?: string;
}

export default function ProductGrid({ category = 'all', sort = 'newest' }: ProductGridProps) {
  const addItem = useCartStore((state) => state.addItem);

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product) => category === 'all' || product.category === category
  );

  // Sort products based on the selected sorting option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {sortedProducts.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Updated onClick handler to include quantity */}
              <button
                onClick={() => addItem({ ...product, quantity: 1 })}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}