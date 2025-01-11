import React, { useState } from "react";
import { motion } from "framer-motion";

const ImageSliderWithText = ({
  images,
  heading,
  tech1,
  tech2,
  tech3,
  logo1,
  logo2,
  logo3,
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
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: [0.25, 0.5, 1],
          x: 0,
        }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
        className="w-full lg:w-1/3 flex flex-col p-4 space-y-2 lg:space-y-4 mb-8 lg:mb-0 mr-0 lg:mr-8"
      >
        <h1 className="text-4xl font-semibold font-serif mb-4 text-white text-center ">
          {heading}
        </h1>

        <p className="flex flex-col space-y-2">
          <span className=" text-white text-2xl p-4 flex space-x-3 items-center justify-center animated-text">
            <span>{logo1}</span>
            <span> {tech1}</span>
          </span>
          <span className=" text-white text-2xl  p-4 flex space-x-3 items-center justify-center animated-text">
            <span>{logo2}</span>
            <span> {tech2}</span>
          </span>
          {tech3 ? (
            <span className=" text-white text-2xl p-4 flex space-x-3 items-center justify-center animated-text">
              <span>{logo3}</span>
              <span> {tech3}</span>
            </span>
          ) : null}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: [0.25, 0.5, 1],
          x: 0,
        }}
        transition={{ duration: 2, type: "spring", stiffness: 100 }}
        className="w-full lg:w-2/3 relative flex items-center justify-center p-4 box-border"
      >
        <div className="relative w-full h-full flex items-center justify-center box-border">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="object-cover w-full lg:w-[700px] h-[400px]  rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />

          <button
            onClick={prevSlide}
            className="absolute lg:left-16 left-8 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white rounded-full p-2"
          >
            &#9664;
          </button>

          <button
            onClick={nextSlide}
            className="absolute lg:right-16 right-8 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white rounded-full p-2"
          >
            &#9654;
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageSliderWithText;
