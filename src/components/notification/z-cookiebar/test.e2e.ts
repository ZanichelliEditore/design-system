import {newE2EPage} from "@stencil/core/testing";

it("Test OK button should emit okButtonClick event", async () => {
  const page = await newE2EPage();

  let clicked = false;
  // Expose a handler to the page
  await page.exposeFunction("onAccept", ({type, detail}) => {
    clicked = true;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "accept";
  await page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      window.onAccept({type, detail: e.detail});
    });
  }, type);

  await page.setContent(`<z-cookiebar></z-cookiebar>`);
  const button = await page.find("z-cookiebar >>> z-candybar > div > z-button");

  expect(clicked).toEqual(false);

  await button.click();
  await page.waitForChanges();

  expect(clicked).toEqual(true);
});
