import { newSpecPage } from "@stencil/core/testing";

import { ZCardDictionaryInfo } from "./index";

describe("Suite test ZCardDictionaryInfo", () => {
  it("Test render ZCardDictionaryInfo vuoto", async () => {

    const page = await newSpecPage({
      components: [ZCardDictionaryInfo],
      html: `<z-card-dictionary-info></z-card-dictionary-info>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-dictionary-info>
        <mock:shadow-root>
          <div>
            This is your z-card-dictionary-info component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-card-dictionary-info>
    `)
  });
});

