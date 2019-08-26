import { newE2EPage } from "@stencil/core/testing";

it("Test ZInputText should emit inputChange event", async () => {
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

  await page.setContent(`<z-input-text></z-input-text>`);
  const input = await page.find("z-input-text >>> div input");

  expect(inputValue).toEqual("");

  await input.press("A");
  await page.waitForChanges();
  expect(inputValue).toEqual("A");

  await input.press("B");
  await page.waitForChanges();
  expect(inputValue).toEqual("AB");
});
