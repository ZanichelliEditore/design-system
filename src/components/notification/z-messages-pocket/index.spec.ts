import { newSpecPage } from "@stencil/core/testing";

import { ZMessagesPocket } from "./index";

describe("Suite test ZMessagesPocket", () => {
  it("Test render ZMessagesPocket vuoto", async () => {

    const page = await newSpecPage({
      components: [ZMessagesPocket],
      html: `<z-messages-pocket></z-messages-pocket>`
    });

    expect(page.root).toEqualHtml(`
      <z-messages-pocket>
        <mock:shadow-root>
          <div>
            This is your z-messages-pocket component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-messages-pocket>
    `)
  });
});

