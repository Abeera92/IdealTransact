import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Utility function to format numbers with commas
const formatNumber = (num, addPlus = false) => {
  const formatted = new Intl.NumberFormat("en-US").format(num);
  return addPlus && num > 0 ? `${formatted}+` : formatted;
};

const Counter = () => {
  const countersRef = useRef([]);
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);

  const stats = [
    { label: "Active Users", value: 12000, displayValue: "12K+", formatPlus: true },
    { label: "Transactions Processed", value: 850000, displayValue: "850K+", formatPlus: true },
    { label: "Merchant Partners", value: 3200, displayValue: "3.2K+", formatPlus: true },
    { label: "Countries Covered", value: 45, displayValue: "45", formatPlus: false },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state for cards
      gsap.set(".stat-card", {
        opacity: 0,
        y: 50
      });

      // Card animation timeline
      const cardAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none none",
          once: true
        }
      });

      cardAnimation.to(".stat-card", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Counter animation - starts after cards are visible
      countersRef.current.forEach((el, index) => {
        if (!el) return;
        
        const { value: final, formatPlus } = stats[index];
        
        // Set initial counter value
        el.innerText = "0";
        
        gsap.to(el, {
          innerText: final,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function() {
            if (el) {
              el.innerText = formatNumber(
                Math.floor(this.targets()[0].innerText),
                formatPlus
              );
            }
          },
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 70%",
            end: "bottom 50%",
            toggleActions: "play none none none",
            once: true
          }
        });
      });
    }, wrapperRef);

    return () => ctx.revert(); // Cleanup
  }, [stats]);

  // Helper function to add ref to cards array
  const addToCardsRef = (el, index) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <section className="w-full py-16 lg:py-32 bg-gray-50" ref={wrapperRef}>
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-600 uppercase tracking-widest text-sm font-semibold">
            By the Numbers
          </p>
          <h2 className="text-gray-900 text-4xl lg:text-5xl font-extrabold tracking-tight mt-2">
            Scaling Global Impact
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Our platform's performance metrics reflect the trust and growth we've achieved across the industry.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => addToCardsRef(el, idx)}
              className="stat-card p-8 lg:p-10 rounded-2xl bg-white border border-gray-200 hover:border-red-400 transition duration-300 text-center relative overflow-hidden shadow-lg hover:shadow-xl"
              style={{
                boxShadow: '0 4px 60px rgba(239, 68, 68, 0.1)'
              }}
            >
              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-red-300 rounded-tr-xl opacity-50"></div>

              {/* Counter Value */}
              <h3
                ref={(el) => (countersRef.current[idx] = el)}
                className="text-5xl lg:text-3xl font-semibold text-red-600 leading-none mb-2"
              >
                0
              </h3>

              {/* Label */}
              <p className="text-gray-700 mt-2 text-xl font-medium tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;