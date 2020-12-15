import { newSpecPage } from "@stencil/core/testing";

import { zCardFooterSections } from "./index";

describe("Suite test zCardFooterSections", () => {
  it("Test render zCardFooterSections - empty", async () => {
    const page = await newSpecPage({
      components: [zCardFooterSections],
      html: `<z-card-footer-sections></z-card-footer-sections>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-footer-sections>
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
      </z-card-footer-sections>
    `);
  });

  it("Test render zCardFooterSections - with slots", async () => {
    const page = await newSpecPage({
      components: [zCardFooterSections],
      html: `<z-card-footer-sections>
        <p slot="top">top footer content</p>
        <p slot="bottom">bottom footer content</p>
      </z-card-footer-sections>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-footer-sections>
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
      </z-card-footer-sections>
    `);
  });
});
