import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://journol-vercel-server.vercel.app",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
