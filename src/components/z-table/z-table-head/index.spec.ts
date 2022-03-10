import { newSpecPage } from "@stencil/core/testing";

import { ZTableHead } from "./index";

describe("Suite test ZTableHead", () => {
  it("Test render ZTableHead con slot", async () => {
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

  it("Test render ZTableHead con role rowgroup", async () => {
    const page = await newSpecPage({
      components: [ZTableHead],
      html: `<z-table-head></z-table-head>`,
    });

    expect(page.root.getAttribute("role")).toEqual("rowgroup");
  });
});
