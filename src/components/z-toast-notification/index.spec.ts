import { newSpecPage } from "@stencil/core/testing";

import { ZToastNotification } from "./index";

describe("Suite test ZToastNotification", () => {
  it("Test render ZToastNotification vuoto", async () => {

    const page = await newSpecPage({
      components: [ZToastNotification],
      html: `<z-toast-notification></z-toast-notification>`
    });

    expect(page.root).toEqualHtml(`
      <z-toast-notification>
        <mock:shadow-root>
          <div>
            This is your z-toast-notification component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-toast-notification>
    `)
  });
});

