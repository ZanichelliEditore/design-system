import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableFooter } from "./index";

describe("Suite test ZRegistroTableFooter", () => {
  it("Test render ZRegistroTableFooter vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableFooter],
      html: `<z-registro-table-footer></z-registro-table-footer>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-footer>
        <mock:shadow-root>
          <slot />
        </mock:shadow-root>
      </z-registro-table-footer>
    `);
  });
});
