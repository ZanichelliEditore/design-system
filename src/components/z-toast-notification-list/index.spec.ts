import {newSpecPage} from "@stencil/core/testing";

import {ZToastNotificationList} from "./index";

describe("Suite test ZToastNotificationList", () => {
  it("Test render ZToastNotificationList vuoto senza props", async () => {
    const page = await newSpecPage({
      components: [ZToastNotificationList],
      html: `<z-toast-notification-list></z-toast-notification-list>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toast-notification-list position="top-right">
        <mock:shadow-root>
            <slot name="toasts"></slot>
        </mock:shadow-root>
      </z-toast-notification-list>
    `);
  });

  it("Test render ZToastNotificationList vuoto con props", async () => {
    const page = await newSpecPage({
      components: [ZToastNotificationList],
      html: `<z-toast-notification-list newestontop="false" position="top-centre"></z-toast-notification-list>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toast-notification-list newestontop="false" position="top-centre">
        <mock:shadow-root>
            <slot name="toasts"></slot>
        </mock:shadow-root>
      </z-toast-notification-list>
    `);
  });

  it("Test render ZToastNotificationList con elementi slottati e props", async () => {
    const page = await newSpecPage({
      components: [ZToastNotificationList],
      html: `<z-toast-notification-list position="top-centre">
        <z-toast-notification type="error" heading="Notification" message="Senza pulsante."
            transition="slide-in-up" draggablepercentage="50" closebutton>
        </z-toast-notification>
        <z-toast-notification type="error" heading="Notification" message="Senza pulsante."
            transition="slide-in-up" draggablepercentage="50" closebutton>
        </z-toast-notification>
      </z-toast-notification-list>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toast-notification-list position="top-centre">
        <mock:shadow-root>
            <slot name="toasts"></slot>
        </mock:shadow-root>
        <z-toast-notification type="error" heading="Notification" message="Senza pulsante."
          transition="slide-in-up" draggablepercentage="50" closebutton>
        </z-toast-notification>
        <z-toast-notification type="error" heading="Notification" message="Senza pulsante."
          transition="slide-in-up" draggablepercentage="50" closebutton>
        </z-toast-notification>
      </z-toast-notification-list>
    `);
  });
});
