import {newE2EPage} from "@stencil/core/testing";

describe("z-tool test end2end", () => {
  it("renders z-tool", async () => {
    const page = await newE2EPage({
      html: `<z-tool icon="gear" tooltip="Hello world!"></z-tool>`,
    });

    const tool = await page.find("z-tool");
    const button = await page.find("z-tool >>> button");
    const tooltip = await page.find("z-tool >>> z-tooltip");

    expect(await tool.getAttribute("icon")).toBe("gear");
    expect(await button.getAttribute("aria-label")).toBe("Hello world!");
    expect(await button.getAttribute("aria-pressed")).toBe("false");
    expect(await tooltip.getProperty("open")).toBe(false);
  });

  it("opens tooltip on focus", async () => {
    const page = await newE2EPage({
      html: `<z-tool icon="gear" tooltip="Hello world!"></z-tool>`,
    });

    const tooltip = await page.find("z-tool >>> z-tooltip");

    expect(await tooltip.getProperty("open")).toBe(false);

    await page.keyboard.press("Tab");
    await new Promise((resolve) => setTimeout(resolve, 1100));
    await page.waitForChanges();

    expect(await tooltip.getProperty("open")).toBe(true);
  });

  it("closes tooltip on blur", async () => {
    const page = await newE2EPage({
      html: `<z-tool icon="gear" tooltip="Hello world!"></z-tool>`,
    });

    const body = await page.find("body");
    const tooltip = await page.find("z-tool >>> z-tooltip");

    await page.keyboard.press("Tab");
    await new Promise((resolve) => setTimeout(resolve, 1100));
    await page.waitForChanges();

    expect(await tooltip.getProperty("open")).toBe(true);

    await body.click();
    await page.waitForChanges();

    expect(await tooltip.getProperty("open")).toBe(false);
  });

  it("does not open tooltip when disabled", async () => {
    const page = await newE2EPage({
      html: `<z-tool icon="gear" tooltip="Hello world!" disabled></z-tool>`,
    });

    const button = await page.find("z-tool >>> button");
    const tooltip = await page.find("z-tool >>> z-tooltip");

    await button.hover();
    await new Promise((resolve) => setTimeout(resolve, 1100));
    await page.waitForChanges();

    expect(await tooltip.getProperty("open")).toBe(false);
  });
});
