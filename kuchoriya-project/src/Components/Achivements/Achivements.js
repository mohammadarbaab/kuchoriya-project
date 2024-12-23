import React from "react";
import growthIcon from "../../assests/growthIcon.png";
import telentedIcon from "../../assests/telentIcon.png";
import appIcon from "../../assests/projectIcon.png";
import projectsIcon from "../../assests/projectIcon.png";
import countryIcon from "../../assests/CountriesIcon.png";
import client from "../../assests/clientIcon.png";

function Achivements() {
  const achievementsData = [
    {
      icon: growthIcon,
      years: 15,
      text: "Years Experience",
    },
    {
      icon: telentedIcon,
      years: 230,
      text: "Telented Squads",
    },
    {
      icon: appIcon,
      years: 400,
      text: "Apps Developed",
    },
    {
      icon: projectsIcon,
      years: 700,
      text: "Projects Delivered",
    },
    {
      icon: countryIcon,
      years: 50,
      text: "Countries Reached",
    },
    {
      icon: client,
      years: 300,
      text: "Clients Satisfaction",
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center md:w-full gap-4">
      <div className="flex flex-wrap px-4 justify-center items-center gap-6">
      {achievementsData.map((achievement, index) => (
  <div
    key={index}
    className="flex items-center bg-white border-[2px] border-[#1E3A8A] rounded-[20px] shadow-lg w-full max-w-[350px] h-[100px] px-6 py-4 gap-4 hover:scale-105 transform transition-all duration-300"
  >
    {/* Image */}
    <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full overflow-hidden">
      <img
        src={achievement.icon}
        alt="icon"
        className="object-cover w-full h-full"
      />
    </div>

    {/* Text */}
    <p className="text-[#1E3A8A] text-[28px] font-bold flex flex-col justify-center items-start gap-1">
      <span>{achievement.years}+</span>
      <span className="text-black text-[16px] font-medium">{achievement.text}</span>
    </p>
  </div>
))}

      </div>
    </div>
  );
}

export default Achivements;
