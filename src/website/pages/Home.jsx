import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import FloatingIcon from "./FloatingIcon";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default Home;
