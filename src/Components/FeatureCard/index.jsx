"use client";

import { motion } from "framer-motion";
import { FaCreditCard, FaShieldAlt, FaHeadset, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: FaCreditCard,
    title: "Secure Transactions",
    description: "Bank-level encryption for all your transactions"
  },
  {
    icon: FaShieldAlt,
    title: "Fraud Protection",
    description: "Advanced AI-powered fraud detection"
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "Round-the-clock customer support"
  },
  {
    icon: FaChartLine,
    title: "Advanced Analytics",
    description: "Detailed insights into your payment data"
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

export default function FeatureCard() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#FF5252]/30 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-12 h-12 bg-[#FF5252]/10 rounded-xl flex items-center justify-center mb-4">
            <feature.icon className="text-[#FF5252] text-xl" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}