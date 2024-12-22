import React, { useState } from "react";
import ipposIcon from "../../assests/IpposIcon.png";
import fwx from "../../assests/fwxicon.png";
import mulawanIcon from "../../assests/mulawan store.png";
import swapIcon from "../../assests/swaapIcon.png";
import plateIcon from "../../assests/plateRateIcon.png";
import draftersKing from "../../assests/draftkingIcon.png";
import upElcIcon from "../../assests/Upelenece.png";
import softTechIcon from "../../assests/softTechIcon.png";
import remotIcone from "../../assests/remottlaIcon.png";
import pemIcon from "../../assests/pemIcon.png";
import futureIcon from "../../assests/futureIcon.png";
function AcrossPartnership() {
  const images = [
    { src: ipposIcon, alt: "ipposIcon" },
    { src: fwx, alt: "fwxIcon" },
    { src: mulawanIcon, alt: "mulawanIcon" },
    { src: swapIcon, alt: "swapIcon" },
    { src: plateIcon, alt: "platIcon" },
    { src: draftersKing, alt: "draftIcon" },
    { src: upElcIcon, alt: "upeleIcon" },
    { src: softTechIcon, alt: "softtechIcon" },
    { src: remotIcone, alt: "remoteIcon" },
    { src: pemIcon, alt: "pemIcon" },
    { src: futureIcon, alt: "futureIcon" },
  ];
  return (
    <div className="flex flex-col flex-wrap gap-4 justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 flex-wrap px-4 md:px-0">
        <h2 className="text-[28px] font-[500]">
          Building Strong Partnerships Across Industries
        </h2>
        <p className="text-[18px] font-[500] text-gray-500">
          Forging robust alliances, fostering collaboration, and uniting
          industries for growth.
        </p>
      </div>
      <div className="flex flex-wrap flex-row justify-center items-center md:px-32 mt-6">
        <div className="card flex flex-row flex-wrap justify-center items-center gap-6 md:p-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="image-card border border-blue-950 rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl justify-center items-center w-[150px] h-[80px] p-2 animate-floating cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AcrossPartnership;
