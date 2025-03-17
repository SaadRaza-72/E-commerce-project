"use client";
import { FaTruck, FaHeadset, FaUndo, FaLock } from "react-icons/fa";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaTruck size={30} />,
      title: "FREE SHIPPING",
      description: "Free shipping on all US orders or orders above $100",
    },
    {
      icon: <FaHeadset size={30} />,
      title: "SUPPORT 24/7",
      description: "Contact us 24 hours a day, 7 days a week",
    },
    {
      icon: <FaUndo size={30} />,
      title: "30 DAYS RETURN",
      description: "Simply return it within 30 days for an exchange.",
    },
    {
      icon: <FaLock size={30} />,
      title: "100% PAYMENT SECURE",
      description: "We ensure secure payment with PEV",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-gray-500">{benefit.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-black">{benefit.title}</h3>
              <p className="text-sm text-gray-500">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
