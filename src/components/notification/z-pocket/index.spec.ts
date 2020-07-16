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
});
