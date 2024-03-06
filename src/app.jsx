import { Routes } from "./Routes";
import React, { useEffect } from "react";
import AuthContext from "./authentication/AuthContext";
import { PostHogProvider } from "posthog-js/react";
import posthog from "posthog-js";

export function App() {
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    posthog.init("phc_rL8MrmFrie28wgxtDurKt9t1bwCzChaJQ7WYaj1F1gH", {
      api_host: "https://app.posthog.com",
    });
  }, []);
  return (
    <div className="bg-gray-black h-full w-full">
      <PostHogProvider client={posthog}>
        <AuthContext.Provider value={{ user, setUser }}>
          <Routes />
        </AuthContext.Provider>
      </PostHogProvider>
    </div>
  );
}
export default App;
