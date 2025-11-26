"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay, FaRocket, FaShieldAlt, FaChartLine, FaCheckCircle } from "react-icons/fa";
import Img from "../../assets/images/merchants-acc.avif"

export default function CtaSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const features = [
    { icon: FaRocket, text: "Setup in 5 minutes" },
    { icon: FaShieldAlt, text: "Bank-level security" },
    { icon: FaChartLine, text: "Real-time analytics" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="mx-auto max-w-7xl py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative isolate overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl px-6 py-16 sm:px-12 lg:px-16 lg:py-20 shadow-2xl border border-gray-700"
        >
          {/* Background Gradient Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FF5252]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FF5252]/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5252]/3 rounded-full blur-3xl"></div>
          </div>

          {/* Animated SVG Background */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0 opacity-50"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#FF5252" />
                <stop offset={1} stopColor="#FF5252" stopOpacity="0.3" />
              </radialGradient>
            </defs>
          </svg>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5252]/10 rounded-full border border-[#FF5252]/20 mb-6"
              >
                <FaRocket className="text-[#FF5252] text-sm" />
                <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
                  Get Started Today
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Ready to{" "}
                <span className="bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
                  Simplify
                </span>{" "}
                Your Payments?
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Join thousands of businesses that trust Ideal Transact for secure, fast, and hassle-free transactions. Let's take your business payments to the next level.
              </motion.p>

              {/* Features List */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                    <feature.icon className="text-[#FF5252] text-sm" />
                    <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-[#FF5252] text-white font-semibold rounded-xl hover:bg-[#FF5252]/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF5252]/25 flex items-center gap-3"
                >
                  Start Free Trial
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
                >
                  <FaPlay className="text-sm" />
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-green-400" />
                  <span>PCI DSS Compliant</span>
                </div>
                <div className="w-px h-4 bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-400" />
                  <span>99.9% Uptime</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 group">
                <img
                  alt="Payment dashboard screenshot"
                  src={Img}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Image Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-[#FF5252] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Live Demo
                </div>
              </div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-2 gap-4 mt-6"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-gray-400 text-sm">Active Merchants</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-2xl font-bold text-white">$50M+</div>
                  <div className="text-gray-400 text-sm">Processed Monthly</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}