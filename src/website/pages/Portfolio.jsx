import { getPortfolio } from "@/data/constants";
import { useTranslation } from "react-i18next";
import Heading from "../componenets/Heading";
import { useState } from "react";
import { X } from "lucide-react";

const Portfolio = () => {
  const { t } = useTranslation();
  const portfolio = getPortfolio(t);
  const [selectedImage, setSelectedImage] = useState();

  return (
    <>
      {/* Portfolio */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <Heading
            title={t("portfolio.title")}
            subTitle={t("portfolio.subtitle")}
          />
          {/* Full-screen overlay for image preview */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white cursor-pointer hover:text-gray-300 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Full screen preview"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-green-400 text-sm font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
