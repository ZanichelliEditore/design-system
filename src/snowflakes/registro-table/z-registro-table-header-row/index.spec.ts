import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableHeaderRow } from "./index";

describe("Suite test ZRegistroTableHeaderRow", () => {
  it("Test render ZRegistroTableHeaderRow vuoto", async () => {

    const page = await newSpecPage({
      components: [ZRegistroTableHeaderRow],
      html: `<z-registro-table-header-row></z-registro-table-header-row>`
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header-row>
        <mock:shadow-root>
          <div>
            This is your z-registro-table-header-row component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-registro-table-header-row>
    `)
  });
});

