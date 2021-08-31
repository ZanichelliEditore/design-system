import { newE2EPage } from "@stencil/core/testing";

describe("z-toast-notification-list test end2end", () => {
  it("Test that notification closes on close button click", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <z-toast-notification-list>
      <z-toast-notification type="dark" heading="Notification" message="Senza pulsante."
        transition="slide-in-up" draggablepercentage="50" closebutton>
      </z-toast-notification>
    </z-toast-notification-list>`);
    const notificationlist = await page.find("z-toast-notification-list");
    const closebutton = await page.find(
      "z-toast-notification-list z-toast-notification >>> div > z-icon "
    );
    closebutton.click();
    await page.waitForChanges();
    expect(notificationlist).toEqual(`
    <z-toast-notification-list>
      <mock:shadow-root>
        <div class="newest-on-top" id="notification-stack">
          <slot></slot>
        </div>
      </mock:shadow-root>
    </z-toast-notification-list>`);
  });
});
