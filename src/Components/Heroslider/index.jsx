import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlay, 
  FaArrowRight, 
  FaArrowLeft, 
  FaRocket, 
  FaChartLine, 
  FaShieldAlt,
  FaTimes,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaCreditCard,
  FaMobileAlt,
  FaQrcode,
  FaBuilding,
  FaUser,
  FaDollarSign,
  FaCheck,
  FaArrowDown
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";

// Red gradient variations
const RED_GRADIENTS = {
  primary: "from-[#FF5252] to-[#FF5252]",
  dark: "from-[#D32F2F] to-[#FF5252]",
  light: "from-[#FF5252] to-[#FF8A80]",
  accent: "from-[#FF5252] to-[#FF4081]"
};

// Online images - all set to same aspect ratio
const IMAGES = {
  slide1: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380&q=80",
  slide2: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380&q=80",
  slide3: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380&q=80"
};

const SLIDES = [
  {
    title: "Modern Payment Solutions",
    subtitle: "Accept cards, digital wallets, and QR payments with enterprise-grade security",
    image: IMAGES.slide1,
    badge: "Secure",
    icon: FaShieldAlt,
    gradient: RED_GRADIENTS.primary,
  },
  {
    title: "Fast Payment Processing",
    subtitle: "Instant settlements with real-time analytics for smarter business decisions",
    image: IMAGES.slide2,
    badge: "Fast",
    icon: FaRocket,
    gradient: RED_GRADIENTS.dark,
  },
  {
    title: "Business Growth Platform",
    subtitle: "All-in-one payment infrastructure designed to scale with your business",
    image: IMAGES.slide3,
    badge: "Smart",
    icon: FaChartLine,
    gradient: RED_GRADIENTS.light,
  },
];

// Quick Quote Modal with all necessary fields - LIGHT THEME
const QuickQuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    monthlyVolume: "",
    email: "",
    phone: "",
    name: ""
  });

  const businessTypes = [
    "Retail Store",
    "E-commerce",
    "Restaurant/Cafe",
    "Service Business",
    "Healthcare",
    "Professional Services",
    "Non-profit",
    "Other"
  ];

  const monthlyVolumes = [
    "Under $5,000",
    "$5,000 - $20,000",
    "$20,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000 - $500,000",
    "$500,000+"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden border border-gray-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${RED_GRADIENTS.dark} p-6`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">Get Your Custom Quote</h3>
                  <p className="text-white/90 mt-1">Complete this form for a personalized quote</p>
                </div>
                <button 
                  onClick={onClose}
                  className="text-white/90 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Business Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaUser className="inline mr-2 text-[#FF5252]" />
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF5252] focus:border-transparent"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaBuilding className="inline mr-2 text-[#FF5252]" />
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF5252] focus:border-transparent"
                      placeholder="Your Business Name"
                      value={formData.businessName}
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF5252] focus:border-transparent"
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                    >
                      <option value="">Select business type</option>
                      {businessTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Contact & Volume */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaDollarSign className="inline mr-2 text-[#FF5252]" />
                      Monthly Transaction Volume *
                    </label>
                    <select
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF5252] focus:border-transparent"
                      value={formData.monthlyVolume}
                      onChange={(e) => setFormData({...formData, monthlyVolume: e.target.value})}
                    >
                      <option value="">Select monthly volume</option>
                      {monthlyVolumes.map((volume, idx) => (
                        <option key={idx} value={volume}>{volume}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF5252] focus:border-transparent"
                      placeholder="you@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF5252] focus:border-transparent"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Features Included */}
              <div className="mt-6 p-4 bg-[#FF5252]/5 rounded-lg border border-[#FF5252]/20">
                <p className="text-gray-700 text-sm mb-3">Your quote will include:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaCheck className="text-[#FF5252] text-sm" />
                    <span className="text-sm">Card Processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaCheck className="text-[#FF5252] text-sm" />
                    <span className="text-sm">Digital Wallets</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaCheck className="text-[#FF5252] text-sm" />
                    <span className="text-sm">QR Payments</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaCheck className="text-[#FF5252] text-sm" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full mt-6 py-4 bg-gradient-to-r ${RED_GRADIENTS.dark} text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5252]/20 hover:scale-[1.02]`}
              >
                Get Your Personalized Quote
              </button>

              <p className="text-gray-500 text-sm text-center mt-4">
                We'll contact you within 24 hours with your custom quote
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Contact Modal - LIGHT THEME
const ContactModal = ({ isOpen, onClose }) => {
  const contactOptions = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp Chat",
      description: "Instant response",
      link: "https://wa.me/1234567890",
      color: "bg-[#FF5252]/10 border-[#FF5252]/20 hover:bg-[#FF5252]/20",
      iconColor: "text-[#FF5252]"
    },
    {
      icon: FaPhone,
      title: "Call Sales",
      description: "+1 (234) 567-8900",
      link: "tel:+12345678900",
      color: "bg-[#FF5252]/10 border-[#FF5252]/20 hover:bg-[#FF5252]/20",
      iconColor: "text-[#FF5252]"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      description: "sales@paymentsolution.com",
      link: "mailto:sales@paymentsolution.com",
      color: "bg-[#FF5252]/10 border-[#FF5252]/20 hover:bg-[#FF5252]/20",
      iconColor: "text-[#FF5252]"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl w-full max-w-lg overflow-hidden border border-gray-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${RED_GRADIENTS.dark} p-6`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                  <p className="text-white/90 mt-1">Choose your preferred contact method</p>
                </div>
                <button 
                  onClick={onClose}
                  className="text-white/90 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {contactOptions.map((option, idx) => (
                  <a
                    key={idx}
                    href={option.link}
                    target={option.link.includes('http') ? "_blank" : undefined}
                    rel={option.link.includes('http') ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-4 ${option.color} border rounded-xl text-gray-800 transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className="p-3 rounded-lg bg-white border border-gray-200">
                      <option.icon className="text-xl text-[#FF5252]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{option.title}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                    <FaArrowRight className="text-[#FF5252]" />
                  </a>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold text-gray-900">Business Hours:</span> Mon-Fri 9AM-6PM EST
                </p>
                <p className="text-gray-700 text-sm mt-1">
                  <span className="font-semibold text-gray-900">Response Time:</span> Within 1 hour during business hours
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [showQuickQuote, setShowQuickQuote] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background with Red Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5252] to-transparent"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF5252]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF5252]/10 rounded-full blur-3xl"></div>
        </div>

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={isAutoplay ? { delay: 5000 } : false}
          loop={true}
          speed={800}
          className="h-full w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative min-h-screen flex items-center">
                {/* Background Image with Red Overlay - Fixed Height */}
                <div className="absolute inset-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ 
                      backgroundImage: `url(${slide.image})`,
                      height: '100vh',
                      objectFit: 'cover'
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-30`} />
                  <div className="absolute inset-0 bg-gray-950/80" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-white"
                    >
                      {/* Badge with Red Accent */}
                      <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#FF5252]/20 backdrop-blur-md rounded-full border border-[#FF5252]/30 mb-8">
                        <slide.icon className="text-xl text-[#FF5252]" />
                        <span className="font-bold tracking-wider text-white">{slide.badge}</span>
                      </div>

                      {/* Title */}
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
                        {slide.subtitle}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-6 mb-10">
                        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10">
                          <FaCreditCard className="text-[#FF5252] text-xl" />
                          <span>Card Payments</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10">
                          <FaMobileAlt className="text-[#FF5252] text-xl" />
                          <span>Mobile Wallets</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10">
                          <FaQrcode className="text-[#FF5252] text-xl" />
                          <span>QR Payments</span>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap gap-4 mb-12">
                        <button
                          onClick={() => setShowQuickQuote(true)}
                          className={`group px-8 py-4 bg-gradient-to-r ${RED_GRADIENTS.dark} text-white font-semibold rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FF5252]/20`}
                        >
                          Get a Quick Quote
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <button
                          onClick={() => setShowContact(true)}
                          className="group px-8 py-4 bg-white/10 hover:bg-[#FF5252]/10 backdrop-blur-sm border border-white/20 hover:border-[#FF5252]/30 text-white font-semibold rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105"
                        >
                          Contact Sales
                          <FaPlay className="text-sm" />
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-1 text-[#FF5252]">99.9%</div>
                          <div className="text-gray-300 text-sm">System Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-1 text-[#FF5252]">2.9%</div>
                          <div className="text-gray-300 text-sm">Processing Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-1 text-[#FF5252]">24h</div>
                          <div className="text-gray-300 text-sm">Settlement Time</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      {/* Floating Card */}
                      <div className="relative bg-gray-700/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 shadow-2xl">
                        {/* Card Header */}
                        <div className="flex items-center gap-3 mb-8">
                          <div className={`w-12 h-12 bg-gradient-to-r ${RED_GRADIENTS.primary} rounded-xl flex items-center justify-center`}>
                            <FaCreditCard className="text-2xl text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">Payment Terminal</h3>
                            <p className="text-gray-400 text-sm">Ready to accept payments</p>
                          </div>
                          <div className="ml-auto flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#FF5252] rounded-full animate-pulse" />
                            <span className="text-[#FF5252] text-sm font-medium">Live</span>
                          </div>
                        </div>

                        {/* Terminal Display */}
                        <div className="bg-[#e9e9e9fa] rounded-2xl p-6 mb-6 border border-gray-700">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-[#FF5252] mb-2">$125.50</div>
                            <div className="text-gray-700">Tap or insert card to pay</div>
                          </div>
                          {/* Animated Line */}
                          <motion.div 
                            className="h-0.5 bg-gradient-to-r from-transparent via-[#FF5252] to-transparent mt-4"
                            animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className={`absolute -top-6 -right-6 bg-gradient-to-r ${RED_GRADIENTS.dark} text-white px-6 py-3 rounded-xl shadow-lg`}>
                        <div className="font-bold">From 2.9%</div>
                        <div className="text-xs opacity-90">Low Rates</div>
                      </div>
                      <div className="absolute -bottom-6 -left-6 bg-gray-500 border border-[#FF5252]/30 text-white px-6 py-3 rounded-xl shadow-lg">
                        <div className="font-bold">24h Payout</div>
                        <div className="text-xs opacity-90">Fast Settlement</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* WhatsApp Floating Button */}
        <button
          onClick={() => setShowContact(true)}
          className="fixed bottom-6 right-6 z-30 bg-[#FF5252] hover:bg-[#D32F2F] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us
          </span>
        </button>
      </section>

      {/* Modals */}
      <QuickQuoteModal isOpen={showQuickQuote} onClose={() => setShowQuickQuote(false)} />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}