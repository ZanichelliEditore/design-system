import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableBody } from "./index";

describe("Suite test ZRegistroTableBody", () => {
  it("Test render ZRegistroTableBody vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableBody],
      html: `<z-registro-table-body></z-registro-table-body>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-body>
        <mock:shadow-root>
          <slot />
        </mock:shadow-root>
      </z-registro-table-body>
    `);
  });
});
