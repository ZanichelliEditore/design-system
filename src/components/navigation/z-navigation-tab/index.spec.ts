import { newSpecPage } from "@stencil/core/testing";

import { ZNavigationTab } from "./index";

describe("Suite test ZNavigationTab", () => {

  it("Test render ZNavigationTab empty", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `<z-navigation-tab></z-navigation-tab>`});

    expect(page.root).toEqualHtml(`
      <z-navigation-tab>
        <mock:shadow-root>
          <button role="tab">
            <slot name="icon"></slot>
            <slot name="label"></slot>
          </button>
        </mock:shadow-root>
      </z-navigation-tab>
    `);
  });

  it("Test render ZNavigationTab with icon & label", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `
        <z-navigation-tab>
          <button>
            <z-icon name="house" slot="icon"></z-icon>
            <span slot="label">Home</span>
          </button>
        </z-navigation-tab>
      `
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tab>
        <mock:shadow-root>
          <button role="tab">
            <slot name="icon"></slot>
            <slot name="label"></slot>
          </button>
        </mock:shadow-root>
        <button>
          <z-icon name="house" slot="icon"></z-icon>
          <span slot="label">Home</span>
        </button>
      </z-navigation-tab>
    `);
  });

  it("Test render ZNavigationTab with only label", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `<z-navigation-tab>
        <button>
          <span slot="label">App</span>
        </button>
      </z-navigation-tab>`});

    expect(page.root).toEqualHtml(`
      <z-navigation-tab>
        <mock:shadow-root>
          <button role="tab">
            <slot name="icon"></slot>
            <slot name="label"></slot>
          </button>
        </mock:shadow-root>
        <button>
          <span slot="label">App</span>
        </button>
      </z-navigation-tab>
    `);
  });

  it("Test render ZNavigationTab with only icon", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `
      <z-navigation-tab>
        <button>
          <z-icon name="house" slot="icon"></z-icon>
        </button>
      </z-navigation-tab>`
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tab>
        <mock:shadow-root>
          <button role="tab">
            <slot name="icon"></slot>
            <slot name="label"></slot>
          </button>
        </mock:shadow-root>
        <button>
          <z-icon name="house" slot="icon"></z-icon>
        </button>
      </z-navigation-tab>
    `);
  });
});
