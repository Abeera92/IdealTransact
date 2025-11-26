"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCreditCard, FaUserTie, FaGlobe, FaChartLine, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const FeatureCards = () => {
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
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80",
      icon: FaCreditCard,
      title: "Card Machines",
      description: "Innovative devices for seamless payments with contactless technology and instant processing.",
      features: ["Contactless Payments", "Instant Processing", "Portable Design"],
      stats: "99.9% Uptime"
    },
    {
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80",
      icon: FaUserTie,
      title: "Merchant Accounts",
      description: "Secure accounts for all business types with competitive rates and dedicated support.",
      features: ["Competitive Rates", "Dedicated Support", "Quick Setup"],
      stats: "24/7 Support"
    },
    {
      image: "https://images.unsplash.com/photo-1573164574472-cb89e39749b4?auto=format&fit=crop&w=600&q=80",
      icon: FaGlobe,
      title: "Online Payments",
      description: "Accept cards, wallets, and digital payments with seamless integration and advanced security.",
      features: ["Multiple Payment Methods", "Seamless Integration", "Advanced Security"],
      stats: "256-bit Encryption"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      icon: FaChartLine,
      title: "Analytics Dashboard",
      description: "Track sales and business insights with real-time analytics and customizable reports.",
      features: ["Real-time Analytics", "Custom Reports", "Revenue Tracking"],
      stats: "Live Updates"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#FF5252]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#FF5252]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
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
            <FaCheckCircle className="text-[#FF5252] text-sm" />
            <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
              Premium Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
              Payment Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Comprehensive payment solutions designed to help your business grow, 
            with cutting-edge technology and unparalleled support.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-white rounded-3xl shadow-lg border border-gray-200 group-hover:border-[#FF5252]/30 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-[#FF5252] group-hover:text-white transition-all duration-300">
                    <feature.icon className="text-[#FF5252] group-hover:text-white text-lg" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF5252] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                    {feature.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#FF5252] rounded-full"></div>
                        <span className="text-gray-600 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats Badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-[#FF5252]/20 transition-colors duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5252]/10 rounded-full">
                      <span className="text-[#FF5252] font-semibold text-sm">
                        {feature.stats}
                      </span>
                    </div>
                    
                    {/* CTA Arrow */}
                    <div className="w-8 h-8 bg-[#FF5252] text-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <FaArrowRight className="text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

     
      </div>
    </section>
  );
};

export default FeatureCards;