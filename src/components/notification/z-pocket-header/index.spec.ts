import { newSpecPage } from "@stencil/core/testing";

import { ZPocketHeader } from "./index";

describe("Suite test ZPocketHeader", () => {
  it("Test render ZPocketHeader vuoto", async () => {

    const page = await newSpecPage({
      components: [ZPocketHeader],
      html: `<z-pocket-header></z-pocket-header>`
    });

    expect(page.root).toEqualHtml(`
      <z-pocket-header>
        <mock:shadow-root>
          <div>
            This is your z-pocket-header component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-pocket-header>
    `)
  });
});

