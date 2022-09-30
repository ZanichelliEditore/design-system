import {newSpecPage} from "@stencil/core/testing";

import {ZMyzCardDictionary} from "./index";

describe("Suite test ZMyzCardDictionary", () => {
  it("Test render ZMyzCardDictionary - empty", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardDictionary],
      html: `<z-myz-card-dictionary></z-myz-card-dictionary>`,
    });
    expect(page.root).toEqualHtml(`
      <z-myz-card-dictionary>
        <mock:shadow-root>
          <div>
            <z-myz-card>
              <z-myz-card-header></z-myz-card-header>
              <div class="content">
                <div class="front">
                  <z-myz-card-body>
                    <z-myz-card-cover slot="cover"></z-myz-card-cover>
                  </z-myz-card-body>
                  <z-button variant="secondary" icon="informationsource" size="x-small">INFO</z-button>
                </div>
                <div class="back">
                  <slot name="info"></slot>
                </div>
              </div>
              <slot></slot>
            </z-myz-card>
          </div>
        </mock:shadow-root>
      </z-myz-card-dictionary>
    `);
  });

  it("Test render ZMyzCardDictionary - with props", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardDictionary],
      html: `<z-myz-card-dictionary name="title" cover="img-url" disabled="true"></z-myz-card-dictionary>`,
    });
    expect(page.root).toEqualHtml(`
      <z-myz-card-dictionary name="title" cover="img-url" disabled="true">
        <mock:shadow-root>
          <div>
            <z-myz-card>
              <z-myz-card-header titolo="title"></z-myz-card-header>
              <div class="content">
                <div class="front">
                  <z-myz-card-body>
                    <z-myz-card-cover titolo="title" img="img-url" slot="cover" faded=""></z-myz-card-cover>
                  </z-myz-card-body>
                  <z-button variant="secondary" icon="informationsource" size="x-small">INFO</z-button>
                </div>
                <div class="back">
                  <slot name="info"></slot>
                </div>
              </div>
              <slot></slot>
            </z-myz-card>
          </div>
        </mock:shadow-root>
      </z-myz-card-dictionary>
    `);
  });

  it("Test render ZMyzCardDictionary - flipped", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardDictionary],
      html: `<z-myz-card-dictionary name="title" cover="img-url" flipped="true"></z-myz-card-dictionary>`,
    });
    expect(page.root).toEqualHtml(`
      <z-myz-card-dictionary name="title" cover="img-url" flipped="true">
        <mock:shadow-root>
          <div>
            <z-myz-card>
              <z-myz-card-header titolo="title"></z-myz-card-header>
              <div class="content flipped">
                <div class="front">
                  <z-myz-card-body>
                    <z-myz-card-cover titolo="title" img="img-url" slot="cover"></z-myz-card-cover>
                  </z-myz-card-body>
                  <z-button disabled variant="secondary" icon="informationsource" size="x-small">INFO</z-button>
                </div>
                <div class="back">
                  <slot name="info"></slot>
                </div>
              </div>
              <slot></slot>
            </z-myz-card>
          </div>
        </mock:shadow-root>
      </z-myz-card-dictionary>
    `);
  });

  it("Test render ZMyzCardDictionary - with props info button hidden", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardDictionary],
      html: `<z-myz-card-dictionary hideinfobtn="true" name="title" cover="img-url" disabled="true"></z-myz-card-dictionary>`,
    });
    expect(page.root).toEqualHtml(`
      <z-myz-card-dictionary name="title" cover="img-url" disabled="true" hideinfobtn="true" >
        <mock:shadow-root>
          <div>
            <z-myz-card>
              <z-myz-card-header titolo="title"></z-myz-card-header>
              <div class="content">
                <div class="front">
                  <z-myz-card-body>
                    <z-myz-card-cover titolo="title" img="img-url" slot="cover" faded=""></z-myz-card-cover>
                  </z-myz-card-body>
                  <z-button class="hide-info" variant="secondary" icon="informationsource" size="x-small">INFO</z-button>
                </div>
                <div class="back">
                  <slot name="info"></slot>
                </div>
              </div>
              <slot></slot>
            </z-myz-card>
          </div>
        </mock:shadow-root>
      </z-myz-card-dictionary>
    `);
  });
});
