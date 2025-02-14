import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

// Custom hook to compute opacity values for each word based on scroll progress
function useWordOpacity(scrollYProgress, words) {
  return words.map((_, index) => {
    const start = index / words.length; // Start point for opacity transition
    const end = start + 1 / words.length; // End point for opacity transition
    return useTransform(scrollYProgress, [start, end], [0, 1]); // Opacity transition from 0 to 1
  });
}

function Word({ value }) {
  const pRef = useRef(null);

  // Track scroll progress relative to the target element
  const { scrollYProgress } = useScroll({
    target: pRef,
    offset: ["0.2 0.80", "end 0.80"], // Scroll range for the effect
  });

  const words = value.split(" "); // Split the input text into individual words

  // Compute opacity values for each word using the custom hook
  const opacityValues = useWordOpacity(scrollYProgress, words);

  return (
    <motion.div
      className="w-full font-serif lg:text-8xl text-3xl lg:font-extrabold font-bold lg:h-full h-full"
      ref={pRef}
    >
      {/* Flex container for words with spacing */}
      <div className="flex flex-wrap gap-2 lg:gap-x-4 lg:gap-y-8">
        {words.map((word, index) => (
          <span key={index} className="relative inline-block">
            {/* Background word with low opacity */}
            <span className="absolute opacity-20 text-slate-200">
              {word}
            </span>
            {/* Foreground word with dynamic opacity based on scroll */}
            <motion.span
              className="text-slate-400 "
              style={{ opacity: opacityValues[index] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default Word;