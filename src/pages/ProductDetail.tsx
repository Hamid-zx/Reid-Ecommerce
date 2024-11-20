import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { products } from '../constants/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const [selectedSize, setSelectedSize] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('');

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/shop')}
          className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = ['White', 'Black', 'Gray'];

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    addItem({ ...product, quantity: 1 });
    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[product.image, product.image, product.image].map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-medium">${product.price}</p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium mb-4">Size</h3>
            <div className="grid grid-cols-5 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 text-center rounded-lg ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'border hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium mb-4">Color</h3>
            <div className="grid grid-cols-3 gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`py-2 text-center rounded-lg ${
                    selectedColor === color
                      ? 'bg-black text-white'
                      : 'border hover:border-black'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            Add to Cart
          </button>

          {/* Actions */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-black">
              <Heart className="w-5 h-5" />
              Add to Wishlist
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-black">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>

          {/* Product Description */}
          <div className="prose prose-sm max-w-none">
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p>
              {product.name} - A perfect addition to your wardrobe. Made with high-quality materials 
              for comfort and durability. Suitable for various occasions and easy to style with other pieces.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y">
            <div className="flex flex-col items-center text-center">
              <Truck className="w-6 h-6 mb-2" />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-6 h-6 mb-2" />
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <RotateCcw className="w-6 h-6 mb-2" />
              <span className="text-sm">Free Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}