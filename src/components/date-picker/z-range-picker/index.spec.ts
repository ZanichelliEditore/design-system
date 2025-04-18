import {newSpecPage} from "@stencil/core/testing";

import {ZRangePicker} from "./index";

describe("Suite test ZRangePicker", () => {
  it("Test render ZRangePicker", async () => {
    const page = await newSpecPage({
      components: [ZRangePicker],
      html: `<z-range-picker range-picker-id="picker-01"></z-range-picker>`,
    });

    expect(page.root).toEqualHtml(`<z-range-picker range-picker-id="picker-01">
      <div class="bottom date range-pickers-container start-input">
        <div class="picker-01-1-wrapper">
          <div class="picker-01-1-container">
            <z-input class="picker-01-1 start-input" data-input="data-input" icon="event" placeholder="" tabindex="0" type="text"></z-input>
          </div>
        </div>
        <div class="picker-01-2-wrapper">
          <div class="picker-01-2-container">
            <z-input class="end-input picker-01-2" data-input="data-input" icon="event" placeholder="" tabindex="0" type="text"></z-input>
          </div>
        </div>
      </div>
    </z-range-picker>`);
  });
});
