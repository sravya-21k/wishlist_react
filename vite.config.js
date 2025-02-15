import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/wishlist_react/", // Add this line for GitHub Pages
  build: {
    assetsDir: "assets", // Ensure assets are placed under the 'assets' directory
  },
});
