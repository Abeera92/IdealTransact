"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PricingHeader from "../../Components/pricingHeader";
import BillingToggle from "../../Components/BillingToggle";
import FeatureCards from "../../Components/FeatureCard";
import PricingCards from "../../Components/PricingCards";
import Testimonials from "../../Components/Testimonials";
// import Faqs from "../../Components/Faqs";
import CtaSection from "../../Components/CtaSection";
import FAQs from "../../Components/Faqs";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF5252]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF5252]/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5252]/2 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <PricingHeader />
        
        {/* Billing Toggle */}
        <div className="text-center mb-8">
          <BillingToggle 
            billingCycle={billingCycle}
            setBillingCycle={setBillingCycle}
          />
        </div>

        {/* Features */}
        <FeatureCards />

        {/* Pricing Cards with ID for internal linking */}
        <div id="pricing">
          <PricingCards billingCycle={billingCycle} />
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQs />

        {/* CTA Section */}
        <CtaSection />
      </div>
    </section>
  );
}