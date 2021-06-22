import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableExpandedRow } from "./index";

describe("Suite test ZRegistroTableExpandedRow", () => {
  it("Test render ZRegistroTableExpandedRow vuoto", async () => {

    const page = await newSpecPage({
      components: [ZRegistroTableExpandedRow],
      html: `<z-registro-table-expanded-row></z-registro-table-expanded-row>`
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-expanded-row>
        <mock:shadow-root>
          <div>
            This is your z-registro-table-expanded-row component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-registro-table-expanded-row>
    `)
  });
});

