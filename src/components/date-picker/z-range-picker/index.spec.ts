import { newSpecPage } from "@stencil/core/testing";

import { ZRangePicker } from "./index";

describe("Suite test ZRangePicker", () => {
  it("Test render ZRangePicker", async () => {
    const page = await newSpecPage({
      components: [ZRangePicker],
      html: `<z-range-picker range-picker-id="picker-01"></z-range-picker>`,
    });

    expect(page.root).toEqualHtml(`<z-range-picker range-picker-id="picker-01">
      <div class="bottom date range-picker-container start-input">
        <div class="picker-01-container">
          <input class="hidden-input" data-input>
          <z-input class="start-input picker-01" data-toggle icon="event" tabindex="0" type="text"></z-input>
        </div>
        <div class="picker-01-container-2">
          <input class="hidden-input" data-input>
          <z-input class="end-input picker-01-2" data-toggle icon="event" tabindex="0" type="text"></z-input>
        </div>
      </div>
    </z-range-picker>`);
  });
});
