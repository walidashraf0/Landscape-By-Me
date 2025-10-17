import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Heading from "../componenets/Heading";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    alert(
      t("contact.form.successMessage") ||
        "Thank you for your inquiry! We will contact you soon."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <SEO 
        title="Contact Us - Landscape in Riyadh" 
        description="Get in touch with our landscaping experts for consultations, quotes, or any questions about our services."
        keywords={["contact", "landscaping services", "consultation", "quote"]}
      />
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <Heading
            title={t("contact.title")}
            subTitle={t("contact.subtitle")}
          />
          <div className="grid graid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contatc Form  */}
            <Card className={"border-0 shadow-lg"}>
              <CardContent className={"p-8"}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor=""
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact.form.name")}
                    </label>
                    <Input
                      type={"text"}
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.namePlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact.form.email")}
                    </label>
                    <Input
                      type={"email"}
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.emailPlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact.form.phone")}
                    </label>
                    <Input
                      type={"tel"}
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.phonePlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.messagePlaceholder")}
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className={"w-full bg-green-600 hover:bg-green-700"}
                    size={"lg"}
                  >
                    {t("contact.form.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {t("contact.info.title")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">
                        {t("contact.info.phone")}
                      </p>
                      <Link
                        to="tel:+201011053973"
                        className="text-gray-600 hover:text-green-600"
                      >
                        {t("header.phone")}
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">
                        {t("contact.info.whatsapp")}
                      </p>
                      <Link
                        to="https://wa.me/+201011053973"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600"
                      >
                        {t("contact.info.whatsappText")}
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">
                        {t("contact.info.email")}
                      </p>
                      <Link
                        to="mailto:walidashraf050@gmail.com"
                        className="text-gray-600 hover:text-green-600"
                      >
                        walidashraf050@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">
                        {t("contact.info.serviceArea")}
                      </p>
                      <p className="text-gray-600">
                        {t("contact.info.serviceAreaText")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">
                  {t("contact.info.businessHours")}
                </h4>
                <div className="space-y-1 text-gray-600">
                  <p>{t("contact.info.weekdays")}</p>
                  <p>{t("contact.info.saturday")}</p>
                  <p>{t("contact.info.sunday")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
