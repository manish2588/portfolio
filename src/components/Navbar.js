'use client';

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const list_variants = {
    hidden: { opacity: 0, y: -1000 },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 1,
      delay: 0.4,
      type: 'spring',
      stiffness: 30,
    }
  };

  return (
    <motion.nav
      className="bg-transparent p-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-lg backdrop-brightness-50"
    >
      <div className="container mx-auto flex items-center justify-between h-16 relative">
        {/* CV Button */}
        <motion.a
          variants={list_variants}
          initial="hidden"
          animate="visible"
          transition="transition"
          whileHover={{
            scale: 1.2,
            textShadow: '0px 0px 16px rgb(255,255,255)',
            boxShadow: '0px 0px 16px rgb(255,255,255)',
            transition: { duration: 1, type: 'spring', stiffness: 500 }
          }}
          href="/file/cv.pdf"
          download
          className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-700 font-semibold font-sans"
        >
          RESUME
        </motion.a>
        <div className="lg:hidden flex  items-center  space-x-4 p-4">
          <a href="https://www.facebook.com/manish.kc.94617999" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
            <FaFacebook className="text-blue-500" />
          </a>
          <a href="https://github.com/manish2588" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
            <FaGithub />
          </a>
        </div>
        {/* Hamburger Menu for small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`lg:flex items-center space-x-8 my-auto p-2 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <motion.ul 
            variants={list_variants}
            initial="hidden"
            animate="visible"
            className={`lg:flex space-x-8 my-auto ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-gray-800 text-white p-4 z-40' : 'hidden'} lg:relative lg:top-0 lg:bg-transparent lg:p-0`}
          >
            <motion.li
              variants={list_variants}
              transition={{
                duration: 1,
                delay: 0.2,
                type: 'spring',
                stiffness: 30,
              }}
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="navbar-link text-white text-2xl font-semibold hover:text-gray-400 px-4 py-2 cursor-pointer"
              >
                About Me
              </Link>
            </motion.li>
            <motion.li
              variants={list_variants}
              transition={{
                duration: 1,
                delay: 0.4,
                type: 'spring',
                stiffness: 30,
              }}
            >
              <Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="navbar-link text-white text-2xl font-semibold hover:text-gray-400 px-4 py-2 cursor-pointer"
              >
                Skills
              </Link>
            </motion.li>
            <motion.li
              variants={list_variants}
              transition={{
                duration: 1,
                delay: 0.6,
                type: 'spring',
                stiffness: 30,
              }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="navbar-link text-white text-2xl font-semibold hover:text-gray-400 px-4 py-2 cursor-pointer"
              >
                Projects
              </Link>
            </motion.li>
            <motion.li
              variants={list_variants}
              transition={{
                duration: 1,
                delay: 0.8,
                type: 'spring',
                stiffness: 30,
              }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="navbar-link text-white text-2xl font-semibold hover:text-gray-400 px-4 py-2 cursor-pointer"
              >
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </div>

        {/* Social Icons for larger screens */}
        <div className="hidden lg:flex space-x-4">
          <a href="https://www.facebook.com/manish.kc.94617999" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
            <FaFacebook className="text-blue-500" />
          </a>
          <a href="https://github.com/manish2588" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Social Icons for small screens */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 mt-4 bg-gray-800 p-4">
          <a href="https://www.facebook.com/manish.kc.94617999" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
            <FaFacebook className="text-blue-500" />
          </a>
          <a href="https://github.com/manish2588" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
            <FaGithub />
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
