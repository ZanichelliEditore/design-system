import { newSpecPage } from "@stencil/core/testing";

import { ZTableCell } from "./index";

describe("Suite test ZTableCell", () => {
  it("Test render ZTableCell con slot", async () => {
    const page = await newSpecPage({
      components: [ZTableCell],
      html: `<z-table-cell><span>Test</span></z-table-cell>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-cell padding="medium" role="cell">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        <span>Test</span>
      </z-table-cell>
    `);
  });

  it("Test render ZTableCell con button", async () => {
    const page = await newSpecPage({
      components: [ZTableCell],
      html: `<z-table-cell show-button="true"><span>Test</span></z-table-cell>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-cell  padding="medium" role="cell" show-button="true">
        <mock:shadow-root>
          <div class="button-container">
            <div class="button-content">
              <z-button-deprecated icon="contextual-menu" size="x-small" square="" variant="tertiary"></z-button-deprecated>
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
      </z-table-cell>
    `);
  });

  it("Test render ZTableCell con role cell", async () => {
    const page = await newSpecPage({
      components: [ZTableCell],
      html: `<z-table-cell></z-table-cell>`,
    });

    expect(page.root.getAttribute("role")).toEqual("cell");
  });
});
