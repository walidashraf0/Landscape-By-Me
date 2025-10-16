import FloatingIcon from "@/website/pages/FloatingIcon";
import Footer from "@/website/pages/Footer";
import Navbar from "@/website/pages/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
        <FloatingIcon />
      </div>
    </>
  );
};

export default AppLayout;
