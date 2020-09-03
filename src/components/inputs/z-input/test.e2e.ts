import { newE2EPage } from "@stencil/core/testing";

import { icons } from "../../icons/icons";

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

  await page.setContent(`<z-input typingtimeout="1000"></z-input>`);
  const input = await page.find("z-input >>> div input");

  expect(input).not.toHaveClass("istyping");

  await input.press("A");
  await page.waitForChanges();
  expect(input).toHaveClass("istyping");

  await new Promise(resolve => setTimeout(resolve, 1500));
  await page.waitForChanges();
  expect(input).not.toHaveClass("istyping");
});

it("Test ZInput - input password - change hide/show icon on click", async () => {
  const page = await newE2EPage();
  // Define a window.onCustomEvent function on the page.
  await page.setContent(
    `<z-input htmlid="checkid" type="password"> </z-input>`
  );
  //const select = await page.find("z-input >>> div.textWrapper");
  const icon = await page.find(
    "z-input >>> div.textWrapper div span.iconsWrapper z-icon.inputIcon"
  );
  //icon will be an open eye on first click
  await icon.click();
  await page.waitForChanges();
  expect(icon).toEqualHtml(
    `<z-icon class="hydrated inputIcon">
    <mock:shadow-root>
    <svg viewBox="0 0 1000 1000" width='18' height='18'>
        <path d="${icons["view-off-filled"]}"></path>
    </svg>
    </mock:shadow-root>
    </z-icon>`
  );
  //icon will be a closed eye on second click
  await icon.click();
  await page.waitForChanges();
  expect(icon).toEqualHtml(
    `<z-icon class="hydrated inputIcon">
    <mock:shadow-root>
    <svg viewBox="0 0 1000 1000" width='18' height='18'>
        <path d="${icons["view-filled"]}"></path>
    </svg>
    </mock:shadow-root>
    </z-icon>`
  );
});

it("Test ZInput - input password - change input type on icon click to show/hide password", async () => {
  const page = await newE2EPage();
  // Define a window.onCustomEvent function on the page.
  await page.setContent(
    `<z-input htmlid="checkid" type="password"> </z-input>`
  );
  const input = await page.find("z-input >>> div.textWrapper div input");
  const icon = await page.find(
    "z-input >>> div.textWrapper div span.iconsWrapper z-icon.inputIcon"
  );
  //input will be type text after first click on icon
  await icon.click();
  await page.waitForChanges();
  expect(input).toEqualAttribute("type", "text");
  //input will be type password after second click on icon
  await icon.click();
  await page.waitForChanges();
  expect(input).toEqualAttribute("type", "password");
});

it("Test ZInput checkbox should emit inputCheck event", async () => {
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
  const input_checkbox = await page.find("z-input >>> div input");

  expect(checked).toEqual(false);

  await input_checkbox.click();
  await page.waitForChanges();
  expect(checked).toEqual(true);

  await input_checkbox.click();
  await page.waitForChanges();
  expect(checked).toEqual(false);
});

it("Test disabled ZInput checkbox should not emit inputCheck event", async () => {
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
  const input_checkbox_unchecked = await page.find("z-input >>> div input");
  expect(checked).toEqual(false);
  await input_checkbox_unchecked.click();
  await page.waitForChanges();
  expect(checked).toEqual(false);
});

it("Test ZInput radio should emit inputCheck event", async () => {
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

  await page.setContent(`<z-input id="radio_1" type="radio"></z-input>`);
  const input_radio = await page.find("z-input >>> div input");

  expect(checked).toEqual(false);
  await input_radio.click();
  await page.waitForChanges();
  expect(checked).toEqual(true);
  await input_radio.click();
  await page.waitForChanges();
  expect(checked).toEqual(true);
});

it("Test disabled ZInput radio should not emit inputCheck event", async () => {
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

  await page.setContent(`<z-input type="radio" disabled></z-input>`);
  const input_radio_unchecked = await page.find("z-input >>> div input");
  expect(checked).toEqual(false);
  await input_radio_unchecked.click();
  await page.waitForChanges();
  expect(checked).toEqual(false);
});
