import img1 from "@/assets/images/wall/img1.jpeg";
import img2 from "@/assets/images/wall/img2.jpeg";
import img3 from "@/assets/images/wall/img3.jpeg";
import img4 from "@/assets/images/wall/img4.jpeg";
import img5 from "@/assets/images/wall/img5.jpeg";
import img6 from "@/assets/images/wall/img6.jpeg";
import img7 from "@/assets/images/wall/img7.jpeg";
import img8 from "@/assets/images/wall/img8.jpeg";
import img9 from "@/assets/images/wall/img9.jpeg";
import img10 from "@/assets/images/wall/img10.jpeg";
import img11 from "@/assets/images/wall/img11.jpeg";
import img12 from "@/assets/images/wall/img12.jpeg";
import img13 from "@/assets/images/wall/img13.jpeg";
import img14 from "@/assets/images/wall/img14.jpeg";
import img15 from "@/assets/images/wall/img15.jpeg";
import img16 from "@/assets/images/wall/img16.jpeg";
import img17 from "@/assets/images/wall/img17.jpeg";
import img18 from "@/assets/images/wall/img18.jpeg";
import img19 from "@/assets/images/wall/img19.jpeg";
import img20 from "@/assets/images/wall/img20.jpeg";
import img21 from "@/assets/images/wall/img21.jpeg";
import img22 from "@/assets/images/wall/img22.jpeg";
import img23 from "@/assets/images/wall/img23.jpeg";
import img24 from "@/assets/images/wall/img24.jpeg";
import img25 from "@/assets/images/wall/img25.jpeg";
import img26 from "@/assets/images/wall/img26.jpeg";
import img27 from "@/assets/images/wall/img27.jpeg";
import img28 from "@/assets/images/wall/img28.jpeg";
import { useTranslation } from "react-i18next";

const WallGrass = () => {
  const { t } = useTranslation();

  const imagesWall = [
    {
      img: img14,
    },
    {
      img: img15,
    },
    {
      img: img16,
    },
    {
      img: img17,
    },
    {
      img: img18,
    },
    {
      img: img19,
    },
    {
      img: img20,
    },
    {
      img: img21,
    },
    {
      img: img22,
    },
    {
      img: img23,
    },
    {
      img: img24,
    },
    {
      img: img25,
    },
    {
      img: img26,
    },
    {
      img: img27,
    },
    {
      img: img28,
    },
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
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center w-full">
          <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
          <h2 className="mx-2 bg-green-700 text-white px-4 py-2 rounded-md">
            {t("wallgrass.title")}
          </h2>
          <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-12">
          {imagesWall.map((el, index) => (
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

export default WallGrass;
