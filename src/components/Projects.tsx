// import React from 'react'
import Strings from "../Shared/Strings";
import img1 from "../../src/assets/eee.avif";
import img2 from "../../src/assets/img2.webp";
import img3 from "../../src/assets/img3.jpg";
import img4 from "../../src/assets/img4.webp";

function Projects() {
    const imagesList = [
        {
          id: 1,
          title: Strings.PROJECT_DES,
          src: img1, // Replace with actual image path
        },
        {
          id: 2,
          title: Strings.PROJECT_DES,
          src: img2,
        },
        {
          id: 3,
          title: Strings.PROJECT_DES,
          src: img3,
        },
        {
          id: 4,
          title: Strings.PROJECT_DES,
          src: img4,
        },
      ];

  return (
    <div className="px-12 mt-24">
    <div className="flex items-center ">
        <div className="w-[20px] h-[7px] bg-blue-950 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2>{Strings.PROJECT_TITLE}</h2>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <div className="w-[20px] h-[7px] bg-blue-950 rounded-full"></div>
      </div>


      <div className="px-12 mt-16 mb-12">
      <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
  {imagesList.map((image) => (
    <div key={image.id} className="flex flex-col items-center gap-4 text-center">
      <img 
        src={image.src} 
        alt={image.title} 
        className="w-[100px] h-[100px] object-cover rounded-lg hover:scale-110 transition-all cursor-pointer"
      />
      <h2 className="mt-3 font-bold">{image.title}</h2>
    </div>
  ))}
</div>

    </div>
    </div>
  )
}

export default Projects