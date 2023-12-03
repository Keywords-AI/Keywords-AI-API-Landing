import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(),svgr({ 
    svgrOptions: {
      // svgr options
    },
  }),],
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
