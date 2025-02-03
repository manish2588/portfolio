import React, { useRef } from "react";
import ImageSliderWithText from "../components/Slider";
import {
  FaReact,
  FaYoutube,
  FaHtml5,
  FaJsSquare,
  FaCss3Alt,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { useScroll } from "framer-motion";
function Project() {
  const mainRef = useRef();
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  });
  const projectDetails = [
    {
      heading: "Business Website",
      tech1: "Next.js",
      tech2: "Tailwind CSS",
      images: [
        "/photos/PA_1.png",
        "/photos/PA_2.png",
        "/photos/PA_3.png",
        "/photos/PA_4.png",
      ],
      logos: [
        <RiNextjsFill className="text-white" />,
        <RiTailwindCssFill className="text-blue-500" />,
      ],
    },
    {
      heading: "Restaurant Website",
      tech1: "React.js",
      tech2: "Tailwind CSS",
      tech3: "Redux Toolkit",
      images: ["/photos/PC_1.png", "/photos/PC_2.png", "/photos/PC_3.png"],
      logos: [
        <FaReact className="text-blue-400" />,
        <RiTailwindCssFill className="text-blue-500" />,
        <TbBrandRedux className="text-purple-600" />,
      ],
    },
    {
      heading: "Youtube Clone",
      tech1: "React.js",
      tech2: "Tailwind CSS",
      tech3: "Youtube API",
      images: ["/photos/PD_1.png", "/photos/PD_2.png", "/photos/PD_3.png"],
      logos: [
        <FaReact className="text-blue-400" />,
        <RiTailwindCssFill className="text-blue-500" />,
        <FaYoutube className="text-red-500" />,
      ],
    },
    {
      heading: "Image Search",
      tech1: "HTML",
      tech2: "CSS",
      tech3: "JavaScript",
      images: [
        "/photos/PB_1.png",
        "/photos/PB_2.png",
        "/photos/PB_3.png",
        "/photos/PB_4.png",
      ],
      logos: [
        <FaHtml5 className="text-orange-600" />,
        <FaCss3Alt className="text-blue-600" />,
        <FaJsSquare className="text-yellow-300" />,
      ],
    }
  ];

  return (
    <div className="mt-[20vh] mb-[30vh]" ref={mainRef}>
      {projectDetails.map((project, index) => {
        const targetScale = 1 - (projectDetails.length - index) * 0.05;
        return (
          <div
            className="max-w-screen h-screen flex flex-col justify-center items-center sticky top-0 px-8"
            key={index}
          >
            <ImageSliderWithText
              {...project}
              range={[index * 0.25, 1]}
              progress={scrollYProgress}
              targetScale={targetScale}
              i={index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Project;
