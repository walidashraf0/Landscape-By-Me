import { getWhyChooseUs } from "@/data/constants";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const whyChooseUs = getWhyChooseUs(t);

  return (
    <>
      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t("whyChooseUs.title")}
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              {t("whyChooseUs.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((el, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  {el.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{el.title}</h3>
                <p className="opacity-90">{el.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
