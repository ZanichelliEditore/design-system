import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableStickyFooter } from "./index";

describe("Suite test ZRegistroTableStickyFooter", () => {
  it("Test render ZRegistroTableStickyFooter con slot", async () => {

    const page = await newSpecPage({
      components: [ZRegistroTableStickyFooter],
      html: `<z-registro-table-sticky-footer><div>dummy</div></z-registro-table-sticky-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-sticky-footer>
        <div>dummy</div>
      </z-registro-table-sticky-footer>
    `)
  });
});

