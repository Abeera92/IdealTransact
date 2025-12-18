"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaMedal,
  FaGem,
  FaUserShield,
  FaHandshake
} from "react-icons/fa";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const values = [
    {
      icon: FaMedal,
      title: "Excellence",
      description: "Premium service standards"
    },
    {
      icon: FaGem,
      title: "Integrity",
      description: "Transparent & honest dealings"
    },
    {
      icon: FaUserShield,
      title: "Security",
      description: "Your trust is our priority"
    },
    {
      icon: FaHandshake,
      title: "Partnership",
      description: "Growing together"
    }
  ];

  return (
    <section
      ref={ref}
      className="w-full py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#FF5253]/10"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#FF5253]/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#FF5253]/5 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-[#FF5253] mx-auto mb-3"></div>
            <span className="text-sm font-semibold text-gray-500 tracking-widest uppercase">
              WHO WE ARE
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">More Than Just</span>
            <br />
            <span className="text-[#FF5253]">A Payment Processor</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're architects of financial confidence, building bridges between ambition 
            and opportunity through secure, innovative payment solutions.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#FF5253]/20 hover:shadow-lg transition-all duration-300 h-full text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 group-hover:border-[#FF5253]/30 group-hover:bg-gradient-to-br group-hover:from-[#FF5253]/5 group-hover:to-white transition-all duration-300">
                  <value.icon className="text-2xl text-gray-600 group-hover:text-[#FF5253] transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{value.title}</h3>
                <p className="text-sm text-gray-500">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-5xl text-[#FF5253]/20">
              "
            </div>
            <p className="text-xl text-gray-700 italic mb-6 px-8 relative">
              We don't just process payments—we empower dreams, secure ambitions, 
              and build lasting financial partnerships.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-8 bg-[#FF5253]"></div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Ideal Transact Team</div>
                <div className="text-sm text-gray-500">Since 2015</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;