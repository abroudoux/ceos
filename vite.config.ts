import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";
import path from "path";
import mdx from "@mdx-js/rollup";


export default defineConfig({
    envPrefix: 'VITE_',
    build: {
        outDir: 'dist',
    },
    plugins: [
        react(),
        envCompatible(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
            },
        }),
        mdx(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    }
});