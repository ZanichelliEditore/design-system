import { newSpecPage } from "@stencil/core/testing";

import { ZListGroup } from "./index";

describe("Suite test ZListGroup", () => {
  it("Test render ZListGroup vuoto", async () => {

    const page = await newSpecPage({
      components: [ZListGroup],
      html: `<z-list-group></z-list-group>`
    });

    expect(page.root).toEqualHtml(`
      <z-list-group>
        <mock:shadow-root>
          <div>
            This is your z-list-group component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-list-group>
    `)
  });
});

