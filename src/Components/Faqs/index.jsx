"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaQuestionCircle, 
  FaSearch,
  FaCreditCard,
  FaShieldAlt,
  FaHeadset,
  FaCogs,
  FaUserTie,
  FaShoppingCart
} from "react-icons/fa";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      icon: FaCreditCard,
      title: "Payments & Billing",
      color: "bg-[#FF5252]"
    },
    {
      icon: FaShieldAlt,
      title: "Security & Compliance",
      color: "bg-[#FF5252]/80"
    },
    {
      icon: FaHeadset,
      title: "Support & Account",
      color: "bg-[#FF5252]/60"
    },
    {
      icon: FaCogs,
      title: "Technical & Setup",
      color: "bg-[#FF5252]/90"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to set up a payment gateway?",
      answer: "Most businesses can get started within 24-48 hours. For simple integrations, you can be up and running in a few hours. Enterprise setups with custom requirements may take 3-5 business days.",
      category: "Payments & Billing",
      tags: ["setup", "integration", "timeline"]
    },
    {
      question: "What security measures do you have in place?",
      answer: "We use 256-bit SSL encryption, are PCI DSS Level 1 compliant, employ fraud detection algorithms, and offer 3D Secure authentication. All data is stored on secure servers with regular security audits.",
      category: "Security & Compliance",
      tags: ["security", "encryption", "compliance"]
    },
    {
      question: "What payment methods do you support?",
      answer: "We support all major credit/debit cards (Visa, MasterCard, American Express), digital wallets (Apple Pay, Google Pay), bank transfers, and popular local payment methods across 50+ countries.",
      category: "Payments & Billing",
      tags: ["payment-methods", "cards", "digital-wallets"]
    },
    {
      question: "Is there a setup fee or hidden charges?",
      answer: "No setup fees for our standard plans. All charges are transparent: transaction fees, monthly subscription (if applicable), and currency conversion fees (for international transactions). No hidden charges.",
      category: "Payments & Billing",
      tags: ["pricing", "fees", "transparency"]
    },
    {
      question: "Do you offer 24/7 customer support?",
      answer: "Yes, we provide 24/7 support via phone, email, and live chat for all customers. Enterprise plans include dedicated account managers and priority support.",
      category: "Support & Account",
      tags: ["support", "customer-service", "help"]
    },
    {
      question: "Can I integrate with my existing e-commerce platform?",
      answer: "Yes, we offer plugins and APIs for Shopify, WooCommerce, Magento, and custom platforms. Our documentation and SDKs make integration straightforward for developers.",
      category: "Technical & Setup",
      tags: ["integration", "ecommerce", "api"]
    },
    {
      question: "What are your transaction fees?",
      answer: "Fees vary by plan and volume. Our Starter plan has 2.9% + $0.30 per transaction, Professional offers 2.5% + $0.30, and Enterprise plans offer custom pricing based on volume with discounts.",
      category: "Payments & Billing",
      tags: ["fees", "pricing", "transactions"]
    },
    {
      question: "How do refunds and chargebacks work?",
      answer: "Refunds can be processed instantly from your dashboard. For chargebacks, we provide dispute management tools and evidence collection assistance. Our chargeback protection feature helps reduce disputes.",
      category: "Payments & Billing",
      tags: ["refunds", "chargebacks", "disputes"]
    },
    {
      question: "Is there a contract or minimum term?",
      answer: "No long-term contracts. Our monthly plans are pay-as-you-go. Annual plans offer discounts but can be canceled with prorated refunds. Enterprise contracts are flexible based on needs.",
      category: "Support & Account",
      tags: ["contract", "terms", "cancellation"]
    },
    {
      question: "Do you support international payments?",
      answer: "Yes, we support payments in 150+ currencies across 190+ countries. We handle currency conversion, local payment methods, and compliance with regional regulations.",
      category: "Payments & Billing",
      tags: ["international", "multi-currency", "global"]
    },
    {
      question: "How do you handle data privacy?",
      answer: "We are GDPR compliant and adhere to global data protection regulations. We never sell your data and only collect information necessary for payment processing. Read our Privacy Policy for details.",
      category: "Security & Compliance",
      tags: ["privacy", "gdpr", "data-protection"]
    },
    {
      question: "What happens if there's a service outage?",
      answer: "We maintain 99.9% uptime SLA. In the rare event of an outage, we have redundant systems and instant failover. You'll be notified immediately and can check our status page for real-time updates.",
      category: "Technical & Setup",
      tags: ["uptime", "reliability", "support"]
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Filter FAQs based on search
  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Get FAQs by category
  const getFAQsByCategory = (category) => {
    return filteredFAQs.filter(faq => faq.category === category);
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5252]/10 rounded-full border border-[#FF5252]/20 mb-4">
            <FaQuestionCircle className="text-[#FF5252] text-sm" />
            <span className="text-[#FF5252] font-semibold text-sm uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Answers to{" "}
            <span className="text-[#FF5252]">Common Questions</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Everything you need to know about our payment solutions. Can't find what you're looking for? Contact our support team.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:border-[#FF5252] focus:ring-2 focus:ring-[#FF5252]/20 outline-none transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#FF5252]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSearchTerm(category.title.split(" ")[0].toLowerCase())}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:border-[#FF5252] hover:shadow-md transition-all duration-300"
            >
              <div className={`${category.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                <category.icon className="text-white text-lg" />
              </div>
              <span className="font-medium text-gray-900">{category.title}</span>
            </button>
          ))}
        </div>

        {/* FAQs Grid */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={false}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-3">
                      <FaQuestionCircle className="text-[#FF5252] flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        {faq.category}
                      </span>
                      {faq.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-[#FF5252]/5 text-[#FF5252] text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {activeIndex === index ? (
                      <FaChevronUp className="text-[#FF5252]" />
                    ) : (
                      <FaChevronDown className="text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2">
                        <div className="pl-9">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          {faq.category === "Payments & Billing" && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <span className="text-sm font-medium text-[#FF5252]">Related: </span>
                              <span className="text-sm text-gray-500">Payment methods, transaction fees, billing cycles</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <FaQuestionCircle className="text-gray-300 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try searching with different keywords or browse by category</p>
            </div>
          )}
        </div>

        {/* Still Have Questions? */}
        <div className="bg-gradient-to-r from-[#FF5252] to-[#FF5252]/90 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@idealtransact.com"
              className="px-6 py-3 bg-white text-[#FF5252] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              Email Support
            </a>
            <a
              href="tel:+1234567890"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Call Support
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6">
            Average response time: Less than 2 hours
          </p>
        </div>

        {/* Quick Tips */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-[#FF5252]/10 text-[#FF5252] rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaUserTie className="text-xl" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Dedicated Support</h4>
            <p className="text-gray-600 text-sm">Get personalized assistance from our payment experts</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-[#FF5252]/10 text-[#FF5252] rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaShoppingCart className="text-xl" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Easy Setup</h4>
            <p className="text-gray-600 text-sm">Get started in minutes with our simple integration process</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-[#FF5252]/10 text-[#FF5252] rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-xl" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Secure & Reliable</h4>
            <p className="text-gray-600 text-sm">Bank-level security with 99.9% uptime guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}