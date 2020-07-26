import { newSpecPage } from "@stencil/core/testing";

import { ZSelect } from "./index";

describe("Suite test ZSelect", () => {
  it("Test render ZSelect vuoto", async () => {

    const page = await newSpecPage({
      components: [ZSelect],
      html: `<z-select></z-select>`
    });

    expect(page.root).toEqualHtml(`
      <z-select>
        <mock:shadow-root>
          <div>
            This is your z-select component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-select>
    `)
  });
});

