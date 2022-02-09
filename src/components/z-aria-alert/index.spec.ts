import { newSpecPage } from "@stencil/core/testing";

import { ZAriaAlert } from "./index";

describe("Suite test ZAriaAlert", () => {
  it("Test render ZAriaAlert vuoto", async () => {

    const page = await newSpecPage({
      components: [ZAriaAlert],
      html: `<z-aria-alert></z-aria-alert>`
    });

    expect(page.root).toEqualHtml(`
      <z-aria-alert>
        <mock:shadow-root>
          <div>
            This is your z-aria-alert component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-aria-alert>
    `)
  });
});

