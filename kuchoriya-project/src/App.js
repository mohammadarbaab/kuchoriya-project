import React from "react";
import Partnrship from "./Components/Partnership/Partnrship";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import CaseStudy from "./Components/CaseStudy/CaseStudy";
import Owner from "./Components/Owner/Owner";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <Partnrship></Partnrship>
      <Services></Services>
      <CaseStudy></CaseStudy>
      <Owner></Owner>
    </div>
  );
}

export default App;
