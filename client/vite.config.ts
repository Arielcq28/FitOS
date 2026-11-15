import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/server": {
        target: process.env.VITE_BACKEND_URL || "http://localhost:3000", // Backend server URL
        changeOrigin: true, // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/server/, ""), // Remove the /server prefix when forwarding to the backend
      },
    },
  },
  plugins: [tailwindcss(), react()],
});
