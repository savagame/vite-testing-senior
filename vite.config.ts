/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "html"],
      exclude: ["src/main.tsx", "src/App.tsx"],
      reportsDirectory: "./coverage",
      thresholds: {
        lines: 90,
        functions: 80,
        branches: 80,
        statements: 90,
        thresholds: {
          "src/hooks/useDebounce.ts": {
            lines: 100,
            functions: 100,
          },
          "src/hooks/useFetchUser.ts": {
            lines: 95,
          },
        },
      },
    },
  },
});
