import {newE2EPage} from "@stencil/core/testing";

it("Checks emit clickOnNode event on anchor tag click if prevent-follow-url is true", async () => {
  const page = await newE2EPage({
    html: `<z-breadcrumb prevent-follow-url="true">
    <a href="https://www.zanichelli.it"></a>
    <a href="./link1">Lingua inglese - Scuola secondaria di primo grado</a>
    <a href="./link2">Lingua Inglese - Lessico e funzioni linguistiche e comunicative</a>
    <a href="./link3">Il tempo libero e i luoghi del tempo libero</a>
    <a href="./link4">Chiedere di descrivere le proprie vacanze</a>
  </z-breadcrumb>`,
  });

  const clickEvent = await page.spyOnEvent("clickOnNode");
  const link = await page.$("z-breadcrumb >>> nav > ol > li:last-child > a");

  await link.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
});

it("Checks if contextual menu trigger button appears and become visible when clicked", async () => {
  const page = await newE2EPage({
    html: `<z-breadcrumb prevent-follow-url="true">
    <a href="https://www.zanichelli.it"></a>
    <a href="./link1">Lingua inglese - Scuola secondaria di primo grado</a>
    <a href="./link2">Lingua Inglese - Lessico e funzioni linguistiche e comunicative</a>
    <a href="./link3">Il tempo libero e i luoghi del tempo libero</a>
    <a href="./link4">Chiedere di descrivere le proprie vacanze</a>
  </z-breadcrumb>`,
  });

  await page.setViewport({
    width: 1024,
    height: 0,
    deviceScaleFactor: 1,
  });

  await page.waitForChanges();

  const contextualMenuButton = await page.find("z-breadcrumb >>> nav > ol > li:nth-child(2) > button");
  const contextualMenu = await page.find("z-breadcrumb >>> nav > ol > li:nth-child(2) > z-popover");

  await contextualMenuButton.click();
  await page.waitForChanges();

  expect(await contextualMenu.isVisible()).toBe(true);
});

it("Checks if mobile version is displayed correctly, item clicked without prevent-follow-url cause page to change", async () => {
  const page = await newE2EPage({
    html: `<z-breadcrumb>
    <a href="https://www.zanichelli.it"></a>
    <a href="./link1">Lingua inglese - Scuola secondaria di primo grado</a>
    <a href="./link2">Lingua Inglese - Lessico e funzioni linguistiche e comunicative</a>
    <a href="./link3">Il tempo libero e i luoghi del tempo libero</a>
    <a href="./link4">Chiedere di descrivere le proprie vacanze</a>
  </z-breadcrumb>`,
  });

  await page.setViewport({
    width: 320,
    height: 0,
    deviceScaleFactor: 1,
  });

  await page.waitForChanges();

  const breadcrumbNodes = await page.$$("z-breadcrumb >>> nav > ol > li");

  expect(breadcrumbNodes).toHaveLength(1);
  expect(await breadcrumbNodes[0].isVisible()).toBe(true);

  const text = await breadcrumbNodes[0].$eval("a", (a) => a.innerText);

  expect(text).toBe("Chiedere di descrivere le proprie vacanze");

  const anchor = await breadcrumbNodes[0].$("a");

  await anchor.click();
  await page.waitForChanges();

  expect(page.url()).toBe("http://localhost:3333/link4");
});

it("Checks accessibility navigation", async () => {
  const page = await newE2EPage({
    html: `<z-breadcrumb>
    <a href="https://www.zanichelli.it"></a>
    <a href="./link1">Lingua inglese - Scuola secondaria di primo grado</a>
    <a href="./link2">Lingua Inglese - Lessico e funzioni linguistiche e comunicative</a>
    <a href="./link3">Il tempo libero e i luoghi del tempo libero</a>
    <a href="./link4">Chiedere di descrivere le proprie vacanze</a>
  </z-breadcrumb>`,
  });

  const elementToBeFocused = 3;
  const breadcrumbNodes = await page.$$("z-breadcrumb >>> nav > ol > li");

  for (let i = 0; i < elementToBeFocused; i++) {
    await page.keyboard.press("Tab");
  }

  const focusedElement = await breadcrumbNodes[elementToBeFocused].$("a");
  expect(focusedElement).not.toBeNull();
  await focusedElement.press("Enter");

  await page.waitForChanges();
  expect(page.url()).toBe("http://localhost:3333/link3");
});
