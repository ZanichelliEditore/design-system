import {newSpecPage} from "@stencil/core/testing";

import {ZChip} from "./index";

describe("Suite test ZChip", () => {
  it("Test render ZChip empty", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip type="default"></z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip type="default">
          <div class="default" tabindex="0"></div>
      </z-chip>
    `);
  });

  it("Test render ZChip type medium", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip type="medium">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip type="medium">
          <div class="medium" tabindex="0">text</div>
      </z-chip>
    `);
  });

  it("Test render ZChip with icon", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip icon="pdf" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip icon="pdf" type="default">
          <div class="default" tabindex="0">
            <z-icon height="14" name="pdf" width="14"></z-icon>
            text
          </div>
      </z-chip>
    `);
  });

  it("Test render ZChip with interactive-icon", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip icon="" interactive-icon="multiply-circled" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip icon="" interactive-icon="multiply-circled" type="default">
          <button class="default" tabindex="0">
            text
            <z-icon height="14" name="multiply-circled" tabindex="0" width="14"></z-icon>
          </button>
      </z-chip>
    `);
  });

  it("Test render ZChip with interactive-icon and icon ", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip icon="pdf" interactive-icon="multiply-circled" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip icon="pdf" interactive-icon="multiply-circled" type="default">
          <button class="default" tabindex="0">
            <z-icon class="iconSx" height="14" name="pdf" width="14"></z-icon>
            text
            <z-icon height="14" name="multiply-circled" tabindex="0" width="14"></z-icon>
          </button>
      </z-chip>
    `);
  });

  it("Test render ZChip with interactive-icon and icon disabled", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip disabled icon="pdf" interactive-icon="multiply-circled" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip disabled="" icon="pdf" interactive-icon="multiply-circled" type="default">
          <button class="default" tabindex="0" disabled>
            <z-icon class="iconSx" height="14" name="pdf" width="14"></z-icon>
            text
            <z-icon height="14" name="multiply-circled" tabindex="-1" width="14"></z-icon>
          </button>
      </z-chip>
    `);
  });

  it("Test render ZChip with interactive-icon and icon type small", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip icon="pdf" interactive-icon="multiply-circled" type="small">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip icon="pdf" interactive-icon="multiply-circled" type="small">
          <button class="small" tabindex="0">
            <z-icon class="iconSx" height="14" name="pdf" width="14"></z-icon>
            text
            <z-icon height="14" name="multiply-circled" tabindex="0" width="14"></z-icon>
          </button>
      </z-chip>
    `);
  });
});
