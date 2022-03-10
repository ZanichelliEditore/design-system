import { newSpecPage } from "@stencil/core/testing";

import { ZTableBody } from "./index";

describe("Suite test ZRegistroTableBody", () => {
  it("Test render ZRegistroTableBody con slot", async () => {
    const page = await newSpecPage({
      components: [ZTableBody],
      html: `<z-table-body><z-table-row></z-table-row></z-table-body>`,
    });

    expect(page.root).toEqualHtml(
      `<z-table-body role="rowgroup">
        <z-table-row aria-rowindex="0"></z-table-row>
      </z-table-body>`
    );
  });

  it("Test render ZRegistroTableBody con role rowgroup", async () => {
    const page = await newSpecPage({
      components: [ZTableBody],
      html: `<z-table-body></z-table-body>`,
    });

    expect(page.root.getAttribute("role")).toEqual("rowgroup");
  });
});
