import React, { useState } from "react";
import { motion } from "framer-motion";

function Aboutme() {
  const [Showmore, setShowmore] = useState(false);
  const handleclick = () => {
    setShowmore(!Showmore);
  };

  return (
    <motion.div className="flex flex-col sm:flex-row px-4 sm:px-8 md:px-24 mt-8 sm:mt-12 md:mt-24 space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-12 w-full h-auto">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} // Reduced X offset for smaller screens
        whileInView={{ opacity: [0, 0.5, 1], x: 0 }}
        transition={{ duration: 2,type: "spring", stiffness: 100 }}
        className="flex flex-col space-y-6 sm:space-y-8 w-full sm:w-1/2 px-4 sm:px-8 md:px-12"
      >
        <span className="border text-white border-indigo-600 rounded-full inline-block px-4 py-2 w-auto sm:w-48 md:w-60 font-sans font-light">
          Frontend Developer Portfolio
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium animated-text font-sans">
          Manish KC
        </h1>
        <p className="font-medium font-sans text-base sm:text-lg md:text-xl text-gray-300">
          I am a frontend developer with proficiency in React.js and Next.js. I am eager to kickstart my career in the tech industry.
        </p>
        <div>
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 16px rgb(255,255,255)",
              boxShadow: "0px 0px 16px rgb(255,255,255)",
              transition: { duration: 1, type: "spring", stiffness: 500 },
            }}
            onClick={handleclick}
            className="text-white animated-text border px-6 sm:px-8 text-base sm:text-lg rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 p-2 font-medium hover:from-pink-500 hover:to-orange-500"
          >
            Learn More
          </motion.button>
        </div>
        <div>
          {Showmore && (
            <p className="font-medium font-sans text-base sm:text-lg md:text-xl text-gray-300">
              I am a frontend developer with proficiency in React.js and Next.js. I am a frontend developer with proficiency in React.js and Next.js.
            </p>
          )}
        </div>
      </motion.div>
      
      {/* Image Section */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Reduced X offset for smaller screens
          whileInView={{ opacity: [0, 0.5, 1], x: 0 }}
          transition={{ duration: 2,type: "spring", stiffness: 100 }}
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 16px rgb(255,255,255)",
            boxShadow: "0px 0px 24px rgb(255,255,255)",
            transition: { duration: 1, type: "spring", stiffness: 400 },
          }}
          className="w-full sm:w-80 md:w-96 h-48 sm:h-72 md:h-96 overflow-hidden rounded-lg"
        >
          <motion.img
            src="/photos/IMG20240309180123.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
            whileInView={{ opacity: 1 }} // Ensure image fades in when in view
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Shorter transition for responsiveness
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Aboutme;
