import { newSpecPage } from "@stencil/core/testing";

import { ZCardDictionaryFooter } from "./index";

describe("Suite test ZCardDictionaryFooter", () => {
  it("Test render ZCardDictionaryFooter vuoto", async () => {

    const page = await newSpecPage({
      components: [ZCardDictionaryFooter],
      html: `<z-card-dictionary-footer></z-card-dictionary-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-dictionary-footer>
        <mock:shadow-root>
          <div>
            This is your z-card-dictionary-footer component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-card-dictionary-footer>
    `)
  });
});

