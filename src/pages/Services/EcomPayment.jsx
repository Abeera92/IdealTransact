"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { 
  FaShoppingCart,
  FaGlobe,
  FaShieldAlt,
  FaChartLine,
  FaSync,
  FaMobileAlt,
  FaCreditCard,
  FaCheck,
  FaArrowRight,
  FaCalendarAlt,
  FaRocket,
  FaPlug,
  FaTag,
  FaBell,
  FaUsers
} from "react-icons/fa";

const EcommercePayments = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    platform: "",
    monthlyVolume: "",
    message: ""
  });
 const navigate = useNavigate();
  const features = [
    {
      icon: FaGlobe,
      title: "Global Storefront",
      description: "Accept payments in 150+ currencies from customers worldwide",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaShieldAlt,
      title: "Secure Checkout",
      description: "PCI-DSS Level 1 certified with 3D Secure authentication",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaChartLine,
      title: "Smart Analytics",
      description: "Real-time sales tracking and customer behavior insights",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaSync,
      title: "Recurring Billing",
      description: "Automated subscription management and billing cycles",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const platformIntegrations = [
    { name: "Shopify", time: "15 minutes", icon: "🛍️" },
    { name: "WooCommerce", time: "30 minutes", icon: "🛒" },
    { name: "Magento", time: "1 hour", icon: "🔮" },
    { name: "BigCommerce", time: "45 minutes", icon: "🏬" },
    { name: "Custom Platform", time: "1-2 days", icon: "⚡" },
    { name: "API Integration", time: "2-3 days", icon: "🔌" }
  ];

  const paymentFeatures = [
    { name: "One-Click Checkout", icon: "⚡" },
    { name: "Digital Wallets", icon: "📱" },
    { name: "Buy Now Pay Later", icon: "⏳" },
    { name: "Multi-Currency", icon: "🌍" },
    { name: "Fraud Detection", icon: "🛡️" },
    { name: "Tax Calculation", icon: "🧮" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: ["Up to $25K volume", "Basic checkout", "Email support", "Standard features"],
      recommended: false
    },
    {
      name: "Growth",
      price: "$79",
      period: "/month",
      features: ["Up to $100K volume", "Advanced checkout", "Phone support", "Analytics", "Multi-currency"],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited volume", "White-label", "24/7 support", "Custom features", "Dedicated account"],
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
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-white">
      {/* Hero Section */}
 <section className="relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-gray-800/70 text-white pt-24 pb-20">
  {/* BACKGROUND */}
  <div className="absolute inset-0">

    {/* Unsplash Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80')",
      }}
    ></div>

    {/* Balanced overlay (NOT too dark, NOT too light) */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/35 to-transparent"></div>

    {/* Dot Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,82,83,0.35) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
    </div>

    {/* Glow Blobs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5253]/15 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF5253]/10 rounded-full blur-3xl"></div>

  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:w-1/2"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5253]/25 rounded-full border border-[#FF5253]/40 mb-6">
          <FaRocket className="text-[#FF5253] text-sm" />
          <span className="text-[#FF5253] font-semibold text-sm uppercase tracking-wider">
            E-commerce Solutions
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          E-commerce
          <span className="block text-[#FF5253]">Payments</span>
        </h1>

        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Simplify online transactions with easy-to-manage payment systems
          for your store or marketplace. Boost conversions with seamless checkout.
        </p>

        <div className="flex flex-wrap gap-4">
          {/* CONTACT PAGE NAVIGATION */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-[#FF5253] text-white font-semibold rounded-xl hover:bg-[#FF5253]/90 transition-all duration-300 flex items-center gap-2"
          >
            <FaCalendarAlt />
            Contact Us
          </motion.button>

          <button
            onClick={(e) => handleLinkClick(e, "#integrations")}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <FaArrowRight />
            View Integrations
          </button>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:w-1/2 relative"
      >
        <div className="relative bg-gradient-to-br from-white/15 to-transparent backdrop-blur-sm border border-white/30 rounded-3xl p-8">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "⚡", label: "Setup Time", value: "15 min" },
              { icon: "🌍", label: "Currencies", value: "150+" },
              { icon: "🛒", label: "Platforms", value: "50+" },
              { icon: "📈", label: "Boost Sales", value: "40%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
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
              Power Your Online Store with{" "}
              <span className="bg-gradient-to-r from-[#FF5253] to-[#FF5253]/40 bg-clip-text text-transparent">
                Smart Payments
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Everything you need to accept payments, manage subscriptions, and grow your e-commerce business.
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

      {/* Platform Integrations */}
      <section className="py-20 bg-gray-50" id="integrations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Platform
              <span className="block text-[#FF5253]">Integrations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Connect with all major e-commerce platforms in minutes. No coding required.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platformIntegrations.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-[#FF5253]/30 hover:shadow-xl transition-all duration-300 h-full text-center">
                  <div className="text-3xl mb-4">{platform.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{platform.name}</h3>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                    {platform.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Payment
                <span className="block text-[#FF5253]">Features</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Give your customers the payment experience they expect with 
                modern features that reduce cart abandonment and increase conversions.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {paymentFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#FF5253]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-xl">{feature.icon}</div>
                      <span className="font-medium text-gray-900">{feature.name}</span>
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
                <h3 className="text-2xl font-bold mb-4">Increase Conversion Rates</h3>
                <p className="text-gray-300 mb-6">Features that turn browsers into buyers.</p>
              </div>

              <div className="space-y-4">
                {[
                  { stat: "40%", label: "Increase in checkout completion" },
                  { stat: "60%", label: "Faster checkout process" },
                  { stat: "30%", label: "Reduction in cart abandonment" },
                  { stat: "99.9%", label: "Payment success rate" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#FF5253]/30 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold">{item.stat}</div>
                    <div className="text-sm text-gray-300 text-right">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent
              <span className="block text-[#FF5253]">Pricing</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Scale your payment processing as your e-commerce business grows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.recommended ? 'scale-105 z-10' : ''}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] text-white rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`bg-white rounded-3xl border-2 ${plan.recommended ? 'border-[#FF5253] shadow-2xl' : 'border-gray-200 shadow-lg'} h-full flex flex-col overflow-hidden`}>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <FaCheck className="text-green-500 text-sm" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setShowBookingForm(true)}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${plan.recommended 
                        ? 'bg-[#FF5253] text-white hover:bg-[#FF5253]/90' 
                        : 'border-2 border-[#FF5253] text-[#FF5253] hover:bg-[#FF5253] hover:text-white'}`}
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
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
              Ready to Boost Your Online Sales?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of e-commerce businesses that trust us with their payment processing.
              Setup takes just 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBookingForm(true)}
                className="px-8 py-3 bg-white text-[#FF5253] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Trial
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

            <h3 className="text-2xl font-bold text-gray-900 mb-2">Set Up E-commerce Payments</h3>
            <p className="text-gray-600 mb-6">Tell us about your online store</p>

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
                value={bookingData.platform}
                onChange={(e) => setBookingData({...bookingData, platform: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5253] focus:ring-2 focus:ring-[#FF5253]/20 outline-none"
                required
              >
                <option value="">E-commerce Platform</option>
                <option value="shopify">Shopify</option>
                <option value="woocommerce">WooCommerce</option>
                <option value="magento">Magento</option>
                <option value="custom">Custom Platform</option>
                <option value="other">Other</option>
              </select>
              <select
                value={bookingData.monthlyVolume}
                onChange={(e) => setBookingData({...bookingData, monthlyVolume: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5253] focus:ring-2 focus:ring-[#FF5253]/20 outline-none"
                required
              >
                <option value="">Estimated Monthly Volume</option>
                <option value="<10k">Under $10K</option>
                <option value="10k-50k">$10K - $50K</option>
                <option value="50k-200k">$50K - $200K</option>
                <option value="200k+">Over $200K</option>
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
                Start 15-Day Free Trial
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default EcommercePayments;