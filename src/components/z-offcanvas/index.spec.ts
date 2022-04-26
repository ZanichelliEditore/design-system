import { newSpecPage } from "@stencil/core/testing";

import { ZOffcanvas } from "./index";

describe("Suite test ZOffcanvas", () => {
  it("Test render ZOffcanvas vuoto", async () => {

    const page = await newSpecPage({
      components: [ZOffcanvas],
      html: `<z-offcanvas></z-offcanvas>`
    });

    expect(page.root).toEqualHtml(`
      <z-offcanvas>
        <mock:shadow-root>
          <div>
            This is your z-offcanvas component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-offcanvas>
    `)
  });
});

