import { newSpecPage } from "@stencil/core/testing";

import { ZAppSwitcher } from "./index";

describe("Suite test ZAppSwitcher", () => {
  it("Test render ZAppSwitcher default", async () => {
    const page = await newSpecPage({
      components: [ZAppSwitcher],
      html: `<z-app-switcher></z-app-switcher>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-switcher>
        <mock:shadow-root>
          <button title="app-switcher">
          <z-icon class="dark" name="app-switcher"></z-icon>
          </button>
        </mock:shadow-root>
      </z-app-switcher>
    `);
  });

  it("Test render ZAppSwitcher dark", async () => {
    const page = await newSpecPage({
      components: [ZAppSwitcher],
      html: `<z-app-switcher variant="dark"></z-app-switcher>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-switcher variant="dark">
        <mock:shadow-root>
          <button title="app-switcher">
          <z-icon class="dark" name="app-switcher"></z-icon>
          </button>
        </mock:shadow-root>
      </z-app-switcher>
    `);
  });
  it("Test render ZAppSwitcher light", async () => {
    const page = await newSpecPage({
      components: [ZAppSwitcher],
      html: `<z-app-switcher theme="light"></z-app-switcher>`,
    });

    expect(page.root).toEqualHtml(`
      <z-app-switcher theme="light">
        <mock:shadow-root>
          <button title="app-switcher">
          <z-icon class="light" name="app-switcher"></z-icon>
          </button>
        </mock:shadow-root>
      </z-app-switcher>
    `);
  });
});
