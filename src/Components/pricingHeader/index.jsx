"use client";

import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function PricingHeader() {
  return (
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
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5252]/10 rounded-full border border-[#FF5252]/20 mb-4"
      >
        <FaRocket className="text-[#FF5252] text-sm" />
        <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
          Simple Pricing
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
      >
        Choose Your{" "}
        <span className="bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
          Perfect Plan
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8"
      >
        Transparent pricing with no hidden fees. Scale as you grow.
      </motion.p>
    </motion.div>
  );
}