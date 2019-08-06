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
            <label>()</label>
            <span>A-Z</span>
            <z-icon name="ordina-icon-stroked" width="16" height="16" />
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
            <label>label (5)</label>
            <span>A-Z</span>
            <z-icon name="ordina-icon-stroked" width="16" height="16" />
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
    page.rootInstance.isSelected = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-button-sort>
        <mock:shadow-root>
          <button class="selected">
            <label>()</label>
            <span>A-Z</span>
            <z-icon name="ordina-icon-stroked" width="16" height="16" />
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
    page.rootInstance.isSelected = true;
    page.rootInstance.sortAsc = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-button-sort>
        <mock:shadow-root>
          <button class="selected">
            <label>()</label>
            <span>Z-A</span>
            <z-icon name="ordina-icon-stroked" width="16" height="16" />
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
    expect(page.rootInstance.isSelected).toEqual(false);
    expect(page.rootInstance.sortAsc).toEqual(true);
    button.click();
    await page.waitForChanges();
    expect(page.rootInstance.isSelected).toEqual(true);
    expect(page.rootInstance.sortAsc).toEqual(true);
    button.click();
    await page.waitForChanges();
    expect(page.rootInstance.isSelected).toEqual(true);
    expect(page.rootInstance.sortAsc).toEqual(false);
  });
});
