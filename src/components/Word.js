import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

function Paragraph({ value }) {
  const pRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: pRef,
    offset: ["0.2 0.80", "end 0.7"],
  });

  const words = value.split(" ");

  return (
    <motion.div
      className="w-[90vw] font-serif lg:text-8xl text-4xl lg:font-extrabold font-bold lg:h-full h-full"
      ref={pRef}
    > 
      {/* Flex container for words with spacing */}
      <div className="flex flex-wrap gap-4 lg:gap-x-4 lg:gap-y-10">
        {words.map((item, index) => {
          const start = index / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={index} range={[start, end]} progress={scrollYProgress}>
              {item}
            </Word>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Paragraph;

function Word({ children,range,progress }) {
  const opacity=useTransform(progress,range,[0,1])
  return (
    <span className="relative inline-block">
      {/* Background word with low opacity */}
      <motion.span className="absolute opacity-20 text-gray-800" style={{opacity:0.1}}>{children}</motion.span>
      {/* Foreground word with dynamic opacity based on scroll */}
      <motion.span className="text-gray-950" style={{opacity}}>{children}</motion.span>
    </span>
  );
}
