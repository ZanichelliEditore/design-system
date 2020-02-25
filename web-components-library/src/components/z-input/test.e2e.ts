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

it("Test ZInput typing state", async () => {
  const page = await newE2EPage();

  await page.setContent(`<z-input typingTimeout="1000"></z-input>`);
  const input = await page.find("z-input >>> div input");

  expect(input).not.toHaveClass("istyping");

  await input.press("A");
  await page.waitForChanges();
  expect(input).toHaveClass("istyping");

  await new Promise(resolve => setTimeout(resolve, 1500));
  await page.waitForChanges();
  expect(input).not.toHaveClass("istyping");
});

it("Test ZInput should emit inputCheck event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let checked = false;
  await page.exposeFunction("onInputCheck", e => {
    checked = e.detail.checked;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "inputCheck";
  page.evaluateOnNewDocument(type => {
    document.addEventListener(type, e => {
      window.onInputCheck({
        type,
        detail: e.detail
      });
    });
  }, type);

  await page.setContent(`<z-input type="checkbox"></z-input>`);
  const input = await page.find("z-input >>> div input");

  expect(checked).toEqual(false);

  await input.click();
  await page.waitForChanges();
  expect(checked).toEqual(true);

  await input.click();
  await page.waitForChanges();
  expect(checked).toEqual(false);
});

it("Test disabled ZInput should not emit inputCheck event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let checked = false;
  await page.exposeFunction("onInputCheck", e => {
    checked = e.detail.checked;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "inputCheck";
  page.evaluateOnNewDocument(type => {
    document.addEventListener(type, e => {
      window.onInputCheck({
        type,
        detail: e.detail
      });
    });
  }, type);

  await page.setContent(`<z-input type="checkbox" disabled></z-input>`);
  const input_unchecked = await page.find("z-input >>> div input");
  expect(checked).toEqual(false);
  await input_unchecked.click();
  await page.waitForChanges();
  expect(checked).toEqual(false);
});
