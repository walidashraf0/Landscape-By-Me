import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getServices } from "@/data/constants";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Heading from "../componenets/Heading";

const Services = () => {
  const { t } = useTranslation();
  const services = getServices(t);

  return (
    <>
      {/* Services Section  */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Heading
            title={t("services.title")}
            subTitle={t("services.subtitle")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((el, index) => (
              <Card
                key={index}
                className={
                  "hover:shadow-xl transition-shadow duration-300 border-0"
                }
              >
                <CardContent className={"p-6"}>
                  <div className="text-green-600 mb-4">{el.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {el.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {el.description}
                  </p>
                  <Button
                    variant={"link"}
                    className={"text-green-600 p-0 h-auto"}
                  >
                    {t("services.learnMore")}
                    <ChevronRight className={`w-4 h-4 ml-1`} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
