import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import OurLocation from "./OurLocation";
import SEO from "../../components/SEO";

const Home = () => {
  return (
    <>
      <SEO 
        title="Landscape In Riyadh" 
        description="Professional landscaping services including waterfalls, fountains, stone decorations, glass rooms, natural grass, and more."
        keywords={["landscaping", "waterfalls", "fountains", "stone decorations", "glass rooms"]}
      />
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
