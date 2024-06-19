import { newE2EPage } from "@stencil/core/testing";
import { ICONS } from "../../constants/iconset";
it("Test ZInput should emit inputChange event", async () => {
    const page = await newE2EPage();
    // Define a window.onCustomEvent function on the page.
    let inputValue = "";
    await page.exposeFunction("onInputChange", (e) => {
        inputValue = e.detail.value;
    });
    // Attach an event listener to page to capture a custom event on page load/navigation.
    page.evaluateOnNewDocument((type) => {
        document.addEventListener(type, (e) => {
            window.onInputChange({ type, detail: e.detail });
        });
    }, "inputChange");
    await page.setContent(`<z-input></z-input>`);
    const input = await page.find("z-input div input");
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
    await page.exposeFunction("onInputChange", (e) => {
        inputValue = e.detail.value;
    });
    // Attach an event listener to page to capture a custom event on page load/navigation.
    page.evaluateOnNewDocument((type) => {
        document.addEventListener(type, (e) => {
            window.onInputChange({ type, detail: e.detail });
        });
    }, "inputChange");
    await page.setContent(`<z-input disabled></z-input>`);
    const input = await page.find("z-input div input");
    expect(inputValue).toEqual("");
    await input.press("A");
    await page.waitForChanges();
    expect(inputValue).toEqual("");
    await input.press("B");
    await page.waitForChanges();
    expect(inputValue).toEqual("");
});
it("Test ZInput - input password - change hide/show icon on click", async () => {
    const page = await newE2EPage();
    // Define a window.onCustomEvent function on the page.
    await page.setContent(`<z-input htmlid="checkid" type="password"></z-input>`);
    const iconButton = await page.find("z-input button.toggle-password-icon");
    const icon = await page.find("z-input button.toggle-password-icon z-icon");
    //icon will be an open eye on first click
    await iconButton.click();
    await page.waitForChanges();
    expect(icon).toEqualHtml(`<z-icon class="hydrated sc-z-input big" aria-hidden="true">
      <mock:shadow-root>
      <svg  fill="" viewBox="0 0 1000 1000">
      <path d="${ICONS["view-off-filled"]}"></path>
      </svg>
      </mock:shadow-root>
    </z-icon>`);
    //icon will be a closed eye on second click
    await iconButton.click();
    await page.waitForChanges();
    expect(icon).toEqualHtml(`<z-icon class="hydrated sc-z-input big" aria-hidden="true">
      <mock:shadow-root>
        <svg  fill="" viewBox="0 0 1000 1000">
          <path d="${ICONS["view-filled"]}"></path>
        </svg>
      </mock:shadow-root>
    </z-icon>`);
});
it("Test ZInput - input password - change input type on icon click to show/hide password", async () => {
    const page = await newE2EPage();
    // Define a window.onCustomEvent function on the page.
    await page.setContent(`<z-input htmlid="checkid" type="password"></z-input>`);
    const input = await page.find("z-input div.text-wrapper div input");
    const iconButton = await page.find("z-input button.toggle-password-icon");
    //input will be type text after first click on icon
    await iconButton.click();
    await page.waitForChanges();
    expect(input).toEqualAttribute("type", "text");
    //input will be type password after second click on icon
    await iconButton.click();
    await page.waitForChanges();
    expect(input).toEqualAttribute("type", "password");
});
it("Test ZInput checkbox should emit inputCheck event", async () => {
    const page = await newE2EPage();
    // Define a window.onCustomEvent function on the page.
    let checked = false;
    await page.exposeFunction("onInputCheck", (e) => {
        checked = e.detail.checked;
    });
    // Attach an event listener to page to capture a custom event on page load/navigation.
    page.evaluateOnNewDocument((type) => {
        document.addEventListener(type, (e) => {
            window.onInputCheck({ type, detail: e.detail });
        });
    }, "inputCheck");
    await page.setContent(`<z-input type="checkbox"></z-input>`);
    const input_checkbox = await page.find("z-input div input");
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
    await page.exposeFunction("onInputCheck", (e) => {
        checked = e.detail.checked;
    });
    // Attach an event listener to page to capture a custom event on page load/navigation.
    page.evaluateOnNewDocument((type) => {
        document.addEventListener(type, (e) => {
            window.onInputCheck({
                type,
                detail: e.detail,
            });
        });
    }, "inputCheck");
    await page.setContent(`<z-input type="checkbox" disabled></z-input>`);
    const input_checkbox_unchecked = await page.find("z-input div input");
    expect(checked).toEqual(false);
    await input_checkbox_unchecked.click();
    await page.waitForChanges();
    expect(checked).toEqual(false);
});
it("Test ZInput radio should emit inputCheck event", async () => {
    const page = await newE2EPage();
    // Define a window.onCustomEvent function on the page.
    let checked = false;
    await page.exposeFunction("onInputCheck", (e) => {
        checked = e.detail.checked;
    });
    // Attach an event listener to page to capture a custom event on page load/navigation.
    page.evaluateOnNewDocument((type) => {
        document.addEventListener(type, (e) => {
            window.onInputCheck({ type, detail: e.detail });
        });
    }, "inputCheck");
    await page.setContent(`<z-input id="radio_1" type="radio"></z-input>`);
    const input_radio = await page.find("z-input div input");
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
    await page.exposeFunction("onInputCheck", (e) => {
        checked = e.detail.checked;
    });
    // Attach an event listener to page to capture a custom event on page load/navigation.
    page.evaluateOnNewDocument((type) => {
        document.addEventListener(type, (e) => {
            window.onInputCheck({ type, detail: e.detail });
        });
    }, "inputCheck");
    await page.setContent(`<z-input type="radio" disabled></z-input>`);
    const input_radio_unchecked = await page.find("z-input div input");
    expect(checked).toEqual(false);
    await input_radio_unchecked.click();
    await page.waitForChanges();
    expect(checked).toEqual(false);
});
//# sourceMappingURL=test.e2e.js.map
