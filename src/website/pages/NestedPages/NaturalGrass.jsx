import img1 from "@/assets/images/natural/img1.webp";
import img2 from "@/assets/images/natural/img2.webp";
import img3 from "@/assets/images/natural/img3.webp";
import img4 from "@/assets/images/natural/img4.webp";
import img5 from "@/assets/images/natural/img5.webp";
import img6 from "@/assets/images/natural/img6.webp";
import img7 from "@/assets/images/natural/img7.webp";
import img8 from "@/assets/images/natural/img8.webp";
import img9 from "@/assets/images/natural/img9.webp";
import img10 from "@/assets/images/natural/img10.webp";
import img11 from "@/assets/images/natural/img11.webp";
import img12 from "@/assets/images/natural/img12.webp";
import img13 from "@/assets/images/natural/img13.webp";
import img14 from "@/assets/images/natural/img14.webp";
import { useTranslation } from "react-i18next";

const NaturalGrass = () => {
  const { t } = useTranslation();

  const imagesNatural = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
    },
    {
      img: img8,
    },
    {
      img: img9,
    },
    {
      img: img9,
    },
    {
      img: img9,
    },
    {
      img: img10,
    },
    {
      img: img11,
    },
    {
      img: img12,
    },
    {
      img: img13,
    },
    {
      img: img14,
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center w-full">
          <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
          <h2 className="mx-2 bg-green-700 text-white px-4 py-2 rounded-md">
            {t("grass.title")}
          </h2>
          <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-12">
          {imagesNatural.map((el, index) => (
            <img
              key={index}
              src={el.img}
              alt="Water One"
              className="rounded-md object-cover w-full md:max-w-4xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NaturalGrass;
