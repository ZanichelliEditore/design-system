import { newSpecPage } from "@stencil/core/testing";

import { ZToastNotificationList } from "./index";

describe("Suite test ZToastNotificationList", () => {
  it("Test render ZToastNotificationList vuoto", async () => {

    const page = await newSpecPage({
      components: [ZToastNotificationList],
      html: `<z-toast-notification-list></z-toast-notification-list>`
    });

    expect(page.root).toEqualHtml(`
      <z-toast-notification-list>
        <mock:shadow-root>
          <div>
            This is your z-toast-notification-list component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-toast-notification-list>
    `)
  });
});

