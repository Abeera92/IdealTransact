"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Shield,
  Zap,
  Users,
  Globe
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 to-black text-gray-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF5252]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#FF5252]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Brand & Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF5252] to-[#FF5252]/80 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IT</span>
                </div>
                <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  IDEAL TRANSACT
                </h1>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Revolutionizing financial transactions with secure, fast, and reliable 
                payment solutions for businesses worldwide.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-[#FF5252]" />
                  <span>PCI DSS Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Zap className="w-4 h-4 text-[#FF5252]" />
                  <span>99.9% Uptime</span>
                </div>
              </div>

              {/* Social Links */}
            <div className="flex gap-4 pt-4">
  {[
    { 
      icon: Facebook, 
      label: "Facebook",
      url: "https://www.facebook.com/Thesublimetech" 
    },
    { 
      icon: Twitter, 
      label: "Twitter",
      url: "https://twitter.com/yourcompany" 
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/sublime-tech-solutions/" 
    },
    { 
      icon: Instagram, 
      label: "Instagram",
      url: "https://www.instagram.com/sublimetech99/" 
    }
  ].map((social, index) => (
    <motion.a
      key={index}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#FF5252] hover:text-white transition-all duration-300"
      aria-label={social.label}
    >
      <social.icon className="w-5 h-5" />
    </motion.a>
  ))}
</div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:pl-8">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#FF5252]" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {["Home", "About Us", "Services", "Contact", "Features"].map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-[#FF5252] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#FF5252]" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Payment Gateway",
                  "POS Solutions", 
                  "E-commerce Payments",
                  "Merchant Accounts",
                  "Fraud Prevention",
                  "24/7 Support"
                ].map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-[#FF5252] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#FF5252]" />
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <motion.a
                    href="mailto:support@idealtransact.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#FF5252] transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm">Email Us</div>
                      <div className="text-white text-sm">support@idealtransact.com</div>
                    </div>
                  </motion.a>
                </li>
                
                <li>
                  <motion.a
                    href="tel:+15551234567"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#FF5252] transition-colors duration-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm">Call Us</div>
                      <div className="text-white text-sm">+1 (555) 123-4567</div>
                    </div>
                  </motion.a>
                </li>
                
                <li>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-400 group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#FF5252] transition-colors duration-300">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm">Visit Us</div>
                      <div className="text-white text-sm">123 Financial District, NY 10004</div>
                    </div>
                  </motion.div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 relative"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p>© 2025 IDEAL TRANSACT. All rights reserved.</p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-400 justify-center">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((link, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ color: "#FFFFFF" }}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#FF5252] text-white rounded-lg flex items-center justify-center hover:bg-[#FF5252]/90 transition-all duration-300 shadow-lg hover:shadow-[#FF5252]/25"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}