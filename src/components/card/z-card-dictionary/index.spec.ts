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
          <div>
            <z-card>
              <z-card-header></z-card-header>
              <div class="content">
                <div class="front">
                  <z-card-body>
                    <z-card-cover slot="cover"></z-card-cover>
                  </z-card-body>
                  <z-button variant="secondary" icon="informationsource" issmall="">INFO</z-button>
                </div>
                <div class="back">
                  <slot name="info"></slot>
                </div>
              </div>
              <slot></slot>
            </z-card>
          </div>
        </mock:shadow-root>
      </z-card-dictionary>
    `);
  });

  it("Test render ZCardDictionary - with props", async () => {
    const page = await newSpecPage({
      components: [ZCardDictionary],
      html: `<z-card-dictionary name="title" cover="img-url" disabled="true"></z-card-dictionary>`
    });
    expect(page.root).toEqualHtml(`
      <z-card-dictionary name="title" cover="img-url" disabled="true">
        <mock:shadow-root>
          <div>
            <z-card>
              <z-card-header titolo="title"></z-card-header>
              <div class="content">
                <div class="front">
                  <z-card-body>
                    <z-card-cover titolo="title" img="img-url" slot="cover" faded=""></z-card-cover>
                  </z-card-body>
                  <z-button variant="secondary" icon="informationsource" issmall="">INFO</z-button>
                </div>
                <div class="back">
                  <slot name="info"></slot>
                </div>
              </div>
              <slot></slot>
            </z-card>
          </div>
        </mock:shadow-root>
      </z-card-dictionary>
    `);
  });

  it("Test render ZCardDictionary - flipped", async () => {
    const page = await newSpecPage({
      components: [ZCardDictionary],
      html: `<z-card-dictionary name="title" cover="img-url" flipped="true"></z-card-dictionary>`
    });
    expect(page.root).toEqualHtml(`
      <z-card-dictionary name="title" cover="img-url" flipped="true">
        <mock:shadow-root>
          <div>
            <z-card>
              <z-card-header titolo="title"></z-card-header>
              <div class="content flipped">
                <div class="front">
                  <z-card-body>
                    <z-card-cover titolo="title" img="img-url" slot="cover"></z-card-cover>
                  </z-card-body>
                  <z-button variant="secondary" icon="informationsource" issmall="">INFO</z-button>
                </div>
                <div class="back">
                  <slot name="info"></slot>
                </div>
              </div>
              <slot></slot>
            </z-card>
          </div>
        </mock:shadow-root>
      </z-card-dictionary>
    `);
  });
});
