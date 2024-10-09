import {newE2EPage} from "@stencil/core/testing";

describe("z-info-reveal test end2end", () => {
  it("Open", async () => {
    const page = await newE2EPage({
      html: "<z-info-reveal><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></z-info-reveal>",
    });

    const infoReveal = await page.find("z-info-reveal");
    const infoRevealPanel = await page.find("z-info-reveal >>> .z-info-reveal-panel");
    const infoRevealTrigger = await page.find("z-info-reveal >>> .z-info-reveal-trigger");

    await infoRevealTrigger.click();
    await page.waitForChanges();
    await infoRevealPanel.waitForVisible();
    expect(infoReveal).toHaveAttribute("open");
  });

  it("Close info reveal using x button", async () => {
    const page = await newE2EPage({
      html: "<z-info-reveal><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></z-info-reveal>",
    });

    const infoReveal = await page.find("z-info-reveal");
    const infoRevealPanel = await page.find("z-info-reveal >>> .z-info-reveal-panel");
    const infoRevealTrigger = await page.find("z-info-reveal >>> .z-info-reveal-trigger");

    await infoRevealTrigger.click();
    await page.waitForChanges();
    await infoRevealPanel.waitForVisible();

    const closeButton = await page.find("z-info-reveal >>> .z-info-reveal-close");
    await closeButton.click();
    await page.waitForChanges();

    await infoRevealPanel.waitForNotVisible();
    expect(infoReveal).not.toHaveAttribute("open");
    expect(infoRevealPanel).toHaveAttribute("hidden");
  });

  it("Close with keydown press", async () => {
    const page = await newE2EPage({
      html: "<z-info-reveal><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></z-info-reveal>",
    });

    const infoReveal = await page.find("z-info-reveal");
    const infoRevealPanel = await page.find("z-info-reveal >>> .z-info-reveal-panel");
    const infoRevealTrigger = await page.find("z-info-reveal >>> .z-info-reveal-trigger");

    await infoRevealTrigger.click();
    await page.waitForChanges();
    await infoRevealPanel.waitForVisible();

    await page.keyboard.press("Escape");
    await page.waitForChanges();

    await infoRevealPanel.waitForNotVisible();
    expect(infoReveal).not.toHaveAttribute("open");
    expect(infoRevealPanel).toHaveAttribute("hidden");
  });
});
