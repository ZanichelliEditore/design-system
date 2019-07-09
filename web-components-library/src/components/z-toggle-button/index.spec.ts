import { newSpecPage } from "@stencil/core/testing";

import { ZToggleButton } from "./index";

describe("Suite test ZToggleButton", () => {

  it("Test render ZToggleButton vuoto", async () => {

    const page = await newSpecPage({
      components: [ZToggleButton],
      html: `<z-toggle-button></z-toggle-button>`
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-button>
        <mock:shadow-root>
          <button>
            <i></i>
          </button>
        </mock:shadow-root>
      </z-toggle-button>
    `)
  });

  it("Test render ZToggleButton con label", async () => {
    const page = await newSpecPage({
      components: [ZToggleButton],
      html: `<z-toggle-button label="label"></z-toggle-button>`
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-button label="label">
        <mock:shadow-root>
          <button>
            <i></i>
            label
          </button>
        </mock:shadow-root>
      </z-toggle-button>
    `);
  });

  it("Test click ZToggleButton", async () => {
    const page = await newSpecPage({
      components: [ZToggleButton],
      html: `<z-toggle-button></z-toggle-button>`,
    });

    const button = page.root.shadowRoot.querySelector('button');
    expect(page.rootInstance.isOpen).toEqual(false);
    button.click();
    await page.waitForChanges();
    expect(page.rootInstance.isOpen).toEqual(true);
    button.click();
    await page.waitForChanges();
    expect(page.rootInstance.isOpen).toEqual(false);
  });

});

