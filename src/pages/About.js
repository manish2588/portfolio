import React, { useState } from "react";
import { motion } from "framer-motion";

function Aboutme() {
  const [Showmore, setShowmore] = useState(false);
  const handleclick = () => {
    setShowmore(!Showmore);
  };

  return (
    <motion.div className="flex flex-col sm:flex-row px-4 sm:px-8 md:px-24 mt-8 sm:mt-12 md:mt-24 space-y-8 sm:space-y-0 sm:space-x-8 md:space-x-12 w-full h-auto">
      <motion.div
        className="flex flex-col space-y-6 sm:space-y-8 w-full sm:w-1/2 px-4 sm:px-8 md:px-12"
      >
        <motion.span className="border text-white border-indigo-600 rounded-full inline-block px-4 py-2 w-auto sm:w-48 md:w-60 font-sans font-light"
        initial={{scaleX:0,opacity:0}}
        whileInView={{scaleX:1,opacity:1}}
        transition={{duration:0.5}}
        style={{transformOrigin:"left"}}
        viewport={{once:true}}
        >
          Frontend Developer Portfolio
        </motion.span>
        <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-medium animated-text font-sans"
        initial={{y:50,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}
        >
          Manish KC
        </motion.h1>
        <motion.p className="font-light font-sans text-base sm:text-lg md:text-xl text-gray-300"
         initial={{y:50,opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:1}}
          viewport={{once:true}}
        >
          I am a frontend developer with proficiency in React.js . I am eager to
          kickstart my career in the tech industry.
        </motion.p>
        <div>
          <motion.button
           layout
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
        <motion.div
        layout
        >
          {Showmore && (
            <p className="font-light font-sans text-base sm:text-lg md:text-xl text-gray-300">
              I am a frontend developer with proficiency in React.js . I am a
              frontend developer with proficiency in React.js.
            </p>
          )}
        </motion.div>
      </motion.div>

      <motion.div className="flex justify-center items-center w-full "
      
      >
       <motion.div className="w-64 h-64 lg:w-96 lg:h-96"
       layout
       >
       <motion.img
          src="/photos/IMG20240309180123.jpg"
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
          whileInView={{ scale:1,transition:{duration:1} }}
          initial={{ scale:0 }}
         
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
  );
}

export default Aboutme;
