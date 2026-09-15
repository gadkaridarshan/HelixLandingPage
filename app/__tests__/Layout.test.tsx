import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("../metadata", () => ({
  metadata: {
    title: "Test App",
    description: "A test application",
  },
}));

vi.mock("../globals.css", () => ({}));

const { metadata } = await import("../metadata");
const Layout = (await import("../layout")).default;

describe("Layout", () => {
  it("renders html element with lang='en'", () => {
    const { container } = render(<Layout>Test child</Layout>);
    const htmlElement = container.querySelector("html");
    expect(htmlElement).not.toBeNull();
    expect(htmlElement!.tagName).toBe("HTML");
    expect(htmlElement!.getAttribute("lang")).toBe("en");
  });

  it("renders head with all link and meta tags", () => {
    const { container } = render(<Layout>Test child</Layout>);
    const head = container.querySelector("head");
    expect(head).not.toBeNull();

    const favicon = head!.querySelector('link[rel="icon"][sizes="any"]');
    expect(favicon).not.toBeNull();

    const appleTouchIcon = head!.querySelector('link[rel="apple-touch-icon"]');
    expect(appleTouchIcon).not.toBeNull();

    const themeColor = head!.querySelector(
      'meta[name="theme-color"][content="#000000"]'
    );
    expect(themeColor).not.toBeNull();

    const colorScheme = head!.querySelector(
      'meta[name="color-scheme"][content="dark"]'
    );
    expect(colorScheme).not.toBeNull();
  });

  it("renders body containing children", () => {
    const { container } = render(
      <Layout>
        <div data-testid="child-content">Hello World</div>
      </Layout>
    );

    const body = container.querySelector("body");
    expect(body).not.toBeNull();
    expect(screen.getByTestId("child-content")).toBeInTheDocument();
    expect(body!.contains(screen.getByTestId("child-content"))).toBe(true);
  });

  it("exports metadata correctly", () => {
    expect(metadata).toBeDefined();
    expect(typeof metadata).toBe("object");
    expect(metadata).toHaveProperty("title");
  });

  it("handles null children gracefully", () => {
    const { container } = render(<Layout>{null}</Layout>);
    const body = container.querySelector("body");
    expect(body).not.toBeNull();
  });

  it("handles undefined children gracefully", () => {
    const { container } = render(<Layout>{undefined}</Layout>);
    const body = container.querySelector("body");
    expect(body).not.toBeNull();
  });
});