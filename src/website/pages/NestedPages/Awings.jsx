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
import Gallery from "@/website/componenets/Gallery";

const Awings = () => {
  const { t } = useTranslation();

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

  return (
    <>
      <Gallery title={t("awings.title")} images={awings} />
    </>
  );
};

export default Awings;
