import { newSpecPage } from "@stencil/core/testing";

import { ZSlideshow } from "./index";

describe("Suite test ZSlideshow", () => {
  it("Test render ZSlideshow vuoto", async () => {
    const page = await newSpecPage({
      components: [ZSlideshow],
      html: `<z-slideshow></z-slideshow>`
    });

    expect(page.root).toEqualHtml(`
      <z-slideshow>
        <mock:shadow-root></mock:shadow-root>
      </z-slideshow>
    `);
  });
});
