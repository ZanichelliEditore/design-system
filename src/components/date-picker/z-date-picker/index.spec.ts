import {newSpecPage, SpecPage} from "@stencil/core/testing";
import {ZDatePickerMode} from "../../../beans";
import {ZDatePicker} from "./index";

function expectTextInput(root: SpecPage["root"], pickerId: string, options?: {value?: string; name?: string}) {
  const input = root.querySelector(`.${pickerId}-container z-input[data-input]`) as HTMLElement | null;

  expect(input).not.toBeNull();
  expect(input?.classList.contains(pickerId)).toBe(true);

  if (options?.value) {
    expect(input?.getAttribute("value")).toBe(options.value);
  }

  if (options?.name) {
    expect(input?.getAttribute("name")).toBe(options.name);
  }
}

function expectCustomToggleInput(root: SpecPage["root"], options?: {value?: string}) {
  const input = root.querySelector(".picker-02-hidden input.hidden-input[data-input]") as HTMLInputElement | null;
  const toggle = root.querySelector('.picker-02-hidden z-button[slot="toggle"]') as HTMLElement | null;

  expect(input).not.toBeNull();
  expect(toggle).not.toBeNull();
  expect(toggle?.getAttribute("data-toggle")).toBe("data-toggle");

  if (options?.value) {
    expect(input?.getAttribute("value")).toBe(options.value);
  }
}

function expectModeContainer(root: SpecPage["root"], modeClass: string) {
  const container = root.querySelector(".flatpickr-toggle-container") as HTMLElement | null;

  expect(container).not.toBeNull();
  expect(container?.classList.contains("bottom")).toBe(true);
  expect(container?.classList.contains(modeClass)).toBe(true);
}

describe("Suite test ZDatePicker", () => {
  describe("mode ZDatePickerMode.DATE", () => {
    it("Test render ZDatePicker", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker date-picker-id="picker-01"></z-date-picker>`,
      });

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-01");
      expectModeContainer(page.root, "date");
      expectTextInput(page.root, "picker-01");
    });

    it("Test render ZDatePicker with value", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker date-picker-id="picker-01" value="27-12-2024"></z-date-picker>`,
      });

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-01");
      expect(page.root?.getAttribute("value")).toBe("27-12-2024");
      expectModeContainer(page.root, "date");
      expectTextInput(page.root, "picker-01", {value: "27-12-2024"});
    });

    it("Test render ZDatePicker with name", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker date-picker-id="picker-01" name="startdate"></z-date-picker>`,
      });

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-01");
      expect(page.root?.getAttribute("name")).toBe("startdate");
      expectModeContainer(page.root, "date");
      expectTextInput(page.root, "picker-01", {name: "startdate"});
    });
  });

  describe("mode ZDatePickerMode.DATE_TIME", () => {
    const mode = ZDatePickerMode.DATE_TIME;
    it("Test render ZDatePicker", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01"></z-date-picker>`,
      });

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-01");
      expect(page.root?.getAttribute("mode")).toBe("date-time");
      expectModeContainer(page.root, "date-time");
      expectTextInput(page.root, "picker-01");
    });

    it("Test render ZDatePicker with value", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01" value="20-12-2024 - 12:00"></z-date-picker>`,
      });

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-01");
      expect(page.root?.getAttribute("mode")).toBe("date-time");
      expect(page.root?.getAttribute("value")).toBe("20-12-2024 - 12:00");
      expectModeContainer(page.root, "date-time");
      expectTextInput(page.root, "picker-01", {value: "20-12-2024 - 12:00"});
    });

    it("Test render ZDatePicker with name", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01" name="startdatetime"></z-date-picker>`,
      });

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-01");
      expect(page.root?.getAttribute("mode")).toBe("date-time");
      expect(page.root?.getAttribute("name")).toBe("startdatetime");
      expectModeContainer(page.root, "date-time");
      expectTextInput(page.root, "picker-01", {name: "startdatetime"});
    });
  });

  describe("mode ZDatePickerMode.MONTHS", () => {
    const mode = ZDatePickerMode.MONTHS;
    it("Test render ZDatePicker", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01"></z-date-picker>`,
      });

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-01");
      expect(page.root?.getAttribute("mode")).toBe("months");
      expectModeContainer(page.root, "months");
      expectTextInput(page.root, "picker-01");
    });

    it("Test render ZDatePicker with value", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01" value="12-2024"></z-date-picker>`,
      });

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-01");
      expect(page.root?.getAttribute("mode")).toBe("months");
      expect(page.root?.getAttribute("value")).toBe("12-2024");
      expectModeContainer(page.root, "months");
      expectTextInput(page.root, "picker-01", {value: "12-2024"});
    });

    it("Test render ZDatePicker with name", async () => {
      const page = await newSpecPage({
        components: [ZDatePicker],
        html: `<z-date-picker mode="${mode}" date-picker-id="picker-01" name="startmonth"></z-date-picker>`,
      });

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-01");
      expect(page.root?.getAttribute("mode")).toBe("months");
      expect(page.root?.getAttribute("name")).toBe("startmonth");
      expectModeContainer(page.root, "months");
      expectTextInput(page.root, "picker-01", {name: "startmonth"});
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

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-02");
      expectModeContainer(page.root, "date");
      expectCustomToggleInput(page.root);
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

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-02");
      expect(page.root?.getAttribute("value")).toBe("27-12-2024");
      expectModeContainer(page.root, "date");
      expectCustomToggleInput(page.root, {value: "27-12-2024"});
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

      expect(page.root?.getAttribute("date-picker-id")).toBe("picker-02");
      expect(page.root?.getAttribute("name")).toBe("toogle");
      expectModeContainer(page.root, "date");
      expectCustomToggleInput(page.root);
    });
  });
});
