import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableCell } from "./index";

describe("Suite test ZRegistroTableCell", () => {
  it("Test render ZRegistroTableCell con slot", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableCell],
      html: `<z-registro-table-cell><span>Test</span></z-registro-table-cell>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-cell role="cell">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <span>Test</span>
      </z-registro-table-cell>
    `);
  });

  it("Test render ZRegistroTableCell con button", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableCell],
      html: `<z-registro-table-cell show-button="true"><span>Test</span></z-registro-table-cell>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-cell role="cell" show-button="true">
        <mock:shadow-root>
          <div class="button-container">
            <div class="button-content">
              <z-button icon="contextual-menu" size="x-small" square="" variant="tertiary"></z-button>
              <div class="contextual-menu-container">
                <slot name="contextual-menu"></slot>
              </div>
            </div>
          </div>
          <slot></slot>
        </mock:shadow-root>
        <span>
          Test
        </span>
      </z-registro-table-cell>
    `);
  });

  it("Test render ZRegistroTableCell con role cell", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableCell],
      html: `<z-registro-table-cell></z-registro-table-cell>`,
    });

    expect(page.root.getAttribute("role")).toEqual("cell");
  });
});
