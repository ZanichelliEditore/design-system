import {newE2EPage} from "@stencil/core/testing";

describe("z-color-picker test end2end", () => {
  it("Should render the full palette and default aria-label", async () => {
    const page = await newE2EPage({
      html: `<z-color-picker></z-color-picker>`,
    });
    const picker = await page.find("z-color-picker");
    const buttons = await page.findAll("z-color-picker >>> button");

    expect(picker).not.toBeNull();
    expect(buttons.length).toBe(45);
    expect(picker.getAttribute("aria-label")).toBe("Seleziona un colore");
  });

  it("Should use custom aria-label and english locale labels", async () => {
    const page = await newE2EPage({
      html: `<z-color-picker lng="en" html-aria-label="Select a background color"></z-color-picker>`,
    });
    await page.waitForChanges();

    const picker = await page.find("z-color-picker");
    const firstSwatch = await page.find("z-color-picker >>> button div.color-swatch");

    expect(picker.getAttribute("aria-label")).toBe("Select a background color");
    expect(firstSwatch.getAttribute("aria-label")).toBe("Transparent");
  });

  it("Should emit colorSelected and update selected color on click", async () => {
    const page = await newE2EPage({
      html: `<z-color-picker></z-color-picker>`,
    });
    await page.waitForChanges();

    const picker = await page.find("z-color-picker");
    const colorSelectedEvent = await picker.spyOnEvent("colorSelected");

    const secondButton = await page.find("z-color-picker >>> button:nth-of-type(2)");
    const selectedColor = await secondButton.getAttribute("data-color");

    await secondButton.click();
    await page.waitForChanges();

    expect(colorSelectedEvent).toHaveReceivedEvent();
    expect(colorSelectedEvent.events[0].detail).toBe(selectedColor);
    expect(await picker.getProperty("selectedColor")).toBe(selectedColor);
    expect(secondButton.getAttribute("aria-selected")).toBe("true");
  });

  it("Should initialize with host tabbable and swatches not tabbable", async () => {
    const page = await newE2EPage({
      html: `<z-color-picker></z-color-picker>`,
    });
    await page.waitForChanges();

    const focusState = await page.evaluate(() => {
      const picker = document.querySelector("z-color-picker");
      const buttons = Array.from(picker.shadowRoot.querySelectorAll("button")) as HTMLButtonElement[];

      return {
        hostTabIndex: picker.tabIndex,
        allButtonsTabIndexMinusOne: buttons.every((button) => button.tabIndex === -1),
      };
    });

    expect(focusState.hostTabIndex).toBe(0);
    expect(focusState.allButtonsTabIndexMinusOne).toBe(true);
  });

  it("Should navigate with ArrowRight and reset tabindex on blur", async () => {
    const page = await newE2EPage({
      html: `<div>
          <z-color-picker></z-color-picker>
          <button id="outside">outside</button>
        </div>
      `,
    });
    await page.waitForChanges();

    await page.evaluate(() => {
      const picker = document.querySelector("z-color-picker");
      picker.setFocus();
    });
    await page.waitForChanges();

    await page.keyboard.press("ArrowRight");
    await page.waitForChanges();

    const navigationState = await page.evaluate(() => {
      const picker = document.querySelector("z-color-picker");
      const buttons = Array.from(picker.shadowRoot.querySelectorAll("button")) as HTMLButtonElement[];
      const focusedButton = picker.shadowRoot.activeElement as HTMLButtonElement;

      return {
        focusedIndex: buttons.findIndex((button) => button === focusedButton),
        focusedTabIndex: focusedButton?.tabIndex,
      };
    });

    expect(navigationState.focusedIndex).toBe(1);
    expect(navigationState.focusedTabIndex).toBe(0);

    await page.evaluate(() => {
      const outsideButton = document.getElementById("outside") as HTMLButtonElement;
      outsideButton.focus();
    });
    await page.waitForChanges();

    const blurState = await page.evaluate(() => {
      const picker = document.querySelector("z-color-picker");
      const buttons = Array.from(picker.shadowRoot.querySelectorAll("button")) as HTMLButtonElement[];

      return {
        hostTabIndex: picker.tabIndex,
        allButtonsTabIndexMinusOne: buttons.every((button) => button.tabIndex === -1),
      };
    });

    expect(blurState.hostTabIndex).toBe(0);
    expect(blurState.allButtonsTabIndexMinusOne).toBe(true);
  });

  it("Should set default dark gray 2 when disabling transparent while it's selected", async () => {
    const page = await newE2EPage({
      html: `<z-color-picker selected-color="#FFFFFF00"></z-color-picker>`,
    });
    await page.waitForChanges();

    const picker = await page.find("z-color-picker");
    picker.setProperty("disableTransparent", true);
    await page.waitForChanges();
    const selectedColor = await picker.getProperty("selectedColor");

    expect(selectedColor).toBe("#333333");
  });
});
