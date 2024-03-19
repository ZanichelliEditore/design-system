import { newSpecPage } from "@stencil/core/testing";
import { ZMyzCardFooterSections } from "./index";
describe("Suite test ZMyzCardFooterSections", () => {
    it("Test render ZMyzCardFooterSections - empty", async () => {
        const page = await newSpecPage({
            components: [ZMyzCardFooterSections],
            html: `<z-myz-card-footer-sections></z-myz-card-footer-sections>`,
        });
        expect(page.root).toEqualHtml(`
      <z-myz-card-footer-sections>
        <mock:shadow-root>
          <div>
            <footer>
              <div class="top">
                <slot name="top"></slot>
              </div>
              <div class="bottom">
                <slot name="bottom"></slot>
              </div>
            </footer>
          </div>
        </mock:shadow-root>
      </z-myz-card-footer-sections>
    `);
    });
    it("Test render ZMyzCardFooterSections - with slots", async () => {
        const page = await newSpecPage({
            components: [ZMyzCardFooterSections],
            html: `<z-myz-card-footer-sections>
        <p slot="top">top footer content</p>
        <p slot="bottom">bottom footer content</p>
      </z-myz-card-footer-sections>`,
        });
        expect(page.root).toEqualHtml(`
      <z-myz-card-footer-sections>
        <mock:shadow-root>
          <div>
            <footer>
              <div class="top">
                <slot name="top"></slot>
              </div>
              <div class="bottom">
                <slot name="bottom"></slot>
              </div>
            </footer>
          </div>
        </mock:shadow-root>
        <p slot="top">top footer content</p>
        <p slot="bottom">bottom footer content</p>
      </z-myz-card-footer-sections>
    `);
    });
});
//# sourceMappingURL=index.spec.js.map
