import { describe, it, expect } from "vitest";
import config from "../vitest.config";

describe("vitest.config.ts", () => {
  it("should export a config with jsdom environment", () => {
    expect(config.test.environment).toBe("jsdom");
  });

  it("should configure setup files", () => {
    expect(config.test.setupFiles).toContain("./app/__tests__/setup.ts");
  });

  it("should configure coverage reporters", () => {
    expect(config.test.coverage.reporter).toContain("json-summary");
    expect(config.test.coverage.reporter).toContain("text-summary");
  });

  it("should include app source in coverage", () => {
    expect(config.test.coverage.include).toContain("app/**/*.{ts,tsx}");
  });

  it("should exclude test directories from coverage", () => {
    expect(config.test.coverage.exclude).toContain("app/__tests__/");
  });

  it("should exclude node_modules from coverage", () => {
    expect(config.test.coverage.exclude).toContain("node_modules/");
  });
});