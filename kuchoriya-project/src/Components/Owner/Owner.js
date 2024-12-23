import React from "react";
import jamesMitchell from "../../assests/owner_1.jpg";
import adella from "../../assests/adella (1).png";
import guliliani from "../../assests/guliliani.png";
import simone from "../../assests/simone.png";
import clutchIcon from "../../assests/clutch.png";
import goodfilms from "../../assests/goodfilm.png";
import desiIcon from "../../assests/desi.png";
import trustIcon from "../../assests/trustPilot.png";
import sortlist from "../../assests/sortlist.png";
import seos from "../../assests/10soes.png";
import findBest from "../../assests/findbest.png";

function Owner() {
  const testimonials = [
    {
      name: "James Mitchell",
      position: "CEO",
      image: jamesMitchell,
      description:
        "Initially, I was skeptical, given how many scams start with a LinkedIn approach, especially when the solution is overseas and involves 'clicking on this link.' However, this was different. From the initial consultation to the completion of phase I, Alex and his team were professional, insightful, and enjoyable to work with. They excel at thinking outside the box and providing multiple solutions to the roadblocks we encountered. I highly recommend this team of professionals and look forward to working with them as we add more components to our SaaS and mobile solution.",
    },
    {
      name: "Guiliani",
      position: "Principal Software Engineer",
      image: guliliani,
      description:
        "I took services from one of their full-stack Developers for over 5 months co-developing a web application in Angular 4/5 + Node (Kao). Overall, everything was very productive, we finished the project in time with best practices of test-driven development and continuous integration. Throughout, proper version control was practiced. I have had times when requirements were ambiguous, the developer took sensible design decisions without guidance and we never lost momentum on the development. The developer learned new technologies fast, and implemented solutions as close.",
    },
    {
      name: "Simone",
      position: "CEO",
      image: simone,
      description:
        "Working with Kuchoriya Softwares has been a pleasure. The Kuchoriya Softwares team got our work done without any issues or problems. They were very open to accommodating the changes that we made during the project. They carefully reviewed our requirements and delivered on time and within budget! The best part of working with Kuchoriya Softwares was that they remained available throughout the entire project, responding quickly to emails, and ensuring that we were getting the work that we wanted every step of the way. We would hire them again for future projects.",
    },
    {
      name: "Adelle",
      position: "Co-Founder",
      image: adella,
      description:
        "Kuchoriya Softwares helped us with the design and development of our company's new App & Web called 'Singaporeair.' The entire team was very engaged and always very timely in their responses. They helped Singaporeair, Corp develop this Insurance App & web within a few months. They helped in the development and are also going to be part of the marketing and maintenance of the App. We were very excited when this App won the GOLD in the Best Insurance Apps category recently. A very professional and reliable team to work with. We would hire them again for future projects.",
    },
  ];

  const icons = [
    { src: clutchIcon, alt: "clutchIcon" },
    { src: goodfilms, alt: "goodfilms" },
    { src: trustIcon, alt: "trust_icon" },
    { src: desiIcon, alt: "desiicon" },
    { src: sortlist, alt: "sort_icon" },
    { src: seos, alt: "seos_icon" },
    { src: findBest, alt: "findbest_icon" },
  ];

  return (
    <div className="flex flex-col gap-6 md:py-6 rounded-2xl">
      <div className="flex flex-row gap-6 flex-wrap justify-center items-center px-2">
        <div className="flex flex-wrap gap-2 justify-center items-center px-4 ">
          <h1 className="font-[700] text-[32px] text-blue-950 justify-center items-center">
            Success Stories Words From our Clients
          </h1>
          <p className="flex flex-wrap text-[18px] font-[400] text-gray-700 justify-center items-center">
            Grateful to hear the beautiful words from our clients that motivate
            us to perform better for their workings
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="w-[80px] sm:w-[100px] md:w-[120px]"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center py-6 gap-6 lg:px-16 lg:flex-row items-center flex-col px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex lg:flex-col flex-wrap border border-white rounded-2xl lg:px-8 lg:py-8 lg:w-[48%] shadow-lg shadow-[#e1e1e1] bg-blue-950 py-5 px-4"
          >
            {/* Image Section */}
            <div className="flex flex-row gap-6 items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-[100px] h-[100px] rounded-full border-4 border-[#f3f3f3] shadow-lg"
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[24px] text-white">
                  {testimonial.name}
                </h1>
                <p className="font-medium text-[18px] text-yellow-300">
                  {testimonial.position}
                </p>
              </div>
            </div>

            {/* Description Section */}
            <p className="text-gray-300 text-justify mt-4 leading-relaxed">
              {testimonial.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Owner;
