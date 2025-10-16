import img1 from "@/assets/images/glass/img1.jpeg";
import img2 from "@/assets/images/glass/img2.jpeg";
import img3 from "@/assets/images/glass/img3.jpeg";
import img4 from "@/assets/images/glass/img4.jpeg";
import img5 from "@/assets/images/glass/img5.jpeg";
import img6 from "@/assets/images/glass/img6.jpeg";
import img7 from "@/assets/images/glass/img7.jpeg";
import img8 from "@/assets/images/glass/img8.jpeg";
import img9 from "@/assets/images/glass/img9.jpeg";
import img10 from "@/assets/images/glass/img10.jpeg";
import { useTranslation } from "react-i18next";

const GlassRomms = () => {
  const { t } = useTranslation();

  const imagesGlassRooms = [
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
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center w-full">
          <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
          <h2 className="mx-2 bg-green-700 text-white px-4 py-2 rounded-md">
            {t("glass.title")}
          </h2>
          <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-12">
          {imagesGlassRooms.map((el, index) => (
            <img
              key={index}
              src={el.img}
              alt="Water One"
              className="rounded-md object-cover w-full h-48"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlassRomms;
