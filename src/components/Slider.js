import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTransform } from "framer-motion";
const ImageSliderWithText = ({
  images,
  heading,
  tech1,
  tech2,
  tech3,
  logo1,
  logo2,
  logo3,
  progress,
  range,
  targetScale,
  i,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scale = useTransform(progress, range, [1, targetScale]);
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row h-3/5 bg-transparent/50 lg:w-4/5 w-full backdrop-blur-xl backdrop-brightness-150  shadow-lg relative rounded-xl"
      style={{ top: `${i * 20}px`, scale }}
    >
      <motion.div className="w-full lg:w-1/3 flex flex-col p-4 space-y-2 lg:space-y-4 mb-8 lg:mb-0 mr-0 lg:mr-8">
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

      <motion.div className="w-full lg:w-3/4 h-full relative flex items-center justify-center p-4 box-border">
        <div className="relative w-full h-full flex items-center justify-center box-border">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="object-fill rounded-lg h-full"
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
    </motion.div>
  );
};

export default ImageSliderWithText;
