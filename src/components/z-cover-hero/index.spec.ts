import { newSpecPage } from "@stencil/core/testing";

import { ZCoverHero } from "./index";

describe("Suite test ZCoverHero", () => {
  it("Test render ZCoverHero vuoto", async () => {

    const page = await newSpecPage({
      components: [ZCoverHero],
      html: `<z-cover-hero></z-cover-hero>`
    });

    expect(page.root).toEqualHtml(`
      <z-cover-hero>
        <mock:shadow-root>
          <div>
            This is your z-cover-hero component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-cover-hero>
    `)
  });
});
