import { newSpecPage } from "@stencil/core/testing";

import { ZInfoBox } from "./index";

describe("Suite test ZInfoBox", () => {
  it("Test render ZInfoBox vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInfoBox],
      html: `<z-info-box></z-info-box>`
    });

    expect(page.root).toEqualHtml(`
      <z-info-box>
        <mock:shadow-root>
          <div>
            <slot name="content"></slot>
            <z-icon data-action="infoBoxClose" name="cross"></z-icon>
          </div>
        </mock:shadow-root>
      </z-info-box>
    `);
  });

  it("Test render ZInfoBox con props", async () => {
    const page = await newSpecPage({
      components: [ZInfoBox],
      html: `<z-info-box boxid="box" isclosable="true"></z-info-box>`
    });

    expect(page.root).toEqualHtml(`
      <z-info-box boxid="box" isclosable="true">
        <mock:shadow-root>
          <div id="box">
            <slot name="content"></slot>
            <z-icon data-action="infoBoxClose" name="cross"></z-icon>
          </div>
        </mock:shadow-root>
      </z-info-box>
    `);
  });

  it("Test render ZInfoBox non closable", async () => {
    const page = await newSpecPage({
      components: [ZInfoBox],
      html: `<z-info-box boxid="box" isclosable="false"></z-info-box>`
    });

    expect(page.root).toEqualHtml(`
      <z-info-box boxid="box" isclosable="false">
        <mock:shadow-root>
          <div id="box">
            <slot name="content"></slot>
          </div>
        </mock:shadow-root>
      </z-info-box>
    `);
  });

  it("Test render ZInfoBox con content", async () => {
    const page = await newSpecPage({
      components: [ZInfoBox],
      html: `<z-info-box boxid="box">
          <span slot="content">info box content</span>
        </z-info-box>`
    });

    expect(page.root).toEqualHtml(`
      <z-info-box boxid="box">
        <mock:shadow-root>
          <div id="box">
            <slot name="content"></slot>
            <z-icon data-action="infoBoxClose" name="cross"></z-icon>
          </div>
        </mock:shadow-root>
            <span slot="content">info box content</span>
      </z-info-box>
    `);
  });
});
