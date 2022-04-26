import { newSpecPage } from "@stencil/core/testing";

import { ZDatepickerVanilla } from "./index";

describe("Suite test ZDatepickerVanilla", () => {
  it("Test render ZDatepickerVanilla vuoto", async () => {

    const page = await newSpecPage({
      components: [ZDatepickerVanilla],
      html: `<z-datepicker-vanilla></z-datepicker-vanilla>`
    });

    expect(page.root).toEqualHtml(`
      <z-datepicker-vanilla>
        <mock:shadow-root>
          <div>
            This is your z-datepicker-vanilla component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-datepicker-vanilla>
    `)
  });
});

