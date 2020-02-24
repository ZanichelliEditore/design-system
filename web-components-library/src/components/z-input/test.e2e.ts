import { newE2EPage } from "@stencil/core/testing";

it("Test ZInput should emit inputChange event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let inputValue = "";
  await page.exposeFunction("onInputChange", e => {
    inputValue = e.detail.value;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "inputChange";
  page.evaluateOnNewDocument(type => {
    document.addEventListener(type, e => {
      window.onInputChange({ type, detail: e.detail });
    });
  }, type);

  await page.setContent(`<z-input></z-input>`);
  const input = await page.find("z-input >>> div input");

  expect(inputValue).toEqual("");

  await input.press("A");
  await page.waitForChanges();
  expect(inputValue).toEqual("A");

  await input.press("B");
  await page.waitForChanges();
  expect(inputValue).toEqual("AB");
});

it("Test disabled ZInput should not change / emit inputChange event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let inputValue = "";
  await page.exposeFunction("onInputChange", e => {
    inputValue = e.detail.value;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "inputChange";
  page.evaluateOnNewDocument(type => {
    document.addEventListener(type, e => {
      window.onInputChange({ type, detail: e.detail });
    });
  }, type);

  await page.setContent(`<z-input disabled></z-input>`);
  const input = await page.find("z-input >>> div input");

  expect(inputValue).toEqual("");

  await input.press("A");
  await page.waitForChanges();
  expect(inputValue).toEqual("");

  await input.press("B");
  await page.waitForChanges();
  expect(inputValue).toEqual("");
});
