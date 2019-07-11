import { newSpecPage } from "@stencil/core/testing";

import { ZHeader } from "./index";

describe("Suite test ZHeader", () => {
  it("Test render ZHeader vuoto", async () => {

    const page = await newSpecPage({
      components: [ZHeader],
      html: `<z-header></z-header>`
    });

    expect(page.root).toEqualHtml(`
      <z-header>
        <mock:shadow-root>
          <div>
            This is your z-header component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-header>
    `)
  });
});

