import { newSpecPage } from "@stencil/core/testing";

import { ZMenuDropdown } from "./index";

describe("Suite test ZMenuDropdown", () => {
  it("Test render ZMenuDropdown vuoto", async () => {

    const page = await newSpecPage({
      components: [ZMenuDropdown],
      html: `<z-menu-dropdown></z-menu-dropdown>`
    });

    expect(page.root).toEqualHtml(`
      <z-menu-dropdown>
        <mock:shadow-root>
          <div>
            This is your z-menu-dropdown component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-menu-dropdown>
    `)
  });
});

