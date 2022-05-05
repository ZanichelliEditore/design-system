import { newSpecPage } from "@stencil/core/testing";

import { ZOffcanvas } from "./index";

describe("Suite test ZOffcanvas", () => {
  it("Test render ZOffcanvas", async () => {

    const page = await newSpecPage({
      components: [ZOffcanvas],
      html: `<z-offcanvas>
              <div slot="canvasContent"></div>
            </z-offcanvas>`
    });

    expect(page.root).toEqualHtml(`
      <z-offcanvas>
        <mock:shadow-root>
          <div class="canvas-container">
            <div class="canvas-content" tabindex="0">
              <slot name="canvasContent"></slot>
            </div>
            </div>
          <div class="canvas-background" data-action="canvasBackground"></div>
        </mock:shadow-root>

        <div slot="canvasContent"></div>
      </z-offcanvas>
    `)
  });

});

