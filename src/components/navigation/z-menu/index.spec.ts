import { newSpecPage } from "@stencil/core/testing";

import { ZMenu } from "./index";

describe("Suite test ZMenu", () => {
  it("Test render ZMenu vuoto", async () => {

    const page = await newSpecPage({
      components: [ZMenu],
      html: `<z-menu></z-menu>`
    });

    expect(page.root).toEqualHtml(`
      <z-menu>
        <mock:shadow-root>
          <div>
            This is your z-menu component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-menu>
    `)
  });
});

