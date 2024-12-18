import React from "react";
import shopping from "../../assests/shopping.png";
import team from "../../assests/team.png";
import role_model from "../../assests/role-model.png";

function Partnrship() {
  return (
    <div className="flex flex-wrap flex-col justify-center items-center w-full h-auto py-6 gap-10">
      <div className="flex flex-col flex-wrap w-auto h-auto md:px-36 gap-6 leading-[25px] py-8 px-8">
        <h1 className="text-[36px] font-[700] text-center leading-[40px]">
          Partnership Models
        </h1>
        <p className="text-[18px] font-[500] text-gray-800 text-justify">
          We offer collaboration that is tailored to your needs.We provide
          everything you need,whether you need a single developer or
          full-fledged project team.Our three partnership models were specially
          developed to meet the particular needs of businesses and increase
          client revenues.
        </p>
      </div>
      <div className="flex flex-wrap flex-row gap-2 justify-center items-center px-4">
        <div className="flex flex-wrap flex-col items-center w-[300px] h-[350px] gap-4 bg-[#3b82f6] animate-pulse hover:scale-105 hover:shadow-lg transition-all rounded-xl px-5 py-4">
          {/* Image */}
          <img
            src={shopping}
            className="w-[80px] h-[80px] object-contain mb-4 rounded-md"
          />

          <h1 className="font-[500] text-[20px] text-blue-950">
            Fixed Price Project
          </h1>
          <p className="text-justify text-[16px] font-[500] text-white">
            We offer skilled resources and time estimates to collaborate with
            you on your project at a fixed price.
          </p>
        </div>

        <div className="flex flex-wrap flex-col items-center w-[300px] h-[350px] gap-4 bg-[#34D399] md:animate-bounce hover:scale-105 hover:shadow-lg transition-all rounded-xl px-5 py-4">
          {/* Image */}
          <img
            src={team}
            className="w-[80px] h-[80px] object-contain mb-4 rounded-md"
          />

          <h1 className="font-[500] text-[20px] text-blue-950">
            Hosted Team Extension
          </h1>
          <p className="text-justify text-[16px] font-[500] text-white">
            We provide knowledgeable experts who can collaborate remotely with
            your team on your project, which is one method to boost its
            effectiveness.
          </p>
        </div>

        <div className="flex flex-wrap flex-col items-center w-[300px] h-[350px] gap-4 bg-[#3b82f6] animate-pulse hover:scale-105 hover:shadow-lg transition-all rounded-xl px-5 py-4">
          {/* Image */}
          <img
            src={role_model}
            className="w-[80px] h-[80px] object-contain mb-4 rounded-md"
          />

          <h1 className="font-[500] text-[20px] text-blue-950">
            Dedicated Team Model
          </h1>
          <p className="text-justify text-[16px] font-[500] text-white">
            We provide you with a specialized team of designers, developers,
            project managers, and quality assurance specialists who will
            collaborate for at least three months to complete your project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Partnrship;
