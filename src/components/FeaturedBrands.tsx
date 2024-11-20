import { brands } from '../constants/products';

export default function FeaturedBrands() {
  return (
    <section className="py-16 bg-gray-50 rounded-lg -mx-4 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="aspect-square relative rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}