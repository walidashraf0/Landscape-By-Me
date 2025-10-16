import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingIcon = () => {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <Link
        to="https://wa.me/+201011053973"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-[50%] md:top-auto md:bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <PhoneCall className="w-6 h-6" />
      </Link>
    </>
  );
};

export default FloatingIcon;
