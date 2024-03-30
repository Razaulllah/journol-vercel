import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://journol-vercel-api.vercel.app",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
