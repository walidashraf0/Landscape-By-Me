import { getPortfolio } from "@/data/constants";
import { useTranslation } from "react-i18next";
import Heading from "../componenets/Heading";
import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const { t } = useTranslation();
  const portfolio = getPortfolio(t);
  const [selectedImage, setSelectedImage] = useState();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
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
        delay: 0.2
      }
    }
  };

  return (
    <>
      {/* Portfolio */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={headingVariants}
          >
            <Heading
              title={t("portfolio.title")}
              subTitle={t("portfolio.subtitle")}
            />
          </motion.div>
          
          {/* Full-screen overlay for image preview */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div 
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white cursor-pointer hover:text-gray-300 transition-colors"
                  aria-label="Close image preview"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-8 h-8" />
                </motion.button>
                <motion.img
                  src={selectedImage}
                  alt="Full screen preview"
                  className="max-w-full max-h-full object-contain rounded-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <motion.span 
                    className="text-green-400 text-sm font-semibold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.category}
                  </motion.span>
                  <motion.h3 
                    className="text-white text-xl font-bold"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
