import {newE2EPage} from "@stencil/core/testing";

declare global {
  interface Window {
    onPocketHeaderClick: () => void;
  }
}

it("Test ZPocketHeader should emit pocketHeaderClick event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let clickCounter = 0;
  await page.exposeFunction("onPocketHeaderClick", () => {
    clickCounter++;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "pocketHeaderClick";
  page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, () => {
      window.onPocketHeaderClick();
    });
  }, type);

  await page.setContent(`<z-pocket-header></z-pocket-header>`);
  const header = await page.find("z-pocket-header >>> header");

  expect(clickCounter).toEqual(0);

  await header.click();
  await page.waitForChanges();
  expect(clickCounter).toEqual(1);

  await header.click();
  await page.waitForChanges();
  expect(clickCounter).toEqual(2);
});
