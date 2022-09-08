import {newE2EPage} from "@stencil/core/testing";

it("should render the given text content as accessible text", async () => {
  const page = await newE2EPage();
  const notificationTextContent = "Testo della notifica";
  await page.setContent(`<z-notification>${notificationTextContent}</z-notification>`);

  const notificationBody = await page.find("z-notification");

  expect(notificationBody).toEqualText(notificationTextContent);
});

it("emits a notificationAction event when the component has an action element and the user clicks on it", async () => {
  const page = await newE2EPage();
  await page.setContent('<z-notification actiontext="Azione">Testo della notifica</z-notification>');
  const notificationActionSpy = await page.spyOnEvent("notificationAction");

  const actionElement = await page.find("z-notification >>> .action-button");
  await actionElement.click();

  expect(notificationActionSpy).toHaveReceivedEvent();
});

it("emits a notificationClose event when the component has a close button and the user clicks on it", async () => {
  const page = await newE2EPage();
  await page.setContent('<z-notification showclose="true">Testo della notifica</z-notification>');
  const notificationActionSpy = await page.spyOnEvent("notificationClose");

  const closeButton = await page.find("z-notification >>> .close-button");
  await closeButton.click();

  expect(notificationActionSpy).toHaveReceivedEvent();
});
