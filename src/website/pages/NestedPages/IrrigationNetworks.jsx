import img1 from "@/assets/images/networks/img1.jpeg";
import img2 from "@/assets/images/networks/img2.jpeg";
import img3 from "@/assets/images/networks/img3.jpeg";
import img4 from "@/assets/images/networks/img4.jpeg";
import img5 from "@/assets/images/networks/img5.jpeg";
import img6 from "@/assets/images/networks/img6.jpeg";
import img7 from "@/assets/images/networks/img7.jpeg";
import img8 from "@/assets/images/networks/img8.jpeg";
import img9 from "@/assets/images/networks/img9.jpeg";
import ImageModal from "@/components/ui/ImageModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const IrrigationNetworks = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const imagesNetorks = [
    {
      img: img1,
      alt: "Irrigation network 1",
    },
    {
      img: img2,
      alt: "Irrigation network 2",
    },
    {
      img: img3,
      alt: "Irrigation network 3",
    },
    {
      img: img4,
      alt: "Irrigation network 4",
    },
    {
      img: img5,
      alt: "Irrigation network 5",
    },
    {
      img: img6,
      alt: "Irrigation network 6",
    },
    {
      img: img7,
      alt: "Irrigation network 7",
    },
    {
      img: img8,
      alt: "Irrigation network 8",
    },
    {
      img: img9,
      alt: "Irrigation network 9",
    },
  ];

  const openModal = (index) => {
    setInitialSlide(index);
    setModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center w-full">
            <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
            <h2 className="mx-2 bg-green-700 text-white px-4 py-2 rounded-md">
              {t("irrigation.title")}
            </h2>
            <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-12">
            {imagesNetorks.map((el, index) => (
              <img
                key={index}
                src={el.img}
                alt={el.alt}
                className="rounded-md object-cover w-full h-48 md:max-w-4xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={imagesNetorks}
        initialSlide={initialSlide}
      />
    </>
  );
};

export default IrrigationNetworks;
