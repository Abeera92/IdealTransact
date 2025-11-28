"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaGlobe, FaAward, FaHeart, FaChartLine } from "react-icons/fa";

export default function OurStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const storySections = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a vision to simplify digital payments, our journey began with a single goal: to empower businesses of all sizes to thrive in the digital economy. We started as a small team of passionate innovators determined to change the payment landscape.",
      icon: FaRocket,
      stats: "3 Team Members"
    },
    {
      year: "2020",
      title: "Rapid Growth",
      description: "Through relentless innovation and a customer-first mindset, we expanded our services globally. Our dedication to security and user experience helped us become a trusted partner for thousands of merchants and enterprises worldwide.",
      icon: FaChartLine,
      stats: "10K+ Customers"
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Today, we stand as an industry leader in payment solutions, continuously pushing boundaries with cutting-edge technology. Our commitment to excellence has earned us the trust of businesses across 50+ countries.",
      icon: FaAward,
      stats: "50+ Countries"
    }
  ];

  const values = [
    {
      icon: FaHeart,
      title: "Customer First",
      description: "Your success is our success. We build solutions that put your needs at the forefront."
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "We believe in the power of partnership and work closely with our clients to achieve mutual goals."
    },
    {
      icon: FaGlobe,
      title: "Global Impact",
      description: "Making digital payments accessible and secure for businesses worldwide is our mission."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br  from-[#ff6666a4]/20 to-[#FBFCFD] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#FF5252]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#FF5252]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
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
            <FaHeart className="text-[#FF5252] text-sm" />
            <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
              Story
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            From humble beginnings to industry leadership - discover the journey that shaped 
            Ideal Transact into the trusted payment partner it is today.
          </motion.p>
        </motion.div>

        {/* Timeline Story */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {storySections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Connector */}
              {index < storySections.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gray-300 group-hover:bg-[#FF5252] transition-colors duration-300 z-0"></div>
              )}

              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#FF5252]/30 transition-all duration-300 group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                {/* Year Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5252]/10 rounded-full border border-[#FF5252]/20 mb-6 self-start">
                  <span className="text-[#FF5252] font-bold text-sm">
                    {section.year}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <section.icon className="text-white text-2xl" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {section.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[#FF5252] font-semibold text-sm">
                    {section.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}