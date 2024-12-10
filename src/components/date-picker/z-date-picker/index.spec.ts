import {newSpecPage} from "@stencil/core/testing";

import {ZDatePickerMode} from "../../../beans";
import {ZDatePicker} from "./index";

describe("Suite test ZDatePicker", () => {
  describe("mode ZDatePickerMode.DATE", () => {
    it("Test render ZDatePicker", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker date-picker-id="picker-01"></z-date-picker>`,
      });

      expect(page.root).toEqualHtml(`<z-date-picker date-picker-id="picker-01">
      <div class="bottom date flatpickr-toggle-container">
        <div class="picker-01-container">
          <z-input class="picker-01" data-input="data-input" icon="event" tabindex="0" type="text" arialabel=""></z-input>
        </div>
      </div>
    </z-date-picker>`);
    });
    it("Test render ZDatePicker with value", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker date-picker-id="picker-01" value="27-12-2024"></z-date-picker>`,
      });

      expect(page.root).toEqualHtml(`<z-date-picker date-picker-id="picker-01" value="27-12-2024">
      <div class="bottom date flatpickr-toggle-container">
        <div class="picker-01-container">
          <z-input class="picker-01" data-input="data-input" icon="event" tabindex="0" type="text" arialabel="" value="27-12-2024"></z-input>
        </div>
      </div>
    </z-date-picker>`);
    });
    it("Test render ZDatePicker with name", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker date-picker-id="picker-01" name="startdate"></z-date-picker>`,
      });

      expect(page.root).toEqualHtml(`<z-date-picker date-picker-id="picker-01" name="startdate">
      <div class="bottom date flatpickr-toggle-container">
        <div class="picker-01-container">
          <z-input class="picker-01" data-input="data-input" icon="event" tabindex="0" type="text" arialabel="" name="startdate"></z-input>
        </div>
      </div>
    </z-date-picker>`);
    });
  });

  describe("mode ZDatePickerMode.DATE_TIME", () => {
    const mode = ZDatePickerMode.DATE_TIME;
    it("Test render ZDatePicker", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01"></z-date-picker>`,
      });

      expect(page.root).toEqualHtml(`<z-date-picker date-picker-id="picker-01" mode="date-time">
      <div class="bottom date-time flatpickr-toggle-container">
        <div class="picker-01-container">
          <z-input class="picker-01" data-input="data-input" icon="event" tabindex="0" type="text" arialabel=""></z-input>
        </div>
      </div>
    </z-date-picker>`);
    });
    it("Test render ZDatePicker with value", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01" value="20-12-2024 - 12:00"></z-date-picker>`,
      });

      expect(page.root)
        .toEqualHtml(`<z-date-picker date-picker-id="picker-01" value="20-12-2024 - 12:00" mode="date-time">
     <div class="bottom date-time flatpickr-toggle-container">
        <div class="picker-01-container">
          <z-input class="picker-01" data-input="data-input" icon="event" tabindex="0" type="text" arialabel="" value="20-12-2024 - 12:00"></z-input>
        </div>
      </div>
    </z-date-picker>`);
    });
    it("Test render ZDatePicker with name", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01" name="startdatetime"></z-date-picker>`,
      });

      expect(page.root).toEqualHtml(`<z-date-picker date-picker-id="picker-01" name="startdatetime" mode="date-time">
      <div class="bottom date-time flatpickr-toggle-container">
        <div class="picker-01-container">
          <z-input class="picker-01" data-input="data-input" icon="event" tabindex="0" type="text" arialabel="" name="startdatetime"></z-input>
        </div>
      </div>
    </z-date-picker>`);
    });
  });

  describe("mode ZDatePickerMode.MONTHS", () => {
    const mode = ZDatePickerMode.MONTHS;
    it("Test render ZDatePicker", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01"></z-date-picker>`,
      });

      expect(page.root).toEqualHtml(`<z-date-picker date-picker-id="picker-01" mode="months">
      <div class="bottom months flatpickr-toggle-container">
        <div class="picker-01-container">
          <z-input class="picker-01" data-input="data-input" icon="event" tabindex="0" type="text" arialabel=""></z-input>
        </div>
      </div>
    </z-date-picker>`);
    });
    it("Test render ZDatePicker with value", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01" value="12-2024"></z-date-picker>`,
      });

      expect(page.root).toEqualHtml(`<z-date-picker date-picker-id="picker-01" value="12-2024" mode="months">
     <div class="bottom months flatpickr-toggle-container">
        <div class="picker-01-container">
          <z-input class="picker-01" data-input="data-input" icon="event" tabindex="0" type="text" arialabel="" value="12-2024"></z-input>
        </div>
      </div>
    </z-date-picker>`);
    });
    it("Test render ZDatePicker with name", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01" name="startmonth"></z-date-picker>`,
      });

      expect(page.root).toEqualHtml(`<z-date-picker date-picker-id="picker-01" name="startmonth" mode="months">
      <div class="bottom months flatpickr-toggle-container">
        <div class="picker-01-container">
          <z-input class="picker-01" data-input="data-input" icon="event" tabindex="0" type="text" arialabel="" name="startmonth"></z-input>
        </div>
      </div>
    </z-date-picker>`);
    });
  });

  describe("custom toggle", () => {
    it("Test render ZDatePicker", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker date-picker-id="picker-02">
        <z-button slot="toggle">
          Open z-date-picker
        </z-button>
      </z-date-picker>`,
      });

      expect(page.root).toEqualHtml(`<z-date-picker date-picker-id="picker-02">
      <div class="bottom date flatpickr-toggle-container">
        <div class="picker-02-hidden">
          <input class="hidden-input" data-input>
          <z-button data-toggle="data-toggle" slot="toggle">
            Open z-date-picker
          </z-button>
        </div>
      </div>
    </z-date-picker>`);
    });

    it("Test render ZDatePicker with value", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker date-picker-id="picker-02" value="27-12-2024">
        <z-button slot="toggle">
          Open z-date-picker
        </z-button>
      </z-date-picker>`,
      });

      expect(page.root).toEqualHtml(`<z-date-picker date-picker-id="picker-02" value="27-12-2024">
      <div class="bottom date flatpickr-toggle-container">
        <div class="picker-02-hidden">
          <input class="hidden-input" data-input value="27-12-2024">
          <z-button data-toggle="data-toggle" slot="toggle">
            Open z-date-picker
          </z-button>
        </div>
      </div>
    </z-date-picker>`);
    });

    it("Test render ZDatePicker with name", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker date-picker-id="picker-02" name="toogle">
        <z-button slot="toggle">
          Open z-date-picker
        </z-button>
      </z-date-picker>`,
      });

      expect(page.root).toEqualHtml(`<z-date-picker date-picker-id="picker-02" name="toogle">
      <div class="bottom date flatpickr-toggle-container">
        <div class="picker-02-hidden">
          <input class="hidden-input" data-input name="toogle">
          <z-button data-toggle="data-toggle" slot="toggle">
            Open z-date-picker
          </z-button>
        </div>
      </div>
    </z-date-picker>`);
    });
  });
});
