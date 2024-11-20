import { Users, Package, Globe, Heart } from 'lucide-react';

const stats = [
  { icon: <Users />, value: '2M+', label: 'Active Customers' },
  { icon: <Package />, value: '15K+', label: 'Products Available' },
  { icon: <Globe />, value: '120+', label: 'Countries Served' },
  { icon: <Heart />, value: '98%', label: 'Customer Satisfaction' },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">About Reid</h1>
        <p className="text-xl text-gray-600">
          We're on a mission to make quality fashion accessible to everyone while
          promoting sustainable and ethical practices in the industry.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-xl bg-gray-50"
          >
            <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-4">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80"
            alt="Our Story"
            className="rounded-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2020, Reid began with a simple idea: to create a fashion
            platform that combines style, sustainability, and accessibility. What
            started as a small online boutique has grown into a global community
            of fashion enthusiasts who share our vision.
          </p>
          <p className="text-gray-600">
            Today, we work with carefully selected brands and designers who align
            with our values of quality, sustainability, and ethical production.
            Our commitment to these principles has helped us build trust with our
            customers and create a positive impact in the fashion industry.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 rounded-2xl p-12 mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Quality First</h3>
            <p className="text-gray-600">
              We carefully curate our collection to ensure every item meets our
              high standards of quality and style.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Sustainability</h3>
            <p className="text-gray-600">
              We're committed to reducing our environmental impact and promoting
              sustainable fashion practices.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Community</h3>
            <p className="text-gray-600">
              We believe in building a community that shares our passion for
              fashion and sustainable living.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="text-center mb-24">
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div key={member}>
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img
                  src={`https://images.unsplash.com/photo-${1500648767791 + member}-00dce5e783cd?auto=format&fit=crop&q=80`}
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold mb-1">John Doe</h3>
              <p className="text-gray-600">Co-founder</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}