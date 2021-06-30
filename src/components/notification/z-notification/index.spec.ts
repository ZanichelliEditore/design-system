import { newSpecPage } from "@stencil/core/testing";

import { ZNotification } from "./index";

describe("Suite test ZNotification", () => {
  it("Test render ZNotification vuoto", async () => {

    const page = await newSpecPage({
      components: [ZNotification],
      html: `<z-notification></z-notification>`
    });

    expect(page.root).toEqualHtml(`
      <z-notification>
        <mock:shadow-root>
          <div>
            This is your z-notification component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-notification>
    `)
  });
});

