import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Gallery from "../components/Gallery";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import TextSlider from "../components/TextSlider";


function Home() {

  return (
    <div className="">
      <Slider />
      <TextSlider />
      <Gallery />
      <Brand />
    </div>
  )
}

export default Home