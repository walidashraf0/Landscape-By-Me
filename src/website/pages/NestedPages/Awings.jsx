import img1 from "@/assets/images/awings/img1.jpeg";
import img2 from "@/assets/images/awings/img2.jpeg";
import img3 from "@/assets/images/awings/img3.jpeg";
import img4 from "@/assets/images/awings/img4.jpeg";
import img5 from "@/assets/images/awings/img5.jpeg";
import img6 from "@/assets/images/awings/img6.jpeg";
import img7 from "@/assets/images/awings/img7.jpeg";
import img8 from "@/assets/images/awings/img8.jpeg";
import img9 from "@/assets/images/awings/img9.jpeg";
import img10 from "@/assets/images/awings/img10.jpeg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ImageModal from "@/components/ui/ImageModal";

const Awings = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const awings = [
    {
      img: img1,
      alt: "Awning 1",
    },
    {
      img: img2,
      alt: "Awning 2",
    },
    {
      img: img3,
      alt: "Awning 3",
    },
    {
      img: img4,
      alt: "Awning 4",
    },
    {
      img: img5,
      alt: "Awning 5",
    },
    {
      img: img6,
      alt: "Awning 6",
    },
    {
      img: img7,
      alt: "Awning 7",
    },
    {
      img: img8,
      alt: "Awning 8",
    },
    {
      img: img9,
      alt: "Awning 9",
    },
    {
      img: img9,
      alt: "Awning 10",
    },
    {
      img: img9,
      alt: "Awning 11",
    },
    {
      img: img10,
      alt: "Awning 12",
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
              {t("awings.title")}
            </h2>
            <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-12">
            {awings.map((el, index) => (
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
        images={awings}
        initialSlide={initialSlide}
      />
    </>
  );
};

export default Awings;
