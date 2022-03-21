import { newSpecPage } from "@stencil/core/testing";

import { ZTableRow } from "./index";

describe("Suite test ZTableRow", () => {
  it("Test render ZTableRow vuoto", async () => {
    const page = await newSpecPage({
      components: [ZTableRow],
      html: `<z-table-row><z-table-cell></z-table-cell></z-table-row>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-row expanded-type="none" role="row">
        <z-table-cell></z-table-cell>
      </z-table-row>
    `);
  });

  it("Test render ZTableRow con role row", async () => {
    const page = await newSpecPage({
      components: [ZTableRow],
      html: `<z-table-row></z-table-row>`,
    });

    expect(page.root.getAttribute("role")).toEqual("row");
  });
});
