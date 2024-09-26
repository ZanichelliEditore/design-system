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
  const listElements = await listbox.findAll("z-list-element");
  expect(listElements.map(({id}) => id)).toEqual(items.map(({id}) => id));

  await input.type(items[0].name);
  await page.waitForChanges();
  const filteredListElems = await listbox.findAll("z-list-element");

  expect(filteredListElems.map(({id}) => id)).toEqual([items[0].id]);

  const clickEvent = await page.spyOnEvent("comboboxChange");

  const checkbox = await filteredListElems[0].find("z-input div input");
  await checkbox.click();
  await page.waitForChanges();

  expect(clickEvent).toHaveReceivedEvent();
});
