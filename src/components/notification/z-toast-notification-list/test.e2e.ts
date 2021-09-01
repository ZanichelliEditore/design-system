import { newE2EPage } from "@stencil/core/testing";

describe("z-toast-notification-list test end2end", () => {
  it("Test correct exit animation on close button click ", async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <z-toast-notification-list position="bottom-centre">
      <z-toast-notification type="dark" heading="Notification" message="Senza pulsante."
        transition="slide-in-up" draggablepercentage="50" closebutton>
      </z-toast-notification>
    </z-toast-notification-list>`);
    const notificationlist = await page.find("z-toast-notification-list z-toast-notification");
    const closebutton = await page.find(
      "z-toast-notification-list z-toast-notification >>> div > z-icon "
    );

    closebutton.click();
    await page.waitForChanges();

    expect(notificationlist).toHaveClass('slide-out-down');
  });


  it("Test event on close button click ", async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <z-toast-notification-list position="bottom-centre">
      <z-toast-notification type="dark" heading="Notification" message="Senza pulsante."
        transition="slide-in-up" draggablepercentage="50" closebutton>
      </z-toast-notification>
    </z-toast-notification-list>`);

    const notification = await page.find("z-toast-notification-list z-toast-notification");
    expect(notification).not.toBeNull();

    const closebutton = await page.find(
      "z-toast-notification-list z-toast-notification >>> div > z-icon "
    );

    await closebutton.click();

    await page.waitForFunction(() => !document.querySelector('z-toast-notification'));

    const notification2 = await page.find("z-toast-notification-list z-toast-notification");
    expect(notification2).toBeNull();

  });
});
