import {newSpecPage} from "@stencil/core/testing";
import {ZRangePicker} from "./index";

describe("Suite test ZRangePicker", () => {
  it("Test render ZRangePicker", async () => {
    const page = await newSpecPage({
      components: [ZRangePicker],
      html: `<z-range-picker range-picker-id="picker-01"></z-range-picker>`,
    });

    const root = page.root as HTMLElement;
    const container = root.querySelector(".range-pickers-container") as HTMLElement | null;
    const startInput = root.querySelector(".picker-01-1-container z-input[data-input]") as HTMLElement | null;
    const endInput = root.querySelector(".picker-01-2-container z-input[data-input]") as HTMLElement | null;

    expect(root.getAttribute("range-picker-id")).toBe("picker-01");
    expect(container).not.toBeNull();
    expect(container?.classList.contains("bottom")).toBe(true);
    expect(container?.classList.contains("date")).toBe(true);

    expect(startInput).not.toBeNull();
    expect(startInput?.getAttribute("icon")).toBe("event");
    expect(startInput?.getAttribute("type")).toBe("text");
    expect(startInput?.classList.contains("picker-01-1")).toBe(true);

    expect(endInput).not.toBeNull();
    expect(endInput?.getAttribute("icon")).toBe("event");
    expect(endInput?.getAttribute("type")).toBe("text");
    expect(endInput?.classList.contains("picker-01-2")).toBe(true);
  });
});
