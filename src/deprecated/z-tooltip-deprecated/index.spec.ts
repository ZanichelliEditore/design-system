import { newSpecPage } from "@stencil/core/testing";

import { ZTooltipDeprecated } from "./index";

describe("Suite test ZTooltipDeprecated", () => {
  it("Test render legacy ZTooltipDeprecated left", async () => {
    const page = await newSpecPage({
      components: [ZTooltipDeprecated],
      html: `<z-tooltip-deprecated content="Ciao" type="left"></z-tooltip-deprecated>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip-deprecated class="legacy" content="Ciao" open type="left" position="left">
        <mock:shadow-root>
          Ciao
        </mock:shadow-root>
      </z-tooltip-deprecated>
    `);
  });

  it("Test render legacy ZTooltipDeprecated right", async () => {
    const page = await newSpecPage({
      components: [ZTooltipDeprecated],
      html: `<z-tooltip-deprecated content="Ciao" type="right"></z-tooltip-deprecated>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip-deprecated class="legacy" content="Ciao" type="right" position="right" open>
        <mock:shadow-root>
          Ciao
        </mock:shadow-root>
      </z-tooltip-deprecated>
    `);
  });

  it("Test render legacy ZTooltipDeprecated top", async () => {
    const page = await newSpecPage({
      components: [ZTooltipDeprecated],
      html: `<z-tooltip-deprecated content="Ciao" type="top"></z-tooltip-deprecated>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip-deprecated class="legacy" content="Ciao" type="top" open position="top">
        <mock:shadow-root>
          Ciao
        </mock:shadow-root>
      </z-tooltip-deprecated>
    `);
  });

  it("Test render legacy ZTooltipDeprecated bottom", async () => {
    const page = await newSpecPage({
      components: [ZTooltipDeprecated],
      html: `<z-tooltip-deprecated content="Ciao" type="bottom"></z-tooltip-deprecated>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip-deprecated class="legacy" content="Ciao" type="bottom" open position="bottom">
        <mock:shadow-root>
          Ciao
        </mock:shadow-root>
      </z-tooltip-deprecated>
    `);
  });

  it("Test render ZTooltipDeprecated with button inside", async () => {
    const page = await newSpecPage({
      components: [ZTooltipDeprecated],
      html: `<z-tooltip-deprecated type="bottom" open>
        <button>Button text</button>
      </z-tooltip-deprecated>`
    });

    expect(page.root).toHaveAttribute("type");
    expect(page.root).toHaveAttribute("open");
    expect(page.root).toHaveAttribute("position");
    expect(page.root).toHaveAttribute("style");
    expect(page.root.querySelector("button")).toBeTruthy();
  });

  it("Test render ZTooltipDeprecated closed", async () => {
    const page = await newSpecPage({
      components: [ZTooltipDeprecated],
      html: `<z-tooltip-deprecated type="bottom"></z-tooltip-deprecated>`
    });

    expect(page.root).toEqualLightHtml(`<z-tooltip-deprecated type="bottom"></z-tooltip-deprecated>`);
  });
});
