import { newSpecPage } from "@stencil/core/testing";

import { ZModal } from "./index";

describe("Suite test ZModal", () => {
  it("Test render ZModal vuoto", async () => {
    const page = await newSpecPage({
      components: [ZModal],
      html: `<z-modal></z-modal>`
    });
    expect(page.root).toEqualHtml(`
      <z-modal>
        <mock:shadow-root>
          <div data-action="modalBackground">
            <div class="scrollWrapper" data-action="modalBackground">
              <div id="">
                <header>
                  <div>
                  </div>
                  <z-icon name="circle-cross-fill" tabindex="0" width="24" height="24" data-action="modalClose" />
                </header>
                <main>
                  <slot name="modalContent" />
                </main>
                <div class="bottomBackground" data-action="modalBackground"></div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-modal>
    `);
  });

  it("Test render ZModal with props", async () => {
    const page = await newSpecPage({
      components: [ZModal],
      html: `<z-modal modalid="modal" modaltitle="title" modalsubtitle="subtitle"></z-modal>`
    });
    expect(page.root).toEqualHtml(`
      <z-modal modalid="modal" modaltitle="title" modalsubtitle="subtitle">
        <mock:shadow-root>
          <div data-action="modalBackground" data-modal="modal">
            <div class="scrollWrapper" data-action="modalBackground" data-modal="modal">
              <div id="modal">
                <header>
                  <div>
                    <h1>title</h1>
                    <h2>subtitle</h2>
                  </div>
                  <z-icon name="circle-cross-fill" tabindex="0" width="24" height="24" data-action="modalClose" data-modal="modal" />
                </header>
                <main>
                  <slot name="modalContent" />
                </main>
                <div class="bottomBackground" data-action="modalBackground" data-modal="modal"></div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-modal>
    `);
  });

  it("Test render ZModal with slot", async () => {
    const page = await newSpecPage({
      components: [ZModal],
      html: `<z-modal><div slot="modalContent">Contenuto dello <b>slot</b></div></z-modal>`
    });

    page.rootInstance.isMobile = true;
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <z-modal>
        <mock:shadow-root>
          <div data-action="modalBackground">
            <div class="scrollWrapper" data-action="modalBackground">
              <div id="">
                <header>
                  <div>
                  </div>
                  <z-icon name="circle-cross-fill" tabindex="0" width="24" height="24" data-action="modalClose" />
                </header>
                <main>
                  <slot name="modalContent" />
                </main>
                <div class="bottomBackground" data-action="modalBackground"></div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <div slot="modalContent">Contenuto dello <b>slot</b></div>
      </z-modal>
    `);
  });

  it("Test render ZModal without header", async () => {
    const page = await newSpecPage({
      components: [ZModal],
      html: `<z-modal modalid="modal" modaltitle="title" modalsubtitle="subtitle" hasheader="false"></z-modal>`
    });
    expect(page.root).toEqualHtml(`
      <z-modal modalid="modal" modaltitle="title" modalsubtitle="subtitle" hasheader="false">
        <mock:shadow-root>
          <div data-action="modalBackground" data-modal="modal">
            <div class="scrollWrapper" data-action="modalBackground" data-modal="modal">
              <div id="modal">
                <div class="iconWrapper">
                  <z-icon name="circle-cross-fill" tabindex="0" width="24" height="24" data-action="modalClose" data-modal="modal" />
                </div>
                <main class="noHeader">
                  <slot name="modalContent" />
                </main>
                <div class="bottomBackground" data-action="modalBackground" data-modal="modal"></div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-modal>
    `);
  });
});
