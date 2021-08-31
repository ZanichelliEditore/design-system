import { newSpecPage } from "@stencil/core/testing";

import { ZToastNotificationList } from "./index";

describe("Suite test ZToastNotificationList", () => {
  it("Test render ZToastNotificationList vuoto", async () => {

    const page = await newSpecPage({
      components: [ZToastNotificationList],
      html: `<z-toast-notification-list></z-toast-notification-list>`
    });

    expect(page.root).toEqualHtml(`
      <z-toast-notification-list class="top-right">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </z-toast-notification-list>
    `)
  });
});

