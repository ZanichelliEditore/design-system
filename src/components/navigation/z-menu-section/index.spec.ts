import { newSpecPage } from "@stencil/core/testing";

import { ZMenuSection } from "./index";

describe("Suite test ZMenuSection", () => {
  it("Test render ZMenuSection vuoto", async () => {

    const page = await newSpecPage({
      components: [ZMenuSection],
      html: `<z-menu-section></z-menu-section>`
    });

    expect(page.root).toEqualHtml(`
      <z-menu-section>
        <mock:shadow-root>
          <div>
            This is your z-menu-section component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-menu-section>
    `)
  });
});

