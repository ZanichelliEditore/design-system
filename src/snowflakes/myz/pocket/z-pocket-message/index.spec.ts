import {newSpecPage} from "@stencil/core/testing";

import {ZPocketMessage} from "./index";

describe("Suite test ZMessage", () => {
  it("Test render ZMessage", async () => {
    const page = await newSpecPage({
      components: [ZPocketMessage],
      html: `<z-pocket-message></z-pocket-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-pocket-message>
        <mock:shadow-root>
          <div>
            <z-icon name="exclamation-circle"></z-icon>
            <div class="content">
              <slot></slot>
            </div>
            <div class="cta-wrapper">
              <slot name="cta"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </z-pocket-message>
    `);
  });

  it("Test render ZMessage - with content", async () => {
    const page = await newSpecPage({
      components: [ZPocketMessage],
      html: `<z-pocket-message>message content</z-pocket-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-pocket-message>
        <mock:shadow-root>
          <div>
            <z-icon name="exclamation-circle"></z-icon>
            <div class="content">
              <slot></slot>
            </div>
            <div class="cta-wrapper">
              <slot name="cta"></slot>
            </div>
          </div>
        </mock:shadow-root>
        message content
      </z-pocket-message>
    `);
  });

  it("Test render ZMessage - with content and cta", async () => {
    const page = await newSpecPage({
      components: [ZPocketMessage],
      html: `<z-pocket-message>
        message content
        <z-button slot="cta">cta 1</z-button>
        <z-button slot="cta">cta 2</z-button>
      </z-pocket-message>`,
    });

    expect(page.root).toEqualHtml(`
      <z-pocket-message>
        <mock:shadow-root>
          <div>
            <z-icon name="exclamation-circle"></z-icon>
            <div class="content">
              <slot></slot>
            </div>
            <div class="cta-wrapper">
              <slot name="cta"></slot>
            </div>
          </div>
        </mock:shadow-root>
        message content
        <z-button slot="cta">cta 1</z-button>
        <z-button slot="cta">cta 2</z-button>
      </z-pocket-message>
    `);
  });
});
