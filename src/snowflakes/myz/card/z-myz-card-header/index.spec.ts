import { newSpecPage } from "@stencil/core/testing";

import { ZMyzCardHeader } from "./index";

describe("Suite test ZMyzCardHeader", () => {
  it("Test render ZMyzCardHeader con titolo", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardHeader],
      html: `<z-myz-card-header titolo="titolo"></z-myz-card-header>`
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-header titolo="titolo">
      <mock:shadow-root>
        <header>
          <h2>titolo</h2>
          <slot name="icon" />
        </header>
      </mock:shadow-root>
    </z-myz-card-header>
    `);
  });
});
