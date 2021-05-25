import { newSpecPage } from "@stencil/core/testing";

import { ZPopover } from "./index";

describe("Suite test ZPopover", () => {
  it("Test render ZPopover vuoto", async () => {

    const page = await newSpecPage({
      components: [ZPopover],
      html: `<z-popover></z-popover>`
    });

    expect(page.root).toEqualHtml(`
      <z-popover>
        <mock:shadow-root>
          <div>
            This is your z-popover component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-popover>
    `)
  });
});

