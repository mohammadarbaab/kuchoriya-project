import React from "react";
import kuchoriyaLogo from "../../assests/kuchoriya_Logo.png";
import star from "../../assests/star.png";
import bestWebLogo from "../../assests/dubai.svg";
import arrow from "../../assests/right-arrow.png";

function Footer() {
  return (
    <div className="flex flex-col flex-wrap justify-center w-full items-center bg-blue-950 md:py-12 py-6 gap-4">
      <div className="flex md:flex-row flex-col flex-wrap bg-blue-950 md:justify-between items-center md:px-4 md:p-0 p-4 justify-center gap-4">
        <img src={kuchoriyaLogo} alt="kuchoriya-Logo" className="w-[100px]" />
        <div className="flex md:flex-row flex-wrap md:w-[50%] w-full justify-center md:items-start items-center md:gap-6 gap-4 flex-col">
          <p className="text-justify md:w-[70%] text-white w-[80%]">
            Kuchoriya is an ISO 9001:2015 Certified Company with its physical
            presence in the US, India and Australia and serving its clients
            across the globe.
          </p>
          <button className="items-center bg-[#F54D4D] rounded-md text-white font-[500] hover:text-white hover:bg-blue-800 md:px-2 md:h-[45px] flex flex-wrap px-2 h-[45px]">
            Request a Qoute
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 md:mt-4">
        <div className="flex flex-row gap-2 flex-wrap">
          <img src={star} alt="stars" className="w-[20px]" />
          <img src={star} alt="stars" className="w-[20px]" />
          <img src={star} alt="stars" className="w-[20px]" />
          <img src={star} alt="stars" className="w-[20px]" />
          <img src={star} alt="stars" className="w-[20px]" />
        </div>
        <p className="font-[500] text-[14px] text-white">
          Rated 5/5 based on 300+ clients
        </p>
      </div>
      <div className="flex flex-row md:justify-around flex-wrap w-full justify-center">
        <div className="flex flex-col flex-wrap justify-start items-start p-4 mt-2">
          <h3 className="font-[700] text-[22px] mb-2 text-[#F54D4D]">
            Our Services
          </h3>{" "}
          {/* Heading added */}
          <ul className="text-white flex flex-col gap-2">
            <li>Mobile App Development</li>
            <li>Web Development</li>
            <li>Game Development</li>
            <li>Blockchain Development</li>
            <li>OutStaffing</li>
            <li>UI/UX Design Research</li>
            <li>Quality Analysis</li>
            <li>CTO Services</li>
            <li>Referral Partner Program</li>
          </ul>
        </div>
        <div className="flex flex-col flex-wrap justify-start items-start p-4 mt-2">
          <h3 className="font-[700] text-[22px] mb-2 text-[#F54D4D]">
            Solutions
          </h3>{" "}
          {/* Heading added */}
          <ul className="text-white flex flex-col gap-2">
            <li>E-commerce Solutions</li>
            <li>Real-estate Solutions</li>
            <li>E-learning Solutions</li>
            <li>Fleet Management</li>
            <li>Insurance Solutions</li>
            <li>Healthcare Solutions</li>
            <li>Dating Applications</li>
          </ul>
        </div>
        <div className="flex flex-col flex-wrap justify-start items-start p-4 mt-2">
          <h3 className="font-[700] text-[22px] mb-2 text-[#F54D4D]">
            Quick Links
          </h3>{" "}
          {/* Heading added */}
          <ul className="text-white flex flex-col gap-2">
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>We are Hiring</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row gap-8 flex-wrap justify-center items-center mt-6">
        <div className="flex flex-col gap-4 px-4 flex-wrap">
          <p className="text-yellow-300 font-[500] text-[16px]">
            Sign up for the Newsletters
          </p>
          <div className="relative flex-wrap flex">
            <input
              placeholder="Enter your email"
              className="border p-2 rounded-md pl-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <img
              src={arrow}
              alt="arrow"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-[20px] cursor-pointer"
            />
          </div>
        </div>
        <img src={bestWebLogo} alt="best_web" className="w-[100px]" />
      </div>
    </div>
  );
}

export default Footer;
