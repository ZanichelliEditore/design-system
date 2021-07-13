import { newSpecPage } from "@stencil/core/testing";

import { ZMyzCardBody } from "./index";

describe("Suite test ZMyzCardBody", () => {
  it("Test render ZMyzCardBody vuoto", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardBody],
      html: `<z-myz-card-body></z-myz-card-body>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-body>
      <mock:shadow-root>
        <div>
          <slot name=\"alert\"></slot>
          <slot name=\"cover\"></slot>
        </div>
      </mock:shadow-root>
    </z-myz-card-body>
    `);
  });
});
