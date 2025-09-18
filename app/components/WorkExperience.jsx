"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Creative Tech Ltd.",
    location: "Dhaka, Bangladesh",
    duration: "2022 - Present",
    description:
      "Building and maintaining modern web applications with React, Next.js, and Tailwind CSS. Focused on responsive design and performance optimization.",
  },
  {
    role: "Intern Web Developer",
    company: "Innovative IT Solutions",
    location: "Dhaka, Bangladesh",
    duration: "2021 - 2022",
    description:
      "Assisted in developing client projects, debugging, and learning best practices in web development while collaborating with senior developers.",
  },
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

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="py-60 bg-gradient-to-r from-[#011a08] via-[#0F2F2B] to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-lime-400 text-center mb-12">
          Work Experience
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-lime-400 mb-2">
                {exp.role}
              </h3>
              <p className="text-gray-200">{exp.company}</p>
              <p className="text-gray-300 text-sm">{exp.location}</p>
              <p className="text-gray-400 text-sm mt-1">{exp.duration}</p>
              <p className="text-gray-400 text-sm mt-3">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
