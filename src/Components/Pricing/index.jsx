"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaStar, FaCrown, FaRocket, FaUsers, FaShieldAlt, FaClock, FaHeadset, FaChartLine, FaInfinity } from "react-icons/fa";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams and startups",
      monthlyPrice: 29,
      annualPrice: 24,
      popular: false,
      featured: false,
      icon: FaRocket,
      buttonVariant: "outline",
      features: [
        { text: "Up to 5 team members", included: true },
        { text: "10GB storage", included: true },
        { text: "Basic analytics", included: true },
        { text: "Email support", included: true },
        { text: "API access", included: false },
        { text: "Advanced security", included: false },
        { text: "Custom domains", included: false },
        { text: "Priority support", included: false },
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      annualPrice: 65,
      popular: true,
      featured: true,
      icon: FaUsers,
      buttonVariant: "primary",
      features: [
        { text: "Up to 20 team members", included: true },
        { text: "100GB storage", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "Full API access", included: true },
        { text: "Advanced security", included: true },
        { text: "Custom domains", included: false },
        { text: "Dedicated account manager", included: false },
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 199,
      annualPrice: 165,
      popular: false,
      featured: false,
      icon: FaCrown,
      buttonVariant: "outline",
      features: [
        { text: "Unlimited team members", included: true },
        { text: "1TB storage", included: true },
        { text: "Advanced analytics + AI insights", included: true },
        { text: "24/7 phone & chat support", included: true },
        { text: "Full API access", included: true },
        { text: "Enterprise-grade security", included: true },
        { text: "Custom domains & branding", included: true },
        { text: "Dedicated account manager", included: true },
      ]
    }
  ];

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
    }
  };

  const FeatureIcon = ({ included }) => (
    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
      included ? "bg-green-500/20 text-green-600" : "bg-gray-200 text-gray-400"
    }`}>
      {included ? <FaCheck className="text-xs" /> : <FaTimes className="text-xs" />}
    </div>
  );

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20 mb-4"
          >
            <FaStar className="text-red-500 text-sm" />
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
              Simple Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Choose Your{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Start free with all features, no credit card required. Upgrade when you're ready to scale.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span className={`text-lg font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? 'transform translate-x-7' : ''
                }`}
              />
              <div
                className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                  isAnnual ? 'bg-red-500' : 'bg-gray-400'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-600 text-xs font-semibold rounded-full">
                Save 20%
              </span>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.featured
                  ? 'bg-white shadow-2xl border-2 border-red-500 transform scale-105'
                  : 'bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-2'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600 text-lg">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-green-600 text-sm font-medium mt-2">
                    Billed annually (${plan.annualPrice * 12})
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                  plan.featured
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {plan.featured ? 'Get Started Today' : 'Start Free Trial'}
              </button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <FeatureIcon included={feature.included} />
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            All plans include
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FaShieldAlt, text: "Bank-level security", color: "text-blue-500" },
              { icon: FaClock, text: "99.9% uptime", color: "text-green-500" },
              { icon: FaHeadset, text: "24/7 support", color: "text-purple-500" },
              { icon: FaChartLine, text: "Basic analytics", color: "text-orange-500" },
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className={`w-12 h-12 ${item.color} bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className="text-xl" />
                </div>
                <p className="text-gray-700 font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers. Start your free trial today with all features included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Start 14-Day Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
            <p className="text-red-200 text-sm mt-4">
              No credit card required • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}