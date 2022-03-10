import { newSpecPage } from "@stencil/core/testing";

import { ZTableFooter } from "./index";

describe("Suite test ZRegistroTableFooter", () => {
  it("Test render ZRegistroTableFooter con slot", async () => {
    const page = await newSpecPage({
      components: [ZTableFooter],
      html: `<z-table-footer><z-table-row></z-table-row></z-table-footer>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-footer role="rowgroup">
        <z-table-row></z-table-row>
      </z-table-footer>
    `);
  });

  it("Test render ZRegistroTableFooter con role rowgroup", async () => {
    const page = await newSpecPage({
      components: [ZTableFooter],
      html: `<z-table-footer></z-table-footer>`,
    });

    expect(page.root.getAttribute("role")).toEqual("rowgroup");
  });
});
