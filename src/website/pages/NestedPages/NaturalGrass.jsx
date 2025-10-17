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
import Gallery from "@/website/componenets/Gallery";

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
    <>
      <Gallery title={t("grass.title")} images={imagesNatural} />
    </>
  );
};

export default NaturalGrass;
