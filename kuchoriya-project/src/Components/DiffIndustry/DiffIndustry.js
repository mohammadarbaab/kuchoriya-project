import React from "react";
import foodIcon from "../../assests/foodIcon.png";
import gameIcon from "../../assests/gameIcon.png";
import sportsIcon from "../../assests/sportsIcon.png";
import shoppingIcon from "../../assests/shoppinhIcon.png";
import healthIcon from "../../assests/health-fitness-icon.png";
import eduactionIcon from "../../assests/educationElearning.png";
import mediaIcon from "../../assests/mediaIcon.png";
import realStateIcon from "../../assests/real-estate-icon.png";
import tourIcon from "../../assests/tour-travels-icon.png";
import utilityIcon from "../../assests/utility-icon.png";
import financeIcon from "../../assests/finance-banking-icon.png";
import onDemandIcon from "../../assests/on-demand-icon.png";

function DiffIndustry() {
  const categories = [
    { icon: foodIcon, label: "Food & Restaurants" },
    { icon: gameIcon, label: "Games" },
    { icon: sportsIcon, label: "Sports" },
    { icon: shoppingIcon, label: "Shopping" },
    { icon: healthIcon, label: "Health & Fitness" },
    { icon: eduactionIcon, label: "Education & eLearning" },
    { icon: mediaIcon, label: "Media" },
    { icon: realStateIcon, label: "Real Estate" },
    { icon: tourIcon, label: "Tours & Travels" },
    { icon: utilityIcon, label: "Utilities" },
    { icon: financeIcon, label: "Finance & Banking" },
    { icon: onDemandIcon, label: "On Demand" },
  ];
  return (
    <div className="flex flex-col gap-12 py-16 bg-blue-950 flex-wrap">
      <div className="flex flex-col gap-4 md:px-32 px-4 justify-center items-center">
        <h2 className="font-[500] text-[28px] text-white">
          Best IT Consulting Compnay Across Different Industry Verticals
        </h2>
        <p className="text-justify text-gray-400">
          We have successfully connected countless businesses with great
          software developers for bespoke development thanks to our track record
          of delivering high-quality projects under expert supervision and
          within budget. Partner with us - the premier provider of custom
          software development - to hire programmers for numerous industry
          verticals. We have a vast reach and competence across multiple
          sectors.
        </p>
      </div>

      <div className="flex flex-wrap md:px-32 px-2 gap-2 justify-center items-center md:gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center gap-4 p-4 hover:bg-gray-900 hover:text-white cursor-pointer md:w-[300px] border rounded-md"
          >
            <img src={category.icon} alt={category.label} className="w-8 h-8" />
            <h2 className="text-[18px] font-[500] text-[#F54D4D] hover:text-white">
              {category.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiffIndustry;
