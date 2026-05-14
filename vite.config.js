import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
   plugins: [react()],
   server: {
      proxy: {
         "/vworld": {
            target: "https://api.vworld.kr",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/vworld/, ""),
         },
         "/wms": {
            target: "https://api.vworld.kr",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/wms/, ""),
         },
         "/kakao": {
            target: "https://dapi.kakao.com",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/kakao/, ""),
         },
         "/api": {
            target: "http://localhost:8000",
            changeOrigin: true,
         },
      },
   },
   build: {
      rollupOptions: {
         output: {
            manualChunks: {
               "vendor-react": ["react", "react-dom", "react-router-dom"],
               "vendor-icons": ["lucide-react"],
               "vendor-map": ["ol"],
            },
         },
      },
      chunkSizeWarningLimit: 600,
   },
});