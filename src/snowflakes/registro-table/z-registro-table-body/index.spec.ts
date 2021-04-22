import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableBody } from "./index";

describe("Suite test ZRegistroTableBody", () => {
  it("Test render ZRegistroTableBody con slot", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableBody],
      html: `<z-registro-table-body><z-registro-table-row></z-registro-table-row></z-registro-table-body>`,
    });

    expect(page.root).toEqualHtml(
      `<z-registro-table-body role="rowgroup">
        <z-registro-table-row aria-rowindex="0"></z-registro-table-row>
      </z-registro-table-body>`
    );
  });

  it("Test render ZRegistroTableBody con role rowgroup", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableBody],
      html: `<z-registro-table-body></z-registro-table-body>`,
    });

    expect(page.root.getAttribute("role")).toEqual("rowgroup");
  });
});
