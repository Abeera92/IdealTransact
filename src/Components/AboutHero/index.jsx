"use client";

import { motion } from "framer-motion";
import { FaPlay, FaArrowDown, FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";

export default function AboutHero() {
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

  const stats = [
    { number: "10K+", label: "Happy Customers", icon: FaUsers },
    { number: "99.9%", label: "Uptime", icon: FaRocket },
    { number: "256-bit", label: "Encryption", icon: FaShieldAlt }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-10">
      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1653330963134-329a61aedc68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcmQlMjBtYWNoaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#FF5252]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-[#FF5252]/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 bg-[#FF5252]/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5252]/10 backdrop-blur-sm rounded-full border border-[#FF5252]/20 mb-8"
          >
            <FaRocket className="text-[#FF5252] text-sm" />
            <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
              Trusted Worldwide
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            About{" "}
            <span className="bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
              Ideal Transact
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Revolutionizing payment solutions with cutting-edge technology and 
            unparalleled reliability for the modern business world.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We empower businesses of all sizes with secure, efficient, and innovative 
            payment processing solutions that drive growth and customer satisfaction.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="group px-8 py-4 bg-[#FF5252] text-white font-semibold rounded-xl hover:bg-[#FF5252]/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF5252]/25 flex items-center gap-3">
              Get Started Free
              <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3">
              <FaPlay className="text-sm" />
              Watch Our Story
            </button>
          </motion.div>

          {/* Stats Section - Moved up with more spacing */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-3 mb-5"
          >
            {/* {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-[#FF5252]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FF5252]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-[#FF5252] text-xl" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))} */}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-300">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}