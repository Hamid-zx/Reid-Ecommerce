import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-gray-900 -mx-4 px-4 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Newsletter</h2>
        <p className="text-lg text-gray-300 mb-10">
          Subscribe to our newsletter and get 10% off your first purchase plus stay updated with our latest collections and exclusive offers.
        </p>
        {subscribed ? (
          <div className="text-green-400 text-lg font-medium bg-green-400/10 py-4 px-6 rounded-lg">
            Thank you for subscribing! Check your email for confirmation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row px-2 gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 text-center bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder:text-gray-400"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}