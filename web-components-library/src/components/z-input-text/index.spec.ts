import { newSpecPage } from "@stencil/core/testing";

import { ZInputText } from "./index";

describe("Suite test ZInputText", () => {
  it("Test render ZInputText vuoto", async () => {

    const page = await newSpecPage({
      components: [ZInputText],
      html: `<z-input-text></z-input-text>`
    });

    expect(page.root).toEqualHtml(`
      <z-input-text>
        <mock:shadow-root>
          <div>
            This is your z-input-text component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-input-text>
    `)
  });
});

