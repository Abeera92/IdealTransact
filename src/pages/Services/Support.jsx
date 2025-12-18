"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaHeadset,
  FaPhoneAlt,
  FaComments,
  FaUsers,
  FaCheck,
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaWhatsapp,
  FaLifeRing,
  FaVideo,
  FaEnvelope
} from "react-icons/fa";

const MerchantSupport = () => {
  const primaryColor = "#FF5555";
  const primaryColorLight = "#FF5555/10";
  const primaryColorDark = "#FF5555/20";

  const features = [
    {
      icon: FaPhoneAlt,
      title: "24/7 Phone Support",
      description: "Round-the-clock phone access to our expert support team, no matter your timezone",
      gradient: `from-[${primaryColor}] to-[#FF7777]`
    },
    {
      icon: FaComments,
      title: "Live Chat & Email",
      description: "Instant messaging and email support with average response time under 2 minutes",
      gradient: `from-[${primaryColor}] to-[#FF7777]`
    },
    {
      icon: FaUsers,
      title: "Dedicated Account Manager",
      description: "Personal relationship manager who knows your business and history",
      gradient: `from-[${primaryColor}] to-[#FF7777]`
    },
    {
      icon: FaChartLine,
      title: "Proactive Monitoring",
      description: "We monitor your systems and alert you before issues affect your business",
      gradient: `from-[${primaryColor}] to-[#FF7777]`
    }
  ];

  const supportChannels = [
    { channel: "Phone Support", response: "< 1 min", icon: FaPhoneAlt, available: "24/7" },
    { channel: "Live Chat", response: "< 2 min", icon: FaComments, available: "24/7" },
    { channel: "Email Support", response: "< 15 min", icon: FaEnvelope, available: "24/7" },
    { channel: "Video Call", response: "Scheduled", icon: FaVideo, available: "Business Hours" },
    { channel: "On-site Support", response: "24-48h", icon: FaUsers, available: "By Arrangement" },
    { channel: "WhatsApp Support", response: "< 5 min", icon: FaWhatsapp, available: "24/7" }
  ];

  const supportAreas = [
    { 
      area: "Technical Issues", 
      icon: "🛠️", 
      examples: ["API integration", "System errors", "Payment failures"]
    },
    { 
      area: "Account Management", 
      icon: "👤", 
      examples: ["Account setup", "Billing questions", "Feature requests"]
    },
    { 
      area: "Fraud & Security", 
      icon: "🛡️", 
      examples: ["Chargeback disputes", "Suspicious activity", "Security concerns"]
    },
    { 
      area: "Business Growth", 
      icon: "📈", 
      examples: ["Analytics review", "Optimization tips", "Best practices"]
    }
  ];

  const supportTiers = [
    {
      name: "Standard Support",
      price: "Free",
      period: "with any plan",
      features: ["Email support", "Business hours", "Standard response", "Knowledge base", "Community forum"],
      response: "< 4 hours",
      recommended: false
    },
    {
      name: "Priority Support",
      price: "$99",
      period: "/month",
      features: ["Phone & chat", "24/7 access", "<15 min response", "Dedicated team", "Advanced training", "WhatsApp support"],
      response: "< 15 min",
      recommended: true
    },
    {
      name: "Enterprise Support",
      price: "Custom",
      period: "",
      features: ["Dedicated manager", "24/7 phone", "<2 min response", "On-call engineers", "Quarterly reviews", "White-glove service"],
      response: "< 2 min",
      recommended: false
    }
  ];

  const stats = [
    { value: "24/7", label: "Support Availability", icon: "🕒" },
    { value: "<2 min", label: "Avg. Response Time", icon: "⚡" },
    { value: "98%", label: "Customer Satisfaction", icon: "⭐" },
    { value: "15+", label: "Languages Supported", icon: "🌍" }
  ];

  const handleWhatsAppClick = (supportType = null, isUrgent = false) => {
    const message = encodeURIComponent(
      `Hello! I need merchant support assistance.${
        supportType ? ` Support type: ${supportType}` : ''
      }${isUrgent ? ' URGENT: Need immediate assistance!' : ''}
      
      Please help me with:
      • Immediate technical support
      • Account or billing questions
      • Payment processing issues
      • General merchant support
      
      Issue description: [Please describe your issue]
      Business name: [Your business name]
      
      Need: ${isUrgent ? 'URGENT assistance' : 'Regular support'}
      Thank you!`
    );
    
    const phoneNumber = "1234567890";
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
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-24 pb-20">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          {/* Support/Customer Service Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80')",
            }}
          ></div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>

          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.15]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, ${primaryColor}33 1.5px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Glow effects */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF5555]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF5555]/10 rounded-full blur-[100px]"></div>
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5555]/20 backdrop-blur-sm rounded-full border border-[#FF5555]/30 mb-6"
              >
                <FaRocket className="text-[#FF5555] text-sm" />
                <span className="text-[#FF5555] font-semibold text-sm uppercase tracking-wider">
                  ⚡ 24/7 Support • 2 Min Response
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                24/7 Merchant
                <span className="block text-[#FF5555]">
                  Support Center
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
              >
                Get dedicated, round-the-clock technical and merchant support to ensure your 
                <span className="text-white font-semibold"> operations never stop</span>. 
                Our experts are here whenever you need us, in 15+ languages.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  type="button"
                  onClick={() => handleWhatsAppClick("Urgent Support", true)}
                  className="group px-8 py-4 bg-gradient-to-r from-[#FF5555] to-[#FF7777] text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 shadow-lg"
                >
                  <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span>Get Urgent Support</span>
                </button>
                <button
                  onClick={handleContactClick}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Contact Support Team</span>
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
                <div className="absolute -inset-1 bg-[#FF5555]/10 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-5">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:border-[#FF5555]/30 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="text-3xl font-bold mb-2 text-white">{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-[#FF5555]/10 rounded-xl border border-[#FF5555]/20">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-[#FF5555] rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Live agents available right now</span>
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
              Always There When{" "}
              <span className="text-[#FF5555]">
                You Need Us Most
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive support designed to keep your business running smoothly, day or night, weekends included.
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
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:border-[#FF5555]/30 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5555] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
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

      {/* Support Channels */}
      <section className="py-20 bg-gray-50" id="channels">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Multiple Support
              <span className="text-[#FF5555]">
                Channels Available
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose how you want to connect with our support team. We're available through every channel.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:border-[#FF5555]/30 hover:shadow-2xl transition-all duration-300 h-full text-center flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FF5555]/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <channel.icon className="text-[#FF5555] text-xl" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{channel.channel}</h3>
                  <div className="space-y-2 mt-auto">
                    <div className="text-xs font-medium text-gray-700">
                      <span>Response:</span> <span className="text-[#FF5555]">{channel.response}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">Available:</span> {channel.available}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button
              onClick={() => handleWhatsAppClick("General Inquiry")}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FF5555] to-[#FF7777] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              Chat Now on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Support Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-8 bg-[#FF5555] rounded-full"></div>
                <span className="text-[#FF5555] font-semibold uppercase tracking-wider text-sm">COMPREHENSIVE SUPPORT</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                All Support Areas
                <span className="text-[#FF5555]">
                  Covered
                </span>
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg">
                From technical troubleshooting to business strategy, we cover all aspects of your payment operations.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {supportAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#FF5555]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">{area.icon}</div>
                      <h4 className="font-bold text-gray-900">{area.area}</h4>
                    </div>
                    <ul className="space-y-2">
                      {area.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-[#FF5555] rounded-full"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
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
                <div className="w-2 h-8 bg-[#FF5555] rounded-full"></div>
                <span className="text-[#FF5555] font-semibold uppercase tracking-wider text-sm">WHY CHOOSE US</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Support Team Benefits</h3>
              <p className="text-gray-300 mb-8">Why thousands of merchants love our support</p>

              <div className="space-y-4">
                {[
                  { benefit: "Expert Technical Team", detail: "Average 5+ years experience" },
                  { benefit: "Multilingual Support", detail: "15+ languages available" },
                  { benefit: "Proactive Monitoring", detail: "We alert you before issues occur" },
                  { benefit: "Training & Resources", detail: "Regular webinars and guides" },
                  { benefit: "Escalation Management", detail: "Direct access to engineering" },
                  { benefit: "Quarterly Reviews", detail: "Performance and growth analysis" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#FF5555]/30 hover:bg-white/15 transition-all duration-300 group"
                  >
                    <FaCheck className="text-[#FF5555] text-sm mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="font-medium">{item.benefit}</div>
                      <div className="text-sm text-gray-300">{item.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Support Plans for
              <span className="text-[#FF5555]">
                Every Business Need
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose the level of support that matches your business needs and transaction volume.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportTiers.map((tier, index) => (
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
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF5555] to-[#FF7777] text-white rounded-full text-sm font-semibold shadow-2xl">
                      ⭐ Most Popular
                    </div>
                  </motion.div>
                )}

                <div className={`bg-white rounded-3xl border-2 ${tier.recommended ? 'border-[#FF5555] shadow-2xl' : 'border-gray-200 shadow-xl'} h-full flex flex-col overflow-hidden`}>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    
                    <div className="mb-8">
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                        <span className="text-gray-600 ml-2 text-lg">{tier.period}</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900 bg-gray-50 px-4 py-2 rounded-xl">
                        {tier.response} response time
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#FF5555] rounded-full"></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleWhatsAppClick(tier.name)}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 group ${tier.recommended 
                        ? 'bg-gradient-to-r from-[#FF5555] to-[#FF7777] text-white hover:shadow-2xl hover:scale-[1.02]' 
                        : 'border-2 border-[#FF5555] text-[#FF5555] hover:bg-gradient-to-r hover:from-[#FF5555] hover:to-[#FF7777] hover:text-white hover:border-transparent'}`}
                    >
                      <FaWhatsapp className={`text-xl ${tier.recommended ? 'group-hover:scale-110' : 'group-hover:text-white'} transition-transform duration-300`} />
                      {tier.name === "Enterprise" ? "Contact for Custom Plan" : "Get This Plan"}
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF5555] to-[#FF7777]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <span className="font-semibold">🚀 URGENT SUPPORT • 2 MIN RESPONSE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Never Face Payment Issues<br />
              <span className="text-white">Alone Again</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join <span className="font-bold text-white">thousands of merchants</span> who rely on our award-winning support team.
              Get expert help in <span className="font-bold text-white">under 2 minutes</span>, available 24/7/365.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppClick("Urgent CTA", true)}
                className="group px-10 py-4 bg-white text-[#FF5555] font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg"
              >
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                <span>Get Urgent Support Now</span>
              </motion.button>
              
              <button
                onClick={handleContactClick}
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Contact Support Team
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "✅", text: "24/7 Availability" },
                  { icon: "⚡", text: "<2 Min Response" },
                  { icon: "👥", text: "Expert Team" },
                  { icon: "🌍", text: "15+ Languages" }
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

export default MerchantSupport;