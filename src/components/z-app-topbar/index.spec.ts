import { newSpecPage } from "@stencil/core/testing";

import { ZTopbar } from "./index";

describe("Suite test ZTopbar", () => {
  it("Test render ZTopbar vuoto", async () => {

    const page = await newSpecPage({
      components: [ZTopbar],
      html: `<z-topbar></z-topbar>`
    });

    expect(page.root).toEqualHtml(`
      <z-topbar>
        <mock:shadow-root>
          <div>
            This is your z-topbar component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-topbar>
    `)
  });
});

