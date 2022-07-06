import { newSpecPage } from "@stencil/core/testing";

import { ZButton } from "./index";

describe("Suite test ZButton", () => {
  it("Test render ZButton", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button></z-button>`,
    });
    expect(page.root).toEqualHtml(`
    <z-button size="big" variant="primary" style="pointer-events: auto;">
      <button class="big primary" type="button"></button>
      </z-button>
    `);
  });

  it("Test render ZButton con testo e aria-label", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button aria-label="Open">text</z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button aria-label="Open" class="with-text" size="big" variant="primary" style="pointer-events: auto;">
          <button aria-label="Open" type="button" class="big primary">
          text
          </button>
     </z-button>
    `);
  });

  it("Test render ZButton con icon", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button icon="icon"></z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button size="big" variant="primary" icon="icon" style="pointer-events: auto;">
          <button type="button" class="big primary">
            <z-icon name="icon" height="16" width="16"></z-icon>
          </button>
      </z-button>
    `);
  });

  it("Test render ZButton variant", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button variant="secondary"></z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button size="big" variant="secondary" style="pointer-events: auto;">
          <button type="button" class="big secondary">       
          </button>
      </z-button>
    `);
  });

  it("Test render ZButton small", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button size="small"></z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button size="small" variant="primary"  style="pointer-events: auto;">
          <button type="button" class="small  primary">
          </button>
      </z-button>
    `);
  });

  it("Test render ZButton disabled", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button disabled></z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button size="big" variant="primary" disabled  style="pointer-events: none;">
          <button type="button" class="big primary" disabled>
          </button>
      </z-button>
    `);
  });

  it("Test render ZButton with link and variant", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button variant="primary" href="https://wikipedia.com">link</z-button>`,
    });

    expect(page.root).toEqualHtml(`
      <z-button class="with-text" size="big" variant="primary"  href="https://wikipedia.com"  style="pointer-events: auto;">
            <a href="https://wikipedia.com" class="big primary">
                  link
          </a>
            </button>
      </z-button>
    `);
  });
});
