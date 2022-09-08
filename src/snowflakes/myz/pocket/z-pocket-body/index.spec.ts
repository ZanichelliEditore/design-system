import {newSpecPage} from "@stencil/core/testing";

import {ZPocketBody} from "./index";

describe("Suite test ZPocketBody", () => {
  it("Test render ZPocketBody", async () => {
    const page = await newSpecPage({
      components: [ZPocketBody],
      html: `<z-pocket-body></z-pocket-body>`,
    });

    expect(page.root).toEqualHtml(`
      <z-pocket-body>
        <mock:shadow-root>
          <main class="preview">
            <slot></slot>
          </main>
        </mock:shadow-root>
      </z-pocket-body>
    `);
  });

  it("Test render ZPocketBody - with props", async () => {
    const page = await newSpecPage({
      components: [ZPocketBody],
      html: `<z-pocket-body pocketid="pocket" status="open"></z-pocket-body>`,
    });

    expect(page.root).toEqualHtml(`
      <z-pocket-body pocketid="pocket" status="open">
        <mock:shadow-root>
          <main class="open">
            <slot></slot>
          </main>
        </mock:shadow-root>
      </z-pocket-body>
    `);
  });

  it("Test render ZPocketBody - with content", async () => {
    const page = await newSpecPage({
      components: [ZPocketBody],
      html: `<z-pocket-body>pocket body content</z-pocket-body>`,
    });

    expect(page.root).toEqualHtml(`
      <z-pocket-body>
        <mock:shadow-root>
          <main class="preview">
            <slot></slot>
          </main>
        </mock:shadow-root>
        pocket body content
      </z-pocket-body>
    `);
  });
});
