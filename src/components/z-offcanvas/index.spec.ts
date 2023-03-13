import {newSpecPage} from "@stencil/core/testing";

import {ZOffcanvas} from "./index";

describe("Suite test ZOffcanvas push content", () => {
  it("Test render ZOffcanvas", async () => {
    const page = await newSpecPage({
      components: [ZOffcanvas],
      html: `<z-offcanvas open>
              <div slot="canvasContent"></div>
            </z-offcanvas>`,
    });

    expect(page.root).toEqualHtml(`
			<z-offcanvas open="" transitiondirection="left" variant="pushcontent">

				<div class="canvas-container" role="presentation">
					<div class="canvas-content" role="presentation">
						<div slot="canvasContent"></div>
					</div>
					</div>
      </z-offcanvas>
    `);
  });
});
