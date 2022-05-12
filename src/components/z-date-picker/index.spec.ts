import { newSpecPage } from "@stencil/core/testing";

import { ZDatePicker } from "./index";

describe("Suite test ZDatePicker", () => {
  it("Test render ZDatePicker vuoto", async () => {

    const page = await newSpecPage({
      components: [ZDatePicker],
      html: `<z-date-picker></z-date-picker>`
    });

    expect(page.root).toEqualHtml(`
      <z-date-picker>
        <mock:shadow-root>
          <div>
            This is your z-date-picker component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-date-picker>
    `)
  });
});

