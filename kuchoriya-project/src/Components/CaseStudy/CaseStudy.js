import React, { useState, useEffect } from "react";
import case1 from "../../assests/case1.png";
import case2 from "../../assests/case2.png";
import case3 from "../../assests/case3.png";

function CaseStudy() {
  // Define content array
  const content = [
    {
      img: case1,
      title: "Drafters King",
      text: "Drafters King is a fantasy sports platform that allows users to play fantasy sports with different categories. It is an online game where users create teams and compete in various sports leagues.",
    },
    {
      img: case2,
      title: "IPPOS",
      text: "Its an On-demand service app, where users can book an horse ride from the app and pay online within the app for the ride/time slot. Also able to track.....",
    },
    {
      img: case3,
      title: "G-Alert",
      text: "The concept of this app is to show nearby incident which happened in last 48hrs. It allow users to create an alert regarding any incident they just sa.....",
    },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 2000); // Change image every 3 seconds (3000ms)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
  return (
    <div className="flex flex-col gap-2 flex-wrap justify-start items-center pb-6">
      <div className="flex flex-col flex-wrap w-auto h-auto md:px-36 md:gap-6 gap-4 leading-[25px] py-8 px-8 bg-white">
        <h1 className="md:text-[36px] md:font-[700] text-center md:leading-[40px] text-[30px] font-[700] leading-[40px] text-blue-950">
          Case Study
        </h1>
        <p className="text-[18px] font-[500] text-black text-justify">
          We work with a wide variety of clients, from well-known international
          brands and media organizations to cutting-edge startups and
          well-funded businesses.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:w-[80%] w-full justify-center items-center p-4">
        {/* Image section */}
        <div className="flex flex-wrap w-full md:w-[50%] mb-4 md:mb-0">
          <div
            style={{
              backgroundImage: `url(${content[currentImageIndex].img})`,
              height: "300px", // Adjust height as needed
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            alt="case1"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Text section */}
        <div className="md:w-[50%] flex flex-col p-4 md:p-8">
          <h2 className="font-semibold text-2xl md:text-3xl text-gray-900 mb-2">
            {content[currentImageIndex].title}
          </h2>
          <p className="font-normal text-base md:text-lg text-gray-800 leading-[30px]">
            {content[currentImageIndex].text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
