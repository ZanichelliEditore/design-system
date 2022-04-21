import { newSpecPage } from "@stencil/core/testing";

import { ZDatepicker } from "./index";

describe("Suite test ZDatepicker", () => {
  it("Test render ZDatepicker vuoto", async () => {

    const page = await newSpecPage({
      components: [ZDatepicker],
      html: `<z-datepicker></z-datepicker>`
    });

    expect(page.root).toEqualHtml(`
      <z-datepicker>
        <mock:shadow-root>
          <div>
            This is your z-datepicker component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-datepicker>
    `)
  });
});

