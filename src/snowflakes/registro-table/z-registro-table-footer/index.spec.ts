import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableFooter } from "./index";

describe("Suite test ZRegistroTableFooter", () => {
  it("Test render ZRegistroTableFooter vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableFooter],
      html: `<z-registro-table-footer></z-registro-table-footer>`,
    });

    expect(page.root.getAttribute("role")).toEqual("rowgroup");
  });
});
