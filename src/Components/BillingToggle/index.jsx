"use client";

import { motion } from "framer-motion";
import { FaSync } from "react-icons/fa";

export default function BillingToggle({ billingCycle, setBillingCycle }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200 shadow-sm"
      >
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${billingCycle === "monthly" 
            ? "bg-[#FF5252] text-white" 
            : "text-gray-600 hover:text-gray-900"}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("yearly")}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${billingCycle === "yearly" 
            ? "bg-[#FF5252] text-white" 
            : "text-gray-600 hover:text-gray-900"}`}
        >
          Yearly
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-green-600 text-sm font-medium mt-4"
      >
        <FaSync className="inline mr-2 animate-spin-slow" />
        Save up to 17% with yearly billing
      </motion.p>
    </>
  );
}