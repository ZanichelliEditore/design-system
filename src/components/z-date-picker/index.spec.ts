import { newSpecPage } from "@stencil/core/testing";

import { ZDatePicker } from "./index";

describe("Suite test ZDatePicker", () => {
  it("Test render ZDatePicker", async () => {
    const page = await newSpecPage({
      components: [ZDatePicker],
      html: `<z-date-picker datepickerid="picker-01"></z-date-picker>`,
    });

    expect(page.root).toEqualHtml(`<z-date-picker datepickerid="picker-01">
      <div class="bottom date flatpickr-toggle-container">
        <z-input class="picker-01" icon="event" tabindex="0" type="text"></z-input>
      </div>
    </z-date-picker>`);
  });

  it("Test render ZDatePicker with custom toggle", async () => {
    const page = await newSpecPage({
      components: [ZDatePicker],
      html: `<z-date-picker datepickerid="picker-02">
        <z-button slot="toggle">
          Open z-date-picker
        </z-button>
      </z-date-picker>`,
    });

    expect(page.root).toEqualHtml(`<z-date-picker datepickerid="picker-02">
      <div class="bottom date flatpickr-toggle-container picker-02">
        <div>
          <input class="hidden-input" data-input>
          <z-button data-toggle="data-toggle" slot="toggle">
            Open z-date-picker
          </z-button>
        </div>
      </div>
    </z-date-picker>`);
  });
});
