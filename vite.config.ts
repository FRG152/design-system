import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "design_system",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/atoms/Button.tsx",
        "./Checkbox": "./src/atoms/Checkbox.tsx",
        "./Input": "./src/atoms/Input.tsx",
        "./Card": "./src/organisms/Card.tsx",
        "./Form": "./src/molecules/FormField.tsx",
      },
      shared: ["react", "react-dom", "axios"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
