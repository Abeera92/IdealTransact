"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaRegHeart, FaArrowLeft, FaArrowRight, FaPlay, FaPause } from "react-icons/fa";

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      text: "The ERP system streamlined our entire workflow and helped our team operate with total clarity and confidence.",
      name: "Briana Patton",
      position: "Operations Manager",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      company: "TechCorp Inc."
    },
    {
      text: "From onboarding to daily use, everything feels smooth and intuitive. Our productivity noticeably increased.",
      name: "Bilal Ahmed",
      position: "CTO",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      company: "InnovateLabs"
    },
    {
      text: "Support is incredibly fast and knowledgeable. Any issues we had were resolved quickly with clear guidance.",
      name: "Saman Malik",
      position: "Product Director",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 4,
      company: "Global Solutions"
    },
    {
      text: "The integrations saved us countless hours. Our departments collaborate effortlessly now, without bottlenecks.",
      name: "Omar Raza",
      position: "Head of Engineering",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      company: "DataSystems Co."
    },
    {
      text: "The platform feels polished, stable, and powerful. It delivered measurable improvements within the first week.",
      name: "Zainab Hussain",
      position: "CEO",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 5,
      company: "StartUp Ventures"
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying, isHovered, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-sm ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20 mb-4"
        >
          <FaRegHeart className="text-red-500 text-sm" />
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Loved by Thousands
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
        >
          What Our{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Customers Say
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Join thousands of satisfied customers who transformed their business with our platform
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Main Carousel */}
        <div 
          className="relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentSlide}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0"
            >
              <div className="w-full h-full bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12 flex flex-col justify-between">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <FaQuoteLeft className="text-white text-xl" />
                  </div>
                  <div className="text-right">
                    <StarRating rating={testimonials[currentSlide].rating} />
                    <p className="text-gray-500 text-sm mt-2">{testimonials[currentSlide].company}</p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 flex items-center">
                  <p className="text-gray-700 text-xl md:text-2xl lg:text-3xl leading-relaxed text-center font-light italic max-w-4xl mx-auto">
                    "{testimonials[currentSlide].text}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center gap-6 mt-8">
                  <div className="relative">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="font-bold text-gray-900 text-xl">
                      {testimonials[currentSlide].name}
                    </p>
                    <p className="text-gray-600 text-lg">
                      {testimonials[currentSlide].position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:text-red-600 hover:border-red-300 transition-all duration-300 shadow-lg z-20"
          >
            <FaArrowLeft className="text-lg" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:text-red-600 hover:border-red-300 transition-all duration-300 shadow-lg z-20"
          >
            <FaArrowRight className="text-lg" />
          </button>

          {/* Autoplay Control */}
          <button
            onClick={toggleAutoplay}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:text-red-600 transition-all duration-300 shadow-lg z-20"
          >
            {isPlaying ? <FaPause className="text-sm" /> : <FaPlay className="text-sm" />}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 px-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              key={currentSlide}
              className="h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-red-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-gray-600 font-medium">
            {currentSlide + 1} / {testimonials.length}
          </span>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-16 px-4"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">10K+</div>
            <div className="text-gray-600 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99%</div>
            <div className="text-gray-600 text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Support Available</div>
          </div>
        </div>
      </motion.div>

    
    </section>
  );
}