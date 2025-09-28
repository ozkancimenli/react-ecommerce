import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
    css: true,
    coverage: {
      reporter: ["text", "lcov"],
      exclude: ["src/main.tsx", "src/vite-env.d.ts"]
    }
  }
});
