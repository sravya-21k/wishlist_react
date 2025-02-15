export default defineConfig({
  plugins: [react()],
  base: "/wishlist_react/", // Add this line for GitHub Pages
  build: {
    assetsDir: "assets", // Ensure assets are placed under the 'assets' directory
    outDir: "dist", // This is typically default, but good to explicitly specify
  },
});
