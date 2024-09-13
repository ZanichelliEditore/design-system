import { newE2EPage } from "@stencil/core/testing";
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
        expect((await page.find("z-select input")).getAttribute("aria-expanded")).toBe("true");
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
        expect((await page.find("z-select input")).getAttribute("aria-expanded")).toBe("false");
        expect(optionSelectEvent).toHaveReceivedEvent();
    });
    it("Should close the select list when clicking outside the component", async () => {
        const page = await newE2EPage();
        await page.setContent(`
      <div>
        <z-input class="outside-element"></z-input>
        <z-select
          items='[{"id":"item_1","selected":false,"name":"item_1"},{"id":"item_2","selected":true,"name":"item_2"},{"id":"item_3","selected":false,"name":"item_3"}]'
          label="this is the label"
        ></z-select>
      </div>
    `);
        await page.locator("z-select").click();
        await page.waitForChanges();
        expect((await page.find("z-select input")).getAttribute("aria-expanded")).toBe("true");
        await page.locator(".outside-element").click();
        await page.waitForChanges();
        expect((await page.find("z-select input")).getAttribute("aria-expanded")).toBe("false");
    });
    it("Should close the select list when pressing ESC key", async () => {
        const page = await newE2EPage();
        await page.setContent(`
        <z-select
          items='[{"id":"item_1","selected":false,"name":"item_1"},{"id":"item_2","selected":true,"name":"item_2"},{"id":"item_3","selected":false,"name":"item_3"}]'
          label="this is the label"
        ></z-select>
    `);
        await page.locator("z-select").click();
        await page.waitForChanges();
        expect((await page.find("z-select input")).getAttribute("aria-expanded")).toBe("true");
        await page.keyboard.press("Escape");
        await page.waitForChanges();
        expect((await page.find("z-select input")).getAttribute("aria-expanded")).toBe("false");
    });
    it("Should filter the items list based on the input value", async () => {
        const page = await newE2EPage();
        await page.setContent(`
      <z-select
        items='[{"id":"item_1","selected":false,"name":"item_1"},{"id":"item_2","selected":true,"name":"item_2"},{"id":"item_3","selected":true,"name":"item_3"}]'
        label="this is the label"
        autocomplete="true"
      ></z-select>
    `);
        await page.locator("z-select").click();
        await page.waitForChanges();
        expect((await page.find("z-select input")).getAttribute("aria-expanded")).toBe("true");
        expect((await page.$$("z-list-element")).length).toBe(3);
        await (await page.find("z-select input")).press("1");
        await page.waitForChanges();
        expect((await page.$$("z-list-element")).length).toBe(1);
        expect((await page.find("z-list-element span")).innerText).toBe("item_1");
    });
    it("Should emit resetSelect event when reset item is enabled and clicked", async () => {
        const page = await newE2EPage();
        await page.setContent(`
      <z-select
        items='[{"id":"item_1","selected":false,"name":"item_1"},{"id":"item_2","selected":true,"name":"item_2"},{"id":"item_3","selected":true,"name":"item_3"}]'
        label="this is the label"
        autocomplete="true"
        reset-item="cancella"
      ></z-select>
    `);
        const resetSelectEvent = await page.spyOnEvent("resetSelect");
        await page.locator("z-select").click();
        await page.waitForChanges();
        await page.locator("z-list-element.reset-item").click();
        await page.waitForChanges();
        expect(resetSelectEvent).toHaveReceivedEvent();
    });
    it("Should select an item from the list using keyboard navigation", async () => {
        const page = await newE2EPage();
        await page.setContent(`
      <z-select
        items='[{"id":"item_1","selected":false,"name":"item_1"},{"id":"item_2","selected":true,"name":"item_2"},{"id":"item_3","selected":true,"name":"item_3"}]'
        label="this is the label"
      ></z-select>
    `);
        const select = await page.find("z-select");
        expect(await select.callMethod("getValue")).toBe("item_2");
        await (await page.find("body")).press("Tab");
        await select.press("Enter");
        await page.waitForChanges();
        expect((await page.find("z-select input")).getAttribute("aria-expanded")).toBe("true");
        await select.press("ArrowDown");
        await page.waitForChanges();
        await select.press("Enter");
        await page.waitForChanges();
        expect((await page.find("z-select input")).getAttribute("aria-expanded")).toBe("false");
        expect(await select.callMethod("getValue")).toBe("item_1");
    });
});
//# sourceMappingURL=test.e2e.js.map
