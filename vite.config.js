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
        event3: resolve(__dirname, "src/event3.html"),
        opencall: resolve(__dirname, "src/opencall.html"),
        program: resolve(__dirname, "src/program.html"),
        frivillige: resolve(__dirname, "src/frivillige.html"),
        om: resolve(__dirname, "src/om.html"),
        kontakt: resolve(__dirname, "src/kontakt.html"),
        whatfires: resolve(__dirname, "src/whatfires.html"),
        gogoyo: resolve(__dirname, "src/gogoyo.html"),
        rebirth: resolve(__dirname, "src/rebirth.html"),
        frygten: resolve(__dirname, "src/frygten.html"),
        vildmedmig: resolve(__dirname, "src/vildmedmig.html"),
        livingroom: resolve(__dirname, "src/livingroom.html"),
      },
    },
  },
});
