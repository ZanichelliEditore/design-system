import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableHeader } from "./index";

describe("Suite test ZRegistroTableHeader", () => {
  it("Test render ZRegistroTableHeader vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header>
        <mock:shadow-root>
          <slot />
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });
});
