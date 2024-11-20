import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import CategoryIcon from "../components/CategoryIcon";
import ProductGrid from "../components/ProductGrid";
import Newsletter from "../components/Newsletter";
import FeaturedBrands from "../components/FeaturedBrands";
import { Backpack, ShirtIcon, Heart, Shirt, ShapesIcon } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[70vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80"
            alt="Hero"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl font-bold mb-6">New Season Arrivals</h1>
            <p className="text-xl mb-8">
              Check out all the new trends and styles for 2024
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="px-8 py-4 bg-white text-gray-900 text-lg font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Categories Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Shop by Category
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <CategoryCard
              title="Women's Collection"
              description="Discover our latest women's fashion collection with up to 50% off"
              imageUrl="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&q=80"
              buttonText="Shop Women"
              onClick={() => navigate("/shop?category=women")}
            />
            <CategoryCard
              title="Men's Collection"
              description="Explore our premium men's fashion collection with new arrivals"
              imageUrl="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80"
              buttonText="Shop Men"
              onClick={() => navigate("/shop?category=men")}
            />
          </div>
        </section>

        {/* Quick Categories */}
        <section className="py-12 bg-gray-50 rounded-lg px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
              <CategoryIcon
                icon={<Backpack className="w-6 h-6" />}
                label="Backpacks"
                count={42}
                onClick={() => navigate("/shop?category=backpacks")}
              />
              <CategoryIcon
                icon={<ShirtIcon className="w-6 h-6" />}
                label="Jackets"
                count={156}
                onClick={() => navigate("/shop?category=jackets")}
              />
              <CategoryIcon
                icon={<Heart className="w-6 h-6" />}
                label="Lingerie"
                count={83}
                onClick={() => navigate("/shop?category=lingerie")}
              />
              <CategoryIcon
                icon={<ShapesIcon className="w-6 h-6" />}
                label="Sneakers"
                count={124}
                onClick={() => navigate("/shop?category=sneakers")}
              />
              <CategoryIcon
                icon={<Shirt className="w-6 h-6" />}
                label="Clothing"
                count={438}
                onClick={() => navigate("/shop?category=clothing")}
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <button
              onClick={() => navigate("/shop")}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              View All →
            </button>
          </div>
          {/* Providing category and sort to ProductGrid */}
          <ProductGrid category="all" sort="newest" />
        </section>

        {/* Featured Brands */}
        <FeaturedBrands />
      </div>
      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
