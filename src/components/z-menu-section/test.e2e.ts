import {newE2EPage} from "@stencil/core/testing";

describe("z-menu-section test end2end", () => {
  it("Emit open and close events", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-menu-section>
        <h3>Label</h3>
        <a href="" slot="section">Item 1</a>
        <a href="" slot="section">Item 2</a>
        <a href="" slot="seection" active="">Item 3 - active</a>
      </z-menu-section>
		`);

    const menu = await page.find("z-menu-section");
    const menuOpen = await page.find("z-menu-section[open]");
    const menuButton = await page.find("z-menu-section >>> button");
    expect(menu).not.toBeNull();
    expect(menuOpen).toBeNull();
    expect(menuButton).not.toBeNull();

    const opened = await page.spyOnEvent("opened");
    await menuButton.click();
    await page.waitForChanges();
    expect(opened).toHaveReceivedEvent();
    const menuOpenNew = await page.find("z-menu-section[open]");
    expect(menuOpenNew).not.toBeNull();

    const closed = await page.spyOnEvent("closed");
    await menuButton.click();
    await page.waitForChanges();
    expect(closed).toHaveReceivedEvent();
  });
});
