import { newE2EPage } from "@stencil/core/testing";

type CustomWindow = Window &
  typeof globalThis & {
    onUserButtonClick: (a) => unknown;
    onDropdownMenuLinkClick : (a) => unknown
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

  const wrapperDiv = await page.find("z-user-dropdown >>> div > div:nth-child(2)");
  expect(wrapperDiv).not.toHaveClass("open");

  let linkList = await page.find("z-user-dropdown >>> div > div:nth-child(2) > ul");
  expect(linkList).toBeNull();

  const toggleButton = await page.find("z-user-dropdown >>> div > div:nth-child(2) > button");
  toggleButton.click();

  await page.waitForChanges();
  expect(wrapperDiv).toHaveClass("open");

  linkList = await page.find("z-user-dropdown >>> div > div:nth-child(2) > ul");
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

  const toggleButton = await page.find("z-user-dropdown >>> div > div:nth-child(2) > button");
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

  const enterButton = await page.find("z-user-dropdown >>> div > div:nth-child(1) > z-link");
  enterButton.click();

  await page.waitForChanges();
  expect(ismenuopen).toEqual(false);

  enterButton.click();

  await page.waitForChanges();
  expect(ismenuopen).toEqual(false);

});

it("Test dropdown menu zLink click should emit dropdownMenuLinkClick event", async () => {
  const page = await newE2EPage();

  let linkId = "";
  await page.exposeFunction("onDropdownMenuLinkClick", (e) => {
    linkId = e.detail;
  });

  const type = "dropdownMenuLinkClick";
  page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onDropdownMenuLinkClick({ type, detail: e.detail });
    });
  }, type);

  await page.setContent(`
    <z-user-dropdown
      userfullname="Sandro Studente"
      logged="true"
      menucontent='[{"label":"I Tuoi Ordini", "link":"#", "id":"ordini", "icon":"exit"},{"label":"Esci", "link":"#", "id":"logout", "icon":"enter"}]'
    ></z-user-dropdown>
  `);

  const toggleButton = await page.find("z-user-dropdown >>> div > div:nth-child(2) > button");
  toggleButton.click();

  await page.waitForChanges();
  const logoutLink = await page.find("z-user-dropdown >>> div > .open > ul > #logout > z-link")

  logoutLink.click();

  await page.waitForChanges();
  expect(linkId).toEqual({"e": {"isTrusted": false}, "linkId": "logout"});

});