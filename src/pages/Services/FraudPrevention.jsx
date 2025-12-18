"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { 
  FaShieldAlt,
  FaRobot,
  FaBell,
  FaChartLine,
  FaLock,
  FaArrowRight,
  FaCalendarAlt,
  FaRocket,
  FaExclamationTriangle,
  FaWhatsapp
} from "react-icons/fa";

const FraudPrevention = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FaRobot,
      title: "AI Fraud Detection",
      description: "Machine learning algorithms detect patterns in real-time to prevent fraudulent transactions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaLock,
      title: "PCI DSS Compliance",
      description: "Level 1 certified with 256-bit encryption and secure data handling",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaBell,
      title: "Real-time Alerts",
      description: "Instant notifications for suspicious activity with automated response protocols",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaChartLine,
      title: "Chargeback Protection",
      description: "Proactive dispute management with evidence collection and automated responses",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const securityLayers = [
    { layer: "Device Fingerprinting", icon: "📱", description: "Track and identify devices" },
    { layer: "Behavioral Analysis", icon: "🧠", description: "Monitor user behavior patterns" },
    { layer: "IP Geolocation", icon: "📍", description: "Detect location anomalies" },
    { layer: "Velocity Checks", icon: "⚡", description: "Monitor transaction frequency" },
    { layer: "3D Secure 2.0", icon: "🛡️", description: "Advanced authentication" },
    { layer: "Risk Scoring", icon: "📊", description: "Real-time risk assessment" }
  ];

  const threatTypes = [
    { threat: "Card Testing", risk: "High", solution: "Blocked with velocity checks" },
    { threat: "Account Takeover", risk: "High", solution: "Multi-factor authentication" },
    { threat: "Friendly Fraud", risk: "Medium", solution: "Transaction evidence" },
    { threat: "Identity Theft", risk: "High", solution: "Document verification" },
    { threat: "Chargeback Fraud", risk: "Medium", solution: "Automated evidence" },
    { threat: "Synthetic Identity", risk: "High", solution: "AI pattern detection" }
  ];

  const protectionPlans = [
    {
      name: "Essential",
      price: "$49",
      period: "/month",
      features: ["Basic monitoring", "Email alerts", "Standard protection", "PCI compliance"],
      detection: "85%",
      recommended: false
    },
    {
      name: "Professional",
      price: "$129",
      period: "/month",
      features: ["AI detection", "Real-time alerts", "Chargeback protection", "24/7 monitoring", "Custom rules"],
      detection: "98%",
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Full suite", "Dedicated team", "Custom AI models", "White-label", "API access"],
      detection: "99.9%",
      recommended: false
    }
  ];

  const stats = [
    { value: "99.9%", label: "Fraud Detection Rate" },
    { value: "60%", label: "Reduction in Chargebacks" },
    { value: "<2s", label: "Response Time" },
    { value: "24/7", label: "Monitoring" }
  ];

  const handleWhatsAppClick = (planName = null) => {
    // Pre-filled message template
    const message = encodeURIComponent(
      `Hello! I'm interested in Fraud Prevention & Security services.${
        planName ? ` I'm specifically looking at the "${planName}" plan.` : ''
      } Please provide me with more information about:
      
      • Available security features
      • Setup process
      • Pricing details
      • Demo availability
      
      Thank you!`
    );
    
    // WhatsApp number (replace with your actual business number)
    const phoneNumber = "1234567890"; // Replace with your WhatsApp business number
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('/')) {
      navigate(href);
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
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-gray-800/70 text-white pt-24 pb-20">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          {/* Unsplash Background Image – Fraud / Security */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80')",
            }}
          ></div>

          {/* Balanced overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/35 to-transparent"></div>

          {/* Dot Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,82,83,0.3) 1px, transparent 0)`,
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5253]/20 rounded-full border border-[#FF5253]/30 mb-6">
                <FaRocket className="text-[#FF5253] text-sm" />
                <span className="text-[#FF5253] font-semibold text-sm uppercase tracking-wider">
                  Advanced Security
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Fraud Prevention
                <span className="block text-[#FF5253]">& Security</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Protect your business with advanced encryption, AI-powered fraud detection tools,
                and real-time transaction monitoring. Sleep better knowing your transactions are secure.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick()}
                  className="px-8 py-3 bg-[#FF5253] text-white font-semibold rounded-xl hover:bg-[#FF5253]/90 transition-all duration-300 flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </motion.button>

                <button
                  onClick={(e) => handleLinkClick(e, "#threats")}
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  <FaArrowRight />
                  View Threats
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
              <div className="relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-2xl p-6 text-center border border-white/10"
                    >
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
              Advanced Protection with{" "}
              <span className="bg-gradient-to-r from-[#FF5253] to-[#FF5253]/80 bg-clip-text text-transparent">
                AI Technology
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our multi-layered security system uses artificial intelligence to detect and prevent fraud in real-time.
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

      {/* Security Layers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              6-Layer Security
              <span className="block text-[#FF5253]">Protection</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Multiple security layers working together to create an impenetrable defense system.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-[#FF5253]/30 hover:shadow-xl transition-all duration-300 h-full text-center">
                  <div className="text-3xl mb-4">{layer.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{layer.layer}</h3>
                  <p className="text-xs text-gray-500">{layer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types */}
      <section className="py-20" id="threats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Common Threats
                <span className="block text-[#FF5253]">We Protect Against</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                From sophisticated attacks to everyday fraud attempts, our system detects and prevents them all.
              </p>

              <div className="space-y-4">
                {threatTypes.map((threat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#FF5253]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <FaExclamationTriangle className={`text-sm ${threat.risk === 'High' ? 'text-red-500' : 'text-yellow-500'}`} />
                        <h4 className="font-bold text-gray-900">{threat.threat}</h4>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${threat.risk === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {threat.risk} Risk
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Solution: {threat.solution}</p>
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
                <h3 className="text-2xl font-bold mb-4">Security Benefits</h3>
                <p className="text-gray-300 mb-6">What our protection delivers for your business</p>
              </div>

              <div className="space-y-4">
                {[
                  { benefit: "Reduced Fraud Losses", value: "Up to 90%" },
                  { benefit: "Lower Chargeback Rates", value: "60% reduction" },
                  { benefit: "Improved Approval Rates", value: "+15%" },
                  { benefit: "Customer Trust", value: "Increased loyalty" },
                  { benefit: "Regulatory Compliance", value: "PCI DSS Level 1" },
                  { benefit: "24/7 Peace of Mind", value: "Always protected" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#FF5253]/30 transition-all duration-300"
                  >
                    <span>{item.benefit}</span>
                    <div className="text-lg font-bold text-[#FF5253]">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Protection Plans */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Security Protection
              <span className="block text-[#FF5253]">Plans</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose the level of protection that matches your business risk profile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {protectionPlans.map((plan, index) => (
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
                      Recommended
                    </div>
                  </div>
                )}

                <div className={`bg-white rounded-3xl border-2 ${plan.recommended ? 'border-[#FF5253] shadow-2xl' : 'border-gray-200 shadow-lg'} h-full flex flex-col overflow-hidden`}>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      </div>
                      <div className="mt-3">
                        <div className="text-lg font-bold text-gray-900">{plan.detection}</div>
                        <div className="text-sm text-gray-600">Fraud Detection Rate</div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleWhatsAppClick(plan.name)}
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${plan.recommended 
                        ? 'bg-[#FF5253] text-white hover:bg-[#FF5253]/90' 
                        : 'border-2 border-[#FF5253] text-[#FF5253] hover:bg-[#FF5253] hover:text-white'}`}
                    >
                      <FaWhatsapp />
                      {plan.name === "Enterprise" ? "Get Custom Quote" : "Get This Plan"}
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
              Don't Risk Your Business to Fraud
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses protected by our advanced security system.
              Get protected in under 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppClick()}
                className="px-8 py-3 bg-white text-[#FF5253] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-lg" />
                Chat Now on WhatsApp
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
    </div>
  );
};

export default FraudPrevention;