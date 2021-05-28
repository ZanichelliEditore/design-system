import { newSpecPage } from "@stencil/core/testing";

import { ZDivider } from "./index";

describe("Suite test ZDivider", () => {
  it("Test render ZDivider default properties", async () => {
    const page = await newSpecPage({
      components: [ZDivider],
      html: `<z-divider></z-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <z-divider class="divider-horizontal divider-small" style="background-color: var(--gray200);">
    
      </z-divider>
    `);
  });

  it("Test render ZDivider orientation horizontal", async () => {
    const page = await newSpecPage({
      components: [ZDivider],
      html: `<z-divider orientation="horizontal"></z-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <z-divider orientation="horizontal" class="divider-horizontal divider-small" style="background-color: var(--gray200);">
    
      </z-divider>
    `);
  });

  it("Test render ZDivider orientation vertical", async () => {
    const page = await newSpecPage({
      components: [ZDivider],
      html: `<z-divider orientation="vertical"></z-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <z-divider orientation="vertical" class="divider-vertical divider-small" style="background-color: var(--gray200);">
    
      </z-divider>
    `);
  });

  it("Test render ZDivider size small", async () => {
    const page = await newSpecPage({
      components: [ZDivider],
      html: `<z-divider size="small"></z-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <z-divider size="small" class="divider-horizontal divider-small" style="background-color: var(--gray200);">
    
      </z-divider>
    `);
  });

  it("Test render ZDivider size medium", async () => {
    const page = await newSpecPage({
      components: [ZDivider],
      html: `<z-divider size="medium"></z-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <z-divider size="medium" class="divider-horizontal divider-medium" style="background-color: var(--gray200);">
    
      </z-divider>
    `);
  });

  it("Test render ZDivider size large", async () => {
    const page = await newSpecPage({
      components: [ZDivider],
      html: `<z-divider size="large"></z-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <z-divider size="large" class="divider-horizontal divider-large" style="background-color: var(--gray200);">
    
      </z-divider>
    `);
  });

  it("Test render ZDivider color token", async () => {
    const page = await newSpecPage({
      components: [ZDivider],
      html: `<z-divider color="blue900"></z-divider>`,
    });

    expect(page.root).toEqualHtml(`
      <z-divider color="blue900" class="divider-horizontal divider-small" style="background-color: var(--blue900);">
    
      </z-divider>
    `);
  });
});
