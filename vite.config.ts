import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "design-system",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/atoms/Button.tsx",
        "./Checkbox": "./src/atoms/Checkbox.tsx",
        "./Input": "./src/atoms/Input.tsx",
        "./Card": "./src/organisms/Card.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
