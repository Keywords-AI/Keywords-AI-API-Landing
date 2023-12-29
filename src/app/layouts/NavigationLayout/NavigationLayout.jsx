import { Outlet } from "react-router-dom";
import { Footer } from "src/app/components/Footer/Footer";
import { Navbar } from "src/app/components/Navbar";

export function NavigationLayout({ user }) {
  return (
    <div className="flex-col w-full min-h-screen relative">
      <Navbar />
      <Outlet />
      {!user?.email && <Footer />}
    </div>
  );
}
