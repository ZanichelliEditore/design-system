import { newE2EPage } from "@stencil/core/testing";
it("Test ZPocket should emit pocketToggle event", async () => {
    const page = await newE2EPage();
    // Define a window.onCustomEvent function on the page.
    let status = null;
    await page.exposeFunction("onPocketToggle", (e) => {
        status = e.detail.status;
    });
    // Attach an event listener to page to capture a custom event on page load/navigation.
    const type = "pocketToggle";
    page.evaluateOnNewDocument((type) => {
        document.addEventListener(type, (e) => {
            window.onPocketToggle({ type, detail: e.detail });
        });
    }, type);
    await page.setContent(`<z-pocket pocketid="pocket">
    <z-pocket-header pocketid="pocket"></z-pocket-header>
  </z-pocket>`);
    const header = await page.find("z-pocket-header >>> header");
    const background = await page.find("z-pocket >>> div > div.background");
    expect(status).toEqual("preview");
    expect(background).toHaveClass("preview");
    await header.click();
    await page.waitForChanges();
    expect(status).toEqual("open");
    expect(background).toHaveClass("open");
    await header.click();
    await page.waitForChanges();
    expect(status).toEqual("closed");
    expect(background).toHaveClass("closed");
    await header.click();
    await page.waitForChanges();
    expect(status).toEqual("open");
    expect(background).toHaveClass("open");
    await header.click();
    await page.waitForChanges();
    expect(status).toEqual("closed");
    expect(background).toHaveClass("closed");
});
it("Test ZPocket should receive pocketHeaderClick event", async () => {
    const page = await newE2EPage();
    // Define a window.onCustomEvent function on the page.
    let headerClickCounter = 0;
    await page.exposeFunction("onPocketHeaderClick", () => {
        headerClickCounter++;
    });
    // Attach an event listener to page to capture a custom event on page load/navigation.
    const headerClickEvent = "pocketHeaderClick";
    page.evaluateOnNewDocument((headerClickEvent) => {
        document.addEventListener(headerClickEvent, () => {
            window.onPocketHeaderClick();
        });
    }, headerClickEvent);
    await page.setContent(`<z-pocket pocketid="pocket">
    <z-pocket-header pocketid="pocket"></z-pocket-header>
  </z-pocket>`);
    const header = await page.find("z-pocket-header >>> header");
    expect(headerClickCounter).toEqual(0);
    await header.click();
    await page.waitForChanges();
    expect(headerClickCounter).toEqual(1);
    await header.click();
    await page.waitForChanges();
    expect(headerClickCounter).toEqual(2);
});
it("Test ZPocket should not emit pocketToggle event with wrong/missing id", async () => {
    const page = await newE2EPage();
    // Define a window.onCustomEvent function on the page.
    let status = null;
    let toggleCounter = 0;
    await page.exposeFunction("onPocketToggle", (e) => {
        status = e.detail.status;
        toggleCounter++;
    });
    // Attach an event listener to page to capture a custom event on page load/navigation.
    const type = "pocketToggle";
    page.evaluateOnNewDocument((type) => {
        document.addEventListener(type, (e) => {
            window.onPocketToggle({ type, detail: e.detail });
        });
    }, type);
    await page.setContent(`<z-pocket pocketid="pocket">
    <z-pocket-header></z-pocket-header>
  </z-pocket>`);
    const header = await page.find("z-pocket-header >>> header");
    const background = await page.find("z-pocket >>> div > div.background");
    expect(status).toEqual("preview");
    expect(background).toHaveClass("preview");
    expect(toggleCounter).toEqual(1);
    await header.click();
    await page.waitForChanges();
    expect(status).not.toEqual("open");
    expect(background).not.toHaveClass("open");
    expect(toggleCounter).toEqual(1);
    await header.click();
    await page.waitForChanges();
    expect(status).not.toEqual("closed");
    expect(background).not.toHaveClass("closed");
    expect(toggleCounter).toEqual(1);
});
//# sourceMappingURL=test.e2e.js.map
