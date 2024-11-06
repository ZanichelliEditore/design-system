import {newE2EPage} from "@stencil/core/testing";

describe("ZOffcanvas", () => {
  it("Should close when the overlay is clicked", async () => {
    const page = await newE2EPage({
      html: `<z-offcanvas variant="overlay" open>
        <div slot="canvasContent"></div>
      </z-offcanvas>`,
    });

    const offcanvas = await page.find("z-offcanvas");
    const overlay = await offcanvas.find(".canvas-background");
    await overlay.click();
    await page.waitForChanges();
    expect(offcanvas).not.toHaveAttribute("open");
  });
});
