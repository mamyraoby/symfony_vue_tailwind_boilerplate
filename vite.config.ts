import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue(),
        symfonyPlugin(),
    ],
    build: {
        rollupOptions: {
            input: {
                tailwind: "./assets/css/tailwind.css",
                app: "./assets/app.ts",
                home: "./assets/scripts/home.ts"
            },
        }
    },
});
