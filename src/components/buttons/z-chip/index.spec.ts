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
          <div class="default"></div>
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
          <div class="medium">text</div>
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
          <div class="default">
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
          <div class="default z-chip-container">
            text
            <button tabindex="0" type="button">
              <z-icon height="14" name="multiply-circled" width="14"></z-icon>
            </button
          </div>
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
          <div class="default z-chip-container">
            <z-icon class="icon-sx" height="14" name="pdf" width="14"></z-icon>
            text
            <button tabindex="0" type="button">
              <z-icon height="14" name="multiply-circled" width="14"></z-icon>
            </button
          </div>
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
        <div aria-disabled="" class="default z-chip-container">
            <z-icon class="icon-sx" height="14" name="pdf" width="14"></z-icon>
            text
            <button disabled="" tabindex="-1" type="button">
              <z-icon height="14" name="multiply-circled" width="14"></z-icon>
            </button
        </div>
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
         <div class="small z-chip-container">
            <z-icon class="icon-sx" height="14" name="pdf" width="14"></z-icon>
            text
            <button tabindex="0" type="button">
            <z-icon height="14" name="multiply-circled" width="14"></z-icon>
            </button
          </div>
      </z-chip>
    `);
  });
});
