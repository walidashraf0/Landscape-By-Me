import FloatingIcon from "@/website/pages/FloatingIcon";
import Footer from "@/website/pages/Footer";
import Navbar from "@/website/pages/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";

const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Show loader for 800ms

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div className="min-h-screen">
        {isLoading && <Loader />}
        <Navbar />
        <Outlet />
        <Footer />
        <FloatingIcon />
      </div>
    </>
  );
};

export default AppLayout;
