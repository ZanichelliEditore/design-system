import { newSpecPage } from "@stencil/core/testing";

import { ZHeading } from "./index";

describe("Suite test ZHeading", () => {
  it("Test render ZHeading vuoto", async () => {
    const page = await newSpecPage({
      components: [ZHeading],
      html: `<z-heading variant="light" level="h1">Lorem ipsum dolor sit amet</z-heading>`
    });

    expect(page.root).toEqualHtml(`
    <z-heading level="h1" variant="light">
        <mock:shadow-root>
        <z-typography component="h1" level="h1" variant="light"><slot></slot></z-typography>
        </mock:shadow-root>
        Lorem ipsum dolor sit amet
      </z-heading>
    `);
  });
});
