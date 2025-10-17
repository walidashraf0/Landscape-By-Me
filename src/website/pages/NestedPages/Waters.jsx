import img1 from "@/assets/images/waters/img1.jpeg";
import img2 from "@/assets/images/waters/img2.jpeg";
import img3 from "@/assets/images/waters/img3.jpeg";
import img4 from "@/assets/images/waters/img4.jpeg";
import img5 from "@/assets/images/waters/img5.jpeg";
import img6 from "@/assets/images/waters/img6.jpeg";
import img7 from "@/assets/images/waters/img7.jpeg";
import img8 from "@/assets/images/waters/img8.jpeg";
import img9 from "@/assets/images/waters/img9.jpeg";
import img10 from "@/assets/images/waters/img10.jpeg";
import img11 from "@/assets/images/waters/img11.jpeg";
import img12 from "@/assets/images/waters/img12.jpeg";
import img13 from "@/assets/images/waters/img13.jpeg";
import img14 from "@/assets/images/waters/img14.jpeg";
import img15 from "@/assets/images/waters/img15.jpeg";
import img16 from "@/assets/images/waters/img16.jpeg";
import img17 from "@/assets/images/waters/img17.jpeg";
import img18 from "@/assets/images/waters/img18.jpeg";
import img19 from "@/assets/images/waters/img19.jpeg";
import img20 from "@/assets/images/waters/img20.jpeg";
import img21 from "@/assets/images/waters/img21.jpeg";
import img22 from "@/assets/images/waters/img22.jpeg";
import img23 from "@/assets/images/waters/img23.jpeg";
import img24 from "@/assets/images/waters/img24.jpeg";
import img25 from "@/assets/images/waters/img25.jpeg";
import img26 from "@/assets/images/waters/img26.jpeg";
import img27 from "@/assets/images/waters/img27.jpeg";
import img28 from "@/assets/images/waters/img28.jpeg";
import img29 from "@/assets/images/waters/img29.jpeg";
import img30 from "@/assets/images/waters/img30.jpeg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ImageModal from "@/components/ui/ImageModal";
import Gallery from "@/website/componenets/Gallery";
import SEO from "../../../components/SEO";

const Waters = () => {
  const { t } = useTranslation();

  const imagesWater = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
    { img: img11 },
    { img: img12 },
    { img: img13 },
    { img: img14 },
    { img: img15 },
    { img: img16 },
    { img: img17 },
    { img: img18 },
    { img: img19 },
    { img: img20 },
    { img: img21 },
    { img: img22 },
    { img: img23 },
    { img: img24 },
    { img: img25 },
    { img: img26 },
    { img: img27 },
    { img: img28 },
    { img: img29 },
    { img: img30 },
  ];

  return (
    <>
      <SEO title={t("waters.title")} />
      <Gallery title={t("waters.title")} images={imagesWater} />
    </>
  );
};

export default Waters;
