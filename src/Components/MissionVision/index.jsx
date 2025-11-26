"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket, Globe, Users, TrendingUp } from "lucide-react";

export default function MissionVision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const missionStats = [
    { icon: Users, number: "10K+", label: "Businesses Empowered" },
    { icon: TrendingUp, number: "99.9%", label: "System Uptime" },
    { icon: Globe, number: "50+", label: "Countries Served" }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF5252]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FF5252]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5252]/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5252]/10 rounded-full border border-[#FF5252]/20 mb-4"
          >
            <Rocket className="text-[#FF5252]" size={16} />
            <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
              Our Purpose
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Mission &{" "}
            <span className="bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
              Vision
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Driving innovation and transformation through purpose-driven solutions 
            that empower businesses worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group relative"
          >
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            
            <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group-hover:border-[#FF5252]/30 group-hover:shadow-2xl transition-all duration-300 h-full">
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/80 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#FF5252]/25 transition-all duration-300"
                >
                  <Target className="text-white" size={32} />
                </motion.div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-[#FF5252] transition-colors duration-300">
                    Our Mission
                  </h2>
                  <div className="w-12 h-1 bg-[#FF5252] rounded-full mt-2"></div>
                </div>
              </div>

              {/* Mission Content */}
              <div className="space-y-4">
                <motion.p
                  variants={itemVariants}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  Our mission is to empower businesses with powerful digital and
                  payment solutions that simplify operations, increase efficiency,
                  and inspire innovation across every industry.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  To simplify payment processing and empower merchants through
                  secure, efficient, and accessible financial solutions that drive
                  growth and success.
                </motion.p>
              </div>

              {/* Mission Highlights */}
              <motion.div
                variants={itemVariants}
                className="mt-6 pt-6 border-t border-gray-100 group-hover:border-[#FF5252]/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <div className="w-2 h-2 bg-[#FF5252] rounded-full"></div>
                  <span className="font-semibold">Key Focus Areas</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["Digital Transformation", "Payment Innovation", "Business Growth", "Global Accessibility"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#FF5252] rounded-full"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="group relative"
          >
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            
            <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group-hover:border-[#FF5252]/30 group-hover:shadow-2xl transition-all duration-300 h-full">
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/80 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#FF5252]/25 transition-all duration-300"
                >
                  <Eye className="text-white" size={32} />
                </motion.div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 group-hover:text-[#FF5252] transition-colors duration-300">
                    Our Vision
                  </h2>
                  <div className="w-12 h-1 bg-[#FF5252] rounded-full mt-2"></div>
                </div>
              </div>

              {/* Vision Content */}
              <div className="space-y-4">
                <motion.p
                  variants={itemVariants}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  Our vision is to become a global leader in digital transformation,
                  enabling seamless financial connectivity and shaping the future
                  of smart, scalable technology.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  To redefine how businesses connect, transact, and grow in the
                  digital economy — through innovation, trust, and cutting-edge
                  solutions.
                </motion.p>
              </div>

              {/* Vision Highlights */}
              <motion.div
                variants={itemVariants}
                className="mt-6 pt-6 border-t border-gray-100 group-hover:border-[#FF5252]/20 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <div className="w-2 h-2 bg-[#FF5252] rounded-full"></div>
                  <span className="font-semibold">Strategic Goals</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["Global Leadership", "Technology Innovation", "Market Expansion", "Customer Success"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#FF5252] rounded-full"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center group hover:border-[#FF5252]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FF5252]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-[#FF5252]" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}