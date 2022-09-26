import {newE2EPage} from "@stencil/core/testing";

import {ICONS} from "../../components/icons/icons";

type CustomWindow = Window &
  typeof globalThis & {
    onInputChange: (a) => unknown;
    onInputCheck: (a) => unknown;
  };

it("Test ZInputDeprecated should emit inputChange event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let inputValue = "";
  await page.exposeFunction("onInputChange", (e) => {
    inputValue = e.detail.value;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "inputChange";
  await page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onInputChange({type, detail: e.detail});
    });
  }, type);

  await page.setContent(`<z-input-deprecated></z-input-deprecated>`);
  const input = await page.find("z-input-deprecated div input");

  expect(inputValue).toEqual("");

  await input.press("A");
  await page.waitForChanges();
  expect(inputValue).toEqual("A");

  await input.press("B");
  await page.waitForChanges();
  expect(inputValue).toEqual("AB");
});

it("Test disabled ZInputDeprecated should not change / emit inputChange event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let inputValue = "";
  await page.exposeFunction("onInputChange", (e) => {
    inputValue = e.detail.value;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "inputChange";
  await page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onInputChange({type, detail: e.detail});
    });
  }, type);

  await page.setContent(`<z-input-deprecated disabled></z-input-deprecated>`);
  const input = await page.find("z-input-deprecated div input");

  expect(inputValue).toEqual("");

  await input.press("A");
  await page.waitForChanges();
  expect(inputValue).toEqual("");

  await input.press("B");
  await page.waitForChanges();
  expect(inputValue).toEqual("");
});

it("Test ZInputDeprecated typing state", async () => {
  const page = await newE2EPage();

  await page.setContent(`<z-input-deprecated typingtimeout="1000"></z-input-deprecated>`);
  const input = await page.find("z-input-deprecated div input");

  expect(input).not.toHaveClass("istyping");

  await input.press("A");
  await page.waitForChanges();
  expect(input).toHaveClass("istyping");

  await new Promise((resolve) => setTimeout(resolve, 1500));
  await page.waitForChanges();
  expect(input).not.toHaveClass("istyping");
});

it("Test ZInputDeprecated - input password - change hide/show icon on click", async () => {
  const page = await newE2EPage();
  // Define a window.onCustomEvent function on the page.
  await page.setContent(`<z-input-deprecated htmlid="checkid" type="password"></z-input-deprecated>`);
  const icon = await page.find("z-input-deprecated z-icon.showHidePasswordIcon");
  //icon will be an open eye on first click
  await icon.click();
  await page.waitForChanges();
  expect(icon).toEqualHtml(
    `<z-icon class="hydrated showHidePasswordIcon sc-z-input-deprecated">
      <mock:shadow-root>
        <svg  fill="" viewBox="0 0 1000 1000">
            <path d="${ICONS["view-off-filled"]}"></path>
        </svg>
      </mock:shadow-root>
    </z-icon>`
  );

  //icon will be a closed eye on second click
  await icon.click();
  await page.waitForChanges();
  expect(icon).toEqualHtml(
    `<z-icon class="hydrated showHidePasswordIcon sc-z-input-deprecated">
      <mock:shadow-root>
        <svg  fill="" viewBox="0 0 1000 1000">
          <path d="${ICONS["view-filled"]}"></path>
        </svg>
      </mock:shadow-root>
    </z-icon>`
  );
});

it("Test ZInputDeprecated - input password - change input type on icon click to show/hide password", async () => {
  const page = await newE2EPage();
  // Define a window.onCustomEvent function on the page.
  await page.setContent(`<z-input-deprecated htmlid="checkid" type="password"></z-input-deprecated>`);
  const input = await page.find("z-input-deprecated div.textWrapper div input");
  const icon = await page.find("z-input-deprecated z-icon.showHidePasswordIcon");

  //input will be type text after first click on icon
  await icon.click();
  await page.waitForChanges();
  expect(input).toEqualAttribute("type", "text");
  //input will be type password after second click on icon
  await icon.click();
  await page.waitForChanges();
  expect(input).toEqualAttribute("type", "password");
});

it("Test ZInputDeprecated checkbox should emit inputCheck event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let checked = false;
  await page.exposeFunction("onInputCheck", (e) => {
    checked = e.detail.checked;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "inputCheck";
  await page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onInputCheck({
        type,
        detail: e.detail,
      });
    });
  }, type);

  await page.setContent(`<z-input-deprecated type="checkbox"></z-input-deprecated>`);
  const input_checkbox = await page.find("z-input-deprecated div input");

  expect(checked).toEqual(false);

  await input_checkbox.click();
  await page.waitForChanges();
  expect(checked).toEqual(true);

  await input_checkbox.click();
  await page.waitForChanges();
  expect(checked).toEqual(false);
});

it("Test disabled ZInputDeprecated checkbox should not emit inputCheck event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let checked = false;
  await page.exposeFunction("onInputCheck", (e) => {
    checked = e.detail.checked;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "inputCheck";
  await page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onInputCheck({
        type,
        detail: e.detail,
      });
    });
  }, type);

  await page.setContent(`<z-input-deprecated type="checkbox" disabled></z-input-deprecated>`);
  const input_checkbox_unchecked = await page.find("z-input-deprecated div input");
  expect(checked).toEqual(false);
  await input_checkbox_unchecked.click();
  await page.waitForChanges();
  expect(checked).toEqual(false);
});

it("Test ZInputDeprecated radio should emit inputCheck event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let checked = false;
  await page.exposeFunction("onInputCheck", (e) => {
    checked = e.detail.checked;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "inputCheck";
  await page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onInputCheck({
        type,
        detail: e.detail,
      });
    });
  }, type);

  await page.setContent(`<z-input-deprecated id="radio_1" type="radio"></z-input-deprecated>`);
  const input_radio = await page.find("z-input-deprecated div input");

  expect(checked).toEqual(false);
  await input_radio.click();
  await page.waitForChanges();
  expect(checked).toEqual(true);
  await input_radio.click();
  await page.waitForChanges();
  expect(checked).toEqual(true);
});

it("Test disabled ZInputDeprecated radio should not emit inputCheck event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let checked = false;
  await page.exposeFunction("onInputCheck", (e) => {
    checked = e.detail.checked;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "inputCheck";
  await page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onInputCheck({
        type,
        detail: e.detail,
      });
    });
  }, type);

  await page.setContent(`<z-input-deprecated type="radio" disabled></z-input-deprecated>`);
  const input_radio_unchecked = await page.find("z-input-deprecated div input");
  expect(checked).toEqual(false);
  await input_radio_unchecked.click();
  await page.waitForChanges();
  expect(checked).toEqual(false);
});
