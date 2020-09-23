import { newSpecPage } from "@stencil/core/testing";

import { ZCookiebar } from "./index";

describe("Suite test ZCookiebar", () => {
  it("Test render ZCookiebar vuoto", async () => {

    const page = await newSpecPage({
      components: [ZCookiebar],
      html: `<z-cookiebar></z-cookiebar>`
    });

    expect(page.root).toEqualHtml(`
      <z-cookiebar>
        <mock:shadow-root>
          <div>
            This is your z-cookiebar component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-cookiebar>
    `)
  });
});

