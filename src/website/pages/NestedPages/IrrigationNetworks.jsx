import img1 from "@/assets/images/networks/img1.jpeg";
import img2 from "@/assets/images/networks/img2.jpeg";
import img3 from "@/assets/images/networks/img3.jpeg";
import img4 from "@/assets/images/networks/img4.jpeg";
import img5 from "@/assets/images/networks/img5.jpeg";
import img6 from "@/assets/images/networks/img6.jpeg";
import img7 from "@/assets/images/networks/img7.jpeg";
import img8 from "@/assets/images/networks/img8.jpeg";
import img9 from "@/assets/images/networks/img9.jpeg";
import Gallery from "@/website/componenets/Gallery";
import { useTranslation } from "react-i18next";

const IrrigationNetworks = () => {
  const { t } = useTranslation();

  const imagesNetorks = [
    {
      img: img1,
      alt: "Irrigation network 1",
    },
    {
      img: img2,
      alt: "Irrigation network 2",
    },
    {
      img: img3,
      alt: "Irrigation network 3",
    },
    {
      img: img4,
      alt: "Irrigation network 4",
    },
    {
      img: img5,
      alt: "Irrigation network 5",
    },
    {
      img: img6,
      alt: "Irrigation network 6",
    },
    {
      img: img7,
      alt: "Irrigation network 7",
    },
    {
      img: img8,
      alt: "Irrigation network 8",
    },
    {
      img: img9,
      alt: "Irrigation network 9",
    },
  ];

  return (
    <>
      <Gallery title={t("irrigation.title")} images={imagesNetorks} />
    </>
  );
};

export default IrrigationNetworks;
