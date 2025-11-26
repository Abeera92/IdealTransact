// Steps.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, CheckCircle, TrendingUp } from "lucide-react";

export default function Steps() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Guard: run only in browser
    if (typeof window === "undefined") return;

    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch (e) {
      // already registered or SSR prevented registration earlier
    }

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".step-box");

      console.log("GSAP animating steps:", steps.length);

      gsap.from(steps, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.22,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".connecting-line-inner", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 bg-white text-center relative overflow-visible">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A]">
        Get Started in <span className="text-[#E84B4B]">3 Simple Steps</span>
      </h2>

      <p className="mt-3 text-gray-600 text-sm md:text-base">
        Join millions of users who trust IDEAL TRANSACT for their financial needs
      </p>

      {/* Steps Container */}
      <div className="mt-16 relative z-10 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-12 px-6 md:px-24 max-w-7xl mx-auto">

        {/* STEP 1 */}
        <div className="step-box flex flex-col items-center max-w-xs text-center relative z-10">
          <div className="relative">
            <div className="w-32 h-32 bg-[#E84B4B]/10 rounded-full flex items-center justify-center z-50">
              {/* Icon fallback: if lucide not present, the text still shows */}
              <User className="w-14 h-14 text-[#E84B4B]" />
            </div>
            <div className="absolute -top-1 -right-2 bg-[#E84B4B] text-white w-11 h-11 flex items-center justify-center rounded-full font-semibold">
              01
            </div>
          </div>

          <h3 className="mt-6 text-lg md:text-xl font-semibold text-[#0D1B2A]">Create Account</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Sign up in minutes with your email and phone number
          </p>
        </div>

        {/* STEP 2 */}
        <div className="step-box flex flex-col items-center max-w-xs text-center relative z-10">
          <div className="relative">
            <div className="w-32 h-32 bg-[#E84B4B]/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-14 h-14 text-[#E84B4B]" />
            </div>
            <div className="absolute -top-1 -right-2 bg-[#E84B4B] text-white w-11 h-11 flex items-center justify-center rounded-full font-semibold">
              02
            </div>
          </div>

          <h3 className="mt-6 text-lg md:text-xl font-semibold text-[#0D1B2A]">Verify Identity</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Quick and secure verification process to protect your account
          </p>
        </div>

        {/* STEP 3 */}
        <div className="step-box flex flex-col items-center max-w-xs text-center relative z-10">
          <div className="relative">
            <div className="w-32 h-32 bg-[#E84B4B]/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-14 h-14 text-[#E84B4B]" />
            </div>
            <div className="absolute -top-1 -right-2 bg-[#E84B4B] text-white w-11 h-11 flex items-center justify-center rounded-full font-semibold">
              03
            </div>
          </div>

          <h3 className="mt-6 text-lg md:text-xl font-semibold text-[#0D1B2A]">Start Transacting</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Begin sending, receiving, and managing your money instantly
          </p>
        </div>

      </div>
    </section>
  );
}
