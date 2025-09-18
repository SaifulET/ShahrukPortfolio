"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import pic1 from "../../public/port.jpg";
import pic2 from "../../public/pic2.jpg";
import pic3 from "../../public/pic3.jpg";
import pic4 from "../../public/pic4.jpg";
import pic5 from "../../public/pic5.jpg";
import pic6 from "../../public/pic6.jpg";
import pic7 from "../../public/pic7.jpg";
import pic8 from "../../public/pic8.jpg";
import pic9 from "../../public/pic9.jpg";
import pic10 from "../../public/pic10.jpg";
import pic11 from "../../public/pic11.jpg";

const images = [
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section
      id="gallery"
      className="relative py-20 bg-gradient-to-b from-[#001e1b] via-[#07332d] to-[#0f5a4f]"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-lime-400 mb-10">Image Gallery</h2>

        <div className="relative w-full mx-auto rounded-2xl shadow-xl bg-black/30">
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={images[index]}
                  alt={`Image ${index + 1}`}
                  className="object-contain w-full h-full"
                  fill
                />
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-white border border-white/30 p-2 rounded-full shadow hover:bg-white/40 transition"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-white border border-white/30 p-2 rounded-full shadow hover:bg-white/40 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
