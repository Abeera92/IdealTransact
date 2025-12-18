"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaCheckCircle,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
  FaRocket,
  FaCheck,
  FaWhatsapp,
  FaFileAlt,
  FaHandshake,
  FaHeadset
} from "react-icons/fa";

const MerchantAccountSetup = () => {
  const features = [
    {
      icon: FaCheckCircle,
      title: "Quick Approval",
      description: "Get approved in as little as 24 hours with our streamlined process",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaChartLine,
      title: "Competitive Rates",
      description: "Low transaction fees with transparent pricing, no hidden costs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaUsers,
      title: "Dedicated Manager",
      description: "Personal account manager to help you grow your business",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaShieldAlt,
      title: "No Hidden Fees",
      description: "Clear pricing structure with monthly statements and breakdowns",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const businessTypes = [
    { type: "Retail Store", time: "24-48 hours", icon: "🏪" },
    { type: "Online Store", time: "24 hours", icon: "🛒" },
    { type: "Restaurant", time: "24-72 hours", icon: "🍽️" },
    { type: "Service Business", time: "24-48 hours", icon: "🔧" },
    { type: "SaaS Company", time: "24 hours", icon: "💻" },
    { type: "Consultancy", time: "24-48 hours", icon: "📊" }
  ];

  const requirements = [
    { item: "Business Registration", icon: FaFileAlt },
    { item: "Bank Account Details", icon: FaHandshake },
    { item: "Owner Identification", icon: FaUsers },
    { item: "Processing History", icon: FaChartLine },
    { item: "Website/Store Info", icon: FaHeadset },
    { item: "Tax Information", icon: FaFileAlt }
  ];

  const setupSteps = [
    { step: 1, title: "Application", description: "Fill out our simple online form", time: "15 min", icon: "📝" },
    { step: 2, title: "Documentation", description: "Submit required business documents", time: "1-2 hours", icon: "📄" },
    { step: 3, title: "Approval", description: "Get your account approved", time: "24 hours", icon: "✅" },
    { step: 4, title: "Activation", description: "Start accepting payments", time: "Instant", icon: "⚡" }
  ];

  const pricingOptions = [
    {
      name: "Basic",
      fee: "2.9%",
      perTransaction: "+ $0.30",
      monthly: "No monthly fee",
      features: ["Up to $50K/month", "Email support", "Standard processing", "Basic reporting"],
      recommended: false
    },
    {
      name: "Professional",
      fee: "2.5%",
      perTransaction: "+ $0.25",
      monthly: "$29/month",
      features: ["Up to $200K/month", "Phone support", "Advanced reporting", "Chargeback protection", "Dedicated manager"],
      recommended: true
    },
    {
      name: "Enterprise",
      fee: "Custom",
      perTransaction: "Negotiated",
      monthly: "Custom",
      features: ["Unlimited volume", "24/7 support", "Dedicated account", "Custom solutions", "Priority processing"],
      recommended: false
    }
  ];

  const stats = [
    { value: "24h", label: "Fastest Approval" },
    { value: "98%", label: "Approval Rate" },
    { value: "2.5%", label: "Lowest Rate" },
    { value: "10K+", label: "Merchants Served" }
  ];

  const handleWhatsAppClick = (planName = null, isCTA = false) => {
    // Pre-filled message template for merchant accounts
    const message = encodeURIComponent(
      `Hello! I'm interested in Merchant Account Setup services.${
        planName ? ` I'm looking at the "${planName}" pricing plan.` : ''
      }${isCTA ? ' Ready to apply now!' : ''}
      
      Please help me with:
      • Merchant account application process
      • Required documents checklist
      • Pricing details for my business type
      • Timeline for approval
      
      Business type: [Please specify]
      Estimated monthly volume: [Please specify]
      
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
          {/* Business/Finance Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80')",
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
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#FF5253]/20 to-purple-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-l from-blue-500/10 to-[#FF5253]/15 rounded-full blur-[100px]"></div>
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
                  ⚡ Fast Setup • 24h Approval
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Merchant Account
                <span className="block bg-gradient-to-r from-[#FF5253] via-[#FF6B6B] to-[#FF5253] bg-clip-text text-transparent">
                  Made Simple
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
              >
                Start accepting card payments <span className="text-white font-semibold">in just 24 hours</span> — 
                We handle everything from application to activation with competitive rates and dedicated support.
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
                  <span>Start Application Now</span>
                </button>
                <button
                  onClick={(e) => handleLinkClick(e, '#requirements')}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-3"
                >
                  <span>View Requirements</span>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5253]/20 to-blue-500/20 rounded-3xl blur-xl opacity-50"></div>
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
                        <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-gradient-to-r from-[#FF5253]/10 to-transparent rounded-xl border border-[#FF5253]/20">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Approvals processed daily</span>
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
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] bg-clip-text text-transparent">
                Merchant Accounts
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We make payment processing simple, affordable, and reliable for businesses of all sizes.
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

      {/* Setup Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple 4-Step
              <span className="block bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] bg-clip-text text-transparent">
                Setup Process
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get your merchant account up and running quickly with our streamlined process.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5253] via-[#FF5253]/50 to-[#FF5253] transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {setupSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:border-[#FF5253]/30 hover:shadow-2xl transition-all duration-300 h-full text-center relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] text-white rounded-full text-xl font-bold shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="text-3xl mb-4 mt-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-[#FF5253] bg-[#FF5253]/10 px-3 py-2 rounded-full">
                      <FaClock className="text-xs" />
                      {step.time}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Business Types */}
      <section className="py-20" id="requirements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-[#FF5253] to-[#FF6B6B] rounded-full"></div>
                <span className="text-[#FF5253] font-semibold uppercase tracking-wider text-sm">SUPPORTED BUSINESSES</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Business Types We
                <span className="block bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] bg-clip-text text-transparent">
                  Support
                </span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                From local retailers to global e-commerce stores, we work with all business types.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {businessTypes.map((business, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 border border-gray-200 hover:border-[#FF5253]/30 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{business.icon}</div>
                        <span className="font-semibold text-gray-900">{business.type}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {business.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
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
                <span className="text-[#FF5253] font-semibold uppercase tracking-wider text-sm">REQUIRED DOCUMENTS</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Application Checklist</h3>
              <p className="text-gray-300 mb-8">Everything you need for a smooth application process</p>

              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#FF5253]/30 hover:bg-white/15 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#FF5253]/20 to-[#FF6B6B]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <requirement.icon className="text-[#FF5253] text-lg" />
                    </div>
                    <span className="flex-1 font-medium">{requirement.item}</span>
                    <FaCheck className="text-[#FF5253] text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent
              <span className="block bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose the perfect plan for your business volume and growth goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${option.recommended ? 'lg:-translate-y-4' : ''}`}
              >
                {option.recommended && (
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

                <div className={`bg-white rounded-3xl border-2 ${option.recommended ? 'border-[#FF5253] shadow-2xl' : 'border-gray-200 shadow-xl'} h-full flex flex-col overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-50"></div>
                  <div className="relative p-8 z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
                    
                    <div className="mb-8 space-y-4">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">{option.fee}</span>
                        <span className="text-gray-600 ml-2 text-lg">per transaction</span>
                      </div>
                      <div className="text-xl font-medium text-gray-700">{option.perTransaction}</div>
                      <div className="text-lg text-gray-600 bg-gray-50 px-4 py-2 rounded-xl">{option.monthly}</div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleWhatsAppClick(option.name)}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 group ${option.recommended 
                        ? 'bg-gradient-to-r from-[#FF5253] to-[#FF6B6B] text-white hover:shadow-2xl hover:scale-[1.02]' 
                        : 'border-2 border-[#FF5253] text-[#FF5253] hover:bg-gradient-to-r hover:from-[#FF5253] hover:to-[#FF6B6B] hover:text-white hover:border-transparent'}`}
                    >
                      <FaWhatsapp className={`text-xl ${option.recommended ? 'group-hover:scale-110' : 'group-hover:text-white'} transition-transform duration-300`} />
                      {option.name === "Enterprise" ? "Contact for Quote" : "Get Started"}
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=20')] opacity-10 mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <span className="font-semibold">🚀 LIMITED TIME OFFER</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Start Accepting<br />
              <span className="text-white">Card Payments Today?</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join <span className="font-bold text-white">10,000+ merchants</span> who trust us with their payment processing. 
              Get approved in as little as <span className="font-bold text-white">24 hours</span> with no setup fees.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppClick(null, true)}
                className="group px-10 py-4 bg-white text-[#FF5253] font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg"
              >
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                <span>Apply Now via WhatsApp</span>
              </motion.button>
              
              <button
                onClick={(e) => handleLinkClick(e, '#pricing')}
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                View Pricing Plans
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "✅", text: "No Setup Fees" },
                  { icon: "⚡", text: "24h Approval" },
                  { icon: "💰", text: "Lowest Rates" },
                  { icon: "🛡️", text: "Secure & PCI Compliant" }
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

export default MerchantAccountSetup;