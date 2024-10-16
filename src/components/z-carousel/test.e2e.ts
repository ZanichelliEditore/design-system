import {E2EPage, newE2EPage} from "@stencil/core/testing";

const liStyle = "width: 340px; height: 480px;";

const waitForScrollEnd = async (page: E2EPage, selector: string) => {
  await page.evaluate((selector) => {
    return new Promise<void>((resolve) => {
      const hostElement = document.querySelector("z-carousel");
      const element = hostElement.shadowRoot.querySelector(selector);
      const onEnd = function () {
        element.removeEventListener("scrollend", onEnd);
        resolve();
      };
      element.addEventListener("scrollend", onEnd);
    });
  }, selector);
};

it('Checks correct rendering and scrolling of a carousel with arrows-position="over", truthy fixed-arrows property and no title, no infinite navigation', async () => {
  const page = await newE2EPage({
    html: `<z-carousel style="width: 640px; height: 480px;" arrows-position="over" fixed-arrows="">
    <li><div style="${liStyle}">1</div></li>
    <li><div style="${liStyle}">2</div></li>
    <li><div style="${liStyle}">3</div></li>
  </z-carousel>`,
  });
  await page.setViewport({width: 640, height: 480});

  const ul = await page.find("z-carousel >>> .z-carousel-items-container");
  expect(ul).not.toBeNull();
  const prevArrow = await page.find("z-carousel >>> z-button[data-direction='prev']");
  expect(prevArrow).not.toBeNull();
  const nextArrow = await page.find("z-carousel >>> z-button[data-direction='next']");
  expect(nextArrow).not.toBeNull();
  const footer = await page.find("z-carousel >>> .z-carousel-footer");
  expect(footer).toBeNull();
  const label = await page.find("z-carousel >>> .z-carousel-title");
  expect(label).toBeNull();

  expect(await ul.getProperty("scrollLeft")).toBe(0);
  expect(await prevArrow.getProperty("disabled")).toBeTruthy();
  expect(await nextArrow.getProperty("disabled")).toBeFalsy();

  let tmpScrollLeft: number;
  let scrollLeft = 0;

  do {
    tmpScrollLeft = scrollLeft;
    await nextArrow.click();
    await page.waitForChanges();

    scrollLeft = await ul.getProperty("scrollLeft");
  } while (scrollLeft > tmpScrollLeft);

  expect(await prevArrow.getProperty("disabled")).toBeFalsy();
  expect(await nextArrow.getProperty("disabled")).toBeTruthy();

  do {
    await prevArrow.click();
    await page.waitForChanges();

    scrollLeft = await ul.getProperty("scrollLeft");
  } while (scrollLeft > 0);

  expect(await prevArrow.getProperty("disabled")).toBeTruthy();
  expect(await nextArrow.getProperty("disabled")).toBeFalsy();
});

it('Checks correct rendering and scrolling of a carousel with arrows-position="bottom", truthy fixed-arrows property, with title and infinite navigation', async () => {
  const page = await newE2EPage({
    html: `<z-carousel style="width: 640px; height: 480px;" arrows-position="bottom" label="titolo" infinite="">
    <li><div style="${liStyle}">1</div></li>
    <li><div style="${liStyle}">2</div></li>
    <li><div style="${liStyle}">3</div></li>
  </z-carousel>`,
  });
  await page.setViewport({width: 640, height: 640});

  const ul = await page.find("z-carousel >>> .z-carousel-items-container");
  expect(ul).not.toBeNull();
  const innerPrevArrow = await page.find("z-carousel >>> z-button[data-direction='prev']");
  expect(innerPrevArrow).not.toBeNull();
  const innerNextArrow = await page.find("z-carousel >>> z-button[data-direction='next']");
  expect(innerNextArrow).not.toBeNull();
  const footer = await page.find("z-carousel >>> .z-carousel-footer");
  expect(footer).not.toBeNull();
  const label = await page.find("z-carousel >>> .z-carousel-title");
  expect(label).not.toBeNull();
  const innerButtons = await footer.findAll("z-button");
  expect(innerButtons.length).toBe(2);
  const outerPrevArrow = innerButtons[0];
  const outerNextArrow = innerButtons[1];

  expect(await innerPrevArrow.getProperty("hidden")).toBeTruthy();
  expect(await innerNextArrow.getProperty("hidden")).toBeTruthy();
  expect(await outerPrevArrow.getProperty("hidden")).toBeFalsy();
  expect(await outerPrevArrow.getProperty("disabled")).toBeFalsy();
  expect(await outerNextArrow.getProperty("hidden")).toBeFalsy();
  expect(await outerNextArrow.getProperty("disabled")).toBeFalsy();

  expect(await ul.getProperty("scrollLeft")).toBe(0);

  await outerNextArrow.click();
  await waitForScrollEnd(page, ".z-carousel-items-container");

  expect(await ul.getProperty("scrollLeft")).toBeGreaterThan(0);

  await outerNextArrow.click();
  await waitForScrollEnd(page, ".z-carousel-items-container");

  expect(await ul.getProperty("scrollLeft")).toBe(0);

  await outerPrevArrow.click();
  await waitForScrollEnd(page, ".z-carousel-items-container");

  expect(await ul.getProperty("scrollLeft")).toBeGreaterThan(0);

  await outerPrevArrow.click();
  await waitForScrollEnd(page, ".z-carousel-items-container");

  expect(await ul.getProperty("scrollLeft")).toBe(0);
});
