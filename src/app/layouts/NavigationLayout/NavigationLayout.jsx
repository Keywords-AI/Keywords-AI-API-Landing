import { Outlet } from "react-router-dom";
import { Footer } from "src/app/old_components/Footer/Footer";
import { Navbar } from "src/app/old_components/Navbar/Navbar";

export function NavigationLayout({ user }) {
  return (
    <div className="flex-col w-full min-h-screen relative">
      <Navbar />
      <Outlet />
      {!user?.email && <Footer />}
    </div>
  );
}
