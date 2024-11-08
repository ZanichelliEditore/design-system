import {newE2EPage} from "@stencil/core/testing";

describe("z-menu test end2end", () => {
  it("Emit open and close events", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-menu>
        <h3>Menu label</h3>
        <a href="" slot="item">Item 1</a>
        <a href="" slot="item">Item 2</a>
      </z-menu>
		`);

    const menu = await page.find("z-menu");
    const menuOpen = await page.find("z-menu[open]");
    expect(menu).not.toBeNull();
    expect(menuOpen).toBeNull();

    const opened = await page.spyOnEvent("opened");
    await menu.click();
    await page.waitForChanges();
    expect(opened).toHaveReceivedEvent();
    const menuOpenNew = await page.find("z-menu[open]");
    expect(menuOpenNew).not.toBeNull();

    const closed = await page.spyOnEvent("closed");
    await menu.click();
    await page.waitForChanges();
    expect(closed).toHaveReceivedEvent();
  });

  it("Click on menu item", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-menu>
        <h3>Menu label</h3>
        <a href="https://www.google.it/" slot="item">Item 1</a>
        <a href="" slot="item">Item 2</a>
      </z-menu>
		`);

    const menu = await page.find("z-menu");
    const menuOpen = await page.find("z-menu[open]");
    expect(menu).not.toBeNull();
    expect(menuOpen).toBeNull();

    await menu.click();

    expect(await page.$eval("z-menu >>> button", (e) => getComputedStyle(e).borderColor)).toBe("rgb(0, 86, 193)");

    const menuItem = await page.find('z-menu a[href="https://www.google.it/"]');
    expect(menuItem).not.toBeNull();

    await menuItem.click();
    await page.waitForChanges();
    expect(page.url()).toBe("https://www.google.it/");
  });
});
