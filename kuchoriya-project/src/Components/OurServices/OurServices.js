import React, { useState } from "react";
import ourserviceBg from "../../assests/ourservicesBg.png";
import webDevBg from "../../assests/webdevBg.png";
import mobileDevBg from "../../assests/mobiledevBg.png";
import uiuxBg from "../../assests/uiuxBg.png";
import blockchainBg from "../../assests/blockchainBg.png";
import quantityBg from "../../assests/quantityAnylisBg.png";
import productBg from "../../assests/productDevBg.png";
import dmBg from "../../assests/digitalBg.png";
import ctoBg from "../../assests/ctoBg.png";

function OurServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const items = [
    // { name: "mobile", image: ourserviceBg },
    {
      name: "Web Development",
      image: webDevBg,
      text: "Our customized web development services help your business craft interactive and engaging web experiences for customers.",
    },
    // { name: "backend", image: database },
    {
      name: "Mobile App Development",
      image: mobileDevBg,
      text: "Custom mobile app solutions for all platforms and devices can revolutionize your business.",
    },
    {
      name: "UI/UX Design",
      image: uiuxBg,
      text: "Our skilled UI/UX designers produce cutting-edge, responsive interfaces that improve the perception of your brand and simplify user interactions.",
    },
    {
      name: "Blockchain Development",
      image: blockchainBg,
      text: "Our blockchain knowledge is unmatched, from developing Smart Contracts to creating decentralized apps.",
    },
    {
      name: "Quality Analysis",
      image: quantityBg,
      text: "Customized Hybrid testing solutions that are specifically tailored to fit your needs for the best outcomes.",
    },
    {
      name: "Product Development",
      image: productBg,
      text: "With our agile product development process and continuous integration and delivery, we specialize in reducing time-to-market from ideation to launch.",
    },
    {
      name: "Digital Marketing",
      image: dmBg,
      text: "We provide comprehensive digital marketing services that help businesses increase online visibility, drive traffic, and generate leads and sales.",
    },
    {
      name: "CTO Services",
      image: ctoBg,
      text: "Customized Hybrid testing solutions that are specifically tailored to fit your needs for the best outcomes.",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap gap-2  w-full justify-center items-center">
      <div className="flex flex-wrap w-[80%] gap-3 animate-slide-continuous justify-center items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-wrap flex-col w-[250px] h-[250px] gap-5 rounded-xl transition-all duration-300 ease-in-out relative px-3 py-4 border border-blue-950 cursor-pointer ${
              hoveredIndex === index
                ? "bg-white text-blue-950 shadow-lg scale-105" // Hover effect with shadow and scaling
                : "bg-[#E8FBFF] bg-opacity-60 text-black shadow-md" // Default state with mild shadow
            }`}
            onMouseEnter={() => setHoveredIndex(index)} // Set the hovered item
            onMouseLeave={() => setHoveredIndex(null)} // Reset when mouse leaves
            style={{
              backgroundImage: `url(${item.image})`, // Set the background image from the items array
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundPosition: "center", // Centers the background image
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-80 z-1 rounded-xl"></div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col gap-4 mt-3">
              <p className="font-[700] text-[20px] leading-[20px] text-center text-orange-500">
                {item.name}
              </p>
              <p className="text-[14px] justify-start font-[500]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
