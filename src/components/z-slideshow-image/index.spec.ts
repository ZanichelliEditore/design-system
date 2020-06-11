import { newSpecPage } from "@stencil/core/testing";

import { ZSlideshowImage } from "./index";

describe("Suite test ZSlideshowImage", () => {
  it("Test render ZSlideshowImage vuoto", async () => {

    const page = await newSpecPage({
      components: [ZSlideshowImage],
      html: `<z-slideshow-image></z-slideshow-image>`
    });

    expect(page.root).toEqualHtml(`
      <z-slideshow-image>
        <mock:shadow-root>
          <div>
            This is your z-slideshow-image component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-slideshow-image>
    `)
  });
});

