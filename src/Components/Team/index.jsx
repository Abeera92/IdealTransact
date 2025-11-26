"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaAward, FaRocket, FaUsers } from "react-icons/fa";

export default function Team() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const teamMembers = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Harris",
      role: "Chief Executive Officer",
      experience: "15+ years of experience in tech leadership and business strategy",
      stats: "Led 3 successful startups",
      social: { linkedin: "#", twitter: "#" },
      achievements: ["Tech Innovator Award 2023", "Forbes 30 Under 30"]
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sophia Bennett",
      role: "Chief Operating Officer",
      experience: "10+ years optimizing business operations and scaling companies",
      stats: "Scaled 5 companies to 100+ employees",
      social: { linkedin: "#", twitter: "#" },
      achievements: ["Operations Excellence Award", "Women in Tech Leadership"]
    },
    {
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      name: "David Thompson",
      role: "Chief Technology Officer",
      experience: "12+ years leading engineering teams and driving technical innovation",
      stats: "Built 50+ scalable products",
      social: { linkedin: "#", twitter: "#" },
      achievements: ["Best CTO Award 2023", "Open Source Contributor"]
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF5252]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FF5252]/3 rounded-full blur-3xl"></div>
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
            <FaUsers className="text-[#FF5252] text-sm" />
            <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
              Leadership Team
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
              Leadership Team
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Our leadership brings experience, vision, and passion to drive innovation
            and meaningful growth for our customers and partners.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group-hover:border-[#FF5252]/30 group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-6"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-[#FF5252] transition-colors duration-300"
                  />
                  
                  {/* Online Status */}
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  
                  {/* Social Links */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-[#FF5252] text-white rounded-full flex items-center justify-center hover:bg-[#FF5252]/90 transition-colors duration-300"
                    >
                      <FaLinkedin className="text-xs" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={member.social.twitter}
                      className="w-8 h-8 bg-[#FF5252] text-white rounded-full flex items-center justify-center hover:bg-[#FF5252]/90 transition-colors duration-300"
                    >
                      <FaTwitter className="text-xs" />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#FF5252] transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#FF5252]/10 rounded-full border border-[#FF5252]/20 mb-4">
                  <span className="text-[#FF5252] font-semibold text-sm">
                    {member.role}
                  </span>
                </div>

                {/* Experience */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {member.experience}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-2 mb-4">
                  <FaRocket className="text-[#FF5252] text-sm" />
                  <span className="text-gray-700 font-semibold text-sm">
                    {member.stats}
                  </span>
                </div>

                {/* Achievements */}
                <div className="w-full mt-auto pt-4 border-t border-gray-100 group-hover:border-[#FF5252]/20 transition-colors duration-300">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full group-hover:bg-[#FF5252]/10 transition-colors duration-300"
                      >
                        <FaAward className="text-[#FF5252] text-xs" />
                        <span className="text-gray-600 text-xs font-medium">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}