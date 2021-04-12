import { newSpecPage } from "@stencil/core/testing";

import { ZAppHeader } from "./index";

describe("Suite test ZAppHeader", () => {
  it("Test render ZAppHeader vuoto", async () => {

    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header></z-app-header>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-header>
        <mock:shadow-root>
          <div>
            This is your z-app-header component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-app-header>
    `)
  });
});

