import { newSpecPage } from "@stencil/core/testing";

import { ZCarousel } from "./index";

describe("Suite test ZCarousel", () => {
  it("Test render ZCarousel", async () => {
    const page = await newSpecPage({
      components: [ZCarousel],
      html: `<z-carousel></z-carousel>`,
    });

    expect(page.root).toEqualHtml(`
    <z-carousel>
    <div>
      <ul class="z-carousel-items-container"></ul>
    </div>
  </z-carousel>
    `);
  });

  it("Test render ZCarousel elements prop", async () => {
    const page = await newSpecPage({
      components: [ZCarousel],
      html: `<z-carousel><li><div /></li></z-carousel>`,
    });
    expect(page.root).toEqualHtml(`<z-carousel>
    <div>
      <ul class="z-carousel-items-container">
        <li>
          <div></div>
        </li>
      </ul>
    </div>
  </z-carousel>
    `);
  });
});
