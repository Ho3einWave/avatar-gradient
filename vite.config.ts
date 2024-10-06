import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react(),
        dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            name: "avatar-gradient",
            fileName: "avatar-gradient",
        },
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "react/jsx-runtime",
                },
            },
        },
    },
});
