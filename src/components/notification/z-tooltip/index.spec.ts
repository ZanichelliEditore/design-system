import { newSpecPage } from "@stencil/core/testing";

import { ZTooltip } from "./index";

describe("Suite test ZTooltip", () => {

  it("Test render ZTooltip left", async () => {
    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip content='Ciao' type='left'></z-tooltip>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip content='Ciao' type='left'>
      <mock:shadow-root>
          <div class="legacy tooltip tooltip-right-arrow">
          Ciao
          </div>
        </mock:shadow-root>
      </z-tooltip>
    `);
  });

  it("Test render ZTooltip right", async () => {
    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip content='Ciao' type='right'></z-tooltip>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip content='Ciao' type='right'>
        <mock:shadow-root>
          <div class="legacy tooltip tooltip-left-arrow">
          Ciao
          </div>
        </mock:shadow-root>
      </z-tooltip>
    `);
  });

  it("Test render ZTooltip top", async () => {
    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip content='Ciao' type='top'></z-tooltip>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip content='Ciao' type='top'>
        <mock:shadow-root>
          <div class="legacy tooltip tooltip-bottom-arrow">
          Ciao
          </div>
        </mock:shadow-root>
      </z-tooltip>
    `);
  });

  it("Test render ZTooltip bottom", async () => {
    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip content='Ciao' type='bottom'></z-tooltip>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip content='Ciao' type='bottom'>
        <mock:shadow-root>
          <div class="legacy tooltip tooltip-top-arrow">
          Ciao
          </div>
        </mock:shadow-root>
      </z-tooltip>
    `);
  });

  it("Test render ZTooltip with button inside", async () => {
    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip type='bottom'>
        <button>Button text</button>
      </z-tooltip>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip type='bottom'>
        <mock:shadow-root>
          <div class="tooltip tooltip-top-arrow">
            <slot>
            </slot>
          </div>
        </mock:shadow-root>
        <button>Button text</button>
      </z-tooltip>
    `);
  });
});
