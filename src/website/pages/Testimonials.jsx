import { Card, CardContent } from "@/components/ui/card";
import { getTestimonials } from "@/data/constants";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";
import Heading from "../componenets/Heading";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = getTestimonials(t);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: i => ({ 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: i * 0.1
      }
    }),
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const starVariants = {
    hidden: { scale: 0 },
    visible: i => ({
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: i * 0.05
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <>
      {/* Testimonials Section  */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={headingVariants}>
            <Heading
              title={t("testimonials.title")}
              subTitle={t("testimonials.subtitle")}
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((el, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className={"border-0 shadow-lg transition-all duration-300"}>
                  <CardContent className={"p-6"}>
                    <div className="flex mb-4">
                      {[...Array(el.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          custom={i}
                          variants={starVariants}
                          whileHover="hover"
                        >
                          <Star
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <motion.p 
                      className="text-gray-600 mb-4 italic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {el.text}
                    </motion.p>
                    <motion.p 
                      className="font-bold text-gray-800"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {el.name}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Testimonials;
