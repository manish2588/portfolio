import React, { useState } from "react";
import { motion } from "framer-motion";

const ImageSliderWithText = ({
  images,
  heading,

  tech,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="flex flex-col lg:flex-row h-auto bg-transparent max-w-screen overflow-hidden mt-16 mb-16">
      {/* Left Section with Text */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: [0.25, 0.5, 1],
          x: 0,
        }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
        className="w-full lg:w-1/3 flex flex-col p-4 space-y-2 lg:space-y-4 mb-8 lg:mb-0 lg:mr-8"
      >
        <h1 className="text-4xl font-semibold font-sans mb-4 text-white text-center">
          {heading}
        </h1>
        <p className="text-2xl text-white font-sans font-normal text-center">
          Technologies Used
        </p>
        <p className="text-2xl text-white font-sans font-normal text-center border-2 border-white p-4">
          {tech}
        </p>
      </motion.div>

      {/* Right Section with Slider */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: [0.25, 0.5, 1],
          x: 0,
        }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
        className="w-full lg:w-2/3 relative flex items-center justify-center p-4"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="object-cover w-full max-w-[700px] h-[300px] sm:h-[400px] rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
          >
            &#9664;
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
          >
            &#9654;
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageSliderWithText;
