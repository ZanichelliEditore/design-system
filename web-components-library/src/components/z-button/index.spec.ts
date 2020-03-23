import { newSpecPage } from "@stencil/core/testing";

import { ZButton } from "./index";

describe("Suite test ZButton", () => {
  it("Test render ZButton", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button></z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button>
        <mock:shadow-root>
          <button type="button" class="primary false">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </z-button>
    `);
  });

  it("Test render ZButton con contenuto", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button>label</z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button>
        <mock:shadow-root>
          <button type="button" class="primary false">
            <slot></slot>
          </button>
          </mock:shadow-root>
          label
      </z-button>
    `);
  });

  it("Test render ZButton con icon", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button icon="icon"></z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button icon="icon">
        <mock:shadow-root>
          <button type="button" class="primary false">
            <z-icon name="icon" height="16" width="16"></z-icon>
            <slot></slot>
          </button>
        </mock:shadow-root>
      </z-button>
    `);
  });

  it("Test render ZButton variant", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button variant="secondary"></z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button Variant="secondary">
        <mock:shadow-root>
          <button type="button" class="secondary false">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </z-button>
    `);
  });

  it("Test render ZButton small", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button issmall="true"></z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button issmall="true">
        <mock:shadow-root>
          <button type="button" class="primary small">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </z-button>
    `);
  });

  it("Test render ZButton disabled", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button disabled></z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button disabled>
        <mock:shadow-root>
          <button type="button" class="primary false" disabled>
            <slot></slot>
          </button>
        </mock:shadow-root>
      </z-button>
    `);
  });
});
