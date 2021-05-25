import { newSpecPage } from "@stencil/core/testing";

import { ZDivider } from "./index";

describe("Suite test ZDivider", () => {
  it("Test render ZDivider vuoto", async () => {

    const page = await newSpecPage({
      components: [ZDivider],
      html: `<z-divider></z-divider>`
    });

    expect(page.root).toEqualHtml(`
      <z-divider>
        <mock:shadow-root>
          <div>
            This is your z-divider component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-divider>
    `)
  });
});

