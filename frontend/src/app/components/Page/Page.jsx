import styles from './Page.css';

export function Page({ children }) {
  return (
    <div className="w-full h-[calc(100vh-61px)] overflow-auto items-center justify-center">
      {children}
    </div>
  );
}
