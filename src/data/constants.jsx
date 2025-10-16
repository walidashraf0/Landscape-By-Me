import img1 from "@/assets/images/homepage/img1.jpg";
import img2 from "@/assets/images/homepage/img2.jpg";
import img3 from "@/assets/images/homepage/img3.jpg";
import img4 from "@/assets/images/homepage/img4.jpeg";
import img5 from "@/assets/images/homepage/img5.jpeg";
import img6 from "@/assets/images/homepage/img6.jpeg";
import img7 from "@/assets/images/homepage/img7.jpg";
import img8 from "@/assets/images/homepage/img8.webp";
import img10 from "@/assets/images/homepage/img10.webp";
import img11 from "@/assets/images/homepage/img11.jpeg";
import img12 from "@/assets/images/homepage/img12.jpeg";
import img13 from "@/assets/images/homepage/img13.jpeg";
import img14 from "@/assets/images/homepage/img14.jpeg";
import img15 from "@/assets/images/homepage/img15.jpeg";
import img16 from "@/assets/images/homepage/img16.jpeg";
import img17 from "@/assets/images/homepage/img17.jpeg";
import img18 from "@/assets/images/homepage/img18.jpg";
import img19 from "@/assets/images/homepage/img19.jpeg";
import {
  Award,
  Clock,
  Droplets,
  Hammer,
  Leaf,
  Star,
  TreeDeciduous,
  Users,
} from "lucide-react";

export const getServices = (t) => [
  {
    icon: <Leaf className="w-12 h-12" />,
    title: t("services.landscapeDesign.title"),
    description: t("services.landscapeDesign.description"),
  },
  {
    icon: <TreeDeciduous className="w-12 h-12" />,
    title: t("services.lawnCare.title"),
    description: t("services.lawnCare.description"),
  },
  {
    icon: <Hammer className="w-12 h-12" />,
    title: t("services.hardscaping.title"),
    description: t("services.hardscaping.description"),
  },
  {
    icon: <Droplets className="w-12 h-12" />,
    title: t("services.irrigation.title"),
    description: t("services.irrigation.description"),
  },
];

export const getPortfolio = (t) => [
  {
    image: img1,
    title: t("portfolio.modernGarden"),
    category: t("portfolio.residential"),
  },
  {
    image: img2,
    title: t("portfolio.smallSpace"),
    category: t("portfolio.urbanGarden"),
  },
  {
    image: img3,
    title: t("portfolio.summerLandscape"),
    category: t("portfolio.commercial"),
  },
  {
    image: img4,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img5,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img6,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img7,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img8,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img10,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img11,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img12,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img13,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img14,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img15,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img16,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img17,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img18,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
  {
    image: img19,
    title: t("portfolio.lawnRenovation"),
    category: t("portfolio.beforeAfter"),
  },
];

export const getWhyChooseUs = (t) => [
  {
    icon: <Award className="w-8 h-8" />,
    title: t("whyChooseUs.experience.title"),
    description: t("whyChooseUs.experience.description"),
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: t("whyChooseUs.team.title"),
    description: t("whyChooseUs.team.description"),
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: t("whyChooseUs.quality.title"),
    description: t("whyChooseUs.quality.description"),
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: t("whyChooseUs.timely.title"),
    description: t("whyChooseUs.timely.description"),
  },
];

export const getTestimonials = (t) => [
  {
    name: t("testimonials.sarah.name"),
    rating: 5,
    text: t("testimonials.sarah.text"),
  },
  {
    name: t("testimonials.michael.name"),
    rating: 5,
    text: t("testimonials.michael.text"),
  },
  {
    name: t("testimonials.emily.name"),
    rating: 5,
    text: t("testimonials.emily.text"),
  },
];
