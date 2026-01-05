"use client";

import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaCrown, FaStar } from "react-icons/fa";
import ContactIntegration from "../ContactIntergration";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    monthlyPrice: 29,
    yearlyPrice: 299,
    savings: "Save 14%",
    popular: false,
    features: [
      { text: "Up to 1,000 transactions/month", included: true },
      { text: "Basic Payment Gateway", included: true },
      { text: "Email Support", included: true },
      { text: "Standard Security", included: true },
      { text: "Basic Analytics", included: true },
      { text: "Multi-currency Support", included: false },
      { text: "Priority Support", included: false },
      { text: "Custom Integrations", included: false },
      { text: "Advanced Fraud Detection", included: false },
      { text: "Dedicated Account Manager", included: false }
    ],
    buttonText: "Get Started",
    buttonVariant: "outline"
  },
  {
    name: "Professional",
    description: "For growing businesses with higher volumes",
    monthlyPrice: 79,
    yearlyPrice: 799,
    savings: "Save 16%",
    popular: true,
    features: [
      { text: "Up to 10,000 transactions/month", included: true },
      { text: "Advanced Payment Gateway", included: true },
      { text: "Priority Email & Chat Support", included: true },
      { text: "Enhanced Security", included: true },
      { text: "Advanced Analytics", included: true },
      { text: "Multi-currency Support", included: true },
      { text: "Priority Support", included: true },
      { text: "Custom Integrations", included: true },
      { text: "Advanced Fraud Detection", included: false },
      { text: "Dedicated Account Manager", included: false }
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "primary"
  },
  {
    name: "Enterprise",
    description: "For large businesses with custom needs",
    monthlyPrice: 199,
    yearlyPrice: 1999,
    savings: "Save 17%",
    popular: false,
    features: [
      { text: "Unlimited transactions", included: true },
      { text: "Enterprise Payment Gateway", included: true },
      { text: "24/7 Phone Support", included: true },
      { text: "Enterprise-grade Security", included: true },
      { text: "Custom Analytics Dashboard", included: true },
      { text: "Multi-currency Support", included: true },
      { text: "Priority Support", included: true },
      { text: "Custom Integrations", included: true },
      { text: "Advanced Fraud Detection", included: true },
      { text: "Dedicated Account Manager", included: true }
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline"
  }
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
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function PricingCards({ billingCycle }) {
  const handlePlanSelect = (planName, price) => {
    const message = `Hi, I'm interested in the ${planName} plan ($${price}/${billingCycle === "monthly" ? "month" : "year"})`;
    
    // Store selection for later use
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedPlan", JSON.stringify({
        plan: planName,
        price: price,
        billing: billingCycle
      }));
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
    >
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`relative ${plan.popular ? 'scale-105 z-10' : ''}`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF5252] to-[#FF6B6B] text-white rounded-full text-sm font-semibold shadow-lg">
                <FaCrown className="text-yellow-300" />
                Most Popular
              </div>
            </div>
          )}

          <div className={`bg-white rounded-3xl border-2 ${plan.popular ? 'border-[#FF5252] shadow-2xl' : 'border-gray-200 shadow-lg'} h-full flex flex-col overflow-hidden`}>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                {plan.popular && (
                  <FaStar className="text-yellow-400 text-xl" />
                )}
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    £{billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">
                    /{billingCycle === "monthly" ? 'month' : 'year'}
                  </span>
                </div>
                {billingCycle === "yearly" && (
                  <div className="text-green-600 text-sm font-medium mt-2">
                    {plan.savings}
                  </div>
                )}
              </div>

              <button
                onClick={() => handlePlanSelect(
                  plan.name, 
                  billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
                )}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${plan.buttonVariant === 'primary' 
                  ? 'bg-[#FF5252] text-white hover:bg-[#FF5252]/90' 
                  : 'border-2 border-[#FF5252] text-[#FF5252] hover:bg-[#FF5252] hover:text-white'}`}
              >
                {plan.buttonText}
              </button>
            </div>

            <div className="border-t border-gray-200 p-8 flex-1">
              <h4 className="font-bold text-gray-900 mb-4">What's included:</h4>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <FaCheck className="text-green-500 text-sm mt-1 flex-shrink-0" />
                    ) : (
                      <FaTimes className="text-gray-300 text-sm mt-1 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact Integration Component */}
          {plan.name === "Enterprise" && (
            <ContactIntegration planName={plan.name} />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}