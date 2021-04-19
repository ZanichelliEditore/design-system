import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTable } from "./index";

describe("Suite test ZRegistroTable", () => {
  it("Test render ZRegistroTable vuoto", async () => {

    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table></z-registro-table>`
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table>
        <mock:shadow-root>
          <div>
            This is your z-registro-table component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-registro-table>
    `)
  });
});

