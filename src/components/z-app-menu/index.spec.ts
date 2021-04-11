import { newSpecPage } from "@stencil/core/testing";

import { ZAppMenu } from "./index";

describe("Suite test ZAppMenu", () => {
  it("Test render ZAppMenu default", async () => {

    const page = await newSpecPage({
      components: [ZAppMenu],
      html: `<z-app-menu></z-app-menu>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-menu>
        <mock:shadow-root>
          <button>
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
      </z-app-menu>
    `)
  });

  it("Test render ZAppMenu dark", async () => {

    const page = await newSpecPage({
      components: [ZAppMenu],
      html: `<z-app-menu variant="dark"></z-app-menu>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-menu variant="dark">
        <mock:shadow-root>
          <button>
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
      </z-app-menu>
    `)
  });
  it("Test render ZAppMenu light", async () => {

    const page = await newSpecPage({
      components: [ZAppMenu],
      html: `<z-app-menu variant="light"></z-app-menu>`
    });

    expect(page.root).toEqualHtml(`
      <z-app-menu variant="light">
        <mock:shadow-root>
          <button>
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
      </z-app-menu>
    `)
  });
});

