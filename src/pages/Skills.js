import React, { useState } from "react";
import { FaHtml5, FaReact, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { motion } from "framer-motion";

const items = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> },
  { name: "Git and GitBash", icon: <FaGithub className="text-white" /> },
  { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
];

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay between animations of each child
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const HoverList = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[80vw] mx-auto mt-12 lg:mt-24">
      {/* Left section (Technologies List) */}
      <div className="w-full lg:w-1/2 p-4 bg-transparent">
        <h1 className="text-center font-sans font-medium text-2xl lg:text-4xl text-white mb-6 underline underline-offset-4 decoration-blue-800">
          Technologies
        </h1>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={listVariants}
        >
          {items.map((item, index) => (
            <motion.li
              key={index}
              className="p-2 cursor-pointer hover:bg-blue-300 text-center font-light font-sans text-lg lg:text-2xl text-gray-300"
              variants={itemVariants}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.name}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Right section (Icon Display) */}
      <motion.div className="w-full lg:w-1/2 p-4 flex bg-transparent">
        <motion.div className="h-64 lg:h-80 w-64 lg:w-80 mx-auto my-12 lg:my-24 flex items-center justify-center">
          {hoveredItem ? (
            <motion.div
              key={hoveredItem.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-9xl lg:text-[13rem]"
            >
              {hoveredItem.icon}
            </motion.div>
          ) : (
            <FaHtml5 className="text-orange-600 text-9xl lg:text-[13rem]" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HoverList;
