import {newSpecPage} from "@stencil/core/testing";

import {ZSfButton} from "./index";

describe("Suite test ZSfButton", () => {
  it("Test render ZSfButton", async () => {
    const page = await newSpecPage({
      components: [ZSfButton],
      html: `<z-sf-button></z-sf-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-button icon-position="left" size="big" variant="primary">
        <button class="z-sf-button--container" type="button"></button>
      </z-sf-button>
    `);
  });

  it("Test render ZSfButton con testo e aria-label", async () => {
    const page = await newSpecPage({
      components: [ZSfButton],
      html: `<z-sf-button aria-label="Open">text</z-sf-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-button aria-label="Open" icon-position="left" size="big" variant="primary">
        <button aria-label="Open" type="button" class="z-sf-button--container z-sf-button--has-text">
          text
        </button>
      </z-sf-button>
    `);
  });

  it("Test render ZSfButton con htmlrole=link", async () => {
    const page = await newSpecPage({
      components: [ZSfButton],
      html: `<z-sf-button htmlrole="link">link</z-sf-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-button htmlrole="link" icon-position="left" size="big" variant="primary">
        <button role="link" type="button" class="z-sf-button--container z-sf-button--has-text">
          link
        </button>
      </z-sf-button>
    `);
  });

  it("Test render ZSfButton con icon", async () => {
    const page = await newSpecPage({
      components: [ZSfButton],
      html: `<z-sf-button icon="icon"></z-sf-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-button size="big" variant="primary" icon="icon" icon-position="left">
        <button type="button" class="z-sf-button--container">
          <z-sf-icon name="icon"></z-sf-icon>
        </button>
      </z-sf-button>
    `);
  });

  it("Test render ZSfButton variant", async () => {
    const page = await newSpecPage({
      components: [ZSfButton],
      html: `<z-sf-button variant="secondary"></z-sf-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-button icon-position="left" size="big" variant="secondary">
        <button type="button" class="z-sf-button--container"></button>
      </z-sf-button>
    `);
  });

  it("Test render ZSfButton small", async () => {
    const page = await newSpecPage({
      components: [ZSfButton],
      html: `<z-sf-button size="small"></z-sf-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-button icon-position="left" size="small" variant="primary">
        <button type="button" class="z-sf-button--container"></button>
      </z-sf-button>
    `);
  });

  it("Test render ZSfButton disabled", async () => {
    const page = await newSpecPage({
      components: [ZSfButton],
      html: `<z-sf-button disabled></z-sf-button>`,
    });
    expect(page.root).toEqualHtml(`
      <z-sf-button icon-position="left" size="big" variant="primary" disabled>
        <button type="button" class="z-sf-button--container" disabled></button>
      </z-sf-button>
    `);
  });

  it("Test render ZSfButton with link and variant", async () => {
    const page = await newSpecPage({
      components: [ZSfButton],
      html: `<z-sf-button variant="primary" href="https://wikipedia.com">link</z-sf-button>`,
    });

    expect(page.root).toEqualHtml(`
      <z-sf-button icon-position="left" size="big" variant="primary" href="https://wikipedia.com">
        <a href="https://wikipedia.com" class="z-sf-button--container z-sf-button--has-text">
          link
        </a>
      </z-sf-button>
    `);
  });

  it("Test render ZSfButton with icon position right for row-reverse", async () => {
    const page = await newSpecPage({
      components: [ZSfButton],
      html: `<z-sf-button icon="icon" icon-position="right">Text</z-sf-button>`,
    });
    expect(page.root.getAttribute("icon-position")).toBe("right");
  });
});
