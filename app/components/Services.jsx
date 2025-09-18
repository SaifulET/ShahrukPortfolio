"use client";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    "All Airlines Ticketing",
    "Tourism Support",
    "Visa Assistance",
    "Travel Consultation",
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <section
      id="services"
      className="py-10 lg:py-40 bg-gradient-to-b from-[#072e29] to-[#1c5851]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2fb8a3] mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-10 bg-[#afdfd7] text-[#293533] font-semibold shadow rounded-lg hover:shadow-xl transition-transform"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
