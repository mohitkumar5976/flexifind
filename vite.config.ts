// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true, // allows access from local network
//     port: 3000, // or your preferred port
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,     // allows access from local network
    port: 3000,     // or your preferred port
  },
  build: {
    outDir: 'dist', // outputs to renderer/dist
  },
});
