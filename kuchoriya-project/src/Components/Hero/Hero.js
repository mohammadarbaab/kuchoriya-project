import React, { useState } from "react";
import hero_image from "../../assests/hero-image.jpg";
import ios_icon from "../../assests/IOS-icon.png";
import frontend from "../../assests/react_js_icon.png";
import database from "../../assests/MySQL_icon.png";
import backend from "../../assests/nodejs_icon.png";
import cms from "../../assests/shopify_icon.png";
import infra from "../../assests/google_cloud_icon.png";
import aws from "../../assests/aws_cloud_icon.png";

function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const items = [
    { name: "mobile", image: ios_icon },
    { name: "frontend", image: frontend },
    // { name: "backend", image: database },
    { name: "database", image: backend },
    { name: "cloud", image: infra },
    { name: "cms", image: cms },
    { name: "infra & devops", image: aws },
  ];
  return (
    <div
      className="flex w-[100%] justify-start items-start flex-wrap flex-row lg:h-auto h-auto overflow-x-hidden md:pl-10 pl-4 py-10 pr-2"
      style={{
        backgroundImage: `linear-gradient(356.01deg, rgba(0, 0, 139, 0.35) 50.8%, rgba(7, 47, 87, 0) 94.58%), linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(0, 0, 139, 0.5)), url(${hero_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div className="flex flex-wrap gap-10 flex-col md:items-start items-center leading-[30px]">
        <div className="flex flex-col flex-wrap gap-4">
          <h1 className="font-[600] text-[36px] text-white leading-[40px]">
            Innovative software solutions for a changing world
          </h1>
          <p className="font-[500] text-[20px] md:w-[60%] w-[100%] leading-[40px]">
            We design software solutions that accelerate progress and adapt to
            our world's ever-changing landscape.
          </p>
        </div>
        <div className="h-auto flex flex-wrap md:flex-row flex-col gap-6 md:justify-start md:items-start items-center justify-center">
          <div className="flex flex-wrap md:justify-start items-center justify-center gap-5 ">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-wrap flex-col items-center justify-center w-[160px] h-[190px] gap-5 rounded-xl transition-all duration-300 ease-in-out ${
                  hoveredIndex === index
                    ? "bg-white text-blue-950"
                    : "bg-[#E8FBFF] bg-opacity-60 text-black"
                }`}
                onMouseEnter={() => setHoveredIndex(index)} // Set the hovered item
                onMouseLeave={() => setHoveredIndex(null)} // Reset when mouse leaves
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain" // Adjust size and styling as needed
                />
                <p className="font-[500] text-[18px]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="items-center w-[250px] bg-[#F54D4D] rounded-[20px] text-white font-[500] hover:bg-orange-50 hover:text-blue-950 flex flex-wrap h-[52px] justify-center text-[18px]">
          Free Consulting
        </button>
      </div>
    </div>
  );
}

export default Hero;
