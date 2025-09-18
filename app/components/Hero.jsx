"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/portfolio.jpg";


const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-[#0f2f2b] text-white"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:pl-30  space-y-6 text-center md:text-left"
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          Hello I'm <span className="text-lime-400">Zahidul Islam</span> !
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold">
          A Travel & Tourism <span className="text-lime-400">Specialist</span>
        </h1>
        <p className="max-w-lg text-gray-300 leading-relaxed">
          Providing excellent travel and tourism services in Riyadh. 
          Solution-oriented, customer-focused, and dedicated to ensuring 
          the best travel experiences. <br />
          <span className="text-lime-400 font-medium">
            Good Service is Our Goal.
          </span>
        </p>

        {/* Buttons */}
        {/* <div className="flex flex-col md:flex-row gap-4 pt-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-lime-400 text-black rounded-lg font-semibold hover:bg-lime-500 transition"
          >
            Hire Me
          </a>
          <a
            href="/Zahidul_Islam_CV.pdf"
            download
            className="px-6 py-3 border border-lime-400 rounded-lg font-semibold hover:bg-lime-400 hover:text-black transition"
          >
            Download CV
          </a>
        </div> */}
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <Image
        src={profilePic}
        alt="Zahidul Islam"
        width={200}
        height={200}
        className="rounded-full object-cover shadow-2xl float-circle"
      />
      </motion.div>
    </section>
  );
};

export default Hero;
