import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTable } from "./index";

describe("Suite test ZRegistroTable", () => {
  it("Test render ZRegistroTable con slot", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table><z-registro-table-head></z-registro-table-head></z-registro-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-registro-table role="table">
        <z-registro-table-head></z-registro-table-head>
      </z-registro-table>`
    );
  });

  it("Test render ZRegistroTable con role table", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table></z-registro-table>`,
    });

    expect(page.root.getAttribute("role")).toEqual("table");
  });
});
