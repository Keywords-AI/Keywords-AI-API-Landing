import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';

export function NavigationLayout() {
  return (
    <div className="flex-col min-h-screen relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
