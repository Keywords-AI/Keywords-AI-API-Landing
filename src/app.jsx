import { Routes } from "./Routes";
import React from "react";
import AuthContext from "./authentication/AuthContext";
export function App() {
  const [user, setUser] = React.useState(null);

  return (
    <div className="bg-gray-black h-full w-full">
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes />
      </AuthContext.Provider>
    </div>
  );
}
export default App;
