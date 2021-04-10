import { newSpecPage } from "@stencil/core/testing";

import { ZUserDropdown } from "./index";

describe("Suite test ZUserDropdown", () => {
  it("Test render ZUserDropdown vuoto", async () => {

    const page = await newSpecPage({
      components: [ZUserDropdown],
      html: `<z-user-dropdown></z-user-dropdown>`
    });

    expect(page.root).toEqualHtml(`
      <z-user-dropdown>
        <mock:shadow-root>
          <div>
            This is your z-user-dropdown component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-user-dropdown>
    `)
  });
});

