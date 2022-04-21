import { newSpecPage } from "@stencil/core/testing";

import { ZToggleSwitch } from "./index";

describe("Suite test ZToggleSwitch", () => {
  it("Test render ZToggleSwitch vuoto", async () => {

    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch></z-toggle-switch>`
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch>
        <mock:shadow-root>
          <div>
            This is your z-toggle-switch component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-toggle-switch>
    `)
  });
});

