import React, { useState } from "react";
import kuchoriya_logo from "../../assests/kuchoriya_Logo.png";
import arrow_icon from "../../assests/arrow-down.png";
import team_image from "../../assests/team_image.png";
import { TfiAlignRight } from "react-icons/tfi";
import { RxCrossCircled } from "react-icons/rx";

function Navbar() {
  const [showPopup, setShowPopup] = useState(null); // Show specific popup by index
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu open/close state

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle menu open/close
    setShowPopup(null); // Close the popup when menu is toggled
  };

  const togglePopup = (index) => {
    setShowPopup(showPopup === index ? null : index); // Toggle popup visibility
  };

  const navItems = [
    "Company",
    "Services",
    "Technologies",
    "Hire Developers",
    "Portfolio",
    "Blogs",
  ];

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="w-full bg-blue-950 flex lg:justify-between lg:px-12 lg:py-3 lg:items-center lg:z-10 md:justify-center md:gap-5 md:py-2 md:items-center justify-between px-3 py-3 items-center">
        <img src={kuchoriya_logo} alt="kuchoriya_logo" className="w-[80px]" />
        <ul className="flex lg:space-x-6 md:space-x-5">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-gray-300 lg:text-[16px] font-[500] text-white flex items-center gap-1 sm:hidden md:flex lg:flex hidden"
              onClick={() => togglePopup(index)} // Toggle popup for clicked item
            >
              <span className="">{item}</span>
              <img src={arrow_icon} className="h-3 w-3" />{" "}
              {/* Add size to the arrow icon if needed */}
            </li>
          ))}
        </ul>

        <button className="lg:px-5 items-center bg-[#F54D4D] rounded-md text-white font-[500] hover:bg-orange-50 hover:text-blue-950 md:px-2 md:h-[45px] flex flex-wrap px-2 h-[40px] hidden md:block">
          Request A Quote
        </button>
        <div
          className="lg:hidden md:hidden text-white text-3xl"
          onClick={toggleMenu}
        >
          <TfiAlignRight />
        </div>
      </nav>

      <div
        className={`flex flex-col items-start transition-transform duration-300 ease-in-out fixed top-0 left-0 h-full w-full bg-white text-white px-2 py-2 gap-1 md:hidden ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="flex flex-row justify-between w-full items-center bg-blue-950 px-2 py-2 rounded-lg">
          <img src={kuchoriya_logo} alt="kuchoriya_logo" className="w-[80px]" />
          <div
            className="lg:hidden md:hidden text-white text-4xl"
            onClick={toggleMenu}
          >
            <RxCrossCircled />
          </div>
        </div>

        <ul className="flex flex-col gap-4 bg-blue-950 w-full px-2 py-2 rounded-lg">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-gray-300 lg:text-[16px] font-[500] text-white flex items-center gap-1"
              onClick={() => setShowPopup(showPopup === index ? null : index)} // Toggle content for mobile
            >
              <span className="">{item}</span>
              <img src={arrow_icon} className="h-3 w-3" />
            </li>
          ))}
        </ul>

        {/* Content Based on Item */}
        {navItems.map(
          (item, index) =>
            showPopup === index && (
              <div
                key={index}
                className=" bg-blue-950 p-4 rounded-lg w-full animate-slide-left"
              >
                <h2 className="text-2xl font-semibold text-[#F54D4D]">
                  {item}
                </h2>

                {/* Display item-specific content */}
                {item === "Company" && (
                  <>
                    <li>About Us</li>
                    <li>liortfolio</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                  </>
                )}

                {item === "Services" && (
                  <>
                    <li>Engineering Services</li>
                    <li>Digital Marketing</li>
                    <li>Support Services</li>
                  </>
                )}

                {item === "Technologies" && (
                  <>
                    <li>React JS</li>
                    <li>Web Development</li>
                  </>
                )}

                {item === "Hire Developers" && (
                  <>
                    <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                      Hire Web Developers
                    </li>
                    <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                      Hire Mobile App Developers
                    </li>
                    <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                      Hire UI Developers
                    </li>
                  </>
                )}

                {item === "Portfolio" && (
                  <>
                    <h1 className="font-[600] text-[22px] text-[#F54D4D]">
                      Kuchoriya Softwares
                    </h1>
                    <p className="text-white text-justify">
                      Since our founding in 2009, we have grown to become a
                      recognized global brand by serving more than 1000 clients,
                      and we are proud to offer full-range, end-to-end
                      development and designing solutions.....
                    </p>
                  </>
                )}

                {item === "Blogs" && (
                  <>
                    <h1 className="font-[600] text-[22px] text-[#F54D4D]">
                      Kuchoriya Softwares
                    </h1>
                    <p className="text-white text-justify">
                      The latest web industry press, technology innovations,
                      events and some helpful pointers from us.
                    </p>
                  </>
                )}

                {/* Add more sections as per your requirement */}

                <button
                  onClick={() => setShowPopup(null)} // Close content on click
                  className="mt-4 bg-[#F54D4D] text-white py-2 px-6 rounded-lg hover:bg-orange-50 hover:text-blue-950"
                >
                  Close
                </button>
              </div>
            )
        )}
      </div>

      {/* Popups for each item */}
      {navItems.map(
        (item, index) =>
          showPopup === index && (
            <div
              key={index}
              className="absolute top-[calc(100%+0px)] left-0 z-0 w-full h-auto bg-blue-950 shadow-lg flex animate-slide-left border-gray-600 border-t sm:hidden md:flex lg:flex "
            >
              {/* Left Side: Image */}
              <div className="w-1/2 bg-blue-950 flex items-center justify-center">
                <img
                  src={team_image}
                  alt="Placeholder"
                  className="object-cover w-3/4 h-3/4 rounded-lg shadow-lg"
                />
              </div>

              {/* Right Side: Content */}
              <div className="w-1/2 p-8 flex flex-col justify-center space-y-4">
                <h2 className="text-4xl font-semibold text-[#F54D4D] mb-4">
                  {item}
                </h2>

                {/* Conditional Content Based on Item */}
                <ul className="space-y-2">
                  {item === "Company" && (
                    <>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        About Us
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Portfolio
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Contact Us
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Blog
                      </li>
                    </>
                  )}

                  {item === "Services" && (
                    <>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Engineering Services
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Digital Marketing
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Support Services
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        CTO Services
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Referral Partner Program
                      </li>
                    </>
                  )}

                  {item === "Technologies" && (
                    <>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        React JS
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Web Development
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Android Development
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Flutter
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        React Native
                      </li>
                    </>
                  )}
                  {item === "Hire Developers" && (
                    <>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Hire Web Developers
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Hire Mobile App Developers
                      </li>
                      <li className="text-lg text-white hover:text-gray-300 cursor-pointer">
                        Hire UI Developers
                      </li>
                    </>
                  )}

                  {item === "Portfolio" && (
                    <>
                      <h1 className="font-[600] text-[22px] text-white">
                        Kuchoriya Softwares
                      </h1>
                      <p className="text-white text-justify">
                        Since our founding in 2009, we have grown to become a
                        recognized global brand by serving more than 1000
                        clients, and we are proud to offer full-range,
                        end-to-end development and designing solutions.....
                      </p>
                    </>
                  )}

                  {item === "Blogs" && (
                    <>
                      <h1 className="font-[600] text-[22px] text-[#F54D4D]">
                        Kuchoriya Softwares
                      </h1>
                      <p className="text-white text-justify">
                        The latest web industry press, technology innovations,
                        events and some helpful pointers from us.
                      </p>
                    </>
                  )}
                </ul>

                <button
                  onClick={() => togglePopup(index)} // Close the popup on click
                  className="mt-6 bg-[#F54D4D] text-white py-2 font-[600] text-[18px] px-6 rounded-lg hover:bg-orange-50 hover:text-blue-950 "
                >
                  Close
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default Navbar;
