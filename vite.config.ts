/// <reference types="vite/client" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: /^~/, replacement: "" },
      { find: "@", replacement: "/src" },
    ],
  },
  css: {
    // convert .app-header (less) to styles.appHeader (tsx)
    modules: {
      localsConvention: "camelCase",
    },
  },
  // server: {
  //   port: 7841,
  //   open: true,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:4010",
  //       // target: "http://kiness.aiacademy.edu.vn",
  //       // changeOrigin: true,
  //     },
  //   },
  // },
});
