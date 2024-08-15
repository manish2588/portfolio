import React from 'react';
import ImageSliderWithText from '../components/Slider';

function Project() {
  const images1 = [
    "/photos/PA_1.png",
    "/photos/PA_2.png",
    "/photos/PA_3.png",
    "/photos/PA_4.png",
  ];
  const details1 = {
    heading: "Business Website",
    description1: "It showcases the services, portfolio, and detailed information about the business.",
    description2: "It contains the Join Us and Contact Us forms for sending queries and showing interest.",
    tech: "Next.js Tailwind CSS",
    images: images1,
  };
  
  const images2 = [
    "/photos/PB_1.png",
    "/photos/PB_2.png",
    "/photos/PB_3.png",
    "/photos/PB_4.png",
  ];
  const details2 = {
    heading: "Image Search",
    tech:"HTML CSS JavaScript",
    description1:"It display images according to search query.",
    description2:"It also contains LoadMore Button if user want more images.",
    images: images2,
  };

  return (
    <div className='mt-16'>
      <h1 className='text-4xl font-sans text-center animated-text font-semibold flex flex-col space-y-12'>MY PROJECTS</h1>
      <div className=" mb-10">
        <ImageSliderWithText {...details1} />
      </div>
      <div className="mt-16">
        <ImageSliderWithText {...details2} />
      </div>
    </div>
  );
}

export default Project;
