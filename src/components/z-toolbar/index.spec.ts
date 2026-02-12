import {newSpecPage} from "@stencil/core/testing";
import {ZToolbar} from "./index";

describe("ZToolbar", () => {
  it("render base", async () => {
    const page = await newSpecPage({
      components: [ZToolbar],
      html: `<z-toolbar></z-toolbar>`,
    });
    expect(page.root).toEqualHtml(`
      <z-toolbar role="toolbar">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </z-toolbar>
    `);
  });

  it("render con aria-label", async () => {
    const page = await newSpecPage({
      components: [ZToolbar],
      html: `<z-toolbar html-aria-label="Toolbar principale"></z-toolbar>`,
    });
    expect(page.root.getAttribute("aria-label")).toBe("Toolbar principale");
  });
});
