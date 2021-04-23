import { newSpecPage } from "@stencil/core/testing";

import { ZStoriaButton } from "./index";

describe("Suite test ZStoriaButton", () => {
  it("Test render empty ZStoriaButton", async () => {
    const page = await newSpecPage({
      components: [ZStoriaButton],
      html: `<z-storia-button></z-storia-button>`
    });

    expect(page.root).toEqualHtml(`
      <z-storia-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </z-storia-button>
    `)
  });

  it("Test render ZStoriaButton with button", async () => {
    const page = await newSpecPage({
      components: [ZStoriaButton],
      html: `<z-storia-button>
        <button>invio</button>
      </z-storia-button>`
    });

    expect(page.root).toEqualHtml(`
      <z-storia-button>
        <mock:shadow-root>
          <button>invio</button>
        </mock:shadow-root>
      </z-storia-button>
    `);
  });

  it("Test render ZStoriaButton with link and variant", async () => {
    const page = await newSpecPage({
      components: [ZStoriaButton],
      html: `<z-storia-button variant="primary">
        <a href="https://wikipedia.com">Link</button>
      </z-storia-button>`
    });

    expect(page.root).toEqualHtml(`
      <z-storia-button variant="primary">
        <mock:shadow-root>
          <a href="https://wikipedia.com">Link</button>
        </mock:shadow-root>
      </z-storia-button>
    `);
  });
});

