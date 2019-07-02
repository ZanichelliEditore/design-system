import { newSpecPage } from "@stencil/core/testing";

import { ZCardHeader } from "./index";

describe("Suite test ZCardHeader", () => {
  it("Test render ZCardHeader con titolo", async () => {
    const page = await newSpecPage({
      components: [ZCardHeader],
      html: `<z-card-header titolo="titolo"></z-card-header>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-header titolo="titolo">
      <mock:shadow-root>
        <header>
          <h2>titolo</h2>
          <slot name="icon" />
        </header>
      </mock:shadow-root>
    </z-card-header>
    `);
  });
});
