// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        event1: resolve(__dirname, "src/event1.html"),
        event2: resolve(__dirname, "src/event2.html"),
<<<<<<< HEAD
        event3: resolve(__dirname, "src/event3.html"),
        opencall: resolve(__dirname, "src/opencall.html"),
=======
        program: resolve(__dirname, "src/program.html"),
>>>>>>> 6930dffe56b706faf1f9824f558a49ecec295ba8
      },
    },
  },
});
