import {newSpecPage} from "@stencil/core/testing";

import {ZTool} from "./index";

describe("suite test ZTool", () => {
  it("test render ZTool", async () => {
    const page = await newSpecPage({
      components: [ZTool],
      html: `<z-tool icon="gear" tooltip="Hello world!"></z-tool>`,
    });

    expect(page.root).toEqualHtml(`
      <z-tool icon="gear" tooltip="Hello world!">
        <mock:shadow-root>
          <button aria-label="Hello world!" aria-pressed="false" class="z-tool" type="button">
            <z-icon name="gear"></z-icon>
          </button>
          <z-popover center="" class="z-tool-tooltip" position="top" showarrow="">
            <span class="body-4">Hello world!</span>
          </z-popover>
        </mock:shadow-root>
      </z-tool>
    `);
  });

  it("test popover opens on hover", async () => {
    const page = await newSpecPage({
      components: [ZTool],
      html: `<z-tool icon="gear" tooltip="Hello world!"></z-tool>`,
    });

    const button = page.root.shadowRoot.querySelector("button");
    const popover = page.root.shadowRoot.querySelector("z-popover");

    expect(popover.getAttribute("open")).toBeNull();

    button.dispatchEvent(new MouseEvent("mouseenter"));

    await new Promise((resolve) => setTimeout(resolve, 1050));
    await page.waitForChanges();

    expect(popover.getAttribute("open")).toBe("");
  });

  it("test popover closes on mouse leave", async () => {
    const page = await newSpecPage({
      components: [ZTool],
      html: `<z-tool icon="gear" tooltip="Hello world!"></z-tool>`,
    });

    const button = page.root.shadowRoot.querySelector("button");
    const popover = page.root.shadowRoot.querySelector("z-popover");

    button.dispatchEvent(new MouseEvent("mouseenter"));
    await new Promise((resolve) => setTimeout(resolve, 1050));
    await page.waitForChanges();

    expect(popover.getAttribute("open")).toBe("");

    button.dispatchEvent(new MouseEvent("mouseleave"));
    await page.waitForChanges();

    expect(popover.getAttribute("open")).toBeNull();
  });

  it("test popover opens when disabled", async () => {
    const page = await newSpecPage({
      components: [ZTool],
      html: `<z-tool icon="gear" tooltip="Hello world!" disabled></z-tool>`,
    });

    const button = page.root.shadowRoot.querySelector("button");
    const popover = page.root.shadowRoot.querySelector("z-popover");

    button.dispatchEvent(new MouseEvent("mouseenter"));
    await new Promise((resolve) => setTimeout(resolve, 1050));
    await page.waitForChanges();

    expect(popover.getAttribute("open")).toBe("");
  });

  it("test disabled state is reflected on button", async () => {
    const page = await newSpecPage({
      components: [ZTool],
      html: `<z-tool icon="gear" disabled></z-tool>`,
    });

    expect(page.root.getAttribute("disabled")).toBe("");

    const button = page.root.shadowRoot.querySelector("button");
    expect(button.hasAttribute("disabled")).toBe(true);
  });
});
