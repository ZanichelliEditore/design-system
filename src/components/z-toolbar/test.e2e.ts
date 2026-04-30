import {newE2EPage} from "@stencil/core/testing";

describe("z-toolbar e2e", () => {
  it("render con z-tool", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <z-tool icon="gear" tooltip="Impostazioni"></z-tool>
        <z-tool icon="download" tooltip="Scarica"></z-tool>
      </z-toolbar>
    `);
    const tools = await page.findAll("z-toolbar > z-tool");
    expect(tools.length).toBe(2);
  });

  it("render con divider", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <z-tool icon="gear"></z-tool>
        <z-tool icon="download"></z-tool>
        <z-divider orientation="vertical"></z-divider>
        <z-tool icon="upload"></z-tool>
      </z-toolbar>
    `);
    const dividers = await page.findAll("z-toolbar > z-divider");
    expect(dividers.length).toBe(1);
  });

  it("roving tabindex: primo tool ha tabindex 0", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <z-tool icon="gear"></z-tool>
        <z-tool icon="download"></z-tool>
      </z-toolbar>
    `);
    await page.waitForChanges();

    const firstToolButton = await page.find("z-toolbar > z-tool:nth-of-type(1) >>> button");
    const secondToolButton = await page.find("z-toolbar > z-tool:nth-of-type(2) >>> button");

    const firstTabIndex = await firstToolButton.getProperty("tabIndex");
    const secondTabIndex = await secondToolButton.getProperty("tabIndex");

    expect(firstTabIndex).toBe(0);
    expect(secondTabIndex).toBe(-1);
  });

  it("collectToolItems raccoglie solo i tool diretti, non quelli annidati", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <z-tool icon="gear"></z-tool>
        <z-tool icon="download"></z-tool>
        <z-divider orientation="vertical"></z-divider>
        <z-tool icon="upload"></z-tool>
      </z-toolbar>
    `);
    await page.waitForChanges();

    const toolButtons = await page.findAll("z-toolbar > z-tool >>> button");
    const tabIndexes: number[] = [];
    for (const button of toolButtons) {
      tabIndexes.push(await button.getProperty("tabIndex"));
    }

    expect(tabIndexes.length).toBe(3);
    expect(tabIndexes[0]).toBe(0);
    expect(tabIndexes[1]).toBe(-1);
    expect(tabIndexes[2]).toBe(-1);
  });

  it("navigazione con ArrowRight sposta il focus al tool successivo", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <z-tool icon="gear"></z-tool>
        <z-tool icon="download"></z-tool>
        <z-tool icon="upload"></z-tool>
      </z-toolbar>
    `);
    await page.waitForChanges();

    const firstToolButton = await page.find("z-toolbar > z-tool:nth-of-type(1) >>> button");
    const secondToolButton = await page.find("z-toolbar > z-tool:nth-of-type(2) >>> button");

    await firstToolButton.click();
    await page.waitForChanges();

    await firstToolButton.press("ArrowRight");
    await page.waitForChanges();

    expect(await firstToolButton.getProperty("tabIndex")).toBe(-1);
    expect(await secondToolButton.getProperty("tabIndex")).toBe(0);
  });

  it("navigazione con ArrowLeft sposta il focus al tool precedente", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <z-tool icon="gear"></z-tool>
        <z-tool icon="download"></z-tool>
        <z-tool icon="upload"></z-tool>
      </z-toolbar>
    `);
    await page.waitForChanges();

    const firstToolButton = await page.find("z-toolbar > z-tool:nth-of-type(1) >>> button");
    const secondToolButton = await page.find("z-toolbar > z-tool:nth-of-type(2) >>> button");

    await secondToolButton.click();
    await page.waitForChanges();

    await secondToolButton.press("ArrowLeft");
    await page.waitForChanges();

    expect(await firstToolButton.getProperty("tabIndex")).toBe(0);
    expect(await secondToolButton.getProperty("tabIndex")).toBe(-1);
  });

  it("ArrowRight dall'ultimo tool torna al primo (wrap)", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <z-tool icon="gear"></z-tool>
        <z-tool icon="download"></z-tool>
      </z-toolbar>
    `);
    await page.waitForChanges();

    const firstToolButton = await page.find("z-toolbar > z-tool:nth-of-type(1) >>> button");
    const secondToolButton = await page.find("z-toolbar > z-tool:nth-of-type(2) >>> button");

    await secondToolButton.click();
    await page.waitForChanges();

    await secondToolButton.press("ArrowRight");
    await page.waitForChanges();

    expect(await firstToolButton.getProperty("tabIndex")).toBe(0);
    expect(await secondToolButton.getProperty("tabIndex")).toBe(-1);
  });

  it("render toolbar nestata dentro z-tool", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <z-tool icon="gear">
          <z-toolbar>
            <z-tool icon="chevron-up"></z-tool>
          </z-toolbar>
        </z-tool>
      </z-toolbar>
    `);
    await page.waitForChanges();
    const nestedToolbar = await page.find("z-tool z-toolbar");
    expect(nestedToolbar).not.toBeNull();
  });

  it("click su tool con submenu apre il submenu", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <z-tool icon="gear">
          <z-toolbar>
            <z-tool icon="chevron-up"></z-tool>
          </z-toolbar>
        </z-tool>
      </z-toolbar>
    `);
    await page.waitForChanges();

    const tool = await page.find("z-toolbar > z-tool");
    await tool.click();
    await page.waitForChanges();

    expect(await tool.getProperty("open")).toBe(true);
  });

  it("tool disabled non apre il submenu al click", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <z-tool icon="gear" disabled>
          <z-toolbar>
            <z-tool icon="chevron-up"></z-tool>
          </z-toolbar>
        </z-tool>
      </z-toolbar>
    `);
    await page.waitForChanges();

    const tool = await page.find("z-toolbar > z-tool");
    await tool.click();
    await page.waitForChanges();

    expect(await tool.getProperty("open")).toBe(false);
  });

  it("aprire un submenu chiude gli altri submenu aperti", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar id="main">
        <z-tool icon="gear">
          <z-toolbar>
            <z-tool icon="chevron-up"></z-tool>
          </z-toolbar>
        </z-tool>
        <z-tool icon="download">
          <z-toolbar>
            <z-tool icon="chevron-down"></z-tool>
          </z-toolbar>
        </z-tool>
        <z-tool icon="upload">
          <z-toolbar>
            <z-tool icon="copy"></z-tool>
          </z-toolbar>
        </z-tool>
      </z-toolbar>
    `);
    await page.waitForChanges();

    const tools = await page.findAll("#main > z-tool");

    // Open first submenu
    await tools[0].click();
    await page.waitForChanges();
    expect(await tools[0].getProperty("open")).toBe(true);
    expect(await tools[1].getProperty("open")).toBe(false);
    expect(await tools[2].getProperty("open")).toBe(false);

    // Open second submenu: first should close
    await tools[1].click();
    await page.waitForChanges();
    expect(await tools[0].getProperty("open")).toBe(false);
    expect(await tools[1].getProperty("open")).toBe(true);
    expect(await tools[2].getProperty("open")).toBe(false);

    // Open third submenu: second should close
    await tools[2].click();
    await page.waitForChanges();
    expect(await tools[0].getProperty("open")).toBe(false);
    expect(await tools[1].getProperty("open")).toBe(false);
    expect(await tools[2].getProperty("open")).toBe(true);
  });

  it("secondo click su tool chiude submenu", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <z-tool icon="gear">
          <z-toolbar>
            <z-tool icon="chevron-up"></z-tool>
          </z-toolbar>
        </z-tool>
      </z-toolbar>
    `);
    await page.waitForChanges();

    const tool = await page.find("z-toolbar > z-tool");
    await tool.click();
    await page.waitForChanges();
    expect(await tool.getProperty("open")).toBe(true);

    await tool.click();
    await page.waitForChanges();
    expect(await tool.getProperty("open")).toBe(false);
  });
});
