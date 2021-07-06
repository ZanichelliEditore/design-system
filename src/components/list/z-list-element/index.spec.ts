import { newSpecPage } from "@stencil/core/testing";

import { ZListElement } from "./index";

describe("Suite test ZListElement", () => {
  it("Test render ZListElement vuoto", async () => {

    const page = await newSpecPage({
      components: [ZListElement],
      html: `<z-list-element></z-list-element>`
    });

    expect(page.root).toEqualHtml(`
      <z-list-element>
        <mock:shadow-root>
          <div>
            This is your z-list-element component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-list-element>
    `)
  });
});

