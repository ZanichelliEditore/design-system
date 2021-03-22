import { newSpecPage } from "@stencil/core/testing";

import { ZBody } from "./index";

describe("Suite test ZBody", () => {
  it("Test render ZBody vuoto", async () => {
    const page = await newSpecPage({
      components: [ZBody],
      html: `<z-body level="1" variant="regular">This is a test</z-body>`
    });

    expect(page.root).toEqualHtml(`
      <z-body level="1" variant="regular">
        <mock:shadow-root>
        <z-typography component="span" level="b1" variant="regular"><slot></slot></z-typography>
        </mock:shadow-root>
        This is a test
      </z-body>
    `);
  });
});
