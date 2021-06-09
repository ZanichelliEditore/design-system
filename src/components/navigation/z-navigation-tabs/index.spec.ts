import { newSpecPage } from "@stencil/core/testing";

import { ZNavigationTabs } from "./index";

describe("Suite test ZNavigationTabs", () => {

  it("Test render ZNavigationTab Horizontal", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTabs],
      html: `
      <z-navigation-tabs orientation="horizontal" size="big">
        <z-navigation-tab>
          <z-icon name="house" slot="icon"></z-icon>
          <span slot="label">Home</span>
        </z-navigation-tab>
      </z-navigation-tabs>
    `});

    expect(page.root).toEqualHtml(`
      <z-navigation-tabs orientation="horizontal" size="big">
        <mock:shadow-root>
          <nav>
            <slot></slot>
          </nav>
        </mock:shadow-root>
        <z-navigation-tab orientation="horizontal">
          <z-icon name="house" slot="icon"></z-icon>
          <span slot="label">Home</span>
        </z-navigation-tab>
      </z-navigation-tabs>
    `);
  });

  it("Test render ZNavigationTab Horizontal small", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTabs],
      html: `
      <z-navigation-tabs orientation="horizontal" size="small">
        <z-navigation-tab>
          <z-icon name="house" slot="icon"></z-icon>
          <span slot="label">Home</span>
        </z-navigation-tab>
      </z-navigation-tabs>
    `});

    expect(page.root).toEqualHtml(`
      <z-navigation-tabs orientation="horizontal" size="small">
        <mock:shadow-root>
          <nav>
            <slot></slot>
          </nav>
        </mock:shadow-root>
        <z-navigation-tab orientation="horizontal">
          <z-icon name="house" slot="icon"></z-icon>
          <span slot="label">Home</span>
        </z-navigation-tab>
      </z-navigation-tabs>
    `);
  });

  it("Test render ZNavigationTab Vertical", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTabs],
      html: `
      <z-navigation-tabs orientation="vertical">
        <z-navigation-tab>
          <z-icon name="house" slot="icon"></z-icon>
          <span slot="label">Home</span>
        </z-navigation-tab>
      </z-navigation-tabs>
    `});

    expect(page.root).toEqualHtml(`
      <z-navigation-tabs orientation="vertical" size="big">
        <mock:shadow-root>
          <nav>
            <slot></slot>
          </nav>
        </mock:shadow-root>
        <z-navigation-tab orientation="vertical">
          <z-icon name="house" slot="icon"></z-icon>
          <span slot="label">Home</span>
        </z-navigation-tab>
      </z-navigation-tabs>
    `);
  });

});
