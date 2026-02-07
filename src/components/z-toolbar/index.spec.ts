import {newSpecPage} from "@stencil/core/testing";
import {ZTool} from "../z-tool/index";
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

  it("render con z-tool", async () => {
    const page = await newSpecPage({
      components: [ZToolbar, ZTool],
      html: `
        <z-toolbar>
          <z-tool icon="gear" tooltip="Impostazioni"></z-tool>
          <z-tool icon="download" tooltip="Scarica"></z-tool>
        </z-toolbar>
      `,
    });
    const tools = page.root.querySelectorAll("z-tool");
    expect(tools.length).toBe(2);
  });

  it("render con gruppi", async () => {
    const page = await newSpecPage({
      components: [ZToolbar, ZTool],
      html: `
        <z-toolbar>
          <div class="z-toolbar-group">
            <z-tool icon="gear"></z-tool>
            <z-tool icon="download"></z-tool>
          </div>
          <div class="z-toolbar-group">
            <z-tool icon="upload"></z-tool>
          </div>
        </z-toolbar>
      `,
    });
    const groups = page.root.querySelectorAll(".z-toolbar-group");
    expect(groups.length).toBe(2);
  });

  it("roving tabindex: primo tool ha tabindex 0", async () => {
    const page = await newSpecPage({
      components: [ZToolbar, ZTool],
      html: `
        <z-toolbar>
          <z-tool icon="gear"></z-tool>
          <z-tool icon="download"></z-tool>
        </z-toolbar>
      `,
    });
    await page.waitForChanges();
    const tools = page.root.querySelectorAll("z-tool");
    const firstButton = tools[0].shadowRoot.querySelector("button");
    const secondButton = tools[1].shadowRoot.querySelector("button");
    expect(firstButton.tabIndex).toBe(0);
    expect(secondButton.tabIndex).toBe(-1);
  });

  it("collectToolItems raccoglie i tool correttamente", async () => {
    const page = await newSpecPage({
      components: [ZToolbar, ZTool],
      html: `
        <z-toolbar>
          <div class="z-toolbar-group">
            <z-tool icon="gear"></z-tool>
            <z-tool icon="download"></z-tool>
          </div>
          <z-tool icon="upload"></z-tool>
        </z-toolbar>
      `,
    });
    await page.waitForChanges();
    const toolbar = page.rootInstance as ZToolbar;
    expect(toolbar["toolItems"].length).toBe(3);
  });

  it("render toolbar nestata dentro z-tool", async () => {
    const page = await newSpecPage({
      components: [ZToolbar, ZTool],
      html: `
        <z-toolbar>
          <z-tool icon="gear">
            <z-toolbar>
              <z-tool icon="chevron-up"></z-tool>
            </z-toolbar>
          </z-tool>
        </z-toolbar>
      `,
    });
    await page.waitForChanges();
    const nestedToolbar = page.root.querySelector("z-tool z-toolbar");
    expect(nestedToolbar).not.toBeNull();
  });

  it("click su tool con submenu attivo", async () => {
    const page = await newSpecPage({
      components: [ZToolbar, ZTool],
      html: `
        <z-toolbar>
          <z-tool icon="gear">
            <z-toolbar>
              <z-tool icon="chevron-up"></z-tool>
            </z-toolbar>
          </z-tool>
        </z-toolbar>
      `,
    });
    await page.waitForChanges();
    const tool = page.root.querySelector("z-tool") as HTMLZToolElement;
    const button = tool.shadowRoot.querySelector("button");
    button.click();
    await page.waitForChanges();
    expect(tool.active).toBe(true);
  });

  it("tool disabled non attiva active al click", async () => {
    const page = await newSpecPage({
      components: [ZToolbar, ZTool],
      html: `
        <z-toolbar>
          <z-tool icon="gear" disabled>
            <z-toolbar>
              <z-tool icon="chevron-up"></z-tool>
            </z-toolbar>
          </z-tool>
        </z-toolbar>
      `,
    });
    await page.waitForChanges();
    const tool = page.root.querySelector("z-tool") as HTMLZToolElement;
    expect(tool.active).toBe(false);
  });

  it("secondo click su tool chiude submenu", async () => {
    const page = await newSpecPage({
      components: [ZToolbar, ZTool],
      html: `
        <z-toolbar>
          <z-tool icon="gear">
            <z-toolbar>
              <z-tool icon="chevron-up"></z-tool>
            </z-toolbar>
          </z-tool>
        </z-toolbar>
      `,
    });
    await page.waitForChanges();
    const tool = page.root.querySelector("z-tool") as HTMLZToolElement;
    const button = tool.shadowRoot.querySelector("button");
    button.click();
    await page.waitForChanges();
    expect(tool.active).toBe(true);
    button.click();
    await page.waitForChanges();
    expect(tool.active).toBe(false);
  });
});
