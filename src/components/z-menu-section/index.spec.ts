import {newSpecPage} from "@stencil/core/testing";

import {ZMenuSection} from "./index";

describe("Suite test ZMenuSection", () => {
  it("Test render ZMenu with items", async () => {
    const page = await newSpecPage({
      components: [ZMenuSection],
      html: `<z-menu-section>
        <h3>Menu section label</h3>
        <a href="#" slot="section">Item 1</a>
        <a href="#" slot="section">Item 2</a>
        <a href="#" slot="section">Item 3</a>
      </z-menu-section>`,
    });

    expect(page.root).toEqualHtml(`
      <z-menu-section>
        <mock:shadow-root>
          <button aria-expanded="false" aria-haspopup="true" class="label" role="menuitem">
            <slot></slot>
            <z-icon name="chevron-down"></z-icon>
          </button>
        </mock:shadow-root>
        <h3>Menu section label</h3>
        <a href="#" slot="section" role="menuitem" tabindex="0">Item 1</a>
        <a href="#" slot="section" role="menuitem" tabindex="-1">Item 2</a>
        <a href="#" slot="section" role="menuitem" tabindex="-1">Item 3</a>
    </z-menu-section>`);
  });

  it("Test ZMenuSection toggle events", async () => {
    const page = await newSpecPage({
      components: [ZMenuSection],
      html: `<z-menu-section>
        <div slot="section">item</div>
      </z-menu-section>`,
    });
    const menu = page.rootInstance;

    const openedCallback = jest.fn();
    page.doc.addEventListener("opened", openedCallback);
    await page.waitForChanges();
    // call `toggle` to open the menu
    menu.toggle();
    expect(openedCallback).toHaveBeenCalled();

    const closedCallback = jest.fn();
    page.doc.addEventListener("closed", closedCallback);
    await page.waitForChanges();
    // the menu is already open, this call will close it
    menu.toggle();
    expect(closedCallback).toHaveBeenCalled();
  });
});
