import { Outlet } from 'react-router-dom';

export function FullScreenLayout({ children }) {
  return (
    <div className="flex-col min-h-screen relative">
      <Outlet />
    </div>
  );
}
