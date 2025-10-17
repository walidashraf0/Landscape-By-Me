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
import Gallery from "@/website/componenets/Gallery";

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
    <>
      <Gallery title={t("stone.title")} images={imagesStones} />
    </>
  );
};

export default StoneDecorations;
