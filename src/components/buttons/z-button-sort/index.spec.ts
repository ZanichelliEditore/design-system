import { newSpecPage } from "@stencil/core/testing";

import { ZButtonSort } from "./index";

describe("Suite test ZButtonSort", () => {
  it("Test render ZButtonSort vuoto", async () => {
    const page = await newSpecPage({
      components: [ZButtonSort],
      html: `<z-button-sort></z-button-sort>`
    });
    expect(page.root).toEqualHtml(`
      <z-button-sort>
        <mock:shadow-root>
          <button>
            <label>
              <span class="ellipsis"></span>
              <span class="counter"></span>
              <span class="sort">A-Z</span>
              <z-icon name="drop-up-down" width="16" height="16" />
            </label>
          </button>
        </mock:shadow-root>
      </z-button-sort>
    `);
  });

  it("Test render ZButtonSort con prop", async () => {
    const page = await newSpecPage({
      components: [ZButtonSort],
      html: `<z-button-sort label="label" counter="5"></z-button-sort>`
    });
    expect(page.root).toEqualHtml(`
      <z-button-sort label="label" counter="5">
        <mock:shadow-root>
          <button>
          <label>
          <span class="ellipsis">label</span>
          <span class="counter"> (5)</span>
          <span class="sort">A-Z</span>
          <z-icon name="drop-up-down" width="16" height="16" />
        </label>
          </button>
        </mock:shadow-root>
      </z-button-sort>
    `);
  });

  it("Test render ZButtonSort selected", async () => {
    const page = await newSpecPage({
      components: [ZButtonSort],
      html: `<z-button-sort></z-button-sort>`
    });
    page.rootInstance.isselected = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-button-sort>
        <mock:shadow-root>
          <button class="selected">
            <label>
              <span class="ellipsis"></span>
              <span class="counter"></span>
              <span class="sort">A-Z</span>
              <z-icon name="drop-up-down" width="16" height="16" />
            </label>
          </button>
        </mock:shadow-root>
      </z-button-sort>
    `);
  });

  it("Test render ZButtonSort sort", async () => {
    const page = await newSpecPage({
      components: [ZButtonSort],
      html: `<z-button-sort></z-button-sort>`
    });
    page.rootInstance.isselected = true;
    page.rootInstance.sortasc = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-button-sort>
        <mock:shadow-root>
          <button class="selected">
            <label>
              <span class="ellipsis"></span>
              <span class="counter"></span>
              <span class="sort">Z-A</span>
              <z-icon name="drop-up-down" width="16" height="16" />
            </label>
          </button>
        </mock:shadow-root>
      </z-button-sort>
    `);
  });

  it("Test click ZButtonSort", async () => {
    const page = await newSpecPage({
      components: [ZButtonSort],
      html: `<z-button-sort></z-button-sort>`
    });

    const button = page.root.shadowRoot.querySelector("button");
    expect(page.rootInstance.isselected).toEqual(false);
    expect(page.rootInstance.sortasc).toEqual(true);
    button.click();
    await page.waitForChanges();
    expect(page.rootInstance.isselected).toEqual(true);
    expect(page.rootInstance.sortasc).toEqual(true);
    button.click();
    await page.waitForChanges();
    expect(page.rootInstance.isselected).toEqual(true);
    expect(page.rootInstance.sortasc).toEqual(false);
  });

  it("Test ZButtonSort has ellipsis", async () => {
    const page = await newSpecPage({
      components: [ZButtonSort],
      html: `<z-button-sort label="Testo molto lungo lungo lungo lunghissimo lunghissimo lunghissimo ancora di più" counter="5"></z-button-sort>`
    });
    page.rootInstance.allowTooltip = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-button-sort label="Testo molto lungo lungo lungo lunghissimo lunghissimo lunghissimo ancora di più" counter="5">
        <mock:shadow-root>
          <button title="Testo molto lungo lungo lungo lunghissimo lunghissimo lunghissimo ancora di più">
            <label>
              <span class="ellipsis">Testo molto lungo lungo lungo lunghissimo lunghissimo lunghissimo ancora di più</span>
              <span class="counter"> (5)</span>
              <span class="sort">A-Z</span>
              <z-icon name="drop-up-down" width="16" height="16" />
            </label>
          </button>
        </mock:shadow-root>
      </z-button-sort>
    `);
  });

  it("Test ZButtonSort has not ellipsis", async () => {
    const page = await newSpecPage({
      components: [ZButtonSort],
      html: `<z-button-sort label="Testo corto" counter="5"></z-button-sort>`
    });
    page.rootInstance.allowTooltip = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-button-sort label="Testo corto" counter="5">
        <mock:shadow-root>
          <button title="">
            <label>
              <span class="ellipsis">Testo corto</span>
              <span class="counter"> (5)</span>
              <span class="sort">A-Z</span>
              <z-icon name="drop-up-down" width="16" height="16" />
            </label>
          </button>
        </mock:shadow-root>
      </z-button-sort>
    `);
  });
});
