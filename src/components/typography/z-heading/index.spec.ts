import { newSpecPage } from "@stencil/core/testing";

import { ZHeading } from "./index";

describe("Suite test ZHeading", () => {
  it("Test render ZHeading vuoto", async () => {
    const page = await newSpecPage({
      components: [ZHeading],
      html: `<z-heading variant="light" level="h1">Lorem ipsum dolor sit amet</z-heading>`,
    });

    expect(page.root).toEqualHtml(`
    <z-heading variant="light" level="h1" class="light">
        <mock:shadow-root>
        <h1 class="heading-h1"><slot></slot></h1>
        </mock:shadow-root>
        Lorem ipsum dolor sit amet
      </z-heading>
    `);
  });
});
