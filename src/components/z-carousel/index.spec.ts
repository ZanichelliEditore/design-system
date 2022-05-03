import { newSpecPage } from "@stencil/core/testing";

import { ZCarousel } from "./index";

describe("Suite test ZCarousel", () => {
  it("Test render ZCarousel vuoto", async () => {
    const page = await newSpecPage({
      components: [ZCarousel],
      html: `<z-carousel></z-carousel>`,
    });

    expect(page.root).toEqualHtml(`
      <z-carousel>
      <ul class="carousel-item-container"></ul>
      </z-carousel>
    `);
  });

  it("Test render ZCarousel elements prop", async () => {
    const page = await newSpecPage({
      components: [ZCarousel],
      html: `<z-carousel gutter=30></z-carousel>`,
    });
    expect(page.root).toEqualHtml(`
    <z-carousel gutter=30>
    <ul class="carousel-item-container"></ul>
  </z-carousel>
    `);
  });
});
