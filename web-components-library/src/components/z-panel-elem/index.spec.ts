import { newSpecPage } from "@stencil/core/testing";

import { ZPanelElem } from "./index";

describe("Suite test ZPanelElem", () => {
  it("Test render ZPanelElem vuoto", async () => {

    const page = await newSpecPage({
      components: [ZPanelElem],
      html: `<z-panel-elem></z-panel-elem>`
    });

    expect(page.root).toEqualHtml(`
      <z-panel-elem>
        <mock:shadow-root>
          <div>
            This is your z-panel-elem component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-panel-elem>
    `)
  });
});

