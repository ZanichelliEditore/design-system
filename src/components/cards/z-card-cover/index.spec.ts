import { newSpecPage } from "@stencil/core/testing";

import { ZCard } from "./index";

describe("Suite test ZCard", () => {
  it("Test render ZCard vuoto", async () => {

    const page = await newSpecPage({
      components: [ZCard],
      html: `<z-card></z-card>`
    });

    expect(page.root).toEqualHtml(`
      <z-card>
        <mock:shadow-root>
          <div>
            This is your z-card component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-card>
    `)
  });
});

