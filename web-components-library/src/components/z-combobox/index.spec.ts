import { newSpecPage } from "@stencil/core/testing";

import { ZCombobox } from "./index";

describe("Suite test ZCombobox", () => {
  it("Test render ZCombobox vuoto", async () => {

    const page = await newSpecPage({
      components: [ZCombobox],
      html: `<z-combobox></z-combobox>`
    });

    expect(page.root).toEqualHtml(`
      <z-combobox>
        <mock:shadow-root>
          <div>
            This is your z-combobox component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-combobox>
    `)
  });
});

