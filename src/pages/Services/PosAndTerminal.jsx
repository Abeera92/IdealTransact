"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaCashRegister,
  FaMobileAlt,
  FaTabletAlt,
  FaChartBar,
  FaShieldAlt,
  FaSync,
  FaCloud,
  FaUsers,
  FaCheck,
  FaArrowRight,
  FaCalendarAlt,
  FaRocket,
  FaPlug,
  FaShoppingCart,
  FaStore,
  FaUtensils
} from "react-icons/fa";

const POSAndTerminal = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    numberOfTerminals: "",
    message: ""
  });

  const features = [
    {
      icon: FaMobileAlt,
      title: "Mobile & Tablet POS",
      description: "Accept payments anywhere with mobile and tablet solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaChartBar,
      title: "Advanced Reporting",
      description: "Real-time sales analytics and business insights",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaShieldAlt,
      title: "Secure Transactions",
      description: "PCI-compliant with end-to-end encryption",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaCloud,
      title: "Cloud Management",
      description: "Manage multiple locations from a single dashboard",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const terminalTypes = [
    { 
      name: "Mobile POS", 
      description: "Turn smartphones into payment terminals",
      time: "Instant Setup",
      icon: "📱"
    },
    { 
      name: "Countertop Terminal", 
      description: "Traditional fixed terminals for retail stores",
      time: "24h Setup",
      icon: "💳"
    },
    { 
      name: "Portable Terminal", 
      description: "Wireless terminals for restaurants and events",
      time: "48h Setup",
      icon: "🚀"
    },
    { 
      name: "Self-Service Kiosk", 
      description: "Automated terminals for quick service",
      time: "1 Week",
      icon: "🔄"
    }
  ];

  const businessTypes = [
    { type: "Retail Store", icon: FaStore, features: ["Inventory", "Loyalty", "Receipts"] },
    { type: "Restaurant", icon: FaUtensils, features: ["Tableside", "Kitchen", "Reservations"] },
    { type: "Service Business", icon: FaUsers, features: ["Appointments", "Invoicing", "Payments"] },
    { type: "E-commerce", icon: FaShoppingCart, features: ["Online/Offline", "Sync", "Analytics"] }
  ];

  const hardwareOptions = [
    {
      name: "Basic Bundle",
      price: "$299",
      includes: ["Mobile Reader", "Stand", "Charger"],
      recommended: false
    },
    {
      name: "Professional Bundle",
      price: "$699",
      includes: ["Counter Terminal", "Printer", "Scanner", "Stand"],
      recommended: true
    },
    {
      name: "Enterprise Bundle",
      price: "$1,299",
      includes: ["Multiple Terminals", "Kiosk", "Full Support", "Training"],
      recommended: false
    }
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingData);
    setShowBookingForm(false);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('/')) {
      window.location.href = href;
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24 pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,82,83,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5253]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF5253]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5253]/20 rounded-full border border-[#FF5253]/30 mb-6">
                <FaRocket className="text-[#FF5253] text-sm" />
                <span className="text-[#FF5253] font-semibold text-sm uppercase tracking-wider">
                  Modern POS Solutions
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                POS & Terminal
                <span className="block text-[#FF5253]">Solutions</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Modern, reliable POS systems tailored for retail, restaurants, and service businesses. 
                Fast, efficient, and secure payment processing wherever you do business.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowBookingForm(true)}
                  className="px-8 py-3 bg-[#FF5253] text-white font-semibold rounded-xl hover:bg-[#FF5253]/90 transition-all duration-300 flex items-center gap-2"
                >
                  <FaCalendarAlt />
                  Get Started
                </motion.button>
                <button
                  onClick={(e) => handleLinkClick(e, '#hardware')}
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  <FaArrowRight />
                  View Hardware
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "⚡", label: "Setup Time", value: "24h" },
                    { icon: "🔄", label: "Offline Mode", value: "Yes" },
                    { icon: "📊", label: "Reports", value: "Real-time" },
                    { icon: "🔒", label: "Security", value: "PCI DSS" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced POS Features for{" "}
              <span className="bg-gradient-to-r from-[#FF5253] to-[#FF5253]/80 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Everything you need to run your business efficiently, from payment processing to inventory management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#FF5253]/30 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect
              <span className="block text-[#FF5253]">Terminal Type</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From mobile readers to full countertop systems, we have the right hardware for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {terminalTypes.map((terminal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#FF5253]/30 hover:shadow-xl transition-all duration-300 h-full text-center">
                  <div className="text-4xl mb-4">{terminal.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{terminal.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{terminal.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5253]/10 text-[#FF5253] text-sm font-medium rounded-full">
                    <FaSync className="text-xs" />
                    {terminal.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tailored for Your
                <span className="block text-[#FF5253]">Business Type</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our POS systems are customized for different business models, 
                with industry-specific features to boost your efficiency.
              </p>

              <div className="space-y-6">
                {businessTypes.map((business, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#FF5253]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FF5253]/10 rounded-xl flex items-center justify-center">
                      <business.icon className="text-[#FF5253] text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{business.type}</h4>
                      <div className="flex flex-wrap gap-2">
                        {business.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                          >
                            <span className="w-1.5 h-1.5 bg-[#FF5253] rounded-full"></span>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Why Businesses Choose Us</h3>
                <p className="text-gray-300 mb-6">Industry-leading features that make operations smoother.</p>
              </div>

              <div className="space-y-4">
                {[
                  "Contactless & NFC Payments",
                  "Inventory Management",
                  "Employee Management",
                  "Customer Loyalty Programs",
                  "Multi-location Sync",
                  "Offline Mode Support",
                  "Real-time Reporting",
                  "24/7 Support"
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#FF5253]/30 transition-all duration-300"
                  >
                    <FaCheck className="text-[#FF5253] text-sm flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hardware Options */}
      <section className="py-20 bg-gray-50" id="hardware">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hardware Packages
              <span className="block text-[#FF5253]">& Pricing</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose from our pre-configured bundles or customize your own setup.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {hardwareOptions.map((bundle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${bundle.recommended ? 'scale-105 z-10' : ''}`}
              >
                {bundle.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] text-white rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`bg-white rounded-3xl border-2 ${bundle.recommended ? 'border-[#FF5253] shadow-2xl' : 'border-gray-200 shadow-lg'} h-full flex flex-col overflow-hidden`}>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{bundle.name}</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl font-bold text-gray-900">{bundle.price}</span>
                      <span className="text-gray-600 ml-2">one-time</span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="text-sm text-gray-600 mb-3">Includes:</div>
                      {bundle.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <FaCheck className="text-green-500 text-sm" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setShowBookingForm(true)}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${bundle.recommended 
                        ? 'bg-[#FF5253] text-white hover:bg-[#FF5253]/90' 
                        : 'border-2 border-[#FF5253] text-[#FF5253] hover:bg-[#FF5253] hover:text-white'}`}
                    >
                      Get This Bundle
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF5253] to-[#FF6B6B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Upgrade Your POS System?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our modern POS solutions.
              Get set up in less than 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBookingForm(true)}
                className="px-8 py-3 bg-white text-[#FF5253] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Request Demo
              </motion.button>
              <button
                onClick={(e) => handleLinkClick(e, '/services')}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Compare All Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl"
          >
            <button
              onClick={() => setShowBookingForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#FF5253]"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get POS Solution Consultation</h3>
            <p className="text-gray-600 mb-6">Tell us about your business needs</p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={bookingData.name}
                onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5253] focus:ring-2 focus:ring-[#FF5253]/20 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={bookingData.email}
                onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5253] focus:ring-2 focus:ring-[#FF5253]/20 outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={bookingData.phone}
                onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5253] focus:ring-2 focus:ring-[#FF5253]/20 outline-none"
                required
              />
              <select
                value={bookingData.businessType}
                onChange={(e) => setBookingData({...bookingData, businessType: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5253] focus:ring-2 focus:ring-[#FF5253]/20 outline-none"
                required
              >
                <option value="">Business Type</option>
                <option value="retail">Retail Store</option>
                <option value="restaurant">Restaurant</option>
                <option value="service">Service Business</option>
                <option value="other">Other</option>
              </select>
              <select
                value={bookingData.numberOfTerminals}
                onChange={(e) => setBookingData({...bookingData, numberOfTerminals: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5253] focus:ring-2 focus:ring-[#FF5253]/20 outline-none"
                required
              >
                <option value="">Number of Terminals Needed</option>
                <option value="1">1 Terminal</option>
                <option value="2-5">2-5 Terminals</option>
                <option value="6-10">6-10 Terminals</option>
                <option value="10+">10+ Terminals</option>
              </select>
              <textarea
                placeholder="Additional Requirements"
                value={bookingData.message}
                onChange={(e) => setBookingData({...bookingData, message: e.target.value})}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5253] focus:ring-2 focus:ring-[#FF5253]/20 outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#FF5253] text-white font-semibold rounded-xl hover:bg-[#FF5253]/90 transition-all"
              >
                Schedule Consultation
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default POSAndTerminal;