"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaComments, 
  FaCog, 
  FaCheckCircle, 
  FaRocket,
  FaArrowRight,
  FaCalendarAlt,
  FaUserCheck,
  FaTools,
  FaHeadset,
  FaStar,
  FaPlay
} from "react-icons/fa";

export default function ProcessSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for the animated elements
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightCardVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const processSteps = [
    {
      step: "01",
      icon: FaComments,
      title: "Consultation & Planning",
      description: "We analyze your business needs and recommend the perfect payment solution tailored to your specific requirements.",
      duration: "1-2 Days",
      features: ["Business Analysis", "Solution Recommendation", "Custom Quote"],
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      stats: "30-min Free Consultation"
    },
    {
      step: "02",
      icon: FaUserCheck,
      title: "Account Setup & Approval",
      description: "Quick merchant account setup with fast approval process and minimal documentation required.",
      duration: "24 Hours",
      features: ["Documentation Review", "Account Creation", "Compliance Check"],
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      stats: "95% Approval Rate"
    },
    {
      step: "03",
      icon: FaTools,
      title: "Integration & Configuration",
      description: "Seamless integration with your existing systems, websites, and business platforms.",
      duration: "2-3 Days",
      features: ["API Integration", "System Testing", "Custom Configuration"],
      color: "from-purple-500 to-violet-500",
      gradient: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
      stats: "50+ Platform Integrations"
    },
    {
      step: "04",
      icon: FaCheckCircle,
      title: "Testing & Training",
      description: "Thorough testing and comprehensive team training to ensure smooth operation from day one.",
      duration: "1-2 Days",
      features: ["Test Transactions", "Team Training", "Quality Assurance"],
      color: "from-orange-500 to-amber-500",
      gradient: "bg-gradient-to-br from-orange-500/20 to-amber-500/20",
      stats: "100% Success Rate"
    },
    {
      step: "05",
      icon: FaRocket,
      title: "Go Live & Launch",
      description: "Launch with confidence as we monitor your first transactions and ensure everything runs perfectly.",
      duration: "Immediate",
      features: ["Live Monitoring", "Performance Check", "Success Verification"],
      color: "from-[#FF5252] to-[#FF5252]/80",
      gradient: "bg-gradient-to-br from-[#FF5252]/20 to-[#FF5252]/40",
      stats: "Real-time Monitoring"
    },
    {
      step: "06",
      icon: FaHeadset,
      title: "Ongoing Support",
      description: "24/7 expert support, regular updates, and continuous optimization for your payment systems.",
      duration: "Continuous",
      features: ["24/7 Support", "System Updates", "Performance Analytics"],
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      stats: "2-min Average Response"
    }
  ];

  return (
    <section ref={containerRef} className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-80 h-80 bg-[#FF5252]/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF5252]/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            y: [0, -20, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF5252]/3 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#FF5252]/20 shadow-lg mb-6"
          >
            <div className="flex items-center gap-2">
              <FaStar className="text-[#FF5252] text-lg" />
              <FaStar className="text-[#FF5252] text-xl" />
              <FaStar className="text-[#FF5252] text-lg" />
            </div>
            <span className="text-[#FF5252] font-bold text-sm uppercase tracking-wider">
              Streamlined Process
            </span>
            <div className="flex items-center gap-2">
              <FaStar className="text-[#FF5252] text-lg" />
              <FaStar className="text-[#FF5252] text-xl" />
              <FaStar className="text-[#FF5252] text-lg" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#FF5252] via-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
              Journey
            </span>{" "}
            Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Experience our seamless onboarding process designed to get your payment 
            system running in record time with zero complications.
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline Container */}
        <div className="relative">
          {/* Animated Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden lg:block">
            <div className="w-full h-full bg-gray-200/50 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleY: pathLength }}
                className="w-full h-full bg-gradient-to-b from-[#FF5252] via-[#FF5252] to-[#FF5252]/80 rounded-full origin-top"
              />
            </div>
          </div>

          {/* Floating Animated Dots */}
          <motion.div
            style={{ scale: scaleProgress }}
            className="absolute left-1/2 top-1/4 w-4 h-4 bg-[#FF5252] rounded-full transform -translate-x-1/2 shadow-lg shadow-[#FF5252]/30 hidden lg:block"
          />
          <motion.div
            style={{ scale: scaleProgress }}
            className="absolute left-1/2 top-1/2 w-4 h-4 bg-[#FF5252] rounded-full transform -translate-x-1/2 shadow-lg shadow-[#FF5252]/30 hidden lg:block"
          />
          <motion.div
            style={{ scale: scaleProgress }}
            className="absolute left-1/2 top-3/4 w-4 h-4 bg-[#FF5252] rounded-full transform -translate-x-1/2 shadow-lg shadow-[#FF5252]/30 hidden lg:block"
          />

          {/* Process Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-24 lg:space-y-32 relative"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? cardVariants : rightCardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`group relative flex flex-col lg:flex-row ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                } items-center gap-8 lg:gap-16`}
              >
                {/* Timeline Dot with Animation */}
                <div className="absolute left-1/2 top-8 lg:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
                  <motion.div
                    variants={iconVariants}
                    className="relative"
                  >
                    <div className="w-6 h-6 bg-[#FF5252] rounded-full border-4 border-white shadow-2xl shadow-[#FF5252]/40" />
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 w-6 h-6 bg-[#FF5252] rounded-full"
                    />
                  </motion.div>
                </div>

                {/* Step Number for Mobile */}
                <div className="lg:hidden flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/80 text-white rounded-2xl font-bold text-xl shadow-lg">
                  {step.step}
                </div>

                {/* Enhanced Content Card */}
                <div className={`relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-200/80 group-hover:border-[#FF5252]/40 group-hover:shadow-3xl transition-all duration-500 w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:ml-16' : 'lg:ml-auto lg:mr-16'
                } ${step.gradient} backdrop-blur-sm`}>
                  {/* Animated Corner Accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FF5252]/30 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FF5252]/30 rounded-br-3xl" />
                  
                  {/* Step Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500`}
                    >
                      <step.icon className="text-white text-3xl" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 font-semibold mb-2 flex items-center gap-2">
                        <FaPlay className="text-[#FF5252] text-xs" />
                        STEP {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#FF5252] transition-colors duration-500 leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {step.description}
                  </p>

                  {/* Stats & Duration */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5252]/10 rounded-full border border-[#FF5252]/20">
                      <FaCalendarAlt className="text-[#FF5252] text-sm" />
                      <span className="text-[#FF5252] font-semibold text-sm">
                        {step.duration}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                      <span className="text-gray-700 font-semibold text-sm">
                        {step.stats}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        className="flex items-center gap-3 text-base"
                      >
                        <div className="w-6 h-6 bg-[#FF5252]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaCheckCircle className="text-[#FF5252] text-xs" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

       
      </div>
    </section>
  );
}