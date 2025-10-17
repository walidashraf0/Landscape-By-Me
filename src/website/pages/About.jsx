import { getWhyChooseUs } from "@/data/constants";
import { useTranslation } from "react-i18next";
import SEO from "../../components/SEO";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();
  const whyChooseUs = getWhyChooseUs(t);

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <>
      <SEO 
        title="About Us - Landscape in Riyadh" 
        description="Learn about our landscaping company, our values, and why customers choose us for their landscaping needs."
        keywords={["about us", "landscaping company", "professional landscaping"]}
      />
      {/* Why Choose Us */}
      <motion.section 
        id="about" 
        className="py-20 bg-green-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={headingVariants}
          >
            <h2 className="text-4xl font-bold mb-4">
              {t("whyChooseUs.title")}
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              {t("whyChooseUs.subtitle")}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((el, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {el.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {el.title}
                </motion.h3>
                <motion.p 
                  className="opacity-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {el.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
