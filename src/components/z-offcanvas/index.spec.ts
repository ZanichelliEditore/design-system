import {newSpecPage} from "@stencil/core/testing";

import {ZOffcanvas} from "./index";

describe("Suite test ZOffcanvas variant pushcontent", () => {
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

describe("Suite test ZOffcanvas variant overlay", () => {
  it("Test render ZOffcanvas", async () => {
    const page = await newSpecPage({
      components: [ZOffcanvas],
      html: `<z-offcanvas open variant="overlay">
              <div slot="canvasContent"></div>
            </z-offcanvas>`,
    });

    expect(page.root).toEqualHtml(`
			<z-offcanvas open="" transitiondirection="left" variant="overlay">
				<div class="canvas-container" role="presentation">
					<div class="canvas-content" role="presentation">
						<div slot="canvasContent"></div>
					</div>
        </div>
        <div class="canvas-background" data-action="canvasBackground"></div>
      </z-offcanvas>
    `);
  });
});
