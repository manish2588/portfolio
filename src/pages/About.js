import React, { useState } from "react";
import { motion } from "framer-motion";
import Word from "../components/Word";

function Aboutme() {
  const [Showmore, setShowmore] = useState(false);
  const handleclick = () => {
    setShowmore(!Showmore);
  };

  return (
    <>
      <motion.div className="flex flex-col sm:flex-row px-4 sm:px-8 md:px-24 mt-8 sm:mt-12 md:mt-24 space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-12 w-full h-auto">
        <motion.div className="flex flex-col space-y-6 sm:space-y-8 w-full sm:w-1/2 px-4 sm:px-8 md:px-12 justify-center items-center">
          <motion.span
            className="border text-2xl lg:text-2xl text-white text-center border-indigo-600 rounded-full inline-block px-4 py-2 w-full font-sans font-light"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "left" }}
            viewport={{ once: true }}
          >
            Frontend Developer Portfolio
          </motion.span>
          <motion.h1
            className="text-6xl  md:text-6xl lg:text-9xl font-medium animated-text font-serif"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Manish
          </motion.h1>
          <motion.h1
            className="text-6xl md:text-6xl lg:text-9xl font-medium animated-text font-serif"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            KC
          </motion.h1>

        </motion.div>

        <motion.div className="flex justify-center items-center w-full ">
          <motion.div className="w-64 h-64 lg:w-96 lg:h-96" layout>
            <motion.img
              src="/photos/IMG20240309180123.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
              whileInView={{ scale: 1, transition: { duration: 1 } }}
              initial={{ scale: 0 }}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 16px rgb(255,255,255)",
                boxShadow: "0px 0px 24px rgb(255,255,255)",
                transition: { duration: 0.5, type: "spring", stiffness: 400 },
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="max-w-screen lg:h-screen h-[50vh] flex flex-col items-center justify-center mt-48">
        <div className="lg:w-full w-4/5 px-10 lg:px-20">
          <Word
            value="I am a frontend developer with proficiency in React.js . I am eager to
          kickstart my career in the tech industry."
          />
        </div>
      </div>
    </>
  );
}

export default Aboutme;
