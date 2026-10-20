import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves the site from /<repo>/ — set VITE_BASE=/ for other hosts.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? "/gary-english/",
  build: { target: "es2022" },
});
