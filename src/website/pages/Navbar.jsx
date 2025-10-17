import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Leaf, Menu, Phone, X } from "lucide-react";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState();
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
  }, [isRTL, currentLanguage]);

  const toogleLanguage = () => {
    const newLng = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLng);
  };

  return (
    <>
      <header className="fixed top-0 bg-white/95 w-full backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={"/"} className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-600">
                {t("common.brandName")}
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/#home"
                className="text-gray-700 hover:text-green-600 transition-colors capitalize"
              >
                {t("header.home")}
              </a>
              <a
                href="/#services"
                className="text-gray-700 hover:text-green-600 transition-colors capitalize"
              >
                {t("header.services")}
              </a>
              <a
                href="/#portfolio"
                className="text-gray-700 hover:text-green-600 transition-colors capitalize"
              >
                {t("header.portfolio")}
              </a>
              <a
                href="/#about"
                className="text-gray-700 hover:text-green-600 transition-colors capitalize"
              >
                {t("header.about")}
              </a>
              <a
                href="/#contact"
                className="text-gray-700 hover:text-green-600 transition-colors capitalize"
              >
                {t("header.contact")}
              </a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-600 transition-colors capitalize flex items-center space-x-1">
                  <span>{t("header.departments")}</span>
                  <ChevronDown size={20} />
                </button>
                <div className="absolute top-8 right-4 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    to="/شلالات-نوافير"
                    className="block px-4 py-2 text-xl font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    {t("waters.title")}
                  </Link>
                  <Link
                    to="/ديكورات-حجرية"
                    className="block px-4 py-2 text-xl font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    {t("stone.title")}
                  </Link>
                  <Link
                    to="/غرف-زجاجية"
                    className="block px-4 py-2 text-xl font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    {t("glass.title")}
                  </Link>
                  <Link
                    to="/عشب-طبيعي"
                    className="block px-4 py-2 text-xl font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    {t("grass.title")}
                  </Link>
                  <Link
                    to="/شبكات-ري"
                    className="block px-4 py-2 text-xl font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    {t("irrigation.title")}
                  </Link>
                  <Link
                    to="/عشب-جداري"
                    className="block px-4 py-2 text-xl font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    {t("wallgrass.title")}
                  </Link>
                  <Link
                    to="/مظلات"
                    className="block px-4 py-2 text-xl font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    {t("awings.title")}
                  </Link>
                </div>
              </div>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant={"ghost"}
                size={"sm"}
                onClick={toogleLanguage}
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage === "ar" ? "English" : "العربية"}</span>
              </Button>
              <Button variant={"outline"} size={"sm"}>
                <Link
                  to="tel:+201011053973"
                  className="flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t("header.phone")}</span>
                </Link>
              </Button>
              <Button vsize={"sm"} className="bg-green-600 hover:bg-green-700">
                <Link
                  to="https://wa.me/+201011053973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  {t("contact.info.whatsappText")}
                </Link>
              </Button>
            </div>

            <Button
              className={"md:hidden"}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {isOpen && (
            <nav className="md:hidden flex flex-col items-center space-y-3 mt-4 pb-4">
              <Link
                to="/#home"
                className="text-gray-700 hover:text-green-600 transition-colors capitalize"
              >
                {t("header.home")}
              </Link>
              <Link
                to="/#services"
                className="text-gray-700 hover:text-green-600 transition-colors capitalize"
              >
                {t("header.services")}
              </Link>
              <Link
                to="/#portfolio"
                className="text-gray-700 hover:text-green-600 transition-colors capitalize"
              >
                {t("header.portfolio")}
              </Link>
              <Link
                to="/#about"
                className="text-gray-700 hover:text-green-600 transition-colors capitalize"
              >
                {t("header.about")}
              </Link>
              <Link
                to="/#contact"
                className="text-gray-700 hover:text-green-600 transition-colors capitalize"
              >
                {t("header.contact")}
              </Link>
              <div className="w-full flex flex-col items-center">
                <button
                  onClick={() => setDepartmentsOpen((prev) => !prev)}
                  className="text-gray-700 hover:text-green-600 transition-colors capitalize flex items-center space-x-1"
                >
                  <span>{t("header.departments")}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      departmentsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {departmentsOpen && (
                  <div className="mt-2 w-full max-w-xs bg-white rounded-md shadow-lg flex flex-col items-center space-y-2 py-2">
                    <Link
                      to="/شلالات-نوافير"
                      className="block px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 w-full text-center"
                    >
                      {t("waters.title")}
                    </Link>
                    <Link
                      to="/ديكورات-حجرية"
                      className="block px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 w-full text-center"
                    >
                      {t("stone.title")}
                    </Link>
                    <Link
                      to="/غرف-زجاجية"
                      className="block px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 w-full text-center"
                    >
                      {t("glass.title")}
                    </Link>
                    <Link
                      to="/عشب-طبيعي"
                      className="block px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 w-full text-center"
                    >
                      {t("grass.title")}
                    </Link>
                    <Link
                      to="/شبكات-ري"
                      className="block px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 w-full text-center"
                    >
                      {t("irrigation.title")}
                    </Link>
                    <Link
                      to="/عشب-جداري"
                      className="block px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 w-full text-center"
                    >
                      {t("wallgrass.title")}
                    </Link>
                    <Link
                      to="/مظلات"
                      className="block px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 w-full text-center"
                    >
                      {t("awings.title")}
                    </Link>
                  </div>
                )}
              </div>
              <Button
                variant={"outline"}
                size={"sm"}
                onClick={toogleLanguage}
                className="flex items-center justify-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage === "ar" ? "English" : "العربية"}</span>
              </Button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
