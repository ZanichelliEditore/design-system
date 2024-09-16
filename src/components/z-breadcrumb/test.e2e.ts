import {newE2EPage} from "@stencil/core/testing";

it("Test emit clickOnNode event", async () => {
  const page = await newE2EPage({
    html: `<z-breadcrumb prevent-follow-url="true">
    <a href="https://www.zanichelli.it"></a>
    <a href="./link1">Lingua inglese - Scuola secondaria di primo grado</a>
    <a href="./link2">Lingua Inglese - Lessico e funzioni linguistiche e comunicative</a>
    <a href="./link3">Il tempo libero e i luoghi del tempo libero</a>
    <a href="./link4">Chiedere di descrivere le proprie vacanze</a>
  </z-breadcrumb>`,
  });

  const node = await page.find("z-breadcrumb >>> nav > ol > li:last-child > a");
  const clickEvent = await page.spyOnEvent("clickOnNode");
  await node.click();

  await page.waitForChanges();
  expect(clickEvent).toHaveReceivedEvent();
});

it("Test ", async () => {
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
