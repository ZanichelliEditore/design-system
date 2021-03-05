import { newSpecPage } from "@stencil/core/testing";

import { ZHeading } from "./index";

describe("Suite test ZHeading", () => {
  it("Test render ZHeading vuoto", async () => {

    const page = await newSpecPage({
      components: [ZHeading],
      html: `<z-heading></z-heading>`
    });

    expect(page.root).toEqualHtml(`
      <z-heading>
        <mock:shadow-root>
          <div>
            This is your z-heading component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-heading>
    `)
  });
});

