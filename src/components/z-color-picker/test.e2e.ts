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
    const picker = await page.find("z-color-picker");
    const buttons = await page.findAll("z-color-picker >>> button");

    expect(await picker.getProperty("tabIndex")).toBe(0);
    for (const button of buttons) {
      expect(await button.getProperty("tabIndex")).toBe(-1);
    }
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

    const picker = await page.find("z-color-picker");
    await picker.callMethod("setFocus");
    await new Promise((resolve) => setTimeout(resolve, 80));
    await page.waitForChanges();

    const focusedSwatch = await page.find("z-color-picker >>> button[tabindex='0']");
    await focusedSwatch.press("ArrowRight");
    await page.waitForChanges();

    const firstButton = await page.find("z-color-picker >>> button:nth-of-type(1)");
    const secondButton = await page.find("z-color-picker >>> button:nth-of-type(2)");
    expect(await firstButton.getProperty("tabIndex")).toBe(-1);
    expect(await secondButton.getProperty("tabIndex")).toBe(0);

    const outsideButton = await page.find("#outside");
    await outsideButton.click();
    await page.waitForChanges();

    const buttons = await page.findAll("z-color-picker >>> button");
    expect(await picker.getProperty("tabIndex")).toBe(0);
    for (const button of buttons) {
      expect(await button.getProperty("tabIndex")).toBe(-1);
    }
  });

  it("Should focus the selected swatch when setFocus is called", async () => {
    const page = await newE2EPage({
      html: `<div>
          <z-color-picker></z-color-picker>
          <button id="outside">outside</button>
        </div>
      `,
    });
    await page.waitForChanges();

    const picker = await page.find("z-color-picker");
    const secondSwatch = await page.find("z-color-picker >>> button:nth-of-type(2)");

    await secondSwatch.click();
    await page.waitForChanges();

    const outsideButton = await page.find("#outside");
    await outsideButton.click();
    await page.waitForChanges();

    await picker.callMethod("setFocus");
    await new Promise((resolve) => setTimeout(resolve, 80));
    await page.waitForChanges();

    const focusedSwatch = await page.find("z-color-picker >>> button[tabindex='0']");
    const firstSwatch = await page.find("z-color-picker >>> button:nth-of-type(1)");

    expect(focusedSwatch).toEqual(secondSwatch);
    expect(await focusedSwatch.getAttribute("aria-selected")).toBe("true");
    expect(await secondSwatch.getProperty("tabIndex")).toBe(0);
    expect(await firstSwatch.getProperty("tabIndex")).toBe(-1);
  });

  it("Should skip disabled swatch and move focus to next enabled with ArrowRight", async () => {
    const page = await newE2EPage({
      html: `<z-color-picker disable-transparent></z-color-picker>`,
    });
    await page.waitForChanges();

    const picker = await page.find("z-color-picker");
    await picker.callMethod("setFocus");
    await new Promise((resolve) => setTimeout(resolve, 80));
    await page.waitForChanges();

    const firstSwatch = await page.find("z-color-picker >>> button:nth-of-type(1)");
    const firstEnabledSwatch = await page.find("z-color-picker >>> button[tabindex='0']");

    expect(await firstSwatch.getProperty("disabled")).toBe(true);

    await firstEnabledSwatch.press("ArrowLeft");
    await page.waitForChanges();

    const swatchBeforeDisabled = await page.find("z-color-picker >>> button[tabindex='0']");
    await swatchBeforeDisabled.press("ArrowRight");
    await page.waitForChanges();

    const secondSwatch = await page.find("z-color-picker >>> button:nth-of-type(2)");
    expect(await secondSwatch.getProperty("tabIndex")).toBe(0);
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
