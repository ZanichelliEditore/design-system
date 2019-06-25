import { newSpecPage } from "@stencil/core/testing";

import { ZCardIcon } from "./index";

describe("Suite test ZCardIcon", () => {
  it("Test render ZCardIcon vuoto", async () => {
    const page = await newSpecPage({
      components: [ZCardIcon],
      html: `<z-card-icon icon="assets/images/png/zanichelli-book-remove-gray@8x.png"></z-card-icon>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-icon icon="assets/images/png/zanichelli-book-remove-gray@8x.png">
      <mock:shadow-root>
        <span>
          <img src="assets/images/png/zanichelli-book-remove-gray@8x.png" />
        </span>
      </mock:shadow-root>
    </z-card-icon>
    `);
  });
});
