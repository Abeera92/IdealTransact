import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaPlay, FaArrowRight, FaArrowLeft, FaRocket, FaChartLine, FaShieldAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Import your images
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const slides = [
    {
      title: "Your Money, Your Control",
      subtitle: "Manage all your finances from one powerful, intuitive dashboard designed for modern businesses",
      image: slide1,
      badge: "Secure",
      icon: FaShieldAlt,
      gradient: "from-blue-500/20 to-purple-600/20",
    },
    {
      title: "Smarter Payments. Faster Growth.",
      subtitle: "Accept, track, and manage payments in real time with enterprise-grade security and analytics",
      image: slide2,
      badge: "Fast",
      icon: FaRocket,
      gradient: "from-green-500/20 to-blue-600/20",
    },
    {
      title: "Empowering Your Financial Freedom",
      subtitle: "Secure, modern solutions built for businesses of every size with 24/7 expert support",
      image: slide3,
      badge: "Smart",
      icon: FaChartLine,
      gradient: "from-red-500/20 to-orange-600/20",
    },
  ];

  // Animation variants
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={isAutoplay ? { delay: 5000, disableOnInteraction: false } : false}
        loop={true}
        speed={1000}
        className="h-full w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-screen relative flex items-center justify-center">
              {/* Background Image with Gradient Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} mix-blend-multiply`}></div>
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl"
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
                  className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full blur-xl"
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

              {/* Main Content - Centered */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center w-full"
                >
                  {/* Badge */}
                  <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 mx-auto"
                  >
                    <slide.icon className="text-white text-sm" />
                    <span className="text-white text-sm font-semibold uppercase tracking-wider">
                      {slide.badge}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    variants={itemVariants}
                    className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-4"
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    variants={itemVariants}
                    className="text-gray-200 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4"
                  >
                    {slide.subtitle}
                  </motion.p>

                  {/* Buttons - Centered */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
                  >
                    <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl flex items-center gap-2 sm:gap-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/25 text-base sm:text-lg w-full sm:w-auto justify-center">
                      <a href="/contact">Get Started Free</a>
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base" />
                    </button>
                    <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-xl flex items-center gap-2 sm:gap-3 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto justify-center">
                      <FaPlay className="text-xs sm:text-sm" />
                      <a href="https://www.youtube.com/watch?v=SDbLsExYW4o&pp=ygULdGVjaCB2aWRlb3M%3D">Watch Demo</a>
                    </button>
                  </motion.div>

                  {/* Stats - Centered */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-6 sm:gap-8 text-white px-4"
                  >
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold">99.9%</div>
                      <div className="text-gray-300 text-xs sm:text-sm">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold">256-bit</div>
                      <div className="text-gray-300 text-xs sm:text-sm">Encryption</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold">24/7</div>
                      <div className="text-gray-300 text-xs sm:text-sm">Support</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Scroll Indicator - Centered */}
              {/* <motion.div
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm text-gray-300">Scroll to explore</span>
                  <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-2"></div>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation - Responsive */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-20 flex items-center gap-2 sm:gap-4">
        {/* Autoplay Toggle */}
        <button
          onClick={() => setIsAutoplay(!isAutoplay)}
          className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
        >
          {isAutoplay ? (
            <FaPlay className="text-xs sm:text-sm rotate-90" />
          ) : (
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          )}
        </button>

        {/* Custom Navigation Arrows */}
        <button className="swiper-button-prev p-2 sm:p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300">
          <FaArrowLeft className="text-xs sm:text-sm" />
        </button>
        <button className="swiper-button-next p-2 sm:p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300">
          <FaArrowRight className="text-xs sm:text-sm" />
        </button>
      </div>

      {/* Custom Pagination - Responsive */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="swiper-pagination flex gap-1 sm:gap-2"></div>
      </div>

      {/* Slide Progress Bar */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-red-500 to-red-600"
          key={activeIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div> */}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
      </div>
    </section>
  );
}