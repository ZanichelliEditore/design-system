import { newSpecPage } from "@stencil/core/testing";

import { ZMessage } from "./index";

describe("Suite test ZMessage", () => {
  it("Test render ZMessage vuoto", async () => {

    const page = await newSpecPage({
      components: [ZMessage],
      html: `<z-pocket-message></z-pocket-message>`
    });

    expect(page.root).toEqualHtml(`
      <z-pocket-message>
        <mock:shadow-root>
          <div>
            This is your z-message component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-pocket-message>
    `)
  });
});

