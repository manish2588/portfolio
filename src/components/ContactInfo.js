import React from 'react';
import { FaArrowRight,FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const InfoBoxes = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {/* Call Us Box */}
      <motion.a
       initial={{ opacity: 0, y: -200 }}
       whileInView={{ opacity: [0, 0.25, 0.5, 0.75, 1], y: 0 }}
       transition={{ duration: 2, type: "spring", stiffness: 30 }}
        href="tel:9808952367"
        className="relative flex items-center w-full sm:w-64"
      >
        <div className="relative w-full bg-transparent border border-white text-black rounded-l-lg overflow-hidden transition-all duration-500 group p-2">
          <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 p-2">
            <div className="text-center">
              <p className="text-lg">9808952367</p>
            </div>
          </div>
          <div className="flex items-center text-gray-300 justify-center text-lg font-semibold transition-opacity duration-500 group-hover:opacity-0">
            Call
          </div>
        </div>
        <div className="w-auto h-full flex items-center bg-blue-500 text-white p-2 rounded-r-lg">
          <FaArrowRight />
        </div>
      </motion.a>

      {/* Visit Us Box */}
      <motion.a
       initial={{ opacity: 0, y: -200 }}
       whileInView={{ opacity: [0, 0.25, 0.5, 0.75, 1], y: 0 }}
       transition={{ duration: 2,delay:0.2, type: "spring", stiffness: 30 }}
        href="https://www.facebook.com/manish.kc.94617999"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center w-full sm:w-64"
      >
        <div className="relative w-full bg-transparent border border-white text-black rounded-l-lg overflow-hidden transition-all duration-500 group p-2">
          <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 p-2">
            <div className="text-center">
              <p className="text-lg">Facebook</p>
            </div>
          </div>
          <div className="flex items-center text-gray-300 justify-center text-lg font-semibold transition-opacity duration-500 group-hover:opacity-0">
            Connect with me <span className='pl-2'><FaFacebook className="text-2xl text-blue-500" /></span>
          </div>
        </div>
        <div className="w-auto h-full flex items-center bg-blue-500 text-white p-2 rounded-r-lg">
          <FaArrowRight />
        </div>
      </motion.a>

      {/* Email Box */}
      <motion.a
       initial={{ opacity: 0, y: -200 }}
       whileInView={{ opacity: [0, 0.25, 0.5, 0.75, 1], y: 0 }}
       transition={{ duration: 2,delay:0.4, type: "spring", stiffness: 30 }}
        href="mailto:manishkc258@gmail.com"
        className="relative flex items-center w-full sm:w-64"
      >
        <div className="relative w-full bg-transparent border border-white text-black rounded-l-lg overflow-hidden transition-all duration-500 group p-2">
          <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 p-2">
            <div className="text-center">
              <p className="text-lg">manishkc258@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center text-gray-300 justify-center text-lg font-semibold transition-opacity duration-500 group-hover:opacity-0">
            Email
          </div>
        </div>
        <div className="w-auto h-full flex items-center bg-blue-500 text-white p-2 rounded-r-lg">
          <FaArrowRight />
        </div>
      </motion.a>
    </div>
  );
};

export default InfoBoxes;
