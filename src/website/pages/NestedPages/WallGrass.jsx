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
import { useState } from "react";
import ImageModal from "@/components/ui/ImageModal";
import Gallery from "@/website/componenets/Gallery";
import SEO from "@/components/SEO";

const WallGrass = () => {
  const { t } = useTranslation();

  const imagesWall = [
    {
      img: img14,
      alt: "Wall grass design 14",
    },
    {
      img: img15,
      alt: "Wall grass design 15",
    },
    {
      img: img16,
      alt: "Wall grass design 16",
    },
    {
      img: img17,
      alt: "Wall grass design 17",
    },
    {
      img: img18,
      alt: "Wall grass design 18",
    },
    {
      img: img19,
      alt: "Wall grass design 19",
    },
    {
      img: img20,
      alt: "Wall grass design 20",
    },
    {
      img: img21,
      alt: "Wall grass design 21",
    },
    {
      img: img22,
      alt: "Wall grass design 22",
    },
    {
      img: img23,
      alt: "Wall grass design 23",
    },
    {
      img: img24,
      alt: "Wall grass design 24",
    },
    {
      img: img25,
      alt: "Wall grass design 25",
    },
    {
      img: img26,
      alt: "Wall grass design 26",
    },
    {
      img: img27,
      alt: "Wall grass design 27",
    },
    {
      img: img28,
      alt: "Wall grass design 28",
    },
    {
      img: img1,
      alt: "Wall grass design 1",
    },
    {
      img: img2,
      alt: "Wall grass design 2",
    },
    {
      img: img3,
      alt: "Wall grass design 3",
    },
    {
      img: img4,
      alt: "Wall grass design 4",
    },
    {
      img: img5,
      alt: "Wall grass design 5",
    },
    {
      img: img6,
      alt: "Wall grass design 6",
    },
    {
      img: img7,
      alt: "Wall grass design 7",
    },
    {
      img: img8,
      alt: "Wall grass design 8",
    },
    {
      img: img9,
      alt: "Wall grass design 9",
    },
    {
      img: img9,
      alt: "Wall grass design 9",
    },
    {
      img: img9,
      alt: "Wall grass design 9",
    },
    {
      img: img10,
      alt: "Wall grass design 10",
    },
    {
      img: img11,
      alt: "Wall grass design 11",
    },
    {
      img: img12,
      alt: "Wall grass design 12",
    },
    {
      img: img13,
      alt: "Wall grass design 13",
    },
  ];

  return (
    <>
      <SEO title={t("wallgrass.title")} />
      <Gallery title={t("wallgrass.title")} images={imagesWall} />
    </>
  );
};

export default WallGrass;
