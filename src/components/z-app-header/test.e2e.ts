import {newE2EPage} from "@stencil/core/testing";

describe("z-app-header test end2end", () => {
  it("Emit Sticking event when scrolling down", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<div style="height: 200vh">
        <z-app-header
          stuck=""
          style="--app-header-content-max-width: 100%; --app-header-top-offset: 0"
        >
          <h1 slot="title">Fondamenti di fisica 8e - Meccanica, Onde, Termodinamica, Elettromagnetismo, Ottica</h1>
          <div class="story-product-logo" slot="product-logo"></div>
        </z-app-header>
      </div>
		`);

    const appHeader = await page.find("z-app-header");
    const appHeaderFixedNotExisting = await page.find("z-app-header >>> .heading-stuck");
    expect(appHeader).not.toBeNull();
    expect(appHeaderFixedNotExisting).toBeNull();
    const sticking = await page.spyOnEvent("sticking");

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForChanges();
    expect(sticking).toHaveReceivedEvent();

    const appHeaderFixed = await page.find("z-app-header >>> .heading-stuck");
    expect(appHeaderFixed).not.toBeNull();

    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await page.waitForChanges();
    expect(sticking).toHaveReceivedEvent();
  });

  it("Open offcanvas menu", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-app-header style="--app-header-content-max-width: 100%" enable-offcanvas="true">
        <h1 slot="title">Applicazione</h1>
        <z-menu slot="menu">
          <h3>Menu label 1</h3>
          <a
            href=""
            slot="item"
            >Item 1</a
          >
        </z-menu>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
      </z-app-header>
		`);

    const appHeader = await page.find("z-app-header");
    const drawerTrigger = await page.find("z-app-header >>> .drawer-trigger");
    expect(appHeader).not.toBeNull();
    expect(drawerTrigger).not.toBeNull();

    await drawerTrigger.click();
    await page.waitForChanges();

    const appHeaderFixed = await page.find("z-app-header >>> z-offcanvas[open]");
    expect(appHeaderFixed).not.toBeNull();
  });

  it("Check if the width of the menu is bigger than the page, the menu is in the offcanvas and check search button", async () => {
    const page = await newE2EPage();
    await page.setContent(`
			<z-app-header enable-search="" search-page-url="https://www.zanichelli.it">
        <h1 slot="title">Applicazione</h1>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
        <z-menu slot="menu">
          <a href="">Menu label 2</a>
        </z-menu>
      </z-app-header>
		`);

    await page.setViewport({
      width: 1024,
      height: 800,
    });
    await page.waitForChanges();
    const drawerTrigger = await page.find("z-app-header >>> .drawer-trigger");
    expect(drawerTrigger).not.toBeNull();

    const searchButton = await page.find("z-app-header >>> .search-page-button");
    expect(searchButton).not.toBeNull();
  });
});
