import { newSpecPage } from "@stencil/core/testing";

import { ZMessagesPocket } from "./index";

describe("Suite test ZMessagesPocket", () => {
  it("Test render ZMessagesPocket", async () => {
    const page = await newSpecPage({
      components: [ZMessagesPocket],
      html: `<z-messages-pocket></z-messages-pocket>`
    });

    expect(page.root).toEqualHtml(`
      <z-messages-pocket>
        <mock:shadow-root>
          <z-pocket status="preview" class="preview">
            <z-pocket-header>
              <span>
                Messaggi <span class="badge"></span>
              </span>
              <z-icon name="chevron-up" height="14" width="14"></z-icon>
            </z-pocket-header>
            <z-pocket-body>
              <div class="body">
                <slot></slot>
              </div>
              <div class="gradient"></div>
            </z-pocket-body>
          </z-pocket>
        </mock:shadow-root>
      </z-messages-pocket>
    `);
  });

  it("Test render ZMessagesPocket - open", async () => {
    const page = await newSpecPage({
      components: [ZMessagesPocket],
      html: `<z-messages-pocket status="open"></z-messages-pocket>`
    });

    expect(page.root).toEqualHtml(`
      <z-messages-pocket status="open">
        <mock:shadow-root>
          <z-pocket status="open" class="open">
            <z-pocket-header>
              <span>Riduci</span>
              <z-icon name="chevron-down" height="14" width="14"></z-icon>
            </z-pocket-header>
            <z-pocket-body>
              <div class="body">
                <slot></slot>
              </div>
              <div class="gradient"></div>
            </z-pocket-body>
          </z-pocket>
        </mock:shadow-root>
      </z-messages-pocket>
    `);
  });

  it("Test render ZMessagesPocket - closed", async () => {
    const page = await newSpecPage({
      components: [ZMessagesPocket],
      html: `<z-messages-pocket status="closed"></z-messages-pocket>`
    });

    expect(page.root).toEqualHtml(`
      <z-messages-pocket status="closed">
        <mock:shadow-root>
          <z-pocket status="closed" class="closed">
            <z-pocket-header>
              <span>
                Messaggi <span class="badge"></span>
              </span>
              <z-icon name="chevron-up" height="14" width="14"></z-icon>
            </z-pocket-header>
            <z-pocket-body>
              <div class="body">
                <slot></slot>
              </div>
              <div class="gradient"></div>
            </z-pocket-body>
          </z-pocket>
        </mock:shadow-root>
      </z-messages-pocket>
    `);
  });

  it("Test render ZMessagesPocket - with props", async () => {
    const page = await newSpecPage({
      components: [ZMessagesPocket],
      html: `<z-messages-pocket status="closed" messages="2" pocketid="pocket"></z-messages-pocket>`
    });

    expect(page.root).toEqualHtml(`
      <z-messages-pocket status="closed" messages="2" pocketid="pocket">
        <mock:shadow-root>
          <z-pocket status="closed" class="closed" pocketid="pocket">
            <z-pocket-header pocketid="pocket">
              <span>
                Messaggi <span class="badge">2</span>
              </span>
              <z-icon name="chevron-up" height="14" width="14"></z-icon>
            </z-pocket-header>
            <z-pocket-body pocketid="pocket">
              <div class="body">
                <slot></slot>
              </div>
              <div class="gradient"></div>
            </z-pocket-body>
          </z-pocket>
        </mock:shadow-root>
      </z-messages-pocket>
    `);
  });

  it("Test render ZMessagesPocket - with content", async () => {
    const page = await newSpecPage({
      components: [ZMessagesPocket],
      html: `<z-messages-pocket status="open">
        <z-pocket-message>message</z-pocket-message>
      </z-messages-pocket>`
    });

    expect(page.root).toEqualHtml(`
      <z-messages-pocket status="open">
        <mock:shadow-root>
          <z-pocket status="open" class="open">
            <z-pocket-header>
              <span>Riduci</span>
              <z-icon name="chevron-down" height="14" width="14"></z-icon>
            </z-pocket-header>
            <z-pocket-body>
              <div class="body">
                <slot></slot>
              </div>
              <div class="gradient"></div>
            </z-pocket-body>
          </z-pocket>
        </mock:shadow-root>
        <z-pocket-message>message</z-pocket-message>
      </z-messages-pocket>
    `);
  });
});
