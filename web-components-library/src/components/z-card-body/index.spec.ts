import { newSpecPage } from "@stencil/core/testing";

import { ZCardBody } from "./index";

describe("Suite test ZCardBody", () => {
  it("Test render ZCardBody vuoto", async () => {
    const page = await newSpecPage({
      components: [ZCardBody],
      html: `<z-card-body></z-card-body>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-body>
      <mock:shadow-root>
        <div>
          <slot name="cover" />
        </div>
      </mock:shadow-root>
    </z-card-body>
    `);
  });
});
