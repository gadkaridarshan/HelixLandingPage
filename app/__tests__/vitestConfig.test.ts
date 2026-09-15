import { describe, it, expect } from "vitest";
import { config } from "vitest/config";

describe("vitestConfig", () => {
  it("loads without type errors and has required test configuration", () => {
    expect(config).toBeDefined();
    expect(config.test).toBeDefined();
    expect(config.test?.environment).toBe("jsdom");
    expect(config.test?.setupFiles).toBeDefined();
    expect(config.test?.setupFiles).toContain("./app/__tests__/setup.ts");
    expect(config.plugins).toBeDefined();
    expect(config.plugins?.length).toBeGreaterThan(0);
    expect(config.coverage).toBeDefined();
    expect(config.coverage?.reporter).toContain("json-summary");
    expect(config.coverage?.reporter).toContain("text-summary");
  });
});