"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaCheck, 
  FaTimes, 
  FaRocket, 
  FaUsers, 
  FaCrown,
  FaArrowRight,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const navigate = useNavigate();

  const plans = [
    {
      id: "starter",
      name: "Starter",
      monthlyPrice: 29,
      annualPrice: 24,
      popular: false,
      icon: FaRocket,
      features: [
        { text: "Up to 5 team members", included: true },
        { text: "10GB storage", included: true },
        { text: "Basic analytics", included: true },
        { text: "Email support", included: true },
        { text: "API access", included: false },
        { text: "Advanced security", included: false },
      ],
      color: "from-[#FF5252]/80 to-[#FF5252]/60"
    },
    {
      id: "professional",
      name: "Professional",
      monthlyPrice: 79,
      annualPrice: 65,
      popular: true,
      icon: FaUsers,
      features: [
        { text: "Up to 20 team members", included: true },
        { text: "100GB storage", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority support", included: true },
        { text: "Full API access", included: true },
        { text: "Advanced security", included: true },
      ],
      color: "from-[#FF5252] to-[#FF5252]/80"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      monthlyPrice: 199,
      annualPrice: 165,
      popular: false,
      icon: FaCrown,
      features: [
        { text: "Unlimited team members", included: true },
        { text: "1TB storage", included: true },
        { text: "Advanced analytics + AI", included: true },
        { text: "24/7 support", included: true },
        { text: "Full API access", included: true },
        { text: "Enterprise security", included: true },
      ],
      color: "from-[#FF5252]/90 to-[#FF5252]/70"
    }
  ];

  // WhatsApp booking function
  const handleWhatsAppBooking = (planName, price) => {
    const phoneNumber = "+1234567890"; // Replace with your WhatsApp number
    const message = `Hello! I'm interested in the ${planName} plan at $${price}/month (${isAnnual ? 'annual billing' : 'monthly billing'}). Please provide me with more details.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
  };

  // Email booking function
  const handleEmailBooking = (planName, price) => {
    const email = "sales@idealtransact.com"; // Replace with your sales email
    const subject = `Inquiry about ${planName} Plan`;
    const body = `Hello Ideal Transact Team,\n\nI am interested in the ${planName} plan priced at $${price}/month (${isAnnual ? 'annual billing' : 'monthly billing'}).\n\nPlease send me more information about this plan.\n\nBest regards,`;
    
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoURL;
  };

  // Navigate to pricing page
  const handleViewAllPlans = () => {
    navigate('/pricing'); // Navigate to pricing page
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple,{" "}
            <span className="text-[#FF5252]">Transparent Pricing</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 bg-gray-300 rounded-full relative focus:outline-none"
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${
              isAnnual ? 'left-7 bg-[#FF5252]' : 'left-1'
            }`} />
            <div className={`absolute inset-0 rounded-full transition-colors duration-300 ${
              isAnnual ? 'bg-[#FF5252]/30' : 'bg-gray-400'
            }`} />
          </button>
          <div className="flex items-center gap-2">
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            <span className="px-2 py-1 bg-[#FF5252]/10 text-[#FF5252] text-xs font-medium rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            
            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-6 border-2 ${
                  plan.popular ? 'border-[#FF5252] shadow-xl' : 'border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#FF5252] text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 ${plan.color} bg-gradient-to-br rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <plan.icon className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      ${price}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-gray-500">
                      ${plan.annualPrice * 12} billed yearly
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.included ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                      }`}>
                        {feature.included ? <FaCheck className="text-xs" /> : <FaTimes className="text-xs" />}
                      </div>
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {/* WhatsApp Button */}
                  <button
                    onClick={() => handleWhatsAppBooking(plan.name, price)}
                    className="w-full py-3 bg-gradient-to-r bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Get Started via WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Plans Button */}
        <div className="text-center">
          <motion.button
            onClick={handleViewAllPlans}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#FF5252]/25 transition-all duration-300"
          >
            <span className="text-lg">View All Pricing Plans</span>
            <FaArrowRight className="text-lg" />
          </motion.button>
          <p className="text-gray-600 mt-4 text-sm">
            Compare all features and pricing options in detail
          </p>
        </div>
      </div>
    </section>
  );
}