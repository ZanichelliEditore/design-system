import { newSpecPage } from "@stencil/core/testing";

import { ZPocketBody } from "./index";

describe("Suite test ZPocketBody", () => {
  it("Test render ZPocketBody vuoto", async () => {

    const page = await newSpecPage({
      components: [ZPocketBody],
      html: `<z-pocket-body></z-pocket-body>`
    });

    expect(page.root).toEqualHtml(`
      <z-pocket-body>
        <mock:shadow-root>
          <div>
            This is your z-pocket-body component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-pocket-body>
    `)
  });
});

