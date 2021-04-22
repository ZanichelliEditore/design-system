import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableRow } from "./index";

describe("Suite test ZRegistroTableRow", () => {
  it("Test render ZRegistroTableRow vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableRow],
      html: `<z-registro-table-row></z-registro-table-row>`,
    });

    expect(page.root.getAttribute("role")).toEqual("row");
  });
});
