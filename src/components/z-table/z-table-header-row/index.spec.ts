import { newSpecPage } from "@stencil/core/testing";

import { ZTableHeaderRow } from "./index";

describe("Suite test ZTableHeaderRow", () => {
  it("Test prop expandable = false", async () => {
    const page = await newSpecPage({
      components: [ZTableHeaderRow],
      html: `<z-registro-table-header-row expandable="false"><z-registro-table-header/></z-registro-table-header-row>`
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header-row expandable="false" role="row">
        <z-registro-table-header></z-registro-table-header>
      </z-registro-table-header-row>
    `)
  });


  it("Test prop expandable = true", async () => {
    const page = await newSpecPage({
      components: [ZTableHeaderRow],
      html: `<z-registro-table-header-row expandable="true"><z-registro-table-header/></z-registro-table-header-row>`
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header-row role="row" expandable>
        <z-registro-table-header></z-registro-table-header>
        <z-registro-table-header></z-registro-table-header>
      </z-registro-table-header-row>
    `)
  });
});

