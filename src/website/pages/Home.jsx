import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import OurLocation from "./OurLocation";

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
        <OurLocation />
      </div>
    </>
  );
};

export default Home;
