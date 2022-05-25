import { newSpecPage } from "@stencil/core/testing";

import { ZDatePicker } from "./index";

describe("Suite test ZDatePicker", () => {
  it("Test render ZDatePicker", async () => {
    const page = await newSpecPage({
      components: [ZDatePicker],
      html: `<z-date-picker></z-date-picker>`,
    });

    expect(page.root).toEqualHtml(`<z-date-picker>
      <z-input icon="event" name="datepicker" type="text"></z-input>
    </z-date-picker>`);
  });

  it("Test render ZDatePicker with custom toggle", async () => {
    const page = await newSpecPage({
      components: [ZDatePicker],
      html: `<z-date-picker><z-button slot="toggle">Open z-date-picker</z-button></z-date-picker>`,
    });

    expect(page.root).toEqualHtml(`<z-date-picker>
      <div class="hidden-input-container">
        <input class="hidden-input" data-input>
        <z-button data-toggle="data-toggle" slot="toggle">
          Open z-date-picker
        </z-button>
      </div>
    </z-date-picker>`);
  });
});
