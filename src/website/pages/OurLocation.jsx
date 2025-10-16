import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { PhoneCall, MessageCircle } from "lucide-react";

import { useTranslation } from "react-i18next";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const OurLocation = () => {
  const { t } = useTranslation();
  const position = [31.30367, 31.454813];
  const phoneNumber = "+201011053973";
  const whatsappMessage = "Hello, I'm interested in your landscaping services!";

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        {t("ourLocation")}
      </h2>

      <div className="w-full h-[400px] mb-6 rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Landscape by Me <br /> Your beautiful landscapes start here!
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium"
        >
          <PhoneCall /> {t("callUs")}
        </a>
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors text-lg font-medium"
        >
          <MessageCircle /> {t("footer.whatsappUs")}
        </a>
      </div>
    </div>
  );
};

export default OurLocation;
