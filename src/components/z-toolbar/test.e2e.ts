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

  it("render con gruppi", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <div class="z-toolbar-group">
          <z-tool icon="gear"></z-tool>
          <z-tool icon="download"></z-tool>
        </div>
        <div class="z-toolbar-group">
          <z-tool icon="upload"></z-tool>
        </div>
      </z-toolbar>
    `);
    const groups = await page.findAll("z-toolbar .z-toolbar-group");
    expect(groups.length).toBe(2);
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

    const firstTabIndex = await page.evaluate(() => {
      const tools = document.querySelectorAll("z-toolbar > z-tool");

      return tools[0].shadowRoot.querySelector("button").tabIndex;
    });
    const secondTabIndex = await page.evaluate(() => {
      const tools = document.querySelectorAll("z-toolbar > z-tool");

      return tools[1].shadowRoot.querySelector("button").tabIndex;
    });

    expect(firstTabIndex).toBe(0);
    expect(secondTabIndex).toBe(-1);
  });

  it("collectToolItems raccoglie solo i tool diretti, non quelli annidati", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <z-toolbar>
        <div class="z-toolbar-group">
          <z-tool icon="gear"></z-tool>
          <z-tool icon="download"></z-tool>
        </div>
        <z-tool icon="upload"></z-tool>
      </z-toolbar>
    `);
    await page.waitForChanges();

    const tabIndexes = await page.evaluate(() => {
      const tools = document.querySelectorAll("z-toolbar > .z-toolbar-group > z-tool, z-toolbar > z-tool");

      return Array.from(tools).map((tool) => tool.shadowRoot.querySelector("button").tabIndex);
    });

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

    // Focus the first tool
    await page.evaluate(() => {
      document.querySelector("z-tool").shadowRoot.querySelector("button").focus();
    });

    await page.keyboard.press("ArrowRight");
    await page.waitForChanges();

    const focusedIndex = await page.evaluate(() => {
      const tools = document.querySelectorAll("z-toolbar > z-tool");

      return Array.from(tools).findIndex(
        (tool) =>
          tool.shadowRoot.querySelector("button") === document.activeElement ||
          tool.shadowRoot.activeElement?.tagName === "BUTTON"
      );
    });
    expect(focusedIndex).toBe(1);
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

    // Focus the second tool
    await page.evaluate(() => {
      const tools = document.querySelectorAll("z-toolbar > z-tool");
      (tools[1].shadowRoot.querySelector("button") as HTMLButtonElement).focus();
    });
    await page.waitForChanges();

    await page.keyboard.press("ArrowLeft");
    await page.waitForChanges();

    const focusedIndex = await page.evaluate(() => {
      const tools = document.querySelectorAll("z-toolbar > z-tool");

      return Array.from(tools).findIndex((tool) => tool.shadowRoot.activeElement?.tagName === "BUTTON");
    });
    expect(focusedIndex).toBe(0);
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

    // Focus the last tool
    await page.evaluate(() => {
      const tools = document.querySelectorAll("z-toolbar > z-tool");
      (tools[tools.length - 1].shadowRoot.querySelector("button") as HTMLButtonElement).focus();
    });
    await page.waitForChanges();

    await page.keyboard.press("ArrowRight");
    await page.waitForChanges();

    const focusedIndex = await page.evaluate(() => {
      const tools = document.querySelectorAll("z-toolbar > z-tool");

      return Array.from(tools).findIndex((tool) => tool.shadowRoot.activeElement?.tagName === "BUTTON");
    });
    expect(focusedIndex).toBe(0);
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

  it("click su tool con submenu attiva active", async () => {
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

    expect(await tool.getProperty("active")).toBe(true);
  });

  it("tool disabled non attiva active al click", async () => {
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

    expect(await tool.getProperty("active")).toBe(false);
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
    expect(await tool.getProperty("active")).toBe(true);

    await tool.click();
    await page.waitForChanges();
    expect(await tool.getProperty("active")).toBe(false);
  });
});
