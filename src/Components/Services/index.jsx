"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaCreditCard, 
  FaCashRegister, 
  FaShoppingCart, 
  FaUserTie, 
  FaShieldAlt, 
  FaHeadset,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaUser
} from "react-icons/fa";

export default function ServicesPage() {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: FaCreditCard,
      title: "Payment Gateway Integration",
      description: "Accept secure payments online and in-app with seamless gateway integration, designed for businesses of every scale.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      features: ["Multi-currency Support", "API Integration", "Mobile SDK", "Recurring Billing"],
      stats: "99.9% Uptime"
    },
    {
      icon: FaCashRegister,
      title: "POS & Terminal Solutions",
      description: "Modern and reliable POS systems tailored for retail, restaurants, and services — fast, efficient, and secure.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
      features: ["Contactless Payments", "Inventory Management", "Sales Reporting", "Offline Mode"],
      stats: "Instant Setup"
    },
    {
      icon: FaShoppingCart,
      title: "E-Commerce Payments",
      description: "Simplify your online transactions with easy-to-manage payment systems for your store or marketplace.",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=600&q=80",
      features: ["Shopping Cart Integration", "Digital Wallets", "Subscription Management", "Analytics Dashboard"],
      stats: "Seamless Integration"
    },
    {
      icon: FaUserTie,
      title: "Merchant Account Setup",
      description: "Start accepting card payments quickly — we manage your merchant onboarding for smooth operations.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      features: ["Quick Approval", "Competitive Rates", "Dedicated Manager", "No Hidden Fees"],
      stats: "24h Setup"
    },
    {
      icon: FaShieldAlt,
      title: "Fraud Prevention & Security",
      description: "Protect your business with advanced encryption, fraud detection tools, and real-time transaction monitoring.",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&w=600&q=80",
      features: ["AI Fraud Detection", "PCI DSS Compliance", "Real-time Alerts", "Chargeback Protection"],
      stats: "256-bit Encryption"
    },
    {
      icon: FaHeadset,
      title: "24/7 Merchant Support",
      description: "Get dedicated, round-the-clock technical and merchant support to ensure your operations never stop.",
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=600&q=80",
      features: ["Phone & Chat Support", "Technical Assistance", "Account Management", "Training Resources"],
      stats: "Instant Response"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Merchants" },
    { number: "$50M+", label: "Processed Monthly" },
    { number: "99.9%", label: "System Uptime" },
    { number: "24/7", label: "Customer Support" }
  ];

  const handleBookService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setBookingData(prev => ({ ...prev, service: serviceTitle }));
    setShowBookingModal(true);
  };

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    
    // Simulate email sending to dummy mail
    console.log("Booking details sent to dummy@idealtransact.com:", bookingData);
    
    // Show confirmation
    setShowBookingModal(false);
    setShowConfirmation(true);
    
    // Reset form
    setBookingData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const closeModal = () => {
    setShowBookingModal(false);
    setBookingData(prev => ({ ...prev, service: "" }));
  };

  const handleBrowseMore = () => {
    setShowConfirmation(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF5252]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FF5252]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5252]/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5252]/10 rounded-full border border-[#FF5252]/20 mb-4"
          >
            <FaRocket className="text-[#FF5252] text-sm" />
            <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
              Payment Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            End-to-end payment processing solutions designed to help your business 
            accept payments securely, efficiently, and at scale.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center group hover:border-[#FF5252]/30 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-white rounded-3xl shadow-lg border border-gray-200 group-hover:border-[#FF5252]/30 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-[#FF5252] group-hover:text-white transition-all duration-300">
                    <service.icon className="text-[#FF5252] group-hover:text-white text-lg" />
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF5252] text-white rounded-full text-sm font-semibold shadow-lg">
                      {service.stats}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF5252] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <FaCheckCircle className="text-[#FF5252] text-xs flex-shrink-0" />
                        <span className="text-gray-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Updated Button */}
                  <motion.button
                    onClick={() => handleBookService(service.title)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-auto py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-[#FF5252] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    Book Service
                    <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#FF5252] transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Service</h2>
            <p className="text-gray-600 mb-6">Fill in your details to book <span className="text-[#FF5252] font-semibold">{selectedService}</span></p>

            <form onSubmit={handleSubmitBooking} className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2">
                  <FaUser className="text-[#FF5252]" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5252] focus:ring-2 focus:ring-[#FF5252]/20 outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2">
                  <FaEnvelope className="text-[#FF5252]" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5252] focus:ring-2 focus:ring-[#FF5252]/20 outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2">
                  <FaPhone className="text-[#FF5252]" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5252] focus:ring-2 focus:ring-[#FF5252]/20 outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="text-gray-700 mb-2 block">Additional Message</label>
                <textarea
                  name="message"
                  value={bookingData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:border-[#FF5252] focus:ring-2 focus:ring-[#FF5252]/20 outline-none transition-all resize-none"
                  placeholder="Any specific requirements or questions"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-[#FF5252] text-white font-semibold rounded-xl hover:bg-[#FF5252]/90 transition-all duration-300"
              >
                Confirm Booking
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-green-600 text-3xl" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You for Booking!
            </h2>
            
            <p className="text-gray-600 mb-2">
              Your service request has been submitted successfully.
            </p>
            
            <p className="text-gray-500 text-sm mb-8">
              A confirmation has been sent to <span className="font-semibold">dummy@idealtransact.com</span>
            </p>

            <motion.button
              onClick={handleBrowseMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-[#FF5252] text-white font-semibold rounded-xl hover:bg-[#FF5252]/90 transition-all duration-300"
            >
              Browse More Services
            </motion.button>
            
            <p className="text-gray-400 text-sm mt-4">
              Thanks for choosing Ideal Transact!
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}