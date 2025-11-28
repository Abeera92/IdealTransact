import React, { useState, useEffect } from "react";
import { Shield, Lock, CheckCircle, Award, Eye, Cpu, Users, Server } from "lucide-react";
import { Link } from "react-router-dom";
export default function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('security-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const stats = [
    { icon: Shield, value: "100%", label: "Secure Transactions" },
    { icon: Lock, value: "24/7", label: "Security Monitoring" },
    { icon: Award, value: "ISO", label: "Certified Platform" },
    { icon: CheckCircle, value: "GDPR", label: "Compliant" },
    { icon: Cpu, value: "99.9%", label: "Uptime" },
    { icon: Users, value: "1M+", label: "Protected Users" }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "256-bit Encryption",
      description: "Military-grade encryption protects your data",
      delay: "0"
    },
    {
      icon: CheckCircle,
      title: "PCI DSS Certified",
      description: "Compliant with international security standards",
      delay: "100"
    },
    {
      icon: CheckCircle,
      title: "24/7 Fraud Monitoring",
      description: "Real-time threat detection for all transactions",
      delay: "200"
    },
    {
      icon: Eye,
      title: "Advanced Threat Detection",
      description: "AI-powered anomaly detection system",
      delay: "300"
    },
    {
      icon: Server,
      title: "Distributed Infrastructure",
      description: "Geo-redundant servers for maximum reliability",
      delay: "400"
    },
    {
      icon: Users,
      title: "Dedicated Security Team",
      description: "Expert cybersecurity professionals on guard",
      delay: "500"
    }
  ];

  return (
    <section 
      id="security-section"
      className="w-full bg-gradient-to-br from-[#0A0F1A] to-[#15192B] text-white py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl border border-red-500/20">
                  <Lock className="text-red-400 w-8 h-8" />
                </div>
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Enterprise Security
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Security is
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Our Top Priority
                </span>
              </h2>

              <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                We use the same level of encryption and security protocols trusted by 
                major financial institutions worldwide. Your data is protected with 
                enterprise-grade security measures.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-400/30 transition-all duration-500 hover:transform hover:-translate-y-1 ${
                    isVisible ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${feature.delay}ms` }}
                >
                  <feature.icon className="text-red-400 w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 items-center pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">A+</div>
                <div className="text-gray-400 text-xs">Security Rating</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">0</div>
                <div className="text-gray-400 text-xs">Security Incidents</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-gray-400 text-xs">Compliance</div>
              </div>
            </div>
          </div>

          {/* Right Section - Enhanced Cards */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6 text-center backdrop-blur-sm hover:border-red-400/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 ${
                  isVisible ? 'animate-float' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-lg border border-red-500/20">
                  <stat.icon className="text-red-400 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 pt-8 border-t border-white/10 transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 mb-4">
            Ready to experience enterprise-grade security?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-red-500/25">
              Start Secured Trial
            </button> */}
            <Link
  to="/contact"
  className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300"
>
  Schedule Demo
</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}