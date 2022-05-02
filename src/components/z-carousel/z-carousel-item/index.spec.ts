import { newSpecPage } from "@stencil/core/testing";

import { ZCarouselItem } from "./index";

describe("Suite test ZCarouselItem", () => {
  it("Test render ZCarouselItem vuoto", async () => {

    const page = await newSpecPage({
      components: [ZCarouselItem],
      html: `<z-carousel-item></z-carousel-item>`
    });

    expect(page.root).toEqualHtml(`
      <z-carousel-item>
        <mock:shadow-root>
          <div>
            This is your z-carousel-item component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-carousel-item>
    `)
  });
});

