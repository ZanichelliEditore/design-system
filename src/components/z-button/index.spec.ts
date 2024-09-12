import {newSpecPage} from "@stencil/core/testing";

import {ZButton} from "./index";

describe("Suite test ZButton", () => {
  it("Test render ZButton", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button></z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button aria-label="" size="big" variant="primary">
        <button role="" aria-label="" class="z-button--container" type="button"></button>
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
        <button role="" aria-label="Open" type="button" class="z-button--container z-button--has-text">
          text
        </button>
      </z-button>
    `);
  });

  it("Test render ZButton con role=link", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button role="link">link</z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button aria-label="" role="link" size="big" variant="primary">
        <button aria-label="" role="link" type="button" class="z-button--container z-button--has-text">
          link
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
      <z-button aria-label="" size="big" variant="primary" icon="icon">
        <button role="" aria-label="" type="button" class="z-button--container">
          <z-icon name="icon"></z-icon>
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
      <z-button aria-label="" size="big" variant="secondary">
        <button role="" aria-label="" type="button" class="z-button--container"></button>
      </z-button>
    `);
  });

  it("Test render ZButton small", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button size="small"></z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button aria-label="" size="small" variant="primary">
        <button role="" aria-label="" type="button" class="z-button--container"></button>
      </z-button>
    `);
  });

  it("Test render ZButton disabled", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button disabled></z-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-button aria-label="" size="big" variant="primary" disabled>
        <button role="" aria-label="" type="button" class="z-button--container" disabled></button>
      </z-button>
    `);
  });

  it("Test render ZButton with link and variant", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button variant="primary" href="https://wikipedia.com">link</z-button>`,
    });

    expect(page.root).toEqualHtml(`
      <z-button aria-label="" size="big" variant="primary" href="https://wikipedia.com">
        <a aria-label="" href="https://wikipedia.com" class="z-button--container z-button--has-text">
          link
        </a>
      </z-button>
    `);
  });
});
