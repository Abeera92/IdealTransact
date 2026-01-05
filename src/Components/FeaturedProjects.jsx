import React, { useState, useEffect, useRef } from "react";
import {
  FiExternalLink,
  FiGithub,
  FiChevronRight,
  FiAward,
} from "react-icons/fi";

// --- 1. Custom Hook for Counting Animation ---
const useInViewCounter = (endValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const initialValue = 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime;
          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Simple easing function (ease-out-quad)
            const easedPercentage = percentage * (2 - percentage);

            // Handle non-numeric end values like "250+"
            const numericEndValue = parseInt(endValue, 10);
            const isPlus = endValue.includes("+");

            const currentValue =
              initialValue + easedPercentage * (numericEndValue - initialValue);

            setCount(Math.floor(currentValue));

            if (percentage < 1) {
              requestAnimationFrame(animateCount);
            } else {
              // Ensure the final value is displayed, including the '+'
              setCount(isPlus ? numericEndValue : numericEndValue);
            }
          };

          requestAnimationFrame(animateCount);
          observer.unobserve(entry.target); // Stop observing after first view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [endValue, duration]);

  // Format the display value
  const isPlus = endValue.includes("+");
  const displayValue = `${Math.round(count)}${isPlus ? "+" : ""}`;

  return { count, ref, displayValue };
};

// --- 2. CounterStat Component to apply the hook ---
const CounterStat = ({ label, value, gradient }) => {
  const { ref, displayValue } = useInViewCounter(value);

  return (
    <div
      ref={ref}
      className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center overflow-hidden group hover:border-teal-500/50 transition-all duration-500"
    >
      {/* Animated Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-10 group-hover:opacity-20 transition-all duration-700 animate-gradient-x`}
      />

      {/* Moving Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-0 group-hover:opacity-100" />

      <div className="relative z-10">
        <div
          className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2 animate-gradient`}
        >
          {/* Display the animated value */}
          {displayValue}
        </div>
        <div className="text-gray-400 text-sm">{label}</div>
      </div>
    </div>
  );
};

// --- 3. Main Component ---
const FeaturedProjects = () => {
  // Set a default active ID when not hovering (e.g., the first project)
  const [activeId, setActiveId] = useState(1);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check if device is touch-enabled
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "EcoCommerce Platform",
      description: "Sustainable e-commerce with carbon tracking",
      category: "Web Development",
      tech: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "HealthSync Pro",
      description: "Healthcare management system",
      category: "SaaS",
      tech: ["Next.js", "Firebase", "TypeScript"],
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "FinTech Dashboard",
      description: "Real-time investment tracking",
      category: "Finance",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "EduLearn Pro",
      description: "Interactive AI learning platform",
      category: "EdTech",
      tech: ["React Native", "Express", "OpenAI"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "SmartHome Hub",
      description: "IoT smart home automation",
      category: "IoT",
      tech: ["React", "Raspberry Pi", "MQTT"],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  // Handle mouse enter (for desktop)
  const handleMouseEnter = (id) => {
    if (!isTouchDevice) {
      setActiveId(id);
    }
  };

  // Handle mouse leave (for desktop only)
  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setTimeout(() => {
        setActiveId(1);
      }, 300);
    }
  };

  // Handle touch/click (for mobile)
  const handleTouchClick = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // If already active, keep it active (don't collapse)
    if (activeId === id) {
      setActiveId(id); // Stay active
    } else {
      setActiveId(id); // Set to new active
    }
  };

  // Close expanded project when clicking outside (for mobile)
  const handleContainerClick = (e) => {
    // Only for mobile devices
    if (isTouchDevice && window.innerWidth < 768) {
      const isProjectClick = e.target.closest('[data-project]');
      if (!isProjectClick) {
        setActiveId(1);
      }
    }
  };

  const statsData = [
    {
      label: "Projects",
      value: "250+",
      gradient: "from-teal-400 via-teal-500 to-teal-600",
    },
    {
      label: "Clients",
      value: "120+",
      gradient: "from-teal-500 via-teal-600 to-teal-700",
    },
    {
      label: "Years",
      value: "8+",
      gradient: "from-teal-600 via-teal-700 to-teal-800",
    },
    {
      label: "Awards",
      value: "24",
      gradient: "from-teal-700 via-teal-800 to-teal-900",
    },
  ];

  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 py-20 px-4 relative overflow-hidden"
      onClick={handleContainerClick}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-full mb-6">
            <FiAward className="text-teal-400" />
            <span className="text-teal-400 text-sm font-medium uppercase tracking-wider">
              Featured Work
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-teal-200">
              Featured Projects
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {isTouchDevice ? "Tap on any project to expand and view details" : "Hover over any project to explore details. Each panel expands to reveal more information."}
          </p>
        </div>

        {/* Smooth Accordion Container */}
        <div className="w-full max-w-6xl mx-auto mb-20">
          <div
            className="flex flex-col md:flex-row h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-black/30 backdrop-blur-sm"
            onMouseLeave={handleMouseLeave}
          >
            {projects.map((project) => {
              const isActive = activeId === project.id;

              return (
                <div
                  key={project.id}
                  data-project="true"
                  className={`relative group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive 
                      ? "md:flex-[3] flex-[3]" 
                      : "md:flex-[1] flex-[1]"
                  } overflow-hidden`}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onClick={(e) => handleTouchClick(project.id, e)}
                  onTouchStart={(e) => handleTouchClick(project.id, e)}
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // Ensuring the flex property transition is also smooth
                    transition:
                      "flex 0.7s cubic-bezier(0.4, 0, 0.2, 1), background-image 0.5s linear",
                  }}
                >
                  {/* Multi-layer Gradient Overlay */}
                  <div className="absolute inset-0">
                    {/* Base overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-500 ${
                        isActive ? "opacity-80" : "opacity-90"
                      }`}
                    />

                    {/* Active state overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-teal-900/30 via-transparent to-transparent transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  {/* Content Container */}
                  <div
                    className={`relative h-full p-6 md:p-8 flex flex-col ${
                      isActive ? "justify-between" : "justify-end"
                    } transition-all duration-700`}
                  >
                    {/* Tech Stack (Only visible when active) */}
                    {isActive && (
                      <div className="flex flex-wrap gap-2 mb-6 md:mb-8 animate-fade-in">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-teal-500/25 text-teal-300 text-xs md:text-sm font-medium rounded-full border border-teal-500/40 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-teal-500/40"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Project Info */}
                    <div className="space-y-4 md:space-y-6">
                      {/* Category */}
                      <div>
                        <span className="text-teal-400 text-sm md:text-base font-semibold uppercase tracking-wider transition-all duration-300">
                          {project.category}
                        </span>
                      </div>

                      {/* Title with smooth scaling */}
                      <h3
                        className={`text-white font-bold transition-all duration-700 transform ${
                          isActive
                            ? "text-2xl md:text-3xl lg:text-4xl translate-y-0"
                            : "text-xl md:text-2xl translate-y-2"
                        }`}
                      >
                        {project.title}
                      </h3>

                      {/* Description with smooth opacity and height transition */}
                      <div
                        className={`overflow-hidden transition-all duration-700 ${
                          isActive
                            ? "max-h-40 md:max-h-48 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-gray-200 text-base md:text-lg leading-relaxed md:leading-loose">
                          {project.description}
                        </p>
                      </div>

                      {/* Action Buttons (Only visible when active) */}
                      <div
                        className={`overflow-hidden transition-all duration-700 ${
                          isActive
                            ? "max-h-32 opacity-100 mt-8"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        {/* UPDATED: Show buttons only when active on mobile, always when active on desktop */}
                        {(!isTouchDevice || (isTouchDevice && isActive)) && (
                          <div className="flex flex-col sm:flex-row gap-4">
                            <a
                              href={project.liveLink}
                              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30 text-sm md:text-base"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiExternalLink className="text-lg" />
                              Live Demo
                            </a>
                            <a
                              href={project.githubLink}
                              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-800/70 hover:bg-gray-700/70 text-gray-300 font-semibold rounded-xl border border-gray-600/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiGithub className="text-lg" />
                              View Code
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
   {/* Mobile Image Action Buttons (ONLY small screens) */}
{isTouchDevice && isActive && (
  <div className="absolute inset-0 flex items-end justify-center pb-8 md:hidden z-20">
    <div className="flex gap-3 bg-black/50 backdrop-blur-xl px-5 py-4 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
      
      {/* Live Button */}
      <a
        href={project.liveLink}
        onClick={(e) => e.stopPropagation()}
        className="relative flex items-center gap-2 px-5 py-2.5 
        bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600
        text-white text-sm font-semibold rounded-2xl
        shadow-lg shadow-teal-500/30
        active:scale-95 transition-all duration-200"
      >
        <FiExternalLink className="text-base" />
        Live Demo
      </a>

      {/* Code Button */}
      <a
        href={project.githubLink}
        onClick={(e) => e.stopPropagation()}
        className="relative flex items-center gap-2 px-5 py-2.5 
        bg-white/10 text-gray-200 text-sm font-semibold rounded-2xl
        border border-white/20 backdrop-blur-md
        shadow-md
        active:scale-95 transition-all duration-200"
      >
        <FiGithub className="text-base" />
        Code
      </a>
    </div>
  </div>
)}



                  {/* Active Indicator Border - Smooth */}
                  <div
                    className={`absolute inset-0 border-2 border-teal-500/50 rounded-2xl transition-all duration-700 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Side Border Indicator - Smooth */}
                  {/* CHANGED: Adjust border for vertical stacking on mobile */}
                  <div
                    className={`absolute top-0 bottom-0 left-0 w-0.5 transition-all duration-700 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 ${
                      isActive
                        ? "md:scale-y-100 scale-x-100 opacity-100"
                        : "md:scale-y-0 scale-x-0 opacity-0"
                    } transform origin-top`}
                  />

                  {/* Hover glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 transition-all duration-700 ${
                      isActive ? "opacity-30" : "opacity-0"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Instructions */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm md:text-base tracking-wide">
              {isTouchDevice ? "Tap on any project panel to expand and view details" : "Hover over any project panel to expand and view details"}
            </p>
          </div>
        </div>

        {/* Stats Section with Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {statsData.map((stat, index) => (
            <CounterStat
              key={index}
              label={stat.label}
              value={stat.value}
              gradient={stat.gradient}
            />
          ))}
        </div>

        {/* CTA Section - Clean version without animated gradient */}
        <div className="text-center">
          <div className="relative bg-gray-900/50 border border-teal-500/20 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto backdrop-blur-sm overflow-hidden">
            {/* Subtle static background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-gray-800/20 to-gray-900/30" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                  Have a project in mind?
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  Let's collaborate and create something extraordinary together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 overflow-hidden">
                  <span className="relative z-10 text-sm md:text-base">Start Project</span>
                  <FiChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-teal-500/20 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button className="relative px-6 md:px-8 py-3 md:py-4 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl md:rounded-2xl border border-white/30 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 text-sm md:text-base">View Portfolio</span>
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x {
          0% { background-position: -200% 0%; }
          100% { background-position: 200% 0%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 3s linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .transition-smooth {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;