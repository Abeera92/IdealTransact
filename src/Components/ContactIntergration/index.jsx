"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaTimes, FaCheck } from "react-icons/fa";

export default function ContactIntegration({ planName }) {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const whatsappNumber = "+1234567890"; // Replace with actual number
  const supportEmail = "sales@idealtransact.com";

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in the ${planName} Enterprise plan. Can we schedule a demo?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    // Simulate email sending
    console.log("Email sent to:", supportEmail, "Data:", {
      ...contactData,
      plan: planName,
      timestamp: new Date().toISOString()
    });
    
    // Show success
    setEmailSent(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setEmailSent(false);
      setContactData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
      setShowContactOptions(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="mt-6">
      <button
        onClick={() => setShowContactOptions(!showContactOptions)}
        className="text-sm text-gray-600 hover:text-[#FF5252] transition-colors w-full text-center"
      >
        Need custom pricing? Contact our sales team →
      </button>

      {showContactOptions && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 bg-gray-50 rounded-xl p-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-900">Contact Sales</h4>
            <button
              onClick={() => setShowContactOptions(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>
          </div>

          {!emailSent ? (
            <>
              <div className="flex gap-3 mb-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp
                </button>
                <button
                  onClick={() => {
                    const subject = `Inquiry about ${planName} Plan`;
                    const body = `Hi, I'm interested in the ${planName} plan.\n\nName: \nEmail: \nCompany: \nMessage:`;
                    window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <FaEnvelope />
                  Email
                </button>
              </div>

              <div className="text-sm text-gray-600 mb-3">Or fill the form:</div>
              
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={contactData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#FF5252] focus:ring-1 focus:ring-[#FF5252]/20 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={contactData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#FF5252] focus:ring-1 focus:ring-[#FF5252]/20 outline-none"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={contactData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#FF5252] focus:ring-1 focus:ring-[#FF5252]/20 outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Your requirements..."
                  value={contactData.message}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-[#FF5252] focus:ring-1 focus:ring-[#FF5252]/20 outline-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#FF5252] text-white py-2 px-4 rounded-lg hover:bg-[#FF5252]/90 transition-colors text-sm font-semibold"
                >
                  Send Inquiry
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaCheck className="text-green-600 text-xl" />
              </div>
              <p className="text-green-600 font-semibold">Message Sent!</p>
              <p className="text-gray-600 text-sm mt-1">Our sales team will contact you within 24 hours.</p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}