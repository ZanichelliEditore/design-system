import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableHead } from "./index";

describe("Suite test ZRegistroTableHead", () => {
  it("Test render ZRegistroTableHead vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHead],
      html: `<z-registro-table-head></z-registro-table-head>`,
    });

    expect(page.root.getAttribute("role")).toEqual("rowgroup");
  });
});
