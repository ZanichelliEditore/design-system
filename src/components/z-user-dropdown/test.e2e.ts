import { newE2EPage } from "@stencil/core/testing";

it("Test dropdown button should open list", async () => {
  const page = await newE2EPage();

  await page.setContent(`
    <z-user-dropdown
      userfullname="Sandro Studente"
      islogged="true"
      menucontent='[{"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
    ></z-user-dropdown>
  `);

  const wrapperDiv = await page.find("z-user-dropdown >>> div");
  expect(wrapperDiv).not.toHaveClass("open");

  let linkList = await page.find("z-user-dropdown >>> div > ul");
  expect(linkList).toBeNull();

  const toggleButton = await page.find("z-user-dropdown >>> div > button");
  toggleButton.click();

  await page.waitForChanges();
  expect(wrapperDiv).toHaveClass("open");

  linkList = await page.find("z-user-dropdown >>> div > ul");
  expect(linkList).not.toBeNull();
});
