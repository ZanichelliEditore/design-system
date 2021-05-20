import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableStickyFooter } from "./index";

describe("Suite test ZRegistroTableStickyFooter", () => {
  it("Test render ZRegistroTableStickyFooter vuoto", async () => {

    const page = await newSpecPage({
      components: [ZRegistroTableStickyFooter],
      html: `<z-registro-table-sticky-footer></z-registro-table-sticky-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-sticky-footer>
        <mock:shadow-root>
          <div>
            This is your z-registro-table-sticky-footer component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-registro-table-sticky-footer>
    `)
  });
});

