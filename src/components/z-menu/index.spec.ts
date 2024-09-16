import {newSpecPage} from "@stencil/core/testing";
import {ZMenuSection} from "../z-menu-section";

import {ZMenu} from "./index";

describe("Suite test ZMenu", () => {
  it("Test render ZMenu label only", async () => {
    const page = await newSpecPage({
      components: [ZMenu],
      html: `<z-menu role="menu">
        <h3>Menu label</h3>
      </z-menu>`,
    });

    expect(page.root).toEqualHtml(`
    <z-menu floating="" role="menu">
      <mock:shadow-root>
        <div class="menu-wrapper">
          <div class="menu-label">
            <div class="menu-label-content">
              <slot></slot>
            </div>
          </div>
        </div>
      </mock:shadow-root>
      <h3 tabindex="-1">Menu label</h3>
    </z-menu>`);
  });

  it("Test render ZMenu with items", async () => {
    const page = await newSpecPage({
      components: [ZMenu, ZMenuSection],
      html: `<z-menu role="menu">
        <h3>Menu label</h3>
        <a href="#" slot="item">Item 1</a>
        <a href="#" slot="item">Item 2</a>
        <a href="#" slot="item">Item 3</a>
      </z-menu>`,
    });

    expect(page.root).toEqualHtml(`
      <z-menu floating="" role="menu">
        <mock:shadow-root>
          <div class="menu-wrapper">
            <button aria-expanded="false" aria-haspopup="true" aria-label="Apri menù" class="menu-label" role="menuitem" tabindex="-1">
              <div class="menu-label-content">
                <slot></slot>
                <z-icon name="chevron-down"></z-icon>
              </div>
            </button>
          </div>
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
    </z-menu>`);
  });

  it("Test render ZMenu with submenu", async () => {
    const page = await newSpecPage({
      components: [ZMenu, ZMenuSection],
      html: `<z-menu floating="" role="menu">
        <h3>Menu label</h3>
        <a href="#" slot="item">Item 1</a>
        <z-menu-section slot="item">
          <h3>Item 2</h2>
          <a href="#" slot="section">Item 2.1</a>
          <a href="#" slot="section">Item 2.2</a>
        </z-menu-section>
      </z-menu>`,
    });

    expect(page.root).toEqualHtml(`
    <z-menu floating="" role="menu">
      <mock:shadow-root>
        <div class="menu-wrapper">
          <button aria-expanded="false" aria-haspopup="true" aria-label="Apri menù" class="menu-label" role="menuitem" tabindex="-1">
            <div class="menu-label-content">
              <slot></slot>
              <z-icon name="chevron-down"></z-icon>
            </div>
          </button>
        </div>
        <div class="content">
          <div class="items" role="menu">
            <slot name="item"></slot>
          </div>
        </div>
      </mock:shadow-root>
      <h3>
        Menu label
      </h3>
      <a href="#" slot="item">
        Item 1
      </a>
      <z-menu-section slot="item">
        <mock:shadow-root>
          <button aria-expanded="false" aria-haspopup="true" class="label" role="menuitem">
            <slot></slot>
            <z-icon name="chevron-down"></z-icon>
          </button>
        </mock:shadow-root>
        <h3>
          Item 2
        </h3>
        <a href="#" role="menuitem" slot="section" tabindex="0">
          Item 2.1
        </a>
        <a href="#" role="menuitem" slot="section" tabindex="-1">
          Item 2.2
        </a>
      </z-menu-section>
    </z-menu>`);
  });

  it("Test ZMenu toggle events", async () => {
    const page = await newSpecPage({
      components: [ZMenu],
      html: `<z-menu role="menu">
        <div slot="item">item</div>
      </z-menu>`,
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
