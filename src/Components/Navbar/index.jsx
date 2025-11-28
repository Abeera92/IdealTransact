"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get current route

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" }
  ];

  // Check if a menu item is active based on current route
  const isActive = (link) => {
    if (link === "/") {
      return location.pathname === "/";
    }
    return location.pathname === link;
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#FF5252] to-[#FF5252]/80 bg-clip-text text-transparent">
            IDEAL TRANSACT
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
            >
              <Link 
                to={item.link}
                className={`font-semibold transition-all duration-300 ${
                  isActive(item.link) 
                    ? 'text-[#FF5252]' 
                    : 'text-gray-700 hover:text-[#FF5252]'
                }`}
              >
                {item.name}
              </Link>

              {/* Animated underline */}
              <div className={`absolute left-0 -bottom-1 h-0.5 bg-[#FF5252] transition-all duration-300 ${
                isActive(item.link) ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#FF5252] text-white font-semibold rounded-xl hover:bg-[#FF5252]/90 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#FF5252]/25"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {open ? (
            <X 
              onClick={() => setOpen(false)} 
              className="w-7 h-7 cursor-pointer text-gray-700 hover:text-[#FF5252] transition-colors duration-300" 
            />
          ) : (
            <Menu 
              onClick={() => setOpen(true)} 
              className="w-7 h-7 cursor-pointer text-gray-700 hover:text-[#FF5252] transition-colors duration-300" 
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg border-t border-gray-100 px-6 py-6 space-y-4"
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={() => setOpen(false)}
              className={`block py-3 px-4 rounded-xl transition-all duration-300 font-semibold ${
                isActive(item.link)
                  ? 'bg-[#FF5252]/10 text-[#FF5252] border-l-4 border-[#FF5252]'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-[#FF5252]'
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          <div className="pt-4 border-t border-gray-100">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block w-full py-3 bg-[#FF5252] text-white font-semibold rounded-xl text-center hover:bg-[#FF5252]/90 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}