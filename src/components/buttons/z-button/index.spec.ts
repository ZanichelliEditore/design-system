import { newSpecPage } from "@stencil/core/testing";

import { ZButton } from "./index";

describe("Suite test ZButton", () => {
  it("Test render ZButton", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button></z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button size="big" variant="primary">
        <button class="z-button--container" type="button"></button>
      </z-button>
    `);
  });

  it("Test render ZButton con testo e aria-label", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button aria-label="Open">text</z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button aria-label="Open" size="big" variant="primary">
        <button aria-label="Open" type="button" class="z-button--container z-button--has-text">
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
      <z-button size="big" variant="primary" icon="icon">
        <button type="button" class="z-button--container">
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
      <z-button size="big" variant="secondary">
        <button type="button" class="z-button--container"></button>
      </z-button>
    `);
  });

  it("Test render ZButton small", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button size="small"></z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button size="small" variant="primary">
        <button type="button" class="z-button--container"></button>
      </z-button>
    `);
  });

  it("Test render ZButton disabled", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button disabled></z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button size="big" variant="primary" disabled>
        <button type="button" class="z-button--container" disabled></button>
      </z-button>
    `);
  });

  it("Test render ZButton with link and variant", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button variant="primary" href="https://wikipedia.com">link</z-button>`,
    });

    expect(page.root).toEqualHtml(`
      <z-button size="big" variant="primary" href="https://wikipedia.com">
        <a href="https://wikipedia.com" class="z-button--container z-button--has-text">
          link
        </a>
      </z-button>
    `);
  });
});
