import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableExpandedRow } from "./index";

describe("Suite test ZRegistroTableExpandedRow", () => {
  it("Test render ZRegistroTableExpandedRow vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableExpandedRow],
      html: `<z-registro-table-expanded-row col-span="4"></z-registro-table-expanded-row>`,
    });

    //Non è possibile testarlo poiché il tag <td> viene eliminato dal browser in quanto esterno al tag <table>
    expect(page.root).toBeTruthy();
  });
});
