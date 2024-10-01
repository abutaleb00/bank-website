import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Gallery from "./components/Gallery";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TextSlider from "./components/TextSlider";




function App() {

  return (
    <div className="">
      <Navbar />
      <Slider />
      <TextSlider />
      <Gallery />
      <Brand />
      <Footer />
      <Contact />
    </div>
  )
}

export default App
