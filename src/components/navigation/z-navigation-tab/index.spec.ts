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
          <slot name="icon"></slot>
          <slot name="label"></slot>
        </mock:shadow-root>
      </z-navigation-tab>
    `);
  });

  it("Test render ZNavigationTab with icon & label", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `
        <z-navigation-tab>
          <z-icon name="house" slot="icon"></z-icon>
          <span slot="label">Home</span>
        </z-navigation-tab>
      `
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tab>
        <mock:shadow-root>
          <slot name="icon"></slot>
          <slot name="label"></slot>
        </mock:shadow-root>
        <z-icon name="house" slot="icon"></z-icon>
        <span slot="label">Home</span>
      </z-navigation-tab>
    `);
  });

  it("Test render ZNavigationTab with label", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `<z-navigation-tab>
        <span slot="label">App</span>
      </z-navigation-tab>`});

    expect(page.root).toEqualHtml(`
      <z-navigation-tab>
        <mock:shadow-root>
          <slot name="icon"></slot>
          <slot name="label"></slot>
        </mock:shadow-root>
        <span slot="label">App</span>
      </z-navigation-tab>
    `);
  });

  it("Test render ZNavigationTab with icon", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTab],
      html: `
      <z-navigation-tab>
        <z-icon name="house" slot="icon"></z-icon>
      </z-navigation-tab>`
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tab>
        <mock:shadow-root>
          <slot name="icon"></slot>
          <slot name="label"></slot>
        </mock:shadow-root>
        <z-icon name="house" slot="icon"></z-icon>
      </z-navigation-tab>
    `);
  });
});
