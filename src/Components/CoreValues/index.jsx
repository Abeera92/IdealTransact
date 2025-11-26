"use client";

import { motion } from "framer-motion";
import { Award, Users, Lightbulb, Globe, Star, Target, Heart, Zap } from "lucide-react";

export default function CoreValues() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We commit to delivering outstanding quality in every product and experience, setting new standards in the payment industry.",
      color: "from-[#FF5252] to-[#FF5252]/80",
      stats: "99.9% Uptime",
      features: ["Quality First", "Continuous Improvement", "Best Practices"]
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize customer needs, building trust through exceptional support, reliability, and personalized solutions.",
      color: "from-[#FF5252] to-[#FF5252]/80",
      stats: "10K+ Happy Clients",
      features: ["24/7 Support", "Personalized Service", "Rapid Response"]
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We challenge the ordinary and continuously create smarter, faster, and more secure payment solutions for tomorrow.",
      color: "from-[#FF5252] to-[#FF5252]/80",
      stats: "50+ Innovations",
      features: ["Cutting-edge Tech", "Future-ready", "Creative Solutions"]
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We aim to create meaningful change for businesses across the world, making payments seamless everywhere.",
      color: "from-[#FF5252] to-[#FF5252]/80",
      stats: "50+ Countries",
      features: ["Global Reach", "Local Expertise", "Worldwide Support"]
    }
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
        {/* Section Heading */}
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
            <Star className="text-[#FF5252]" size={16} />
            <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
              Our Foundation
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Our Core{" "}
            <span className="bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
              Values
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            The principles that guide our purpose, culture, and every decision we make to deliver exceptional payment solutions.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group-hover:border-[#FF5252]/30 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/80 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg group-hover:shadow-[#FF5252]/25 transition-all duration-300"
                >
                  <value.icon className="text-white" size={32} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4 group-hover:text-[#FF5252] transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-center mb-6 flex-1">
                  {value.description}
                </p>

                {/* Stats */}
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5252]/10 rounded-full">
                    <Target className="text-[#FF5252]" size={14} />
                    <span className="text-[#FF5252] font-semibold text-sm">
                      {value.stats}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mt-auto pt-4 border-t border-gray-100 group-hover:border-[#FF5252]/20 transition-colors duration-300">
                  {value.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-[#FF5252] rounded-full"></div>
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      
      </div>
    </section>
  );
}