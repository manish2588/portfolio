import React from "react";
import ImageSliderWithText from "../components/Slider";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { FaHtml5, FaJsSquare,FaCss3Alt } from "react-icons/fa";
function Project() {
  const images1 = [
    "/photos/PA_1.png",
    "/photos/PA_2.png",
    "/photos/PA_3.png",
    "/photos/PA_4.png",
  ];
  const images2 = [
    "/photos/PB_1.png",
    "/photos/PB_2.png",
    "/photos/PB_3.png",
    "/photos/PB_4.png",
  ];
  const images4 = ["/photos/PD_1.png", "/photos/PD_2.png", "/photos/PD_3.png"];

  const images3 = ["/photos/PC_1.png", "/photos/PC_2.png", "/photos/PC_3.png"];

  const details1 = {
    heading: "Business Website",
    tech1: "Next.js",
    tech2: "Tailwind CSS",
    images: images1,
    logo1: <RiNextjsFill className="text-white"/>,
    logo2: <RiTailwindCssFill className="text-blue-500" />,
  };
  const details2 = {
    heading: "Image Search",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    images: images2,
    logo1:<FaHtml5 className="text-orange-600"/>,
    logo2:<FaCss3Alt className="text-blue-600"/>,
    logo3:<FaJsSquare className="text-yellow-300"/>
  };

  const details3 = {
    heading: "Restaurant Website",
    tech1: "React.js",
    tech2: "Tailwind CSS",
    tech3: "Redux Toolkit",
    images: images3,
    logo1: <FaReact className="text-blue-400" />,
    logo2: <RiTailwindCssFill className="text-blue-500" />,
    logo3: <TbBrandRedux className="text-purple-600" />,
  };
  const details4 = {
    heading: "Youtube Clone",
    tech1: "React.js",
    tech2: "Tailwind CSS",
    tech3: "Youtube API",
    images: images4,
    logo1: <FaReact className="text-blue-400" />,
    logo2: <RiTailwindCssFill className="text-blue-500" />,
    logo3: <FaYoutube className="text-red-500" />,
  };

  return (
    <div className="mt-16 max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-sans text-center animated-text font-semibold flex flex-col space-y-12">
        MY PROJECTS
      </h1>
      <div className=" mb-10">
        <ImageSliderWithText {...details1} />
      </div>

      <div className="mt-16">
        <ImageSliderWithText {...details4} />
      </div>
      <div className="mt-16">
        <ImageSliderWithText {...details3} />
      </div>
      <div className="mt-16">
        <ImageSliderWithText {...details2} />
      </div>
    </div>
  );
}

export default Project;
