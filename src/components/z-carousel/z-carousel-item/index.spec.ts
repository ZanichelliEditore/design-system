import { newSpecPage } from "@stencil/core/testing";

import { ZCarouselItem } from "./index";

describe("Suite test ZCarouselItem", () => {
  it("Test render ZCarouselItem vuoto", async () => {
    const page = await newSpecPage({
      components: [ZCarouselItem],
      html: `<z-carousel-item></z-carousel-item>`,
    });

    expect(page.root).toEqualHtml(`
      <z-carousel-item>
      <li class="carousel-item" style="padding-right: 0px;"></li>
      </z-carousel-item>
    `);
  });

  it("Test render ZCarousel elements prop", async () => {
    const page = await newSpecPage({
      components: [ZCarouselItem],
      html: `<z-carousel-item gap=30></z-carousel-item>`,
    });
    expect(page.root).toEqualHtml(`
      <z-carousel-item gap="30">
      <li class="carousel-item" style="padding-right: 30px;"></li>
      </z-carousel-item>
    `);
  });
});
