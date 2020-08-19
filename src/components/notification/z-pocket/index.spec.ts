import { newSpecPage } from "@stencil/core/testing";

import { ZPocket } from "./index";

describe("Suite test ZPocket", () => {
  it("Test render ZPocket", async () => {
    const page = await newSpecPage({
      components: [ZPocket],
      html: `<z-pocket></z-pocket>`
    });

    expect(page.root).toEqualHtml(`
      <z-pocket>
        <mock:shadow-root>
          <div data-action="pocketBackground" class="open false">
            <div id="" style="undefined: rgba(0,0,0,0);">
              <header role="button" tabindex="0">
                <z-icon name="circle-chevron-down-fill" width="24" height="24" />
              </header>
              <main class="open">
                <slot />
              </main>
            </div>
          </div>
        </mock:shadow-root>
      </z-pocket>
    `);
  });

  it("Test render ZPocket - closed", async () => {
    const page = await newSpecPage({
      components: [ZPocket],
      html: `<z-pocket isopen="false"></z-pocket>`
    });

    expect(page.root).toEqualHtml(`
      <z-pocket isopen="false">
        <mock:shadow-root>
          <div data-action="pocketBackground" class="false">
            <div id="" style="undefined: rgba(0,0,0,0);">
              <header role="button" tabindex="0">
                <z-icon name="circle-chevron-up-fill" width="24" height="24" />
              </header>
              <main>
                <slot />
              </main>
            </div>
          </div>
        </mock:shadow-root>
      </z-pocket>
    `);
  });

  it("Test render ZPocket - with props", async () => {
    const page = await newSpecPage({
      components: [ZPocket],
      html: `<z-pocket pocketid="pocket" ismodal="true"></z-pocket>`
    });

    expect(page.root).toEqualHtml(`
      <z-pocket pocketid="pocket" ismodal="true">
        <mock:shadow-root>
          <div data-action="pocketBackground" data-pocket="pocket" class="open modal">
            <div id="pocket" style="undefined: rgba(0,0,0,0);">
              <header role="button" tabindex="0">
                <z-icon name="circle-chevron-down-fill" width="24" height="24" />
              </header>
              <main class="open">
                <slot />
              </main>
            </div>
          </div>
        </mock:shadow-root>
      </z-pocket>
    `);
  });

  it("Test render ZPocket - with content", async () => {
    const page = await newSpecPage({
      components: [ZPocket],
      html: `<z-pocket pocketid="pocket" ismodal="true">
        <div>z-pocket main content</div>
      </z-pocket>`
    });

    expect(page.root).toEqualHtml(`
      <z-pocket pocketid="pocket" ismodal="true">
        <mock:shadow-root>
          <div data-action="pocketBackground" data-pocket="pocket" class="open modal">
            <div id="pocket" style="undefined: rgba(0,0,0,0);">
              <header role="button" tabindex="0">
                <z-icon name="circle-chevron-down-fill" width="24" height="24" />
              </header>
              <main class="open">
                <slot />
              </main>
            </div>
          </div>
        </mock:shadow-root>
        <div>z-pocket main content</div>
      </z-pocket>
    `);
  });

  it("Test render ZPocket - with single item", async () => {
    const page = await newSpecPage({
      components: [ZPocket],
      html: `<z-pocket pocketid="pocket" items='[{"id":"item_1","message":"message","cta":{"label":"cta","variant":"tertiary"}}]'>
      <div>z-pocket main content</div>
    </z-pocket>`
    });
    expect(page.root).toEqualHtml(`
      <z-pocket pocketid="pocket" items='[{"id":"item_1","message":"message","cta":{"label":"cta","variant":"tertiary"}}]'>
        <mock:shadow-root>
          <div data-action="pocketBackground" data-pocket="pocket" class="false open">
            <div id="pocket" style="undefined: rgba(0,0,0,0);">
              <header role="button" tabindex="0">
                <z-icon name="circle-chevron-down-fill" width="24" height="24" />
              </header>
              <main class="open">
                <div>
                  <span>message</span>
                  <z-button variant="tertiary">cta</z-button>
                </div>
              </main>
            </div>
          </div>
        </mock:shadow-root>
        <div>z-pocket main content</div>
      </z-pocket>
    `);
  });

  it("Test render ZPocket - with multiple items", async () => {
    const page = await newSpecPage({
      components: [ZPocket],
      html: `<z-pocket pocketid="pocket" items='[{"id":"item_1","message":"message","cta":{"label":"cta","variant":"tertiary"}},{"id":"item_2","message":"message 2"}]'>
      <div>z-pocket main content</div>
    </z-pocket>`
    });
    expect(page.root).toEqualHtml(`
      <z-pocket pocketid="pocket" items='[{"id":"item_1","message":"message","cta":{"label":"cta","variant":"tertiary"}},{"id":"item_2","message":"message 2"}]'>
        <mock:shadow-root>
          <div data-action="pocketBackground" data-pocket="pocket" class="false open">
            <div id="pocket" style="undefined: rgba(0,0,0,0);">
              <header role="button" tabindex="0">
                <z-icon name="circle-chevron-down-fill" width="24" height="24" />
              </header>
              <main class="open">
                <div>
                  <span>message</span>
                  <z-button variant="tertiary">cta</z-button>
                </div>
                <footer>
                  <z-icon name="circle-chevron-left" width="24" height="24" class="disabled"></z-icon>
                  <span>1/2</span>
                  <z-icon name="circle-chevron-right" width="24" height="24" class=""></z-icon>
                </footer>
              </main>
            </div>
          </div>
        </mock:shadow-root>
        <div>z-pocket main content</div>
      </z-pocket>
    `);
  });

  it("Test render ZPocket - with multiple items and selected item", async () => {
    const page = await newSpecPage({
      components: [ZPocket],
      html: `<z-pocket pocketid="pocket" items='[{"id":"item_1","message":"message","cta":{"label":"cta","variant":"tertiary"}},{"id":"item_2","message":"message 2"}]'>
      <div>z-pocket main content</div>
    </z-pocket>`
    });
    page.rootInstance.currentItem = 2;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-pocket pocketid="pocket" items='[{"id":"item_1","message":"message","cta":{"label":"cta","variant":"tertiary"}},{"id":"item_2","message":"message 2"}]'>
        <mock:shadow-root>
          <div data-action="pocketBackground" data-pocket="pocket" class="false open">
            <div id="pocket" style="undefined: rgba(0,0,0,0);">
              <header role="button" tabindex="0">
                <z-icon name="circle-chevron-down-fill" width="24" height="24" />
              </header>
              <main class="open">
                <div>
                  <span>message 2</span>
                </div>
                <footer>
                  <z-icon name="circle-chevron-left" width="24" height="24" class=""></z-icon>
                  <span>2/2</span>
                  <z-icon name="circle-chevron-right" width="24" height="24" class="disabled"></z-icon>
                </footer>
              </main>
            </div>
          </div>
        </mock:shadow-root>
        <div>z-pocket main content</div>
      </z-pocket>
    `);
  });
});
