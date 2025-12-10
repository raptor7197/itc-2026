import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/dist/**",
        "**/public/**",
        "**/itc_2021/**",
        "**/itc_2022/**",
        "**/itc_2024_archive/**",
        "**/itcindia2023/**",
        "**/International Test Conference -- India 2025_files/**"
      ]
    }
  }
});
