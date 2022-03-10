import { newSpecPage } from "@stencil/core/testing";

import { ZTableCell } from "./index";

describe("Suite test ZTableCell", () => {
  it("Test render ZTableCell con slot", async () => {
    const page = await newSpecPage({
      components: [ZTableCell],
      html: `<z-registro-table-cell><span>Test</span></z-registro-table-cell>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-cell padding="medium" role="cell">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <span>Test</span>
      </z-registro-table-cell>
    `);
  });

  it("Test render ZTableCell con button", async () => {
    const page = await newSpecPage({
      components: [ZTableCell],
      html: `<z-registro-table-cell show-button="true"><span>Test</span></z-registro-table-cell>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-cell  padding="medium" role="cell" show-button="true">
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

  it("Test render ZTableCell con role cell", async () => {
    const page = await newSpecPage({
      components: [ZTableCell],
      html: `<z-registro-table-cell></z-registro-table-cell>`,
    });

    expect(page.root.getAttribute("role")).toEqual("cell");
  });
});
