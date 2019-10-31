import { newSpecPage } from "@stencil/core/testing";

import { ZTooltip } from "./index";

describe("Suite test ZTooltip", () => {
  it("Test render ZTooltip vuoto", async () => {

    const page = await newSpecPage({
      components: [ZTooltip],
      html: `<z-tooltip></z-tooltip>`
    });

    expect(page.root).toEqualHtml(`
      <z-tooltip>
        <mock:shadow-root>
          <div>
            This is your z-tooltip component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-tooltip>
    `)
  });
});

