import {newE2EPage} from "@stencil/core/testing";

const items = [
  {id: "ite_m_1", name: "First item", checked: false, category: "Gruppo 1"},
  {id: "ite_m_2", name: "Second item", checked: false, category: "Gruppo 1"},
  {id: "it_em_3", name: "Other item", checked: false, category: "Gruppo 2"},
  {id: "it_e_m_5", name: "Last item", checked: false, category: "Gruppo 3"},
];

it("Tests z-combobox search", async () => {
  const page = await newE2EPage();
  await page.setContent(`
    <z-combobox
      checkalltext="Select all"
      closesearchtext="Close"
      hascheckall="true"
      hassearch="true"
      inputid="combo_1"
      isfixed="true"
      isopen="true"
      items='${JSON.stringify(items)}'
      label="Combobox Label"
      maxcheckableitems="4"
      hasgroupitems="false"
      noresultslabel="No items"
      searchlabel="Search Label"
      searchplaceholder="Search Placeholder"
      searchtitle="Search Title"
      uncheckalltext="Uncheck All"
    />
  `);

  const input = await page.find("z-combobox >>> z-input input");
  const listbox = await page.find("z-combobox >>> #combo_1_list");

  const comboboxChangeEvent = await page.spyOnEvent("comboboxChange");
  const itemsPayload = [...items];

  await input.type(items[0].name);
  await page.waitForChanges();
  const filteredListElems = await listbox.findAll("z-list-element");

  expect(filteredListElems.length).toBe(1);
  const option = await filteredListElems[0].find('>>> span[role="option"]');
  expect(option.id).toEqual(`combo_1-option-${items[0].id}`);

  await option.click();
  await page.waitForChanges();

  itemsPayload[0]["checked"] = true;
  expect(comboboxChangeEvent).toHaveReceivedEventDetail({id: "combo_1", items: itemsPayload});

  await option.click();
  await page.waitForChanges();

  itemsPayload[0]["checked"] = false;
  expect(comboboxChangeEvent).toHaveReceivedEventDetail({id: "combo_1", items: itemsPayload});
});

it("Tests z-combobox keyboard navigation", async () => {
  const page = await newE2EPage();
  await page.setContent(`
    <z-combobox
      checkalltext="Select all"
      closesearchtext="Close"
      hassearch="true"
      inputid="combo_1"
      isfixed="true"
      isopen="true"
      items='${JSON.stringify(items)}'
      label="Combobox Label"
      maxcheckableitems="4"
      hasgroupitems="false"
      noresultslabel="No items"
      searchlabel="Search Label"
      searchplaceholder="Search Placeholder"
      searchtitle="Search Title"
      uncheckalltext="Uncheck All"
    />
  `);

  const input = await page.find("z-combobox >>> z-input input");

  const comboboxChangeEvent = await page.spyOnEvent("comboboxChange");
  const itemsPayload = [...items];

  await input.focus();
  await page.waitForChanges();

  await input.press("ArrowDown");
  await page.waitForChanges();

  expect((await page.find("z-combobox >>> z-input")).getAttribute("html-aria-activedescendant")).toBe(
    "combo_1-option-ite_m_1"
  );

  await input.press("Enter");
  await page.waitForChanges();

  itemsPayload[0]["checked"] = true;
  expect(comboboxChangeEvent).toHaveReceivedEventDetail({id: "combo_1", items: itemsPayload});

  await input.press("ArrowDown");
  await page.waitForChanges();

  expect((await page.find("z-combobox >>> z-input")).getAttribute("html-aria-activedescendant")).toBe(
    "combo_1-option-ite_m_2"
  );

  await input.press("Space");
  await page.waitForChanges();

  itemsPayload[0]["checked"] = true;
  itemsPayload[1]["checked"] = true;
  expect(comboboxChangeEvent).toHaveReceivedEventDetail({id: "combo_1", items: itemsPayload});

  await input.press("Space");
  await page.waitForChanges();

  itemsPayload[1]["checked"] = false;
  expect(comboboxChangeEvent).toHaveReceivedEventDetail({id: "combo_1", items: itemsPayload});
});
