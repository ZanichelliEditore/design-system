import {newSpecPage} from "@stencil/core/testing";
import {ZMenuSectionDeprecated} from "../z-menu-section-deprecated";

import {ZMenuDeprecated} from "./index";

describe("Suite test ZMenu", () => {
  it("Test render ZMenu label only", async () => {
    const page = await newSpecPage({
      components: [ZMenuDeprecated],
      html: `<z-menu-deprecated role="menu">
        <h3>Menu label</h3>
      </z-menu-deprecated>`,
    });

    expect(page.root).toEqualHtml(`
      <z-menu-deprecated role="menu">
        <mock:shadow-root>
          <div class="menu-label">
            <div class="menu-label-content">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
        <h3>Menu label</h3>
    </z-menu-deprecated>`);
  });

  it("Test render ZMenu with items", async () => {
    const page = await newSpecPage({
      components: [ZMenuDeprecated, ZMenuSectionDeprecated],
      html: `<z-menu-deprecated role="menu">
        <h3>Menu label</h3>
        <a href="#" slot="item">Item 1</a>
        <a href="#" slot="item">Item 2</a>
        <a href="#" slot="item">Item 3</a>
      </z-menu-deprecated>`,
    });

    expect(page.root).toEqualHtml(`
      <z-menu-deprecated role="menu">
        <mock:shadow-root>
          <button aria-expanded="false" aria-label="Apri menù" class="menu-label">
            <div class="menu-label-content">
              <slot></slot>
              <z-icon name="chevron-down"></z-icon>
            </div>
          </button>
          <div class="content">
            <div class="items" role="menu">
              <slot name="item"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <h3>Menu label</h3>
        <a href="#" slot="item">Item 1</a>
        <a href="#" slot="item">Item 2</a>
        <a href="#" slot="item">Item 3</a>
    </z-menu-deprecated>`);
  });

  it("Test render ZMenu with submenu", async () => {
    const page = await newSpecPage({
      components: [ZMenuDeprecated, ZMenuSectionDeprecated],
      html: `<z-menu-deprecated role="menu">
        <h3>Menu label</h3>
        <a href="#" slot="item">Item 1</a>
        <z-menu-section-deprecated slot="item">
          <h3>Item 2</h2>
          <a href="#" slot="item">Item 2.1</a>
          <a href="#" slot="item">Item 2.2</a>
        </z-menu-section>
      </z-menu>`,
    });

    expect(page.root).toEqualHtml(`
      <z-menu-deprecated role="menu">
        <mock:shadow-root>
          <button aria-expanded="false" aria-label="Apri menù" class="menu-label">
            <div class="menu-label-content">
              <slot></slot>
              <z-icon name="chevron-down"></z-icon>
            </div>
          </button>
          <div class="content">
            <div class="items" role="menu">
              <slot name="item"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <h3>Menu label</h3>
        <a href="#" slot="item">Item 1</a>
        <z-menu-section-deprecated role="menu" slot="item">
          <mock:shadow-root>
            <button aria-pressed="false" class="label">
              <slot></slot>
              <z-icon name="chevron-down"></z-icon>
            </button>
          </mock:shadow-root>
          <h3>Item 2</h3>
          <a href="#" slot="item">Item 2.1</a>
          <a href="#" slot="item">Item 2.2</a>
        </z-menu-section-deprecated>
    </z-menu-deprecated>`);
  });

  it("Test ZMenu toggle events", async () => {
    const page = await newSpecPage({
      components: [ZMenuDeprecated],
      html: `<z-menu-deprecated role="menu">
        <div slot="item">item</div>
      </z-menu-deprecated>`,
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
