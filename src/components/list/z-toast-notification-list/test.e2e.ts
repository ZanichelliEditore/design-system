import {newE2EPage} from "@stencil/core/testing";

describe("z-toast-notification-list test end2end", () => {
  it("Test correct exit animation on close button click", async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <z-toast-notification-list position="bottom-centre">
        <z-toast-notification slot="toasts" type="dark" heading="Notification" message="Senza pulsante."
          transition="slide-in-up" draggablepercentage="50" closebutton>
        </z-toast-notification>
      </z-toast-notification-list>
    `);
    const notificationlist = await page.find("z-toast-notification-list z-toast-notification");
    const closebutton = await page.find("z-toast-notification-list z-toast-notification >>> div > z-icon");

    await closebutton.click();
    await page.waitForChanges();

    expect(notificationlist).toHaveClass("slide-out-down");
  });

  it("Test event on close button click ", async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <z-toast-notification-list position="bottom-centre">
      <z-toast-notification slot="toasts" type="dark" heading="Notification" message="Senza pulsante."
        transition="slide-in-up" draggablepercentage="50" closebutton>
      </z-toast-notification>
    </z-toast-notification-list>`);

    const notification = await page.find("z-toast-notification-list z-toast-notification");
    expect(notification).not.toBeNull();

    const closebutton = await page.find("z-toast-notification-list z-toast-notification >>> div > z-icon ");

    await closebutton.click();

    await page.waitForFunction(() => !document.querySelector("z-toast-notification"));

    const checkNotification = await page.find("z-toast-notification-list z-toast-notification");
    expect(checkNotification).toBeNull();
  });

  it("Test z-toast-notification autoclose", async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <z-toast-notification-list position="bottom-centre">
      <z-toast-notification slot="toasts" type="dark" heading="Notification" message="Senza pulsante."
        transition="slide-in-up" draggablepercentage="50" closebutton autoclose="1000">
      </z-toast-notification>
    </z-toast-notification-list>`);

    const notification = await page.find("z-toast-notification-list z-toast-notification");
    expect(notification).not.toBeNull();

    await page.waitForFunction(() => !document.querySelector("z-toast-notification"));

    const checkNotification = await page.find("z-toast-notification-list z-toast-notification");
    expect(checkNotification).toBeNull();
  });

  it("Test z-toast-notification drag", async () => {
    const page = await newE2EPage();

    await page.setContent(`
    <z-toast-notification-list position="bottom-centre">
      <z-toast-notification slot="toasts" type="dark" heading="Notification" message="Senza pulsante."
        transition="slide-in-up" draggablepercentage="50" closebutton autoclose="1000">
      </z-toast-notification>
    </z-toast-notification-list>`);

    const notification = await page.find("z-toast-notification-list z-toast-notification");
    expect(notification).not.toBeNull();

    const example = await page.$("z-toast-notification");
    const bounding_box = await example.boundingBox();
    await page.mouse.move(bounding_box.x + bounding_box.width / 2, bounding_box.y + bounding_box.height / 2);
    await page.mouse.down();
    await page.mouse.move(bounding_box.width / 2, 0);
    await page.mouse.up();

    await page.waitForFunction(() => !document.querySelector("z-toast-notification"));

    const checkNotification = await page.find("z-toast-notification-list z-toast-notification");
    expect(checkNotification).toBeNull();
  });
});
