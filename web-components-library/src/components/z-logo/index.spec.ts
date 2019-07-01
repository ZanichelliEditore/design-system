import { newSpecPage } from "@stencil/core/testing";

import { ZLogo } from "./index";

describe("Suite test ZLogo", () => {
  it("Test render ZLogo vuoto", async () => {

    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo></z-logo>`
    });

    expect(page.root).toEqualHtml(`
      <z-logo>
        <mock:shadow-root>
          <div>
            This is your z-logo component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-logo>
    `)
  });
});

