import { newSpecPage } from "@stencil/core/testing";
import { ZPocketHeader } from "./index";
describe("Suite test ZPocketHeader", () => {
    it("Test render ZPocketHeader", async () => {
        const page = await newSpecPage({
            components: [ZPocketHeader],
            html: `<z-pocket-header></z-pocket-header>`,
        });
        expect(page.root).toEqualHtml(`
      <z-pocket-header>
        <mock:shadow-root>
          <header role="button" tabindex="0" style="undefined: rgba(0,0,0,0);">
            <slot></slot>
          </header>
        </mock:shadow-root>
      </z-pocket-header>
    `);
    });
    it("Test render ZPocketHeader - with props", async () => {
        const page = await newSpecPage({
            components: [ZPocketHeader],
            html: `<z-pocket-header pocketid="pocket"></z-pocket-header>`,
        });
        expect(page.root).toEqualHtml(`
      <z-pocket-header pocketid="pocket">
        <mock:shadow-root>
          <header role="button" tabindex="0" style="undefined: rgba(0,0,0,0);">
            <slot></slot>
          </header>
        </mock:shadow-root>
      </z-pocket-header>
    `);
    });
    it("Test render ZPocketHeader - with content", async () => {
        const page = await newSpecPage({
            components: [ZPocketHeader],
            html: `<z-pocket-header>pocket header content</z-pocket-header>`,
        });
        expect(page.root).toEqualHtml(`
      <z-pocket-header>
        <mock:shadow-root>
          <header role="button" tabindex="0" style="undefined: rgba(0,0,0,0);">
            <slot></slot>
          </header>
        </mock:shadow-root>
        pocket header content
      </z-pocket-header>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map
