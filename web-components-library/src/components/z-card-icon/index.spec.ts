import { newSpecPage } from "@stencil/core/testing";

import { ZCardIcon } from "./index";

describe("Suite test ZCardIcon", () => {
  it("Test render ZCardIcon vuoto", async () => {
    const page = await newSpecPage({
      components: [ZCardIcon],
      html: `<z-card-icon icon="icon"></z-card-icon>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-icon icon="icon">
      <mock:shadow-root>
        <span>
          <z-icon name="icon" height="18" width="18" />
        </span>
      </mock:shadow-root>
    </z-card-icon>
    `);
  });
});
