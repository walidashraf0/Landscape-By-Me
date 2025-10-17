import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import sitemap from "vite-plugin-sitemap";

// Define paths for sitemap
const paths = [
  { path: "/", priority: 1.0 },
  { path: "/شلالات-نوافير", priority: 0.8 },
  { path: "/ديكورات-حجرية", priority: 0.8 },
  { path: "/غرف-زجاجية", priority: 0.8 },
  { path: "/عشب-طبيعي", priority: 0.8 },
  { path: "/شبكات-ري", priority: 0.8 },
  { path: "/عشب-جداري", priority: 0.8 },
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://yourwebsite.com",
      generateRobotsTxt: false, // ✅ no create robots.txt automatically
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
