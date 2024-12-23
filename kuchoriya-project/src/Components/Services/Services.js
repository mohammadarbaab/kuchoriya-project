import React, { useState } from "react";
import items from "./ServiceData";
import downArrow from "../../assests/down-arrow.png";

function Services() {
  // State to manage which section is open
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTechIndex, setActiveTechIndex] = useState(null);
  const toggleTechDescription = (techIndex) => {
    setActiveTechIndex(activeTechIndex === techIndex ? null : techIndex);
  };

  // Toggle function to show/hide the description
  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if the same is clicked, else open
  };
  return (
    <div className="flex flex-wrap flex-col justify-center items-center w-full h-auto gap-10">
      <div className="flex flex-col flex-wrap w-auto h-auto md:px-36 md:gap-6 gap-4 leading-[25px] py-8 px-8 bg-blue-950">
        <h1 className="md:text-[36px] md:font-[700] text-center md:leading-[40px] text-[30px] font-[700] leading-[40px] text-white">
          Technologies <span className="text-[#F54D4D]">We work with</span>
        </h1>
        <p className="text-[18px] font-[500] text-gray-300 text-justify">
          It's crucial to collaborate with specialists who are knowledgeable
          about the newest technologies in today's quickly increasing digital
          landscape.
        </p>
      </div>
      <div className="flex flex-wrap w-[100%]  justify-center h-auto gap-4 py-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 w-[80%] bg-white border border-blue-950 rounded-lg p-4"
          >
            {/* Category Header */}
            <div
              className="flex flex-row flex-wrap justify-between cursor-pointer items-center"
              onClick={() => toggleDescription(index)}
            >
              <div className="flex flex-row gap-4 items-center cursor-pointer">
                <img
                  src={item.icon}
                  alt={item.text}
                  className="w-[30px] h-[30px]"
                />
                <p className="text-black font-[500]">{item.text}</p>
              </div>
              <img
                src={downArrow}
                alt="down-arrow"
                className="w-[20px] h-[20px]"
              />
            </div>
            {/* Category Description */}
            {openIndex === index && (
              <div className="text-black text-justify px-2 font-[500] text-[16px]">
                <p>{item.description}</p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Technologies:</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    {item.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="bg-blue-900 p-4 border rounded-lg cursor-pointer border-white"
                        onClick={() => toggleTechDescription(techIndex)}
                      >
                        <p className="text-white font-semibold">{tech.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
