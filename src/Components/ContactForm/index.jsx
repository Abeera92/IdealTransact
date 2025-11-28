"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaPaperPlane, 
  FaCheckCircle, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding, 
  FaIndustry,
  FaFileAlt,
  FaShieldAlt,
  FaRocket,
  FaArrowRight,
  FaCreditCard,
  FaCalendarAlt,
  FaEye,
  FaGem
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    description: "",
    terms: false,
    updates: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        description: "",
        terms: false,
        updates: false
      });
    }, 3000);
  };

  const industries = [
    "Select industry",
    "Finance & Banking",
    "E-commerce & Retail",
    "Healthcare",
    "Technology",
    "Education",
    "Manufacturing",
    "Real Estate",
    "Transportation",
    "Entertainment",
    "Other"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contactForm" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements with #FF5252 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF5252]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FF5252]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5252]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        
        {/* LEFT FORM CARD */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 lg:p-12 backdrop-blur-sm"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <FaCheckCircle className="text-[#FF5252] text-6xl mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                Your application has been received. Our team will contact you within 24 hours to discuss next steps.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-[#FF5252] hover:text-[#FF5252] transition-all duration-300"
              >
                Submit Another
              </motion.button>
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="text-center mb-8"
              >
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5252]/10 rounded-full border border-[#FF5252]/20 mb-4"
                >
                  <FaRocket className="text-[#FF5252] text-sm" />
                  <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
                    Get Started
                  </span>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                >
                  Start Your{" "}
                  <span className="text-[#FF5252]">
                    Journey
                  </span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-gray-600 text-lg"
                >
                  Welcome to Finera. Let's transform your payment experience together!
                </motion.p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="space-y-6"
                >
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div variants={itemVariants} className="relative">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="text-[#FF5252] text-xs" />
                        First Name *
                      </div>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5252] focus:border-[#FF5252] transition-all duration-300"
                        placeholder="Enter first name"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FaUser className="text-[#FF5252] text-xs" />
                        Last Name *
                      </div>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5252] focus:border-[#FF5252] transition-all duration-300"
                        placeholder="Enter last name"
                      />
                    </motion.div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div variants={itemVariants} className="relative">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FaEnvelope className="text-[#FF5252] text-xs" />
                        Email *
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5252] focus:border-[#FF5252] transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <FaPhone className="text-[#FF5252] text-xs" />
                        Phone
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5252] focus:border-[#FF5252] transition-all duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </motion.div>
                  </div>

                  {/* Company & Industry */}
                  <motion.div variants={itemVariants} className="relative">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <FaBuilding className="text-[#FF5252] text-xs" />
                      Company
                    </div>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5252] focus:border-[#FF5252] transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <FaIndustry className="text-[#FF5252] text-xs" />
                      Industry
                    </div>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5252] focus:border-[#FF5252] transition-all duration-300"
                    >
                      {industries.map((industry, index) => (
                        <option key={index} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <FaFileAlt className="text-[#FF5252] text-xs" />
                      Project Description *
                    </div>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF5252] focus:border-[#FF5252] transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </motion.div>

                  {/* Checkboxes */}
                  <motion.div variants={itemVariants} className="space-y-4">
                    <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 text-[#FF5252] border-gray-300 rounded focus:ring-[#FF5252]"
                      />
                      <span className="flex-1">
                        I agree to the{" "}
                        <button type="button" className="text-[#FF5252] hover:text-[#FF5252]/80 font-medium">
                          Terms & Conditions
                        </button>{" "}
                        *
                      </span>
                    </label>

                    <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="updates"
                        checked={formData.updates}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-[#FF5252] border-gray-300 rounded focus:ring-[#FF5252]"
                      />
                      <span className="flex-1">
                        Subscribe to product updates and industry insights
                      </span>
                    </label>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-[#FF5252] text-white font-semibold rounded-xl hover:bg-[#FF5252]/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF5252]/25 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-none flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm" />
                        Get Started Now
                        <FaArrowRight className="text-sm" />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </>
          )}
        </motion.div>

        {/* RIGHT SIDE HERO */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          className="rounded-3xl overflow-hidden relative p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-900 via-[#1a0f0f] to-[#2a0f0f] text-white min-h-[600px]"
        >
          {/* Floating Elements with #FF5252 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF5252]/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#FF5252]/15 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#FF5252]/10 rounded-full blur-lg"></div>
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-lg"
            >
              Enter the Future of{" "}
              <span className="text-[#FF5252]">
                Payments
              </span>
              , Today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-gray-300 text-lg max-w-md leading-relaxed"
            >
              Modern, smart & reliable payment solutions crafted to accelerate your business growth and revenue.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 space-y-4"
            >
              {[
                "Real-time payment processing",
                "Advanced fraud protection",
                "Multi-currency support",
                "24/7 premium support",
                "Seamless API integration"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#FF5252] text-sm flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Card Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute right-6 bottom-6 bg-white text-gray-900 rounded-2xl p-6 w-80 shadow-2xl border border-gray-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-gray-900">Finera</h3>
              <div className="w-8 h-8 bg-[#FF5252] rounded-lg flex items-center justify-center">
                <FaGem className="text-white text-sm" />
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-3xl font-bold text-gray-900">$265,320.81</p>
              <p className="text-gray-500 text-sm">Total Balance (USD)</p>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Primary Card</span>
                  <FaCreditCard className="text-[#FF5252] text-xs" />
                </div>
                <p className="font-semibold text-lg mt-1">$65,320.81</p>
                <p className="text-gray-500 text-sm">•••• 6917</p>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Next Payout</span>
                  <FaCalendarAlt className="text-[#FF5252] text-xs" />
                </div>
                <p className="font-semibold mt-1">May 12, 2025</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 py-3 bg-[#FF5252] text-white font-semibold rounded-xl hover:bg-[#FF5252]/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaEye className="text-sm" />
                View Dashboard
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;