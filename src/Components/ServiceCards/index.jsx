"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaCreditCard, 
  FaShoppingCart,
  FaArrowRight,
  FaRocket,
  FaLock,
  FaWhatsapp
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Changed to react-router-dom

export default function ServiceCards() {
  const navigate = useNavigate(); // Using react-router-dom hook

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -15,
      boxShadow: "0 25px 50px -12px rgba(255, 82, 82, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Selected 3 services with redesigned structure
  const featuredServices = [
    {
      icon: FaCreditCard,
      title: "Payment Gateway Integration",
      description: "Seamlessly accept online and in-app payments with our robust gateway solutions.",
      shortDescription: "Secure online payment processing",
      features: ["Multi-currency", "API Integration", "Mobile SDK", "Recurring Billing"],
      stats: "99.9% Uptime",
      color: "from-[#FF5252] to-[#FF6B6B]",
      accentColor: "#FF5252",
      delay: 0.1,
      tag: "Most Popular"
    },
    {
      icon: FaShoppingCart,
      title: "E-Commerce Payments",
      description: "Complete payment solutions for online stores and marketplaces.",
      shortDescription: "Streamlined e-commerce transactions",
      features: ["Cart Integration", "Digital Wallets", "Subscriptions", "Analytics"],
      stats: "Seamless Integration",
      color: "from-[#FF6B6B] to-[#FF8585]",
      accentColor: "#FF6B6B",
      delay: 0.2,
      tag: "Trending"
    },
    {
      icon: FaLock,
      title: "Fraud Prevention & Security",
      description: "Advanced security solutions to protect your transactions and customer data.",
      shortDescription: "Enterprise-grade security",
      features: ["AI Detection", "PCI Compliance", "Real-time Alerts", "Encryption"],
      stats: "256-bit Security",
      color: "from-[#FF5252] to-[#FF3838]",
      accentColor: "#FF3838",
      delay: 0.3,
      tag: "Essential"
    }
  ];

  // WhatsApp booking function
  const handleWhatsAppBooking = (serviceTitle) => {
    const phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number
    const message = `Hello! I want to book the "${serviceTitle}" service from Ideal Transact. Please provide me with more details.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
  };

  // Browse more services - navigate to services page
  const handleBrowseMore = () => {
    navigate('/services'); // Using react-router-dom navigation
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#FF5252]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#FF5252]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5252]/10 rounded-full border border-[#FF5252]/20 mb-4"
          >
            <FaRocket className="text-[#FF5252] text-sm" />
            <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
              Featured Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Tailored{" "}
            <span className="bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
              Payment Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Our most popular services designed to accelerate your business growth
          </motion.p>
        </motion.div>

        {/* 3 Featured Services Cards - New Design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              className="group relative"
            >
              {/* Tag Badge */}
              {service.tag && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-4 py-1 bg-gradient-to-r from-[#FF5252] to-[#FF6B6B] text-white text-sm font-bold rounded-full shadow-lg">
                    {service.tag}
                  </div>
                </div>
              )}

              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden h-full">
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-r ${service.color} relative overflow-hidden`}>
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-white"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full border border-white"></div>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="absolute -bottom-6 left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <service.icon className="text-white text-xl" />
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <span className="text-white text-sm font-semibold">{service.stats}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-10 pb-6 px-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#FF5252] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FF5252] flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp Button */}
                  <motion.button
                    onClick={() => handleWhatsAppBooking(service.title)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-[#FF5252] to-[#da3737] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Book via WhatsApp</span>
                  </motion.button>
                </div>

                {/* Decorative Bottom Line */}
                <div className={`h-1 w-full bg-gradient-to-r ${service.color}`}></div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5252]/0 to-[#FF6B6B]/0 group-hover:from-[#FF5252]/5 group-hover:to-[#FF6B6B]/5 rounded-2xl blur-xl transition-all duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Browse More Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          {/* Background Card */}
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5252]/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FF5252]/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Text Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Discover More Solutions
                  </h3>
                  <p className="text-gray-600 max-w-lg">
                    Explore our complete suite of payment processing services including POS systems, merchant accounts, and 24/7 support.
                  </p>
                </div>
                
                {/* Browse Button */}
                <motion.button
                  onClick={handleBrowseMore}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#FF5252] to-[#FF6B6B] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#FF5252]/20 transition-all duration-300 flex items-center gap-3 group/btn2 min-w-[200px] justify-center"
                >
                  <span className="text-lg">Browse All Services</span>
                  <FaArrowRight className="text-lg group-hover/btn2:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </div>
              
              {/* Quick Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF5252]"></div>
                  <span className="text-gray-700 text-sm font-medium">POS Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF5252]"></div>
                  <span className="text-gray-700 text-sm font-medium">Merchant Accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF5252]"></div>
                  <span className="text-gray700 text-sm font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF5252]"></div>
                  <span className="text-gray-700 text-sm font-medium">Security Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}