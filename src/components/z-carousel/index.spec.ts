import { newSpecPage } from "@stencil/core/testing";

import { ZCarousel } from "./index";

describe("Suite test ZCarousel", () => {
  it("Test render empty ZCarousel", async () => {
    const page = await newSpecPage({
      components: [ZCarousel],
      html: `<z-carousel></z-carousel>`,
    });

    expect(page.root).toEqualHtml(`
    <z-carousel>
      <ul class="z-carousel-items-container"></ul>
  </z-carousel>
    `);
  });

  it("Test render ZCarousel elements prop", async () => {
    const page = await newSpecPage({
      components: [ZCarousel],
      html: `<z-carousel><li><div /></li></z-carousel>`,
    });
    expect(page.root).toEqualHtml(`<z-carousel>
      <ul class="z-carousel-items-container">
        <li>
          <div></div>
        </li>
      </ul>
  </z-carousel>
    `);
  });

  it("renders ZCarousel ghostloading with custom height when isLoading equals true ", async () => {
    const page = await newSpecPage({
      components: [ZCarousel],
      html: `<z-carousel is-loading='true' ghost-loading-height=200></z-carousel>`,
    });
    expect(page.root)
      .toEqualHtml(`<z-carousel is-loading="true" ghost-loading-height=200>
      <div style="height: 200px;">
        <z-ghost-loading></z-ghost-loading>
        <div style="display: none;"></div>
      </div>
  </z-carousel>
    `);
  });
});
