import { Card, CardContent } from "@/components/ui/card";
import { getTestimonials } from "@/data/constants";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";
import Heading from "../componenets/Heading";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = getTestimonials(t);

  return (
    <>
      {/* Testimonials Section  */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Heading
            title={t("testimonials.title")}
            subTitle={t("testimonials.subtitle")}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((el, index) => (
              <Card key={index} className={"border-0 shadow-lg"}>
                <CardContent className={"p-6"}>
                  <div className="flex mb-4">
                    {[...Array(el.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">{el.text}</p>
                  <p className="font-bold text-gray-800">{el.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
