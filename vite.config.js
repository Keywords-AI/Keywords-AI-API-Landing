import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 4200,
  },
  preview: {
    port: 8080,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
