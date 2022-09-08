import {newSpecPage} from "@stencil/core/testing";

import {ZMyzCardComponent} from "./index";

describe("Suite test ZMyzCard", () => {
  it("Test render ZMyzCard vuota", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardComponent],
      html: `<z-myz-card></z-myz-card>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card>
      <mock:shadow-root>
        <div tabindex="0">
          <slot></slot>
        </div>
      </mock:shadow-root>
    </z-myz-card>
    `);
  });
});
