import { newSpecPage } from "@stencil/core/testing";

import { ZTypography } from "./index";

describe("Suite test ZTypography", () => {
  it("Test render ZTypography vuoto", async () => {
    const page = await newSpecPage({
      components: [ZTypography],
      html: `<z-typography>This is your z-typography component This is your default prop</z-typography>`
    });

    expect(page.root).toEqualHtml(`
      <z-typography class="no-margin regular">
        <mock:shadow-root>
           <span>
             <slot></slot>
           </span>
        </mock:shadow-root>
        This is your z-typography component This is your default prop
      </z-typography>
    `);
  });
});
