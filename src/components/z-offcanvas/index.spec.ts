import {newSpecPage} from "@stencil/core/testing";
import {ZOffcanvas} from "./index";

describe("Suite test ZOffcanvas", () => {
  it("Should render default ZOffcanvas", async () => {
    const page = await newSpecPage({
      components: [ZOffcanvas],
      html: `<z-offcanvas open>
        <div slot="canvasContent"></div>
      </z-offcanvas>`,
    });

    expect(page.root).toEqualHtml(`
			<z-offcanvas open transitiondirection="left" variant="pushcontent">
				<div class="canvas-container" role="presentation">
					<div class="canvas-content z-scrollbar" role="presentation">
						<div slot="canvasContent"></div>
					</div>
        </div>
      </z-offcanvas>
    `);
  });

  it("Should render overlay variant", async () => {
    const page = await newSpecPage({
      components: [ZOffcanvas],
      html: `<z-offcanvas open variant="overlay">
        <div slot="canvasContent"></div>
      </z-offcanvas>`,
    });

    expect(page.root).toEqualHtml(`
			<z-offcanvas open transitiondirection="left" variant="overlay">
				<div class="canvas-container" role="presentation">
					<div class="canvas-content z-scrollbar" role="presentation">
						<div slot="canvasContent"></div>
					</div>
        </div>
        <div class="backdrop"></div>
      </z-offcanvas>
    `);
  });

  it("Should force overlay presence when 'transitiondirection' is set to 'up'", async () => {
    const page = await newSpecPage({
      components: [ZOffcanvas],
      html: `<z-offcanvas open variant="pushcontent" transitiondirection="up">
        <div slot="canvasContent"></div>
      </z-offcanvas>`,
    });

    expect(page.root).toEqualHtml(`
			<z-offcanvas open transitiondirection="up" variant="pushcontent">
				<div class="canvas-container" role="presentation">
					<div class="canvas-content z-scrollbar" role="presentation">
						<div slot="canvasContent"></div>
					</div>
        </div>
        <div class="backdrop"></div>
      </z-offcanvas>
    `);
  });

  it("Should close the offcanvas when Escape key is pressed", async () => {
    const page = await newSpecPage({
      components: [ZOffcanvas],
      html: `<z-offcanvas open>
      <div slot="canvasContent"></div>
    </z-offcanvas>`,
    });

    const offcanvas = page.root as HTMLZOffcanvasElement;

    // Ensure it starts open
    expect(offcanvas.open).toBe(true);

    const event = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
    });

    document.dispatchEvent(event);

    await page.waitForChanges();

    // After Escape, open should be false
    expect(offcanvas.open).toBe(false);
  });
});
