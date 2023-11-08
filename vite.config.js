import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Keywords-AI-API-Landing/",
  plugins: [react()],
  server: {
    port: 4200,
  },
  preview: {
    port: 8080,
  },
});
