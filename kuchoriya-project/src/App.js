import React from "react";
import Partnrship from "./Components/Partnership/Partnrship";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import CaseStudy from "./Components/CaseStudy/CaseStudy";
import Owner from "./Components/Owner/Owner";
import OurServices from "./Components/OurServices/OurServices";
import DiffIndustry from "./Components/DiffIndustry/DiffIndustry";
import Blog from "./Components/Blog/Blog";
import AcrossPartnership from "./Components/AcrossPart/AcrossPartnership";
import Achivements from "./Components/Achivements/Achivements";
import ContactUs from "./Components/ContactUs/ContactUs";
import Location from "./Components/Location/Location";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex flex-col space-y-8">
        <Partnrship />
        <Services />
        <CaseStudy />
        <Owner />
        <OurServices />
        <DiffIndustry />
        <Blog />
        <AcrossPartnership />
        <Achivements />
        <ContactUs />
        <Location />
        <Footer />
      </div>
    </>
  );
}

export default App;
