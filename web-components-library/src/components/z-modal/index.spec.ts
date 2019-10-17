import { newSpecPage } from "@stencil/core/testing";

import { ZModal } from "./index";

describe("Suite test ZModal", () => {
  it("Test render ZModal vuoto", async () => {

    const page = await newSpecPage({
      components: [ZModal],
      html: `<z-modal></z-modal>`
    });

    expect(page.root).toEqualHtml(`
      <z-modal>
        <mock:shadow-root>
          <div>
            This is your z-modal component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-modal>
    `)
  });
});

