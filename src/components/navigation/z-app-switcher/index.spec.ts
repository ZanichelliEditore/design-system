import { newSpecPage } from "@stencil/core/testing";

import { ZAppSwitcher } from "./index";

describe("Suite test ZAppSwitcher", () => {
  it("Test render ZAppSwitcher default", async () => {

    const page = await newSpecPage({
      components: [ZAppSwitcher],
      html: `<z-app-switcher></z-app-switcher>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-switcher>
        <mock:shadow-root>
          <button title="app-switcher">
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
          </button>
        </mock:shadow-root>
      </z-app-switcher>
    `)
  });

  it("Test render ZAppSwitcher dark", async () => {

    const page = await newSpecPage({
      components: [ZAppSwitcher],
      html: `<z-app-switcher variant="dark"></z-app-switcher>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-switcher variant="dark">
        <mock:shadow-root>
          <button title="app-switcher">
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
            <span class="dark"></span>
          </button>
        </mock:shadow-root>
      </z-app-switcher>
    `)
  });
  it("Test render ZAppSwitcher light", async () => {

    const page = await newSpecPage({
      components: [ZAppSwitcher],
      html: `<z-app-switcher theme="light"></z-app-switcher>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-switcher theme="light">
        <mock:shadow-root>
          <button title="app-switcher">
            <span class="light"></span>
            <span class="light"></span>
            <span class="light"></span>
            <span class="light"></span>
            <span class="light"></span>
            <span class="light"></span>
            <span class="light"></span>
            <span class="light"></span>
            <span class="light"></span>
          </button>
        </mock:shadow-root>
      </z-app-switcher>
    `)
  });
});

