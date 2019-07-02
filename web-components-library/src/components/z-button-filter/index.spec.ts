import { newSpecPage } from "@stencil/core/testing";

import { ZButtonFilter } from "./index";

describe("Suite test ZButtonFilter", () => {
  it("Test render ZButtonFilter vuoto", async () => {

    const page = await newSpecPage({
      components: [ZButtonFilter],
      html: `<z-button-filter></z-button-filter>`
    });

    expect(page.root).toEqualHtml(`
      <z-button-filter>
        <mock:shadow-root>
          <div>
            This is your z-button-filter component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-button-filter>
    `)
  });
});

