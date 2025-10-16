import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

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
                <li className="text-gray-400">{t("footer.landscapeDesign")}</li>
                <li className="text-gray-400">{t("footer.lawnCare")}</li>
                <li className="text-gray-400">{t("footer.hardscaping")}</li>
                <li className="text-gray-400">{t("footer.irrigation")}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.contact")}</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">{t("header.phone")}</li>
                <li className="text-gray-400">walidashraf050@gmail.com</li>
                <li>
                  <a
                    href="https://wa.me/+201011053973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-500 transition-colors"
                  >
                    {t("footer.whatsappUs")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
