"use client";
import { motion } from "framer-motion";
import company from "../../public/company2.png"; 
import Image from "next/image";
import com from "../../public/loader_new.gif";
import { useEffect, useState } from "react";

const Company = () => {
  const [initialX, setInitialX] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 768) { // md breakpoint
      setInitialX(50);
    } else {
      setInitialX(0);
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setInitialX(-60);
      } else {
        setInitialX(0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section id="company" className="py-32 bg-[#0f2f2b] text-white">
      {/* Container aligned with Hero & Contact */}
      <div className="max-w-6xl mx-auto px-0 md:px-20">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-yellow-300 text-center mb-20"
        >
          About My Company
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 text-gray-200"
          >
            <p className="text-lg md:text-xl">
              Akbar Alam Travel & Tourism Co. is a leading travel service provider based in Riyadh, 
              offering seamless airline ticket booking for all major airlines. Our mission is to 
              ensure every journey is smooth, enjoyable, and memorable. Whether you are traveling 
              for business, leisure, or family vacations, we provide personalized services to meet 
              your travel needs. 
            </p>
            <p className="text-lg md:text-xl">
              We partner with trusted airlines, including Saudia, to offer competitive fares, flexible 
              schedules, and a reliable booking experience. Our dedicated team is available to guide 
              you through every step of the travel process, from ticket selection to post-travel support.  
              <span className="text-lime-400 font-medium"> Good Service is Our Goal.</span>
            </p>
            <p className="text-lg md:text-xl">
              At Akbar Alam Travel & Tourism Co., we believe in making travel simple, safe, and 
              enjoyable for all our customers. With a focus on customer satisfaction, we strive 
              to turn every trip into a pleasant experience.
            </p>

            <a href="https://www.akbaralamtours.com/" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="px-6 py-3 bg-gradient-to-r from-[#0F2F2B] to-[#0F5A4F] text-white font-semibold rounded-full shadow-lg hover:from-[#0F5A4F] hover:to-[#0F2F2B] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Explore More ✈️
              </button>
            </a>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
  initial={{ opacity: 0, x: initialX }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="flex justify-center"
>
  <div className="space-y-6 md:space-y-8">
    <Image
      src={company}
      alt="Travel and Tourism"
      width={300} height={200} className="rounded-lg shadow-lg object-cover"
    />
    <Image
      src={com}
      alt="Travel and Tourism"
      width={300} height={200} className="rounded-lg shadow-lg object-cover"
    />
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Company;
