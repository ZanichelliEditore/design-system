import {E2EPage, newE2EPage} from "@stencil/core/testing";

const viewportSize = {width: 640, height: 640};
const carouselSize = '"width: 640px; height: 480px;"';

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

const clickAndWaitCarouselScrollEnd = async (element, page) => {
  await element.click();
  await waitForScrollEnd(page, ".z-carousel-items-container");
  await page.waitForChanges();
};

describe("z-carousel non single mode tests", () => {
  const liStyle = '"width: 340px; height: 480px;"';
  it('Checks correct rendering and scrolling of a carousel with arrows-position="over", truthy fixed-arrows property and no title, no infinite navigation', async () => {
    const page = await newE2EPage({
      html: `<z-carousel style=${carouselSize} arrows-position="over" fixed-arrows="">
        <li><div style=${liStyle}>1</div></li>
        <li><div style=${liStyle}>2</div></li>
        <li><div style=${liStyle}>3</div></li>
      </z-carousel>`,
    });
    await page.setViewport(viewportSize);

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
      html: `<z-carousel style=${carouselSize} arrows-position="bottom" label="titolo" infinite="">
        <li><div style=${liStyle}>1</div></li>
        <li><div style=${liStyle}>2</div></li>
        <li><div style=${liStyle}>3</div></li>
      </z-carousel>`,
    });
    await page.setViewport(viewportSize);

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

    await clickAndWaitCarouselScrollEnd(outerNextArrow, page);

    expect(await ul.getProperty("scrollLeft")).toBeGreaterThan(0);

    await clickAndWaitCarouselScrollEnd(outerNextArrow, page);

    expect(await ul.getProperty("scrollLeft")).toBe(0);

    await clickAndWaitCarouselScrollEnd(outerNextArrow, page);

    expect(await ul.getProperty("scrollLeft")).toBeGreaterThan(0);

    await clickAndWaitCarouselScrollEnd(outerPrevArrow, page);

    expect(await ul.getProperty("scrollLeft")).toBe(0);
  });
});

describe("z-carousel single mode tests", () => {
  const liStyle = '"width: 640px;"';

  it('Checks correct rendering and scrolling of a carousel with arrows-position="bottom", no progress mode set and no infinite navigation', async () => {
    const page = await newE2EPage({
      html: `<z-carousel style=${carouselSize} single="" arrows-position="bottom">
        <li><div style=${liStyle}>1</div></li>
        <li><div style=${liStyle}>2</div></li>
        <li><div style=${liStyle}>3</div></li>
      </z-carousel>`,
    });
    await page.setViewport(viewportSize);

    const ul = await page.find("z-carousel >>> .z-carousel-items-container");
    expect(ul).not.toBeNull();
    const footer = await page.find("z-carousel >>> .z-carousel-footer");
    expect(footer).not.toBeNull();
    const footerZButtons = await footer.findAll("z-button");
    const footerChildren = await page.findAll("z-carousel >>> .z-carousel-footer > *");
    // if no progress mode is set I will find only 2 arrow buttons in the footer
    expect(footerZButtons.length).toBe(footerChildren.length);

    const prevArrow = footerZButtons[0];
    const nextArrow = footerZButtons[1];

    expect(await prevArrow.getProperty("disabled")).toBeTruthy();
    expect(await nextArrow.getProperty("disabled")).toBeFalsy();

    const indexChangeEvent = await page.spyOnEvent("indexChange");

    await clickAndWaitCarouselScrollEnd(nextArrow, page);

    expect(await prevArrow.getProperty("disabled")).toBeFalsy();
    expect(await nextArrow.getProperty("disabled")).toBeFalsy();
    expect(indexChangeEvent).toHaveReceivedEventDetail({currentItem: 1});

    await clickAndWaitCarouselScrollEnd(nextArrow, page);

    expect(await prevArrow.getProperty("disabled")).toBeFalsy();
    expect(await nextArrow.getProperty("disabled")).toBeTruthy();
    expect(indexChangeEvent).toHaveNthReceivedEventDetail(1, {currentItem: 2});

    await clickAndWaitCarouselScrollEnd(prevArrow, page);

    expect(await prevArrow.getProperty("disabled")).toBeFalsy();
    expect(await nextArrow.getProperty("disabled")).toBeFalsy();
    expect(indexChangeEvent).toHaveNthReceivedEventDetail(2, {currentItem: 1});
  });

  it('Checks correct rendering and scrolling of a carousel with arrows-position="over", progress mode set to "numbers", truthy fixed-arrows property and infinite navigation', async () => {
    const page = await newE2EPage({
      html: `<z-carousel style=${carouselSize} single="" arrows-position="over" fixed-arrows="" infinite="" progress-mode="numbers">
        <li><div style=${liStyle}>1</div></li>
        <li><div style=${liStyle}>2</div></li>
        <li><div style=${liStyle}>3</div></li>
      </z-carousel>`,
    });
    await page.setViewport(viewportSize);

    const ul = await page.find("z-carousel >>> .z-carousel-items-container");
    expect(ul).not.toBeNull();
    const prevArrow = await page.find("z-carousel >>> z-button[data-direction='prev']");
    expect(prevArrow).not.toBeNull();
    const nextArrow = await page.find("z-carousel >>> z-button[data-direction='next']");
    expect(nextArrow).not.toBeNull();
    const footer = await page.find("z-carousel >>> .z-carousel-footer");
    expect(footer).not.toBeNull();
    const footerDotsProgress = await page.find("z-carousel >>> .z-carousel-footer .dots-progress");
    expect(footerDotsProgress).toBeNull();
    const footerSpans = await page.findAll("z-carousel >>> .z-carousel-footer .numbers-progress >>> span");
    const footerLeafChildren = await page.findAll("z-carousel >>> .z-carousel-footer .numbers-progress *");
    // if progress mode is set I will find only 3 spans in the footer
    expect(footerSpans.length).toBe(footerLeafChildren.length);

    expect(footerSpans[0].innerText).toBe("1");
    expect(footerSpans[1].innerText).toBe("di");
    expect(footerSpans[2].innerText).toBe("3");

    expect(await prevArrow.getProperty("disabled")).toBeFalsy();
    expect(await nextArrow.getProperty("disabled")).toBeFalsy();

    const indexChangeEvent = await page.spyOnEvent("indexChange");

    await clickAndWaitCarouselScrollEnd(nextArrow, page);

    expect(indexChangeEvent).toHaveReceivedEventDetail({currentItem: 1});
    expect(footerSpans[0].innerText).toBe("2");

    await clickAndWaitCarouselScrollEnd(nextArrow, page);

    expect(indexChangeEvent).toHaveNthReceivedEventDetail(1, {currentItem: 2});
    expect(footerSpans[0].innerText).toBe("3");

    await clickAndWaitCarouselScrollEnd(nextArrow, page);

    expect(indexChangeEvent).toHaveNthReceivedEventDetail(2, {currentItem: 0});
    expect(footerSpans[0].innerText).toBe("1");

    await clickAndWaitCarouselScrollEnd(prevArrow, page);

    expect(indexChangeEvent).toHaveNthReceivedEventDetail(3, {currentItem: 2});
    expect(footerSpans[0].innerText).toBe("3");
  });

  it('Checks correct rendering and scrolling of a carousel with arrows-position="over", progress mode set to "dots", truthy fixed-arrows property and infinite navigation', async () => {
    const getElementBgColor = async (element) => {
      const elementStyle = await element.getComputedStyle();
      return elementStyle.backgroundColor;
    };

    const blue = "rgb(0, 86, 193)";
    const gray = "rgb(214, 214, 214)";

    const page = await newE2EPage({
      html: `<z-carousel style=${carouselSize} single="" arrows-position="over" fixed-arrows="" infinite="" progress-mode="dots">
        <li><div style=${liStyle}>1</div></li>
        <li><div style=${liStyle}>2</div></li>
        <li><div style=${liStyle}>3</div></li>
      </z-carousel>`,
    });
    await page.setViewport(viewportSize);

    const ul = await page.find("z-carousel >>> .z-carousel-items-container");
    expect(ul).not.toBeNull();
    const prevArrow = await page.find("z-carousel >>> z-button[data-direction='prev']");
    expect(prevArrow).not.toBeNull();
    const nextArrow = await page.find("z-carousel >>> z-button[data-direction='next']");
    expect(nextArrow).not.toBeNull();
    const footer = await page.find("z-carousel >>> .z-carousel-footer");
    expect(footer).not.toBeNull();
    const footerNumberProgress = await page.find("z-carousel >>> .z-carousel-footer .numbers-progress");
    expect(footerNumberProgress).toBeNull();
    const footerButtons = await page.findAll("z-carousel >>> .z-carousel-footer .dots-progress >>> button");
    const footerLeafChildren = await page.findAll("z-carousel >>> .z-carousel-footer .dots-progress *");
    // if progress mode is set I will find only 3 buttons in the footer
    expect(footerButtons.length).toBe(footerLeafChildren.length);

    expect(await getElementBgColor(footerButtons[0])).toBe(blue);
    expect(await getElementBgColor(footerButtons[1])).toBe(gray);
    expect(await getElementBgColor(footerButtons[2])).toBe(gray);

    expect(await prevArrow.getProperty("disabled")).toBeFalsy();
    expect(await nextArrow.getProperty("disabled")).toBeFalsy();

    const indexChangeEvent = await page.spyOnEvent("indexChange");

    await clickAndWaitCarouselScrollEnd(nextArrow, page);

    expect(indexChangeEvent).toHaveReceivedEventDetail({currentItem: 1});
    expect(await getElementBgColor(footerButtons[0])).toBe(gray);
    expect(await getElementBgColor(footerButtons[1])).toBe(blue);
    expect(await getElementBgColor(footerButtons[2])).toBe(gray);

    await clickAndWaitCarouselScrollEnd(nextArrow, page);

    expect(indexChangeEvent).toHaveNthReceivedEventDetail(1, {currentItem: 2});
    expect(await getElementBgColor(footerButtons[0])).toBe(gray);
    expect(await getElementBgColor(footerButtons[1])).toBe(gray);
    expect(await getElementBgColor(footerButtons[2])).toBe(blue);

    await clickAndWaitCarouselScrollEnd(nextArrow, page);

    expect(indexChangeEvent).toHaveNthReceivedEventDetail(2, {currentItem: 0});
    expect(await getElementBgColor(footerButtons[0])).toBe(blue);
    expect(await getElementBgColor(footerButtons[1])).toBe(gray);
    expect(await getElementBgColor(footerButtons[2])).toBe(gray);

    await clickAndWaitCarouselScrollEnd(prevArrow, page);

    expect(indexChangeEvent).toHaveNthReceivedEventDetail(3, {currentItem: 2});
    expect(await getElementBgColor(footerButtons[0])).toBe(gray);
    expect(await getElementBgColor(footerButtons[1])).toBe(gray);
    expect(await getElementBgColor(footerButtons[2])).toBe(blue);

    await clickAndWaitCarouselScrollEnd(footerButtons[0], page);

    expect(indexChangeEvent).toHaveNthReceivedEventDetail(4, {currentItem: 0});
    expect(await getElementBgColor(footerButtons[0])).toBe(blue);
    expect(await getElementBgColor(footerButtons[1])).toBe(gray);
    expect(await getElementBgColor(footerButtons[2])).toBe(gray);
  });
});
