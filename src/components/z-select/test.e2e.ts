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

    expect((await page.$$("z-list-element")).length).toBe(3);

    const input = await page.find("z-select input");
    await input.press("1");
    await page.waitForChanges();

    const filteredItems = await page.$$("z-list-element");
    expect(filteredItems.length).toBe(1);

    const itemText = await filteredItems[0].evaluate((el) => el.textContent);
    expect(itemText).toContain("item_1");
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

  it("Should open the select list with tree items", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-select
        has-tree-items="true"
        items='[
          {
            "id":"item_1",
            "selected":false,
            "name":"Parent Item 1",
            "children": [
              {"id":"child_1","selected":false,"name":"Child Item 1"},
              {"id":"child_2","selected":false,"name":"Child Item 2"}
            ]
          },
          {
            "id":"item_2",
            "selected":false,
            "name":"Parent Item 2"
          }
        ]'
        label="Tree label"
      ></z-select>
    `);

    await page.locator("z-select").click();
    await page.waitForChanges();

    const input = await page.find("z-select input");
    expect(input.getAttribute("aria-expanded")).toBe("true");

    const parents = await page.$$("z-list-element");
    expect(parents.length).toBe(4);
  });

  it("Should show child items inside the parent when hasTreeItems is true", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-select
        has-tree-items="true"
        items='[
          {
            "id":"item_1",
            "selected":false,
            "name":"Parent Item 1",
            "children": [
              {"id":"child_1","selected":false,"name":"Child Item 1"},
              {"id":"child_2","selected":false,"name":"Child Item 2"}
            ]
          },
          {
            "id":"item_2",
            "selected":false,
            "name":"Parent Item 2"
          }
        ]'
        label="Tree label"
      ></z-select>
    `);

    await page.locator("z-select").click();
    await page.waitForChanges();

    const firstParent = (await page.$$("z-list-element"))[0];

    const childSelectors = await firstParent.evaluate((el) => {
      const childrenDiv = el.querySelector(".children-node");
      if (!childrenDiv) {
        return [];
      }
      return Array.from(childrenDiv.querySelectorAll("z-list-element")).map((c) => c.textContent);
    });

    expect(childSelectors.length).toBe(2);
    expect(childSelectors[0]).toContain("Child Item 1");
    expect(childSelectors[1]).toContain("Child Item 2");
  });

  it("Should filter both parent and child items based on the input value", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-select
        has-tree-items="true"
        autocomplete="true"
        items='[
          {
            "id":"item_1",
            "selected":false,
            "name":"Parent Item 1",
            "children": [
              {"id":"child_1","selected":false,"name":"Child Item 1"},
              {"id":"child_2","selected":false,"name":"Child Item 2"}
            ]
          },
          {
            "id":"item_2",
            "selected":false,
            "name":"Another Parent Item"
          },
          {
            "id":"item_3",
            "selected":false,
            "name":"Parent with no match",
            "children": [
              {"id":"child_3","selected":false,"name":"Random Child"}
            ]
          }
        ]'
        label="Tree label"
      ></z-select>
    `);

    await page.locator("z-select").click();
    await page.waitForChanges();

    const input = await page.find("z-select input");
    await input.type("Child Item 2");
    await page.waitForChanges();

    const parentsAfterFilter = await page.$$("z-list-element");
    expect(parentsAfterFilter.length).toBe(2);

    const parentText = await parentsAfterFilter[0].evaluate((el) => el.textContent);
    expect(parentText).toContain("Parent Item 1");

    const childSelectors = await parentsAfterFilter[0].evaluate((el) => {
      const childrenDiv = el.querySelector(".children-node");
      if (!childrenDiv) {
        return [];
      }
      return Array.from(childrenDiv.querySelectorAll("z-list-element")).map((c) => c.textContent);
    });
    expect(childSelectors.length).toBe(1);
    expect(childSelectors[0]).toContain("Child Item 2");
  });

  it("Should select a child item from the nested list and close the select", async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <z-select
      has-tree-items="true"
      items='[
        {
          "id":"item_1",
          "selected":false,
          "name":"Parent Item 1",
          "children": [
            {"id":"child_1","selected":false,"name":"Child Item 1"},
            {"id":"child_2","selected":false,"name":"Child Item 2"}
          ]
        }
      ]'
      label="Tree label"
    ></z-select>
  `);

    const optionSelectEvent = await page.spyOnEvent("optionSelect");

    await page.locator("z-select").click();
    await page.waitForChanges();

    const allItems = await page.$$("z-list-element");

    for (const item of allItems) {
      const text = await item.evaluate((node) => node.textContent);
      if (text?.includes("Child Item 1")) {
        await item.click();
        await page.waitForChanges();
        break;
      }
    }

    const input = await page.find("z-select input");
    expect(await input.getAttribute("aria-expanded")).toBe("false");

    expect(optionSelectEvent).toHaveReceivedEvent();

    const select = await page.find("z-select");
    const value = await select.callMethod("getValue");
    expect(value).toBe("child_1");
  });
});
