import React from 'react';
import InfoBoxes from '../components/ContactInfo';

function Contact() {
  return (
    <div className='bg-transparent p-2 backdrop-blur-lg backdrop-brightness-30 mb-4'>
      <div className="mt-10 mb-10 flex flex-col items-center">
        <p className="text-xl md:text-2xl lg:text-3xl text-blue-500 font-semibold">GET IN TOUCH</p>
        <div className="mt-10 mb-10">
        <InfoBoxes/>
        </div>
        </div>
    </div>
  )
}

export default Contact
