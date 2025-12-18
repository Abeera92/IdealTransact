"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  CreditCard,
  Smartphone,
  ShoppingCart,
  Building,
  Shield,
  Headphones,
  ArrowRight
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Services dropdown items
  const servicesItems = [
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      link: "/services/payment-gateway",
    },
    {
      icon: Smartphone,
      title: "POS & Terminal Solutions",
      link: "/services/pos-and-terminal",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Payments",
      link: "/services/ecommerce-payments",
    },
    {
      icon: Building,
      title: "Merchant Account Setup",
      link: "/services/merchant-account-setup",
    },
    {
      icon: Shield,
      title: "Fraud Prevention & Security",
      link: "/services/fraud-prevention",
    },
    {
      icon: Headphones,
      title: "24/7 Merchant Support",
      link: "/services/merchant-support",
    },
  ];

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Services",
      link: "/services",
      hasDropdown: true,
    },
    { name: "Pricing", link: "/pricing" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  // Check if a menu item is active
  const isActive = (link) => {
    if (link === "/") {
      return location.pathname === "/";
    }
    if (link === "/services") {
      return location.pathname.startsWith("/services");
    }
    return location.pathname === link;
  };

  const handleServiceClick = (link) => {
    navigate(link);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setOpen(false);
  };

  const handleMobileServicesToggle = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Ideal Transact logo"
              className="h-30 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                ref={item.hasDropdown ? dropdownRef : null}
              >
                {!item.hasDropdown ? (
                  <Link
                    to={item.link}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                      isActive(item.link)
                        ? "text-[#FF5252]"
                        : "text-gray-700 hover:text-[#FF5252]"
                    }`}
                  >
                    {item.name}
                    {isActive(item.link) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF5252]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                ) : (
                 <div className="relative">
  <div
    className="relative flex items-center gap-1"
    onMouseEnter={() => setServicesOpen(true)}
    onMouseLeave={() => setServicesOpen(false)}
  >
    <Link
      to="/services"
      className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors duration-200 ${
        isActive("/services") ? "text-[#FF5252]" : "text-gray-700 hover:text-[#FF5252]"
      }`}
      onClick={() => setServicesOpen(false)} // close dropdown on click
    >
      Services
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${
          servicesOpen ? "rotate-180" : ""
        }`}
      />
    </Link>
  </div>

  {/* Dropdown */}
  <AnimatePresence>
    {servicesOpen && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.15 }}
        className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-1"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        {servicesItems.map((service, idx) => (
          <button
            key={idx}
            onClick={() => handleServiceClick(service.link)}
            className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors"
          >
            <div className="w-8 h-8 bg-[#FF5252]/10 rounded flex items-center justify-center">
              <service.icon className="w-4 h-4 text-[#FF5252]" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {service.title}
            </span>
          </button>
        ))}

        {/* Optional: “View All Services” at bottom of dropdown */}
        <Link
          to="/services"
          className="block px-4 py-3 text-[#FF5252] font-medium hover:bg-gray-50 rounded-lg transition-colors mt-1"
        >
          View All Services
        </Link>
      </motion.div>
    )}
  </AnimatePresence>
</div>

                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
         
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#FF5252] to-[#FF6B6B] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FF5252]/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {open ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {!item.hasDropdown ? (
                      <Link
                        to={item.link}
                        onClick={() => setOpen(false)}
                        className={`block px-6 py-3 mx-2 rounded-lg transition-colors ${
                          isActive(item.link)
                            ? "bg-[#FF5252]/10 text-[#FF5252] font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#FF5252]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div className="mx-2">
                        <button
                          onClick={handleMobileServicesToggle}
                          className={`w-full flex items-center justify-between px-6 py-3 rounded-lg transition-colors ${
                            mobileServicesOpen || isActive(item.link)
                              ? "bg-[#FF5252]/10 text-[#FF5252] font-semibold"
                              : "text-gray-700 hover:bg-gray-50 hover:text-[#FF5252]"
                          }`}
                        >
                          {item.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Services Dropdown */}
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-6 mt-1 space-y-1"
                          >
                            {servicesItems.map((service, idx) => (
                              <Link
                                key={idx}
                                to={service.link}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-3 text-gray-600 hover:text-[#FF5252] hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-3"
                              >
                                <div className="w-6 h-6 bg-[#FF5252]/10 rounded flex items-center justify-center">
                                  <service.icon className="w-3 h-3 text-[#FF5252]" />
                                </div>
                                <span className="text-sm">
                                  {service.title}
                                </span>
                              </Link>
                            ))}
                            
                            {/* View All Services Link */}
                            <Link
                              to="/services"
                              onClick={() => setOpen(false)}
                              className="block px-4 py-3 text-[#FF5252] font-medium hover:bg-gray-50 rounded-lg transition-colors mt-2 flex items-center justify-between"
                            >
                              <span>View All Services</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile CTA Buttons */}
                <div className="px-4 py-4 border-t border-gray-100 space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="block w-full px-6 py-3 text-center text-gray-700 font-medium border border-gray-200 rounded-lg hover:border-[#FF5252] hover:text-[#FF5252] transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block w-full px-6 py-3 text-center bg-gradient-to-r from-[#FF5252] to-[#FF6B6B] text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}