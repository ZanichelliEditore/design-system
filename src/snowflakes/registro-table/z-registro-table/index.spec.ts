import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTable } from "./index";

describe("Suite test ZRegistroTable", () => {
  it("Test render ZRegistroTable vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table></z-registro-table>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table>
        <mock:shadow-root>
          <slot />
        </mock:shadow-root>
      </z-registro-table>
    `);
  });
});
