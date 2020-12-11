import { newSpecPage } from "@stencil/core/testing";

import { ZCardDictionary } from "./index";

describe("Suite test ZCardDictionary", () => {
  it("Test render ZCardDictionary - empty", async () => {
    const page = await newSpecPage({
      components: [ZCardDictionary],
      html: `<z-card-dictionary></z-card-dictionary>`
    });
    expect(page.root).toEqualHtml(`
      <z-card-dictionary>
        <mock:shadow-root>
          <div class="">
            <div class="front">
              <z-card>
                <z-card-header></z-card-header>
                <z-card-body>
                  <z-card-cover slot="cover"></z-card-cover>
                </z-card-body>
                <slot></slot>
              </z-card>
              <z-button variant="secondary" icon="informationsource" issmall="">INFO</z-button>
            </div>
            <div class="back">
              <z-card>
                <z-card-header></z-card-header>
                <z-card-body></z-card-body>
                <div class="info">
                  <slot name="back-info"></slot>
                </div>
                <slot name="back-footer"></slot>
              </z-card>
            </div>
          </div>
        </mock:shadow-root>
      </z-card-dictionary>
    `);
  });

  it("Test render ZCardDictionary - with props", async () => {
    const page = await newSpecPage({
      components: [ZCardDictionary],
      html: `<z-card-dictionary name="title" cover="img-url" flipped="true" disabled="true"></z-card-dictionary>`
    });
    expect(page.root).toEqualHtml(`
      <z-card-dictionary name="title" cover="img-url" flipped="true" disabled="true">
        <mock:shadow-root>
          <div class="flipped">
            <div class="front">
              <z-card>
                <z-card-header titolo="title"></z-card-header>
                <z-card-body>
                  <z-card-cover titolo="title" img="img-url" slot="cover" faded=""></z-card-cover>
                </z-card-body>
                <slot></slot>
              </z-card>
              <z-button variant="secondary" icon="informationsource" issmall="">INFO</z-button>
            </div>
            <div class="back">
              <z-card>
                <z-card-header titolo="title"></z-card-header>
                <z-card-body></z-card-body>
                <div class="info">
                  <slot name="back-info"></slot>
                </div>
                <slot name="back-footer"></slot>
              </z-card>
            </div>
          </div>
        </mock:shadow-root>
      </z-card-dictionary>
    `);
  });
});
