import { newSpecPage } from "@stencil/core/testing";

import { ZCardDictionaryFooter } from "./index";

describe("Suite test ZCardDictionaryFooter", () => {
  it("Test render ZCardDictionaryFooter - empty", async () => {
    const page = await newSpecPage({
      components: [ZCardDictionaryFooter],
      html: `<z-card-dictionary-footer></z-card-dictionary-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-dictionary-footer>
        <mock:shadow-root>
          <div>
            <footer>
              <div class="top">
                <slot name="top"></slot>
              </div>
              <div class="bottom">
                <slot name="bottom"></slot>
              </div>
            </footer>
          </div>
        </mock:shadow-root>
      </z-card-dictionary-footer>
    `);
  });
});
