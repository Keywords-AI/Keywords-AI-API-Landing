import { Outlet } from "react-router-dom";
import { Footer, MobileFooter } from "src/components/Footer/Footer";
import { Navbar } from "src/components/Navbar";

export function NavigationLayout({ user, mobile }) {
  
  return (
    <div className="flex-col w-full min-h-screen relative">
      <Navbar />
      <Outlet />
      {!user?.email && !mobile && <Footer />}
    {!user?.email && mobile && <MobileFooter />}
    </div>
  );
}
