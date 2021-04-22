import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableHead } from "./index";

describe("Suite test ZRegistroTableHead", () => {
  it("Test render ZRegistroTableHead con slot", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHead],
      html: `<z-registro-table-head><z-registro-table-row></z-registro-table-row></z-registro-table-head>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-head role="rowgroup">
        <z-registro-table-row></z-registro-table-row>
      </z-registro-table-head>
    `);
  });

  it("Test render ZRegistroTableHead con role rowgroup", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHead],
      html: `<z-registro-table-head></z-registro-table-head>`,
    });

    expect(page.root.getAttribute("role")).toEqual("rowgroup");
  });
});
