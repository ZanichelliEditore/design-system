import { newSpecPage } from "@stencil/core/testing";

import { ZCarousel } from "./index";

describe("Suite test ZCarousel", () => {
  it("Test render ZCarousel vuoto", async () => {

    const page = await newSpecPage({
      components: [ZCarousel],
      html: `<z-carousel></z-carousel>`
    });

    expect(page.root).toEqualHtml(`
      <z-carousel>
        <mock:shadow-root>
          <div>
            This is your z-carousel component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-carousel>
    `)
  });
});

