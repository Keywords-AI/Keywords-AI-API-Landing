import { Outlet } from "react-router-dom";
import { Footer } from "src/components/Footer/Footer";
import { Navbar } from "src/components/Navbar";

export function NavigationLayout({ user }) {
  return (
    <div className="flex-col w-full min-h-screen relative">
      <Navbar />
      <Outlet />
      {!user?.email && <Footer />}
    </div>
  );
}
