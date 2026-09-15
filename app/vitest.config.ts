import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react() as never],
  test: {
    environment: "jsdom",
    setupFiles: ["./app/__tests__/setup.ts"],
    coverage: {
      reporter: ["json-summary", "text-summary"],
      include: ["app/**/*.{ts,tsx}"],
      exclude: ["node_modules/", "app/__tests__/"],
    },
  },
});