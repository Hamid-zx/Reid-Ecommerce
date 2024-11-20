import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { CreditCard, Building2, Wallet, Phone, Shield, ArrowRight } from 'lucide-react';

type PaymentMethod = 'card' | 'bank' | 'easypaisa' | 'jazzcash';

export default function Checkout() {
  const navigate = useNavigate();
  const { items } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    bankAccount: '',
    mobileAccount: '',
  });

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Processing payment:', { paymentMethod, formData });
    // Handle payment processing here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="03XX-XXXXXXX"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipping Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Payment Method</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border rounded-lg flex flex-col items-center gap-2 hover:border-black transition-colors ${
                    paymentMethod === 'card' ? 'border-black bg-gray-50' : ''
                  }`}
                >
                  <CreditCard className="w-6 h-6" />
                  <span>Credit Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-4 border rounded-lg flex flex-col items-center gap-2 hover:border-black transition-colors ${
                    paymentMethod === 'bank' ? 'border-black bg-gray-50' : ''
                  }`}
                >
                  <Building2 className="w-6 h-6" />
                  <span>Bank Transfer</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('easypaisa')}
                  className={`p-4 border rounded-lg flex flex-col items-center gap-2 hover:border-black transition-colors ${
                    paymentMethod === 'easypaisa' ? 'border-black bg-gray-50' : ''
                  }`}
                >
                  <Wallet className="w-6 h-6" />
                  <span>Easypaisa</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('jazzcash')}
                  className={`p-4 border rounded-lg flex flex-col items-center gap-2 hover:border-black transition-colors ${
                    paymentMethod === 'jazzcash' ? 'border-black bg-gray-50' : ''
                  }`}
                >
                  <Phone className="w-6 h-6" />
                  <span>JazzCash</span>
                </button>
              </div>

              {/* Payment Details Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {paymentMethod === 'card' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVC
                        </label>
                        <input
                          type="text"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {paymentMethod === 'bank' && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <h3 className="font-medium">Bank Account Details:</h3>
                      <p>Bank: HBL (Habib Bank Limited)</p>
                      <p>Account Title: Reid Fashion Store</p>
                      <p>Account Number: 1234-5678901-03</p>
                      <p>IBAN: PK36HABB0000123456789013</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Bank Account Number
                      </label>
                      <input
                        type="text"
                        name="bankAccount"
                        value={formData.bankAccount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200"
                        required
                      />
                    </div>
                  </div>
                )}

                {(paymentMethod === 'easypaisa' || paymentMethod === 'jazzcash') && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <h3 className="font-medium">
                        {paymentMethod === 'easypaisa' ? 'Easypaisa' : 'JazzCash'} Account Details:
                      </h3>
                      <p>Account Title: Reid Fashion Store</p>
                      <p>Mobile Number: {paymentMethod === 'easypaisa' ? '0342-1234567' : '0300-1234567'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Mobile Account Number
                      </label>
                      <input
                        type="text"
                        name="mobileAccount"
                        value={formData.mobileAccount}
                        onChange={handleInputChange}
                        placeholder="03XX-XXXXXXX"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200"
                        required
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                >
                  Complete Order
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="font-bold">Total</span>
                      <span className="font-bold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Your payment information is secure and encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}