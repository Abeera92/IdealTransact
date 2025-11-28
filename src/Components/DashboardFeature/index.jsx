import React, { useState, useEffect, useRef } from "react";
import {
  FaCheckCircle,
  FaChartLine,
  FaBell,
  FaCoins,
  FaRocket,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import dashboardImage from "../../assets/images/Dashboard.jpg";
import { Link } from "react-router-dom";

const DashboardFeature = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const features = [
    {
      icon: FaChartLine,
      text: "Real-time transaction monitoring and notifications",
      delay: 0.1,
    },
    {
      icon: FaBell,
      text: "Advanced analytics and spending insights",
      delay: 0.2,
    },
    {
      icon: FaCoins,
      text: "Multi-currency account management",
      delay: 0.3,
    },
    {
      icon: FaRocket,
      text: "AI-powered financial recommendations",
      delay: 0.4,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT SIDE CONTENT */}
          <motion.div
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-4"
            >
              <div className="p-2 bg-gradient-to-r from-red-500/20 to-red-600/10 rounded-lg border border-red-500/20">
                <FaRocket className="text-red-500 text-xl" />
              </div>
              <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
                Smart Dashboard
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            >
              Powerful Dashboard,
              <br />
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Simple Interface
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-gray-600 text-xl font-medium max-w-lg leading-relaxed"
            >
              Manage all your transactions, view analytics, and control your
              finances from one beautiful dashboard designed for simplicity and
              power.
            </motion.p>

            {/* Enhanced Checklist */}
            <motion.div variants={containerVariants} className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 hover:shadow-lg transition-all duration-300 group"
                  style={{ transitionDelay: `${feature.delay}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-white text-lg" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium group-hover:text-gray-900 transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Button */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => {
                  document.getElementById("contact-form").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/25"
              >
                Try Dashboard Free
                <FaRocket className="text-lg" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-600 font-semibold rounded-xl flex items-center gap-3 transition-all duration-300">
                <a href="https://www.youtube.com/watch?v=SDbLsExYW4o&pp=ygULdGVjaCB2aWRlb3M%3D">
                  Watch Demo
                </a>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99%</div>
                <div className="text-gray-600 text-sm">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">2.5x</div>
                <div className="text-gray-600 text-sm">Faster Decisions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600 text-sm">Real-time Updates</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-500 rounded-2xl rotate-12 opacity-20 animate-float"></div>
              <div
                className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500 rounded-xl -rotate-12 opacity-20 animate-float"
                style={{ animationDelay: "2s" }}
              ></div>

              {/* Main Image Container */}
              <div className="relative rounded-3xl p-6 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 border border-white/20 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-3xl"></div>
                <img
                  src={dashboardImage}
                  alt="Dashboard"
                  className="relative z-10 w-full max-w-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Notification */}
                <div className="absolute top-4 right-4 z-20 bg-white rounded-xl p-3 shadow-2xl animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">
                      New Alert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default DashboardFeature;
