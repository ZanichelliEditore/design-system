import { newSpecPage } from "@stencil/core/testing";

import { ZSkipToContent } from "./index";

describe("Suite test ZSkipToContent", () => {
  it("Test render ZSkipToContent vuoto", async () => {

    const page = await newSpecPage({
      components: [ZSkipToContent],
      html: `<z-skip-to-content></z-skip-to-content>`
    });

    expect(page.root).toEqualHtml(`
      <z-skip-to-content>
        <mock:shadow-root>
          <div>
            This is your z-skip-to-content component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-skip-to-content>
    `)
  });
});

