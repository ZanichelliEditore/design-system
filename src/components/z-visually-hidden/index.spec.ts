import { newSpecPage } from "@stencil/core/testing";

import { ZVisuallyHidden } from "./index";

describe("Suite test ZVisuallyHidden", () => {
  it("Test render ZVisuallyHidden vuoto", async () => {

    const page = await newSpecPage({
      components: [ZVisuallyHidden],
      html: `<z-visually-hidden></z-visually-hidden>`
    });

    expect(page.root).toEqualHtml(`
      <z-visually-hidden>
        <mock:shadow-root>
          <div>
            This is your z-visually-hidden component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-visually-hidden>
    `)
  });
});

