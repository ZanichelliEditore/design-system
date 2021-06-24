import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableExpandedRow } from "./index";

describe("Suite test ZRegistroTableExpandedRow", () => {
  it("Test render ZRegistroTableExpandedRow vuoto", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableExpandedRow],
      html: `<z-registro-table-expanded-row col-span="4"></z-registro-table-expanded-row>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-expanded-row col-span="4">
        <mock:shadow-root>
          <td colspan="4">
            <div class="content-container">
              <div class="inner-content">
                <slot></slot>
              </div>
            </div>
          </td>
        </mock:shadow-root>
      </z-registro-table-expanded-row>`);
  });
});
