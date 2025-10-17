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
import Gallery from "@/website/componenets/Gallery";

const GlassRomms = () => {
  const { t } = useTranslation();

  const imagesGlassRooms = [
    {
      img: img1,
      alt: "Glass room view 1",
    },
    {
      img: img2,
      alt: "Glass room view 2",
    },
    {
      img: img3,
      alt: "Glass room view 3",
    },
    {
      img: img4,
      alt: "Glass room view 4",
    },
    {
      img: img5,
      alt: "Glass room view 5",
    },
    {
      img: img6,
      alt: "Glass room view 6",
    },
    {
      img: img7,
      alt: "Glass room view 7",
    },
    {
      img: img8,
      alt: "Glass room view 8",
    },
    {
      img: img9,
      alt: "Glass room view 9",
    },
    {
      img: img9,
      alt: "Glass room view 10",
    },
    {
      img: img9,
      alt: "Glass room view 11",
    },
    {
      img: img10,
      alt: "Glass room view 12",
    },
  ];

  return (
    <>
      <Gallery title={t("glass.title")} images={imagesGlassRooms} />
    </>
  );
};

export default GlassRomms;
