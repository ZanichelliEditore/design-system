import { newSpecPage } from "@stencil/core/testing";

import { ZAppHeader } from "./index";

describe("Suite test ZAppHeader", () => {
  it("Test render empty ZAppHeader", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header></z-app-header>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-header flow="auto">
        <mock:shadow-root>
          <div class="hero-container">
            <slot name="hero"></slot>
          </div>
          <div class="heading-container">
            <div class="heading-title">
              <slot name="title"></slot>
            </div>
            <div class="heading-subtitle">
              <slot name="subtitle"></slot>
            </div>
          </div>
          <div class="menu-container">
            <slot name="menu"></slot>
          </div>
        </mock:shadow-root>
      </z-app-header>
    `)
  });

  it("Test render ZAppHeader with title", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-header flow="auto">
        <mock:shadow-root>
          <div class="hero-container">
            <slot name="hero"></slot>
          </div>
          <div class="heading-container">
            <div class="heading-title">
              <slot name="title"></slot>
            </div>
            <div class="heading-subtitle">
              <slot name="subtitle"></slot>
            </div>
          </div>
          <div class="menu-container">
            <slot name="menu"></slot>
          </div>
        </mock:shadow-root>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>
    `);
  });

  it("Test render ZAppHeader with title and subtitle", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header>
        <h1 slot="title">Titolo di test</h1>
        <h2 slot="subtitle">Sottotitolo di test</h2>
      </z-app-header>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-header flow="auto">
        <mock:shadow-root>
          <div class="hero-container">
            <slot name="hero"></slot>
          </div>
          <div class="heading-container">
            <div class="heading-title">
              <slot name="title"></slot>
            </div>
            <div class="heading-subtitle">
              <slot name="subtitle"></slot>
            </div>
          </div>
          <div class="menu-container">
            <slot name="menu"></slot>
          </div>
        </mock:shadow-root>
        <h1 slot="title">Titolo di test</h1>
        <h2 slot="subtitle">Sottotitolo di test</h2>
      </z-app-header>
    `);
  });

  it("Test render ZAppHeader with drawer", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header drawer>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-header flow="auto" drawer>
        <mock:shadow-root>
          <div class="hero-container">
            <slot name="hero"></slot>
          </div>
          <div class="heading-container">
            <div class="heading-title">
              <button class="drawer-trigger">
                <z-icon name="burger-menu"></z-icon>
              </button>
              <slot name="title"></slot>
            </div>
            <div class="heading-subtitle">
              <slot name="subtitle"></slot>
            </div>
          </div>
          <div class="drawer-container">
            <div class="drawer-overlay"></div>
              <div class="drawer-panel">
                <button class="drawer-close">
                  <z-icon name="close"></z-icon>
                </button>
                <div class="drawer-content">
                 <slot name="menu"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>
    `);
  });

  it("Test render ZAppHeader with stuck layout", async () => {
    const page = await newSpecPage({
      components: [ZAppHeader],
      html: `<z-app-header stuck>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-header flow="auto" stuck>
        <mock:shadow-root>
          <div class="hero-container">
            <slot name="hero"></slot>
          </div>
          <div class="heading-container">
            <div class="heading-title">
              <button class="drawer-trigger">
                <z-icon name="burger-menu"></z-icon>
              </button>
              <slot name="title"></slot>
            </div>
            <div class="heading-subtitle">
              <slot name="subtitle"></slot>
            </div>
          </div>
          <div class="drawer-container">
            <div class="drawer-overlay"></div>
              <div class="drawer-panel">
                <button class="drawer-close">
                  <z-icon name="close"></z-icon>
                </button>
                <div class="drawer-content">
                 <slot name="menu"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>
    `);
  });
});

