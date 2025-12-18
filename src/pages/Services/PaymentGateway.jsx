"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaCreditCard, 
  FaGlobe, 
  FaShieldAlt, 
  FaBolt,
  FaChartLine,
  FaMobileAlt,
  FaSync,
  FaCheck,
  FaArrowRight,
  FaHeadset,
  FaLock,
  FaRocket,
  FaWhatsapp,
  FaCogs,
  FaPlug,
  FaServer
} from "react-icons/fa";

const PaymentGateway = () => {
  const features = [
    {
      icon: FaGlobe,
      title: "Global Coverage",
      description: "Accept payments from 150+ countries with 50+ currencies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaShieldAlt,
      title: "Military-Grade Security",
      description: "PCI DSS Level 1 certified with 256-bit encryption",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaBolt,
      title: "Lightning Fast",
      description: "99.9% uptime with sub-second transaction processing",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaChartLine,
      title: "Smart Analytics",
      description: "Real-time insights and comprehensive reporting dashboard",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const integrationOptions = [
    { name: "API Integration", time: "2-3 days", icon: FaPlug, description: "Full REST API access" },
    { name: "SDK for Mobile Apps", time: "1-2 days", icon: FaMobileAlt, description: "iOS & Android SDKs" },
    { name: "E-commerce Plugin", time: "15 minutes", icon: FaCogs, description: "Shopify, WooCommerce etc." },
    { name: "Hosted Payment Page", time: "5 minutes", icon: FaServer, description: "No-code setup" }
  ];

  const supportedMethods = [
    { name: "Credit/Debit Cards", icon: "💳", color: "bg-blue-100 text-blue-800" },
    { name: "Digital Wallets", icon: "📱", color: "bg-green-100 text-green-800" },
    { name: "Bank Transfers", icon: "🏦", color: "bg-purple-100 text-purple-800" },
    { name: "UPI & QR Codes", icon: "📲", color: "bg-cyan-100 text-cyan-800" },
    { name: "Cryptocurrency", icon: "₿", color: "bg-yellow-100 text-yellow-800" },
    { name: "Buy Now Pay Later", icon: "⏳", color: "bg-pink-100 text-pink-800" }
  ];

  const pricingTiers = [
    {
      name: "Startup",
      price: "$49",
      period: "/month",
      features: ["Up to $50K volume", "Basic support", "Standard features", "Email support", "Monthly reports"],
      recommended: false
    },
    {
      name: "Growth",
      price: "$99",
      period: "/month",
      features: ["Up to $200K volume", "Priority support", "Advanced analytics", "Phone support", "Multi-currency", "Custom branding"],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited volume", "24/7 dedicated support", "Custom features", "White-label solutions", "SLA guarantee", "Dedicated infrastructure"],
      recommended: false
    }
  ];

  const stats = [
    { value: "24h", label: "Average Setup Time", icon: "⚡" },
    { value: "PCI DSS 1", label: "Security Level", icon: "🔒" },
    { value: "150+", label: "Countries", icon: "🌍" },
    { value: "50+", label: "Payment Methods", icon: "💳" }
  ];

  const handleWhatsAppClick = (planName = null, isCTA = false) => {
    // Pre-filled message template for payment gateway
    const message = encodeURIComponent(
      `Hello! I'm interested in Payment Gateway Integration services.${
        planName ? ` I'm looking at the "${planName}" pricing plan.` : ''
      }${isCTA ? ' Ready to integrate!' : ''}
      
      Please help me with:
      • Payment gateway setup process
      • Integration options for my platform
      • Pricing and fee structure
      • Technical documentation
      
      Platform: [Website/Mobile App/E-commerce]
      Current payment methods: [List if any]
      
      Thank you!`
    );
    
    // WhatsApp number (replace with your actual business number)
    const phoneNumber = "1234567890"; // Replace with your WhatsApp business number
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleContactClick = () => {
    window.location.href = "/contact";
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
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-gray-900/80 to-gray-800/70 text-white pt-24 pb-20">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          {/* Technology/Fintech Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80')",
            }}
          ></div>

          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>

          {/* Animated dot pattern */}
          <div className="absolute inset-0 opacity-[0.15]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,82,83,0.4) 1.5px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Enhanced glow effects */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#FF5253]/20 to-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-purple-500/10 to-[#FF5253]/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF5253]/20 to-[#FF5253]/10 backdrop-blur-sm rounded-full border border-[#FF5253]/30 mb-6"
              >
                <FaRocket className="text-[#FF5253] text-sm" />
                <span className="text-[#FF5253] font-semibold text-sm uppercase tracking-wider">
                  ⚡ Enterprise Grade • 99.9% Uptime
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Payment Gateway
                <span className="block bg-gradient-to-r from-[#FF5253] via-[#FF6B6B] to-[#FF5253] bg-clip-text text-transparent">
                  That Scales With You
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
              >
                Seamlessly accept payments online and in-app with our robust, secure payment gateway 
                designed to handle <span className="text-white font-semibold">millions of transactions</span> with 99.9% uptime.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  type="button"
                  onClick={() => handleWhatsAppClick()}
                  className="group px-8 py-4 bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 shadow-lg"
                >
                  <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span>Get Gateway Setup</span>
                </button>
                <button
                  onClick={handleContactClick}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Contact Sales Team</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5253]/20 to-purple-500/20 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-5">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:border-[#FF5253]/30 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-gradient-to-r from-[#FF5253]/10 to-transparent rounded-xl border border-[#FF5253]/20">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Processing live transactions 24/7</span>
                    </div>
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise-Grade Payment
              <span className="block bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] bg-clip-text text-transparent">
                Gateway Features
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Built for performance, designed for simplicity, engineered for security at scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:border-[#FF5253]/30 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5253] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <feature.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-[#FF5253] to-[#FF6B6B] rounded-full"></div>
                <span className="text-[#FF5253] font-semibold uppercase tracking-wider text-sm">FLEXIBLE INTEGRATION</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Multiple Integration
                <span className="block bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] bg-clip-text text-transparent">
                  Options Available
                </span>
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg">
                Choose the integration method that best fits your tech stack. From quick plugins to custom APIs, we've got you covered.
              </p>

              <div className="space-y-4">
                {integrationOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 hover:border-[#FF5253]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#FF5253]/10 to-[#FF5253]/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <option.icon className="text-[#FF5253] text-lg" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 block">{option.name}</span>
                        <span className="text-sm text-gray-500">{option.description}</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-[#FF5253]/10 group-hover:text-[#FF5253] transition-all duration-300">
                      {option.time}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <button
                  onClick={() => handleWhatsAppClick("Integration Consultation")}
                  className="inline-flex items-center gap-2 px-6 py-3 text-[#FF5253] font-semibold rounded-xl hover:bg-[#FF5253]/10 transition-all duration-300"
                >
                  <FaWhatsapp />
                  Need Custom Integration?
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-[#FF5253] to-[#FF6B6B] rounded-full"></div>
                <span className="text-[#FF5253] font-semibold uppercase tracking-wider text-sm">SUPPORTED METHODS</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">All Payment Methods</h3>
              <p className="text-gray-300 mb-8">Accept every payment method your customers prefer, worldwide.</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {supportedMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-[#FF5253]/30 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
                    <div className="text-sm font-medium">{method.name}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <FaHeadset className="text-[#FF5253]" />
                  <span className="text-sm text-gray-300">24/7 technical support for all payment methods</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose the plan that fits your transaction volume and business needs. No hidden fees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${tier.recommended ? 'lg:-translate-y-4' : ''}`}
              >
                {tier.recommended && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] text-white rounded-full text-sm font-semibold shadow-2xl">
                      ⭐ Most Popular
                    </div>
                  </motion.div>
                )}

                <div className={`bg-white rounded-3xl border-2 ${tier.recommended ? 'border-[#FF5253] shadow-2xl' : 'border-gray-200 shadow-xl'} h-full flex flex-col overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-50"></div>
                  <div className="relative p-8 z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    
                    <div className="mb-8">
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                        <span className="text-gray-600 ml-2 text-lg">{tier.period}</span>
                      </div>
                      <div className="text-lg text-gray-600 bg-gray-50 px-4 py-2 rounded-xl">
                        {tier.name === "Enterprise" ? "Contact for custom pricing" : "+ transaction fees"}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleWhatsAppClick(tier.name)}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 group ${tier.recommended 
                        ? 'bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] text-white hover:shadow-2xl hover:scale-[1.02]' 
                        : 'border-2 border-[#FF5253] text-[#FF5253] hover:bg-gradient-to-r hover:from-[#FF5253] hover:to-[#FF6B6B] hover:text-white hover:border-transparent'}`}
                    >
                      <FaWhatsapp className={`text-xl ${tier.recommended ? 'group-hover:scale-110' : 'group-hover:text-white'} transition-transform duration-300`} />
                      {tier.name === "Enterprise" ? "Contact for Demo" : "Start Free Trial"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5253] to-[#FF6B6B]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1920&q=20')] opacity-10 mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <span className="font-semibold">🚀 FREE SETUP + 30 DAYS TRIAL</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Start Processing<br />
              <span className="text-white">Payments at Scale?</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join <span className="font-bold text-white">10,000+ businesses</span> worldwide that trust our payment gateway. 
              Setup in <span className="font-bold text-white">under 24 hours</span> with free integration support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppClick(null, true)}
                className="group px-10 py-4 bg-white text-[#FF5253] font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg"
              >
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                <span>Start Gateway Integration</span>
              </motion.button>
              
              <button
                onClick={handleContactClick}
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Contact Integration Team
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "✅", text: "Zero Setup Fees" },
                  { icon: "⚡", text: "24h Integration" },
                  { icon: "🔒", text: "PCI DSS Level 1" },
                  { icon: "🌍", text: "150+ Countries" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 justify-center">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PaymentGateway;