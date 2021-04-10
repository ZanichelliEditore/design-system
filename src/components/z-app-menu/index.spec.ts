import { newSpecPage } from "@stencil/core/testing";

import { ZAppMenu } from "./index";

describe("Suite test ZAppMenu", () => {
  it("Test render ZAppMenu vuoto", async () => {

    const page = await newSpecPage({
      components: [ZAppMenu],
      html: `<z-app-menu></z-app-menu>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-menu>
        <mock:shadow-root>
          <div>
            This is your z-app-menu component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-app-menu>
    `)
  });
});

