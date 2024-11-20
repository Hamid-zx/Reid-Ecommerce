import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Please fill out this form or use our
            contact information below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-xl bg-gray-50">
            <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+923146604902</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50">
            <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-600">hamidzia492@gmail.com</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-50">
            <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Working Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501.87254805807464!2d73.7184101804627!3d33.15477332762845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391fede211bebe2b%3A0x3acc72a69c635ab7!2sB7%20Mart!5e0!3m2!1sen!2s!4v1731422752518!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="mt-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Store Address</h3>
                  <p className="text-gray-600">
                    Sector Khambal, Part 1
                    <br />
                    Mirpur, Azad Kashmir
                    <br />
                    Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}