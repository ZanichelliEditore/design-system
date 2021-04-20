import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableCell } from "./index";

describe("Suite test ZRegistroTableCell", () => {
  it("Test render ZRegistroTableCell vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableCell],
      html: `<z-registro-table-cell></z-registro-table-cell>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-cell>
        <mock:shadow-root>
          <slot />
        </mock:shadow-root>
      </z-registro-table-cell>
    `);
  });
});
