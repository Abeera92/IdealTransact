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
  FaRocket,
  FaArrowRight,
  FaShieldAlt,
  FaGlobe,
  FaHeadset,
  FaCogs
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
        
        {/* LEFT FORM CARD - UNCHANGED */}
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

        {/* RIGHT SECTION */}
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
              Why Choose{" "}
              <span className="text-[#FF5252]">
                Ideal Transact
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-gray-300 text-lg max-w-md leading-relaxed"
            >
              Experience the next generation of payment solutions with cutting-edge technology and unparalleled security.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#FF5252]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-[#FF5252] text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Bank-Level Security</h3>
                  <p className="text-gray-300 text-sm">Enterprise-grade encryption and fraud protection</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#FF5252]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaGlobe className="text-[#FF5252] text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Global Reach</h3>
                  <p className="text-gray-300 text-sm">Accept payments from 190+ countries worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#FF5252]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaCogs className="text-[#FF5252] text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Easy Integration</h3>
                  <p className="text-gray-300 text-sm">Simple APIs and comprehensive documentation</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#FF5252]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaHeadset className="text-[#FF5252] text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300 text-sm">Dedicated customer success team always available</p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF5252]">99.9%</div>
                <div className="text-gray-300 text-sm mt-1">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF5252]">2M+</div>
                <div className="text-gray-300 text-sm mt-1">Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF5252]">50+</div>
                <div className="text-gray-300 text-sm mt-1">Countries</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;