import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableFooter } from "./index";

describe("Suite test ZRegistroTableFooter", () => {
  it("Test render ZRegistroTableFooter con slot", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableFooter],
      html: `<z-registro-table-footer><z-registro-table-row></z-registro-table-row></z-registro-table-footer>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-footer role="rowgroup">
        <z-registro-table-row></z-registro-table-row>
      </z-registro-table-footer>
    `);
  });

  it("Test render ZRegistroTableFooter con role rowgroup", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableFooter],
      html: `<z-registro-table-footer></z-registro-table-footer>`,
    });

    expect(page.root.getAttribute("role")).toEqual("rowgroup");
  });
});
