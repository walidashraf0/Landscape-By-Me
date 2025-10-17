import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getServices } from "@/data/constants";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Heading from "../componenets/Heading";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Services = () => {
  const { t, i18n } = useTranslation();
  const services = getServices(t);
  const currentLanguage = i18n.language;
  const scrollRef = useRef(null);

  return (
    <>
      {/* Services Section  */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Heading
            title={t("services.title")}
            subTitle={t("services.subtitle")}
          />
          <div
            ref={scrollRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((el, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
                transition={{ duration: 1.2 }}
                key={index}
              >
                <Link
                  to={`${el.path}`}
                  className="flex items-center p-0 h-auto"
                >
                  <Card
                    className={
                      "hover:shadow-xl transition-shadow duration-300 border-0"
                    }
                  >
                    <CardHeader>
                      <div className="text-green-600 mb-4">
                        <img
                          src={el.img}
                          alt={el.title}
                          className="w-full h-56 object-cover rounded-sm"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className={"p-6"}>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">
                        {el.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{el.description}</p>
                      <Button variant={"link"} className={"text-green-600"}>
                        {t("services.learnMore")}
                        <ChevronRight
                          className={`w-4 h-4 ml-1 ${
                            currentLanguage === "ar" && "rotate-180"
                          }`}
                        />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
