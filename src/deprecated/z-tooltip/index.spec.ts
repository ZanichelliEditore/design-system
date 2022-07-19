import { newSpecPage } from "@stencil/core/testing";

import { ZTooltip } from "./index";

describe("Suite test ZTooltip", () => {
  it("Test render legacy ZTooltip left", async () => {
    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip content="Ciao" type="left"></z-tooltip>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip class="legacy" content="Ciao" open type="left" position="left">
        <mock:shadow-root>
          Ciao
        </mock:shadow-root>
      </z-tooltip>
    `);
  });

  it("Test render legacy ZTooltip right", async () => {
    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip content="Ciao" type="right"></z-tooltip>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip class="legacy" content="Ciao" type="right" position="right" open>
        <mock:shadow-root>
          Ciao
        </mock:shadow-root>
      </z-tooltip>
    `);
  });

  it("Test render legacy ZTooltip top", async () => {
    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip content="Ciao" type="top"></z-tooltip>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip class="legacy" content="Ciao" type="top" open position="top">
        <mock:shadow-root>
          Ciao
        </mock:shadow-root>
      </z-tooltip>
    `);
  });

  it("Test render legacy ZTooltip bottom", async () => {
    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip content="Ciao" type="bottom"></z-tooltip>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip class="legacy" content="Ciao" type="bottom" open position="bottom">
        <mock:shadow-root>
          Ciao
        </mock:shadow-root>
      </z-tooltip>
    `);
  });

  it("Test render ZTooltip with button inside", async () => {
    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip type="bottom" open>
        <button>Button text</button>
      </z-tooltip>`
    });

    expect(page.root).toHaveAttribute("type");
    expect(page.root).toHaveAttribute("open");
    expect(page.root).toHaveAttribute("position");
    expect(page.root).toHaveAttribute("style");
    expect(page.root.querySelector("button")).toBeTruthy();
  });

  it("Test render ZTooltip closed", async () => {
    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip type="bottom"></z-tooltip>`
    });

    expect(page.root).toEqualLightHtml(`<z-tooltip type="bottom"></z-tooltip>`);
  });
});
