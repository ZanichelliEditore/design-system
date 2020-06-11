import { newSpecPage } from "@stencil/core/testing";

import { ZSlideshowBullet } from "./index";

describe("Suite test ZSlideshowBullet", () => {
  it("Test render ZSlideshowBullet vuoto", async () => {

    const page = await newSpecPage({
      components: [ZSlideshowBullet],
      html: `<z-slideshow-bullet></z-slideshow-bullet>`
    });

    expect(page.root).toEqualHtml(`
      <z-slideshow-bullet>
        <mock:shadow-root>
          <div>
            This is your z-slideshow-bullet component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-slideshow-bullet>
    `)
  });
});

