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
        <div class="table">
            <z-registro-table-head></z-registro-table-head>
        </div>
      </z-registro-table>`
    );
  });

  it("Test render ZRegistroTable con slot sticky-footer", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table><z-registro-table-head></z-registro-table-head><div slot="sticky-footer"></div></z-registro-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-registro-table role="table">
        <div class="table">
            <z-registro-table-head></z-registro-table-head>
        </div>
        <div class="sticky-footer">
            <div slot="sticky-footer"></div>
        </div>
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
