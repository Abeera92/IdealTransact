import React from "react";
import chooseUsImage from "../../assets/images/img.jpg"; // replace with your image path
import { FaHandshake, FaHeadset, FaLock, FaBolt } from "react-icons/fa";

const WhyChooseUs = () => {
  const items = [
    {
      icon: <FaHandshake className="text-[#FF5252] w-10 h-10" />,
      title: "Trusted Solutions",
      description: "We provide reliable and secure solutions for your business needs.",
    },
    {
      icon: <FaHeadset className="text-[#FF5252] w-10 h-10" />,
      title: "24/7 Support",
      description: "Our team is available round-the-clock to assist you anytime.",
    },
    {
      icon: <FaLock className="text-[#FF5252] w-10 h-10" />,
      title: "Secure Payments",
      description: "We ensure all transactions are safe and encrypted.",
    },
    {
      icon: <FaBolt className="text-[#FF5252] w-10 h-10" />,
      title: "Fast Processing",
      description: "Experience quick and seamless processing for all operations.",
    },
  ];

  return (
    <section className="chooseus-section py-20 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left content */}
        <div className="flex-1">
          <div className="sec-title mb-10">
            <p className="text-[#FF5252] font-semibold">Why Choose Us</p>
            <h2 className="text-4xl font-bold mt-2">Our Advantages</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white py-7 px-5 rounded-lg shadow hover:shadow-lg transition">
                <div className="icon">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <img
            src={chooseUsImage}
            alt="Why Choose Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
