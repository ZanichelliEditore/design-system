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
          <table>
            <thead>
              <slot name=\"header\"></slot>
            </thead>
            <tbody>
              <slot name=\"body\"></slot>
            </tbody>
            <tfoot>
              <slot name=\"footer\"></slot>
            </tfoot>
          </table>
        </mock:shadow-root>
      </z-registro-table>
    `);
  });
});
