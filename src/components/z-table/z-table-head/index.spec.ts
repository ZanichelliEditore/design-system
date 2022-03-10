import { newSpecPage } from "@stencil/core/testing";

import { ZTableHead } from "./index";

describe("Suite test ZRegistroTableHead", () => {
  it("Test render ZRegistroTableHead con slot", async () => {
    const page = await newSpecPage({
      components: [ZTableHead],
      html: `<z-table-head><z-table-row></z-table-row></z-table-head>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-head role="rowgroup">
        <z-table-row></z-table-row>
      </z-table-head>
    `);
  });

  it("Test render ZRegistroTableHead con role rowgroup", async () => {
    const page = await newSpecPage({
      components: [ZTableHead],
      html: `<z-table-head></z-table-head>`,
    });

    expect(page.root.getAttribute("role")).toEqual("rowgroup");
  });
});
