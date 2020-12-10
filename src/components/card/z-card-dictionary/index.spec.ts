import { newSpecPage } from "@stencil/core/testing";

import { ZCardDictionary } from "./index";

describe("Suite test ZCardDictionary", () => {
  it("Test render ZCardDictionary vuoto", async () => {

    const page = await newSpecPage({
      components: [ZCardDictionary],
      html: `<z-card-dictionary></z-card-dictionary>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-dictionary>
        <mock:shadow-root>
          <div>
            This is your z-card-dictionary component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-card-dictionary>
    `)
  });
});

