import { newSpecPage } from "@stencil/core/testing";

import { ZDatepickerFlatpickr } from "./index";

describe("Suite test ZDatepickerFlatpickr", () => {
  it("Test render ZDatepickerFlatpickr vuoto", async () => {

    const page = await newSpecPage({
      components: [ZDatepickerFlatpickr],
      html: `<z-datepicker-flatpickr></z-datepicker-flatpickr>`
    });

    expect(page.root).toEqualHtml(`
      <z-datepicker-flatpickr>
        <mock:shadow-root>
          <div>
            This is your z-datepicker-flatpickr component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-datepicker-flatpickr>
    `)
  });
});

