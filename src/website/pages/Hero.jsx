import HeroImg from "@/assets/images/homepage/hero.jpg";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="min-h-screen relative pt-20 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src={HeroImg}
            alt="Beautiful landscape"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold md:text-6xl mb-6 animate-fade-in-up">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
              {t("hero.subtitle")}
            </p>
            <Button size={"lg"} className="bg-green-600 hover:bg-green-700 text-lg px-8">
              <Link
                to="https://wa.me/+201011053973"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                {t("contact.info.whatsappText")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
