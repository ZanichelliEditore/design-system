import { newE2EPage } from "@stencil/core/testing";

it("Test ZButtonSort should emit buttonSortClick event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let buttonSortClickCounter = 0;
  let buttonSortAsc = true;
  await page.exposeFunction("onButtonSortClick", e => {
    buttonSortClickCounter = 1;
    buttonSortAsc = e.detail.sortAsc;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "buttonSortClick";
  page.evaluateOnNewDocument(type => {
    document.addEventListener(type, e => {
      window.onButtonSortClick({ type, detail: e.detail });
    });
  }, type);

  await page.setContent(`<z-button-sort></z-button-sort>`);
  const button = await page.find("z-button-sort");

  expect(buttonSortClickCounter).toEqual(0);
  expect(buttonSortAsc).toEqual(true);

  button.click();
  await page.waitForChanges();

  expect(buttonSortClickCounter).toEqual(1);
  expect(buttonSortAsc).toEqual(true);

  buttonSortClickCounter = 0;
  button.click();
  await page.waitForChanges();

  expect(buttonSortClickCounter).toEqual(1);
  expect(buttonSortAsc).toEqual(false);
});
