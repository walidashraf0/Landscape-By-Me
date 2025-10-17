import {
  Facebook,
  Leaf,
  Linkedin,
  MessageCircleMore,
  PhoneCall,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
                <span className="text-2xl font-bold">
                  {t("common.brandName")}
                </span>
              </div>
              <p className="text-gray-400">{t("footer.description")}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-green-600 transition-colors"
                  >
                    {t("header.home")}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-green-600 transition-colors"
                  >
                    {t("header.services")}
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-400 hover:text-green-600 transition-colors"
                  >
                    {t("header.portfolio")}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-green-600 transition-colors"
                  >
                    {t("header.about")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.services")}</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <Link to={"/غرف-زجاجية"} className="hover:text-green-600">
                    {t("glass.title")}
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to={"/شلالات-نوافير"} className="hover:text-green-600">
                    {t("waters.title")}
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to={"/ديكورات-حجرية"} className="hover:text-green-600">
                    {t("stone.title")}
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to={"/عشب-طبيبعي"} className="hover:text-green-600">
                    {t("grass.title")}
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to={"/شبكات-ري"} className="hover:text-green-600">
                    {t("irrigation.title")}
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to={"/عشب-جداري"} className="hover:text-green-600">
                    {t("wallgrass.title")}
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link to={"/مظلات"} className="hover:text-green-600">
                    {t("awings.title")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.contact")}</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 hover:text-green-600">
                  <Link to="tel:+201011053973">{t("header.phone")}</Link>
                </li>
                <li className="text-gray-400 hover:text-green-600">
                  <Link to="mailto:walidashraf050@gmail.com">
                    walidashraf050@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://wa.me/+201011053973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-500 transition-colors"
                  >
                    {t("footer.whatsappUs")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between">
            <div className="flex items-center md:items-start flex-col">
              <p>{t("footer.copyright")}</p>
              <p>
                {t("footer.designedBy")}:{" "}
                <span className="text-green-500">{t("footer.myName")}</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Link to="tel:+201011053973">
                <PhoneCall className="text-green-500" />
              </Link>
              <Link
                to="https://wa.me/+201011053973"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircleMore className="text-white" />
              </Link>
              <Link to={"https://www.facebook.com/Walid3455"}>
                <Facebook className="text-blue-700" />
              </Link>
              <Link to={"https://www.linkedin.com/in/walid-ashraf1/"}>
                <Linkedin className="text-blue-500" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
