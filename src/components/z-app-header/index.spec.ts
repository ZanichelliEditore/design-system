import {newSpecPage} from "@stencil/core/testing";

import {ZAppHeader} from "./index";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Suite test ZAppHeader", () => {
  it("Test render empty ZAppHeader", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header></z-app-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-header enable-z-logo="" menu-length="0">
        <mock:shadow-root>
          <div class="heading-panel">
            <div class="heading-container">
              <div class="top-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
              <div class="heading-title">
              <img alt="Logo Zanichelli" class="z-logo">
                <slot name="product-logo"></slot>
                <slot name="title"></slot>
              </div>
            </div>
            <nav class="menu-container"></nav>
          </div>
          <z-offcanvas transitiondirection="right" variant="overlay" id="offcanvas-menu">
            <div slot="canvasContent">
              <button aria-hidden="true" aria-label="Chiudi menu" class="drawer-close" disabled="">
                <z-icon name="close"></z-icon>
              </button>
              <div aria-hidden="true" class="drawer-content">
                <slot name="menu"></slot>
              </div>
            </div>
          </z-offcanvas>
        </mock:shadow-root>
      </z-app-header>
    `);
  });

  it("Test render ZAppHeader with title", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-header enable-z-logo="" menu-length="0">
        <mock:shadow-root>
          <div class="heading-panel">
            <div class="heading-container">
              <div class="top-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
              <div class="heading-title">
              <img alt="Logo Zanichelli" class="z-logo">
                <slot name="product-logo"></slot>
                <slot name="title"></slot>
              </div>
            </div>
            <nav aria-label="Titolo di test" class="menu-container"></nav>
          </div>
          <z-offcanvas transitiondirection="right" variant="overlay" id="offcanvas-menu">
            <div slot="canvasContent">
              <button aria-hidden="true" aria-label="Chiudi menu" class="drawer-close" disabled="">
                <z-icon name="close"></z-icon>
              </button>
              <div aria-hidden="true" class="drawer-content">
                <slot name="menu"></slot>
              </div>
            </div>
          </z-offcanvas>
        </mock:shadow-root>
        <h1 slot="title">
          Titolo di test
        </h1>
      </z-app-header>
    `);
  });

  it("Test render ZAppHeader with title and top-subtitle", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header>
        <h1 slot="title">Titolo di test</h1>
        <h2 slot="top-subtitle">Payoff dell'applicazione</h2>
      </z-app-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-header enable-z-logo="" menu-length="0">
        <mock:shadow-root>
          <div class="heading-panel">
            <div class="heading-container">
              <div class="top-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
              <div class="heading-title">
                <slot name="title"></slot>
              </div>
            </div>
            <nav aria-label="Titolo di test" class="menu-container"></nav>
          </div>
          <z-offcanvas transitiondirection="right" variant="overlay" id="offcanvas-menu">
            <div slot="canvasContent">
              <button aria-hidden="true" aria-label="Chiudi menu" class="drawer-close" disabled="">
                <z-icon name="close"></z-icon>
              </button>
              <div aria-hidden="true" class="drawer-content">
                <slot name="menu"></slot>
              </div>
            </div>
          </z-offcanvas>
        </mock:shadow-root>
        <h1 slot="title">
          Titolo di test
        </h1>
        <h2 slot="top-subtitle">
          Payoff dell'applicazione
        </h2>
      </z-app-header>
    `);
  });

  it("Test render ZAppHeader with z-logo and product-logo", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header enable-z-logo="true">
        <h1 slot="title">Titolo di test</h1>
        <img
          slot="product-logo"
          src="https://picsum.photos/id/237/320/320"
          alt=""
        />
      </z-app-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-header enable-z-logo="true" menu-length="0">
        <mock:shadow-root>
          <div class="heading-panel">
            <div class="heading-container">
              <div class="top-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
              <div class="heading-title">
                <img alt="Logo Zanichelli" class="z-logo">
                <slot name="product-logo"></slot>
                <slot name="title"></slot>
              </div>
            </div>
            <nav aria-label="Titolo di test" class="menu-container"></nav>
          </div>
          <z-offcanvas transitiondirection="right" variant="overlay" id="offcanvas-menu">
            <div slot="canvasContent">
              <button aria-hidden="true" aria-label="Chiudi menu" class="drawer-close" disabled="">
                <z-icon name="close"></z-icon>
              </button>
              <div aria-hidden="true" class="drawer-content">
                <slot name="menu"></slot>
              </div>
            </div>
          </z-offcanvas>
        </mock:shadow-root>
        <h1 slot="title">
          Titolo di test
        </h1>
        <img alt="" slot="product-logo" src="https://picsum.photos/id/237/320/320">
      </z-app-header>
    `);
  });

  it("Test render ZAppHeader with stuck layout and with z-logo, product-logo", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header stuck  enable-z-logo="true">
        <h1 slot="title">Titolo di test</h1>
        <img
          slot="product-logo"
          src="https://picsum.photos/id/237/320/320"
          alt=""
        />
      </z-app-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-header enable-z-logo="true" menu-length="0" stuck>
        <mock:shadow-root>
          <div class="heading-panel">
            <div class="heading-container">
              <div class="top-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
              <div class="heading-title">
                <img alt="Logo Zanichelli" class="z-logo">
                <slot name="product-logo"></slot>
                <slot name="title"></slot>
              </div>
            </div>
            <nav aria-label="Titolo di test" class="menu-container"></nav>
          </div>
          <z-offcanvas transitiondirection="right" variant="overlay" id="offcanvas-menu">
            <div slot="canvasContent">
              <button aria-hidden="true" aria-label="Chiudi menu" class="drawer-close" disabled="">
                <z-icon name="close"></z-icon>
              </button>
              <div aria-hidden="true" class="drawer-content">
                <slot name="menu"></slot>
              </div>
            </div>
          </z-offcanvas>
        </mock:shadow-root>
        <h1 slot="title">
          Titolo di test
        </h1>
        <img alt="" slot="product-logo" src="https://picsum.photos/id/237/320/320">
      </z-app-header>
    `);
  });

  it("Test render ZAppHeader with z-logo, product-logo, searchbar and menu", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header enable-z-logo="true" enable-search="true">
        <h1 slot="title">Titolo di test</h1>
        <img
          slot="product-logo"
          src="https://picsum.photos/id/237/320/320"
          alt=""
        />
              <z-menu
        slot="menu"
        floating=""
      >
        <a href="">Menu label</a>
      </z-menu>
      <z-menu
        slot="menu"
        floating=""
      >
        <h3>Not so short menu label</h3>
        <a
          href=""
          slot="item"
          >Item 1</a
        >
        <a
          href=""
          slot="item"
          >Item 2</a
        >
        <z-menu-section slot="item">
          <h3>Item 3</h3>
          <a
            href=""
            slot="section"
            >Item 3.1</a
          >
          <a
            href=""
            slot="section"
            >Item 3.2</a
          >
        </z-menu-section>
        <z-menu-section slot="item">
          <h3>Item 4</h3>
          <a
            href=""
            slot="section"
            >Item 4.1</a
          >
          <a
            href=""
            slot="section"
            >Item 4.2</a
          >
        </z-menu-section>
        <a
          href=""
          slot="item"
          >Item 5</a
        >
      </z-menu>
      <z-menu
        slot="menu"
        floating=""
      >
        <h3>Not so short menu label</h3>
        <a
          href=""
          slot="item"
          >Item 1</a
        >
        <a
          href=""
          slot="item"
          >Item 2</a
        >
        <z-menu-section slot="item">
          <h3>Item 3</h3>
          <a
            href=""
            slot="section"
            >Item 3.1</a
          >
          <a
            href=""
            slot="section"
            >Item 3.2</a
          >
        </z-menu-section>
        <z-menu-section slot="item">
          <h3>Item 4</h3>
          <a
            href=""
            slot="section"
            >Item 4.1</a
          >
          <a
            href=""
            slot="section"
            >Item 4.2</a
          >
        </z-menu-section>
        <a
          href=""
          slot="item"
          >Item 5</a
        >
      </z-menu>
      <z-menu
        slot="menu"
        floating=""
      >
        <a href="">Menu label</a>
      </z-menu>
      <z-menu
        slot="menu"
        floating=""
      >
        <h3>Not so short menu label</h3>
        <a
          href=""
          slot="item"
          >Item 1</a
        >
        <a
          href=""
          slot="item"
          >Item 2</a
        >
        <z-menu-section slot="item">
          <h3>Item 3</h3>
          <a
            href=""
            slot="section"
            >Item 3.1</a
          >
          <a
            href=""
            slot="section"
            >Item 3.2</a
          >
        </z-menu-section>
        <z-menu-section slot="item">
          <h3>Item 4</h3>
          <a
            href=""
            slot="section"
            >Item 4.1</a
          >
          <a
            href=""
            slot="section"
            >Item 4.2</a
          >
        </z-menu-section>
        <a
          href=""
          slot="item"
          >Item 5</a
        >
      </z-menu>
      <z-menu
        slot="menu"
        floating=""
      >
        <h3>Not so short menu label</h3>
        <a
          href=""
          slot="item"
          >Item 1</a
        >
        <a
          href=""
          slot="item"
          >Item 2</a
        >
        <z-menu-section slot="item">
          <h3>Item 3</h3>
          <a
            href=""
            slot="section"
            >Item 3.1</a
          >
          <a
            href=""
            slot="section"
            >Item 3.2</a
          >
        </z-menu-section>
        <z-menu-section slot="item">
          <h3>Item 4</h3>
          <a
            href=""
            slot="section"
            >Item 4.1</a
          >
          <a
            href=""
            slot="section"
            >Item 4.2</a
          >
        </z-menu-section>
        <a
          href=""
          slot="item"
          >Item 5</a
        >
      </z-menu>
      </z-app-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-header enable-z-logo="true" menu-length="6" enable-search="true">
        <mock:shadow-root>
          <div class="has-menu heading-panel">
            <div class="heading-container">
              <div class="top-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
              <div class="heading-title">
                <img alt="Logo Zanichelli" class="z-logo">
                <slot name="product-logo"></slot>
                <slot name="title"></slot>
                <z-searchbar placeholder="Cerca" preventsubmit="" showsearchbutton="" size="x-small" value="" variant="secondary"></z-searchbar>
              </div>
            </div>
            <nav class="menu-container" aria-label="Titolo di test">
              <div aria-label="Titolo di test" role="menubar">
                <slot name="menu"></slot>
              </div>
            </nav>
          </div>
          <z-offcanvas transitiondirection="right" variant="overlay" id="offcanvas-menu">
            <div slot="canvasContent">
              <button aria-hidden="true" aria-label="Chiudi menu" class="drawer-close" disabled="">
                <z-icon name="close"></z-icon>
              </button>
              <div aria-hidden="true" class="drawer-content">
                <slot name="menu"></slot>
              </div>
            </div>
          </z-offcanvas>
        </mock:shadow-root>
        <h1 slot="title">
          Titolo di test
        </h1>
        <img alt="" slot="product-logo" src="https://picsum.photos/id/237/320/320">
        <z-menu floating="" slot="menu">
          <a href="">
            Menu label
          </a>
        </z-menu>
        <z-menu floating="" slot="menu">
          <h3>
            Not so short menu label
          </h3>
          <a href="" slot="item">
            Item 1
          </a>
          <a href="" slot="item">
            Item 2
          </a>
          <z-menu-section slot="item">
            <h3>
              Item 3
            </h3>
            <a href="" slot="section">
              Item 3.1
            </a>
            <a href="" slot="section">
              Item 3.2
            </a>
          </z-menu-section>
          <z-menu-section slot="item">
            <h3>
              Item 4
            </h3>
            <a href="" slot="section">
              Item 4.1
            </a>
            <a href="" slot="section">
              Item 4.2
            </a>
          </z-menu-section>
          <a href="" slot="item">
            Item 5
          </a>
        </z-menu>
        <z-menu floating="" slot="menu">
          <h3>
            Not so short menu label
          </h3>
          <a href="" slot="item">
            Item 1
          </a>
          <a href="" slot="item">
            Item 2
          </a>
          <z-menu-section slot="item">
            <h3>
              Item 3
            </h3>
            <a href="" slot="section">
              Item 3.1
            </a>
            <a href="" slot="section">
              Item 3.2
            </a>
          </z-menu-section>
          <z-menu-section slot="item">
            <h3>
              Item 4
            </h3>
            <a href="" slot="section">
              Item 4.1
            </a>
            <a href="" slot="section">
              Item 4.2
            </a>
          </z-menu-section>
          <a href="" slot="item">
            Item 5
          </a>
        </z-menu>
        <z-menu floating="" slot="menu">
          <a href="">
            Menu label
          </a>
        </z-menu>
        <z-menu floating="" slot="menu">
          <h3>
            Not so short menu label
          </h3>
          <a href="" slot="item">
            Item 1
          </a>
          <a href="" slot="item">
            Item 2
          </a>
          <z-menu-section slot="item">
            <h3>
              Item 3
            </h3>
            <a href="" slot="section">
              Item 3.1
            </a>
            <a href="" slot="section">
              Item 3.2
            </a>
          </z-menu-section>
          <z-menu-section slot="item">
            <h3>
              Item 4
            </h3>
            <a href="" slot="section">
              Item 4.1
            </a>
            <a href="" slot="section">
              Item 4.2
            </a>
          </z-menu-section>
          <a href="" slot="item">
            Item 5
          </a>
        </z-menu>
        <z-menu floating="" slot="menu">
          <h3>
            Not so short menu label
          </h3>
          <a href="" slot="item">
            Item 1
          </a>
          <a href="" slot="item">
            Item 2
          </a>
          <z-menu-section slot="item">
            <h3>
              Item 3
            </h3>
            <a href="" slot="section">
              Item 3.1
            </a>
            <a href="" slot="section">
              Item 3.2
            </a>
          </z-menu-section>
          <z-menu-section slot="item">
            <h3>
              Item 4
            </h3>
            <a href="" slot="section">
              Item 4.1
            </a>
            <a href="" slot="section">
              Item 4.2
            </a>
          </z-menu-section>
          <a href="" slot="item">
            Item 5
          </a>
        </z-menu>
      </z-app-header>
    `);
  });
});
