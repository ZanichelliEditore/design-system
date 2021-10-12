import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableRow } from "./index";

describe("Suite test ZRegistroTableRow", () => {
  it("Test render ZRegistroTableRow vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableRow],
      html: `<z-registro-table-row><z-registro-table-cell></z-registro-table-cell></z-registro-table-row>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-row role="row">
        <z-registro-table-cell>
          <z-icon name="null"></z-icon>
        </z-registro-table-cell>
        <z-registro-table-cell></z-registro-table-cell>
      </z-registro-table-row>
    `);
  });

  it("Test render ZRegistroTableRow con role row", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableRow],
      html: `<z-registro-table-row></z-registro-table-row>`,
    });

    expect(page.root.getAttribute("role")).toEqual("row");
  });
});
