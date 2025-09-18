"use client";
import { motion } from "framer-motion";

const education = [
  {
    degree: "JSC",
    gpa: "GPA:5.00",
    institution: "Tamirul Millat Kamil Madrasah,Main Campus",
    location: "Dhaka",
    session: "2014",
    year: "2014",
  },
  {
    degree: "SSC",
    gpa: "GPA:5.00",
    institution: "Tamirul Millat Kamil Madrasah,Main Campus",
    location: "Dhaka",
    session: "2015-2016",
    year: "2016",
  },
  {
    degree: "HSC",
    gpa: "GPA:4.20",
    institution: "Tamirul Millat Kamil Madrasah,Tongi Campus",
    location: "Dhaka",
    session: "2018-2019",
    year: "2019",
  },
  {
    degree: "B.Sc (Honours)",
    gpa: "CGPA:3.34",
    institution: "Tejgaon College",
    location: "Dhaka",
    session: "2020-2023",
    year: "2023",
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

const Education = () => {
  return (
    <section
      id="education"
      className="pt-60 pb-10 bg-gradient-to-r from-[#011a08] via-[#0F2F2B] to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-lime-400 text-center mb-12">
          Education
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {education.map((item, i) => (
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
      {item.degree} {item.gpa}
    </h3>
    <p className="text-gray-200">{item.institution}</p>

    {/* ✅ conditional rendering */}
    {item.gpa === "CGPA:3.34" && (
      <p className="text-[#d1c8c8] text-sm">
        Major: Geography and Environmental Science
      </p>
    )}

    <p className="text-gray-300 text-sm">{item.location}</p>
    <p className="text-gray-400 text-sm mt-1">
      Session: {item.session} | Year: {item.year}
    </p>
  </motion.div>
))}

        </div>
      </div>
    </section>
  );
};

export default Education;
