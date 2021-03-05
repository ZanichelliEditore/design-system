import { newSpecPage } from "@stencil/core/testing";

import { ZBody } from "./index";

describe("Suite test ZBody", () => {
  it("Test render ZBody vuoto", async () => {

    const page = await newSpecPage({
      components: [ZBody],
      html: `<z-body></z-body>`
    });

    expect(page.root).toEqualHtml(`
      <z-body>
        <mock:shadow-root>
          <div>
            This is your z-body component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-body>
    `)
  });
});

