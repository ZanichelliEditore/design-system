import { newSpecPage } from "@stencil/core/testing";
import { ZAppHeader } from "./index";
describe("Suite test ZAppHeader", () => {
    it("Test render empty ZAppHeader", async () => {
        const page = await newSpecPage({
            components: [ZAppHeader],
            html: `<z-app-header></z-app-header>`,
        });
        expect(page.root).toEqualHtml(`
      <z-app-header menu-length="0" flow="auto">
        <mock:shadow-root>
          <div class="heading-panel">
            <div class="heading-container">
              <div class="heading-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
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
          </div>
          <z-offcanvas transitiondirection="right" variant="overlay">
            <button aria-label="Chiudi menu" class="drawer-close" slot="canvasContent" aria-hidden="true" disabled>
              <z-icon name="close"></z-icon>
            </button>
            <div class="drawer-content" slot="canvasContent" aria-hidden="true">
              <slot name="menu"></slot>
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
      <z-app-header menu-length="0" flow="auto">
        <mock:shadow-root>
          <div class="heading-panel">
            <div class="heading-container">
              <div class="heading-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
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
          </div>
          <z-offcanvas transitiondirection="right" variant="overlay">
            <button aria-label="Chiudi menu" class="drawer-close" slot="canvasContent" aria-hidden="true" disabled>
              <z-icon name="close"></z-icon>
            </button>
            <div class="drawer-content" slot="canvasContent" aria-hidden="true">
              <slot name="menu"></slot>
            </div>
          </z-offcanvas>
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
      </z-app-header>`,
        });
        expect(page.root).toEqualHtml(`
      <z-app-header menu-length="0" flow="auto">
        <mock:shadow-root>
          <div class="heading-panel">
            <div class="heading-container">
              <div class="heading-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
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
          </div>
        </div>
        <z-offcanvas transitiondirection="right" variant="overlay">
            <button aria-label="Chiudi menu" class="drawer-close" slot="canvasContent" aria-hidden="true" disabled>
              <z-icon name="close"></z-icon>
            </button>
            <div class="drawer-content" slot="canvasContent" aria-hidden="true">
              <slot name="menu"></slot>
            </div>
          </z-offcanvas>
        </mock:shadow-root>
        <h1 slot="title">Titolo di test</h1>
        <h2 slot="subtitle">Sottotitolo di test</h2>
      </z-app-header>
    `);
    });
    it("Test render ZAppHeader with title and top subtitle", async () => {
        const page = await newSpecPage({
            components: [ZAppHeader],
            html: `<z-app-header>
        <h2 slot="top-subtitle">Sottotitolo di test</h2>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>`,
        });
        expect(page.root).toEqualHtml(`
      <z-app-header menu-length="0" flow="auto">
        <mock:shadow-root>
          <div class="heading-panel">
            <div class="heading-container">
              <div class="heading-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
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
          </div>
        </div>
        <z-offcanvas transitiondirection="right" variant="overlay">
            <button aria-label="Chiudi menu" class="drawer-close" slot="canvasContent" aria-hidden="true" disabled>
              <z-icon name="close"></z-icon>
            </button>
            <div class="drawer-content" slot="canvasContent" aria-hidden="true">
              <slot name="menu"></slot>
            </div>
          </z-offcanvas>
        </mock:shadow-root>
        <h2 slot="top-subtitle">Sottotitolo di test</h2>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>
    `);
    });
    it("Test render ZAppHeader with stuck layout", async () => {
        const page = await newSpecPage({
            components: [ZAppHeader],
            html: `<z-app-header stuck>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>`,
        });
        expect(page.root).toEqualHtml(`
      <z-app-header menu-length="0" flow="auto" stuck>
        <mock:shadow-root>
          <div class="heading-panel">
            <div class="heading-container">
              <div class="heading-subtitle">
                <slot name="top-subtitle"></slot>
              </div>
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
          </div>
          <z-offcanvas transitiondirection="right" variant="overlay">
            <button aria-label="Chiudi menu" class="drawer-close" slot="canvasContent" aria-hidden="true" disabled>
              <z-icon name="close"></z-icon>
            </button>
            <div class="drawer-content" slot="canvasContent" aria-hidden="true">
              <slot name="menu"></slot>
            </div>
          </z-offcanvas>
        </mock:shadow-root>
        <h1 slot="title">Titolo di test</h1>
      </z-app-header>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map
