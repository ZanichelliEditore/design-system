import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableHeader } from "./index";

describe("Suite test ZRegistroTableHeader", () => {
  it("Test render ZRegistroTableHeader con slot", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header><span>Test</span></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header role="columnheader">
        <span>Test</span>
      </z-registro-table-header>
    `);
  });

  it("Test render ZRegistroTableHeader con role columnheader", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header></z-registro-table-header>`,
    });

    expect(page.root.getAttribute("role")).toEqual("columnheader");
  });
});
