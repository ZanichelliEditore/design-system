import { newE2EPage } from "@stencil/core/testing";

type CustomWindow = Window &
  typeof globalThis & {
    onUserButtonClick: (a) => unknown;
  };

it("Test dropdown button should open list", async () => {
  const page = await newE2EPage();

  await page.setContent(`
    <z-user-dropdown
      userfullname="Sandro Studente"
      logged="true"
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

it("Test enter and user button click should emit userButtonClick event", async () => {
  const page = await newE2EPage();

  let ismenuopen = "";
  await page.exposeFunction("onUserButtonClick", (e) => {
    ismenuopen = e.detail;
  });

  const type = "userButtonClick";
  page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onUserButtonClick({ type, detail: e.detail });
    });
  }, type);

  await page.setContent(`
    <z-user-dropdown
      userfullname="Sandro Studente"
      logged="true"
      menucontent='[{"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
    ></z-user-dropdown>
  `);

  const toggleButton = await page.find("z-user-dropdown >>> div > button");
  toggleButton.click();

  await page.waitForChanges();
  expect(ismenuopen).toEqual(true);

  toggleButton.click();

  await page.waitForChanges();
  expect(ismenuopen).toEqual(false);

  // INFO: set component prop
  await page.$eval("z-user-dropdown", (elm: any) => {
    elm.logged = false;
  });

  const enterButton = await page.find("z-user-dropdown >>> div > z-link");
  enterButton.click();

  await page.waitForChanges();
  expect(ismenuopen).toEqual(false);

  enterButton.click();

  await page.waitForChanges();
  expect(ismenuopen).toEqual(false);

});
