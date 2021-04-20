import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableHead } from "./index";

describe("Suite test ZRegistroTableHead", () => {
  it("Test render ZRegistroTableHead vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHead],
      html: `<z-registro-table-head></z-registro-table-head>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-head>
        <mock:shadow-root>
          <slot />
        </mock:shadow-root>
      </z-registro-table-head>
    `);
  });
});
