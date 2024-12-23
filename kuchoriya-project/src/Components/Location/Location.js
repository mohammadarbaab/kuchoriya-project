import React from "react";
import location from "../../assests/location.png";
function Location() {
  const locations = [
    {
      country: "United States",
      address: [
        "9765 Keystone Court,",
        "Clarence, NY 14031,",
        "USA, +1 (650) 488-7911",
      ],
      image: location, // replace with your actual image path
    },
    {
      country: "Canada",
      address: [
        "1100 Caven St.,",
        "Suite PH11, Mississauga,",
        "ON L5G 4N3 Canada ,",
        "+1 (416) 726-4662,",
        "+1 (650) 488-7911",
      ],
      image: location, // replace with your actual image path
    },
    {
      country: "Brazil",
      address: [
        "Bispo César da Corso Filho, ",
        "1266, San Carlos, São Paulo,",
        "Boa Vista, Brazil,",
        "+13575-331",
      ],
      image: location, // replace with your actual image path
    },
    {
      country: "South Africa",
      address: [
        "12 IbisWay",
        "Sunnydale Fish Hoek 7985 Western Cape, ",
        "South Africa,",
        "+27824507091",
      ],
      image: location, // replace with your actual image path
    },
    {
      country: "UAE",
      address: [
        "118, JLT Cluster V,",
        "AI Sarayat St,",
        "opposite Damas jewellery,",
        "Dubai United Arab",
        "Emirates Dubai 91929",
      ],
      image: location, // replace with your actual image path
    },
    {
      country: "Italy",
      address: ["Viale dell'Esperanto,", "71, Formia, Italy,", "Lazio IT"],
      image: location, // replace with your actual image path
    },
    {
      country: "Australia",
      address: [
        "Unit 14G, 3 darling point road,",
        " darling point,",
        "Sydney, NSW,",
        "Australia, 2027",
      ],
      image: location, // replace with your actual image path
    },
    // Add more locations here if needed
  ];
  return (
    <div className="flex flex-row flex-wrap  items-center justify-center px-4 md:px-32 gap-4">
      {locations.map((location, index) => (
        <div
          key={index}
          className="flex flex-col bg-white border-2 gap-1 rounded-[20px] p-6 border-blue-950 shadow-xl hover:shadow-xl transition-shadow duration-300 ease-in-out items-center h-[300px] w-[220px] overflow-hidden"
        >
          <img
            src={location.image}
            alt="location"
            className="w-[60px] mb-2 transition-transform transform hover:scale-105"
          />
          <h2 className="font-[500] text-[24px] text-blue-950 hover:text-blue-700 transition-colors duration-200 ease-in-out">
            {location.country}
          </h2>
          {location.address.map((line, idx) => (
            <p
              key={idx}
              className="text-[14px] text-gray-700 hover:text-gray-900 transition-colors duration-200 ease-in-out text-center"
            >
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Location;
