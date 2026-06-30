import {newSpecPage} from "@stencil/core/testing";
import {ZInfoBox} from "./index";

describe("Suite test ZInfoBox", () => {
  it("Test render ZInfoBox closable", async () => {
    const page = await newSpecPage({
      components: [ZInfoBox],
      html: `<z-info-box boxid="box" isclosable="true"></z-info-box>`,
    });

    expect(page.root).toEqualHtml(`
      <z-info-box boxid="box" isclosable="true" id="box">
        <mock:shadow-root>
          <div class="main-content">
            <slot name="content"></slot>
            <button class="close-button" aria-label="Chiudi pannello informazioni">
              <z-icon name="multiply"></z-icon>
            </button>
          </div>
          <slot name="additional-content"></slot>
        </mock:shadow-root>
      </z-info-box>
    `);
  });

  it("Test render ZInfoBox non closable", async () => {
    const page = await newSpecPage({
      components: [ZInfoBox],
      html: `<z-info-box isclosable="false"></z-info-box>`,
    });

    expect(page.root).toEqualHtml(`
      <z-info-box isclosable="false">
        <mock:shadow-root>
          <div class="main-content">
            <slot name="content"></slot>
          </div>
          <slot name="additional-content"></slot>
        </mock:shadow-root>
      </z-info-box>
    `);
  });

  it("Test render ZInfoBox con content e additional content", async () => {
    const page = await newSpecPage({
      components: [ZInfoBox],
      html: `<z-info-box>
        <span slot="content">info box content</span>
        <div slot="additional-content">
          <div>Example title</div>
          <div>Example content</div>
        </div>
      </z-info-box>`,
    });

    expect(page.root).toEqualHtml(`
      <z-info-box>
        <mock:shadow-root>
          <div class="main-content">
            <slot name="content"></slot>
            <button class="close-button" aria-label="Chiudi pannello informazioni">
              <z-icon name="multiply"></z-icon>
            </button>
          </div>
          <slot name="additional-content"></slot>
        </mock:shadow-root>
        <span slot="content">info box content</span>
        <div slot="additional-content">
          <div>Example title</div>
          <div>Example content</div>
        </div>
      </z-info-box>
    `);
  });

  it("Test render ZInfoBox con leftIcon", async () => {
    const page = await newSpecPage({
      components: [ZInfoBox],
      html: `<z-info-box left-icon="info-filled">
        <span slot="content">info box content</span>
      </z-info-box>`,
    });

    expect(page.root).toEqualHtml(`
      <z-info-box left-icon="info-filled">
        <mock:shadow-root>
          <div class="main-content">
            <div class="left-icon">
              <z-icon name="info-filled"></z-icon>
            </div>
            <slot name="content"></slot>
            <button class="close-button" aria-label="Chiudi pannello informazioni">
              <z-icon name="multiply"></z-icon>
            </button>
          </div>
          <slot name="additional-content"></slot>
        </mock:shadow-root>
        <span slot="content">info box content</span>
      </z-info-box>
    `);
  });
});
