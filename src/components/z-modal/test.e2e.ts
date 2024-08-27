import {newE2EPage} from "@stencil/core/testing";

describe("z-modal test end2end", () => {
  it("Close modal using x button", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <div>
      <z-modal modalid="my-modal-short" modaltitle="My modal title" close-button-label="chiudi modale" alertdialog="false" closable="true" scroll-inside="true">
        <div slot="modalContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </z-modal>
    </div>`);
    const modalCloseEvent = await page.spyOnEvent("modalClose");
    const closeButton = await page.find("z-modal >>> header button");
    const modal = await page.find("z-modal >>> dialog");

    await closeButton.click();
    await page.waitForChanges();

    expect(modalCloseEvent).toHaveReceivedEvent();
    await modal.waitForNotVisible();
  });

  it("Close modal clicking outside dialog", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <div>
      <input class="other-element" />
      <z-modal modalid="my-modal-short" modaltitle="My modal title" close-button-label="chiudi modale" alertdialog="false" closable="true" scroll-inside="true">
        <div slot="modalContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </z-modal>
    </div>`);
    const modalCloseEvent = await page.spyOnEvent("modalClose");
    const input = await page.find(".other-element");
    const modal = await page.find("z-modal >>> dialog");

    await input.click();
    await page.waitForChanges();

    expect(modalCloseEvent).toHaveReceivedEvent();
    await modal.waitForNotVisible();
  });

  it("Fail to close a non-closable modal", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <div>
      <input class="other-element" />
      <z-modal modalid="my-modal-short" modaltitle="My modal title" closable="false" alertdialog="false" scroll-inside="true">
        <div slot="modalContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </z-modal>
    </div>`);
    const modalCloseEvent = await page.spyOnEvent("modalClose");
    const input = await page.find(".other-element");
    const modal = await page.find("z-modal >>> dialog");

    await input.click();
    await page.waitForChanges();

    expect(modalCloseEvent).not.toHaveReceivedEvent();
    await modal.isVisible();
  });
});
