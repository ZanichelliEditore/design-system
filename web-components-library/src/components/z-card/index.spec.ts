import { newSpecPage } from "@stencil/core/testing";

import { ZCardComponent } from "./index";

describe("Suite test ZCard", () => {
  it("Test render ZCard vuota", async () => {
    const page = await newSpecPage({
      components: [ZCardComponent],
      html: `<z-card></z-card>`
    });

    expect(page.root).toEqualHtml(`
    <z-card>
      <mock:shadow-root>
        <div tabindex=\"0\">
          <slot></slot>
        </div>
      </mock:shadow-root>
    </z-card>
    `);
  });
});
