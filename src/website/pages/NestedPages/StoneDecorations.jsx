import img1 from "@/assets/images/stones/img1.jpeg";
import img2 from "@/assets/images/stones/img2.jpeg";
import img3 from "@/assets/images/stones/img3.jpeg";
import img4 from "@/assets/images/stones/img4.jpeg";
import img5 from "@/assets/images/stones/img5.jpeg";
import img6 from "@/assets/images/stones/img6.jpeg";
import img7 from "@/assets/images/stones/img7.jpeg";
import img8 from "@/assets/images/stones/img8.jpeg";
import img9 from "@/assets/images/stones/img9.jpeg";
import img10 from "@/assets/images/stones/img10.jpeg";
import img11 from "@/assets/images/stones/img11.jpeg";
import img12 from "@/assets/images/stones/img12.jpeg";
import img13 from "@/assets/images/stones/img13.jpeg";
import img14 from "@/assets/images/stones/img14.jpeg";
import img15 from "@/assets/images/stones/img15.jpeg";
import img16 from "@/assets/images/stones/img16.jpeg";

import { useTranslation } from "react-i18next";

const StoneDecorations = () => {
  const { t } = useTranslation();

  const imagesStones = [
    {
      img: img1,
      alt: "Stone decoration 1",
    },
    {
      img: img2,
      alt: "Stone decoration 2",
    },
    {
      img: img3,
      alt: "Stone decoration 3",
    },
    {
      img: img4,
      alt: "Stone decoration 4",
    },
    {
      img: img5,
      alt: "Stone decoration 5",
    },
    {
      img: img6,
      alt: "Stone decoration 6",
    },
    {
      img: img7,
      alt: "Stone decoration 7",
    },
    {
      img: img8,
      alt: "Stone decoration 8",
    },
    {
      img: img9,
      alt: "Stone decoration 9",
    },
    {
      img: img10,
      alt: "Stone decoration 10",
    },
    {
      img: img11,
      alt: "Stone decoration 11",
    },
    {
      img: img12,
      alt: "Stone decoration 12",
    },
    {
      img: img13,
      alt: "Stone decoration 13",
    },
    {
      img: img14,
      alt: "Stone decoration 14",
    },
    {
      img: img15,
      alt: "Stone decoration 15",
    },
    {
      img: img16,
      alt: "Stone decoration 16",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center w-full">
          <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
          <h2 className="mx-2 bg-green-700 text-white px-4 py-2 rounded-md">
            {t("stone.title")}
          </h2>
          <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-12">
          {imagesStones.map((el, index) => (
            <img
              key={index}
              src={el.img}
              alt={el.alt}
              className="rounded-md object-cover w-full h-52"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoneDecorations;
