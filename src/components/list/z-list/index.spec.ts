import { newSpecPage } from "@stencil/core/testing";

import { ZList } from "./index";

describe("Suite test ZList", () => {
  it("Test render ZList vuoto", async () => {

    const page = await newSpecPage({
      components: [ZList],
      html: `<z-list></z-list>`
    });

    expect(page.root).toEqualHtml(`
      <z-list>
        <mock:shadow-root>
          <div>
            This is your z-list component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-list>
    `)
  });
});

