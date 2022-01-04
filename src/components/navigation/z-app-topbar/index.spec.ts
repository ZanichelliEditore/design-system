import { newSpecPage } from "@stencil/core/testing";

import { ZAppTopbar } from "./index";

describe("Suite test ZAppTopbar", () => {

  it("Test render ZAppTopbar without props", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar></z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar class="dark">
        <mock:shadow-root>
          <div id="content-container">
            <div id="left-panel" class="content-panel">
              <z-logo height="32" imagealt="zanichelli-logo" targetblank="" width="128"></z-logo>
            </div>
            <div id="right-panel" class="content-panel">
              <div id="divider-container">
                <z-divider color="color-white" orientation="vertical"></z-divider>
              </div>
              <slot name="login"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </z-app-topbar>
    `);
  });

  it("Test render ZAppTopbar with contentmaxwidth prop", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar contentmaxwidth=600></z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar class="dark limited-width" contentmaxwidth="600">
        <mock:shadow-root>
           <div class="limited-width" id="content-container" style="--mw: 600px;">
            <div id="left-panel" class="content-panel">
              <z-logo height="32" imagealt="zanichelli-logo" targetblank="" width="128"></z-logo>
            </div>
            <div id="right-panel" class="content-panel">
              <div id="divider-container">
                <z-divider color="color-white" orientation="vertical"></z-divider>
              </div>
              <slot name="login"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </z-app-topbar>
    `);
  });

  it("Test render light ZAppTopbar with logolink set and with app switcher", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar
              theme="light"
              logolink="https://www.zanichelli.it"
              showappswitcher=true
            >
            </z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar
        class="light" logolink="https://www.zanichelli.it"
        showappswitcher="true"
        theme="light"
      >
        <mock:shadow-root>
          <div id="content-container">
            <div id="left-panel" class="content-panel">
              <z-logo height="32" imagealt="zanichelli-logo" link="https://www.zanichelli.it" targetblank="" width="128"></z-logo>
            </div>
            <div id="right-panel" class="content-panel">
              <z-app-switcher theme="light"></z-app-switcher>
              <div id="divider-container">
                <z-divider color="gray800" orientation="vertical"></z-divider>
              </div>
              <slot name="login"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </z-app-topbar>
    `);
  });

  it("Test render ZAppTopbar with topbar links and user dropdown", async () => {
    const page = await newSpecPage({
      components: [ZAppTopbar],
      html: `<z-app-topbar
              topbarcontent='[{"id": "assistenza", "label": "Assistenza", "link": "https://assistenza.zanichelli.it", "icon": "support", "target": "_blank"}]'
            >
              <z-user-dropdown
                slot="login"
                logged=false
              >
              </z-user-dropdown>
            </z-app-topbar>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-topbar class="dark" topbarcontent='[{"id": "assistenza", "label": "Assistenza", "link": "https://assistenza.zanichelli.it", "icon": "support", "target": "_blank"}]'>
        <mock:shadow-root>
          <div id="content-container">
            <div id="left-panel" class="content-panel">
              <z-logo height="32" imagealt="zanichelli-logo" targetblank="" width="128"></z-logo>
            </div>
            <div id="right-panel" class="content-panel">
              <z-link
                htmlid="assistenza"
                textcolor="white"
                href="https://assistenza.zanichelli.it"
                target="_blank"
              >
                Assistenza
              </z-link>
              <div id="divider-container">
                <z-divider color="color-white" orientation="vertical"></z-divider>
              </div>
              <slot name="login"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <z-user-dropdown slot="login" logged=false></z-user-dropdown>
      </z-app-topbar>
    `);
  });

});
