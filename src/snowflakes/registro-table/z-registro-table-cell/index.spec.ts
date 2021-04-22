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
        <span>Test</span>
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
