import {newE2EPage} from "@stencil/core/testing";

describe("z-select test end2end", () => {
  it("Should open the select list", async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <z-select
        items='[{"id":"item_1","selected":false,"name":"item_1"},{"id":"item_2","selected":true,"name":"item_2"}]'
        label="this is the label"
      ></z-select>
    `);

    await page.locator("z-select").click();
    await page.waitForChanges();

    expect((await page.find("z-select input")).getAttribute("aria-expanded")).toBeTruthy;
  });

  it("Should select an item from the list and then close the select list", async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <z-select
        items='[{"id":"item_1","selected":false,"name":"item_1"},{"id":"item_2","selected":true,"name":"item_2"},{"id":"item_3","selected":false,"name":"item_3"}]'
        label="this is the label"
      ></z-select>
    `);
    const optionSelectEvent = await page.spyOnEvent("optionSelect");

    await page.locator("z-select").click();
    await page.waitForChanges();

    await page.locator("z-select z-list-element").click();
    await page.waitForChanges();

    expect((await page.find("z-select input")).getAttribute("aria-expanded")).toBeFalsy;
    expect(optionSelectEvent).toHaveReceivedEvent();
  });
});
