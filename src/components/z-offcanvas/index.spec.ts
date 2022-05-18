import { newSpecPage } from "@stencil/core/testing";

import { ZOffcanvas } from "./index";

describe("Suite test ZOffcanvas", () => {
  it("Test render ZOffcanvas", async () => {

    const page = await newSpecPage({
      components: [ZOffcanvas],
      html: `<z-offcanvas open>
              <div slot="canvasContent"></div>
            </z-offcanvas>`
    });

    expect(page.root).toEqualHtml(`
			<z-offcanvas open="" transitiondirection="left" variant="pushcontent" style="display: flex;">

				<div class="canvas-container">
					<div class="canvas-content" tabindex="0">
						<div slot="canvasContent"></div>
					</div>
					</div>
				<div class="canvas-background" data-action="canvasBackground"></div>
      </z-offcanvas>
    `)
  });

});

