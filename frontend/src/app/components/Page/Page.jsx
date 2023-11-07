import './Page.css';

export function Page({ children }) {
  return (
    <div className="w-full h-full flex-col flex-1 mt-[61px] overflow-auto items-center justify-center">
      {children}
    </div>
  );
}
