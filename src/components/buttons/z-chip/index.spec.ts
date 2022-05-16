import { newSpecPage } from "@stencil/core/testing";

import { ZChip } from "./index";

describe("Suite test ZChip", () => {
  it("Test render ZChip empty", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip icon-position="left" type="default"></z-chip>`,
    });

    expect(page.root).toEqualHtml(`
      <z-chip icon-position="left" type="default">
        <mock:shadow-root>
          <div class="default left">
            <span class="bold label"></span>
            <span>
              <slot></slot>
            </span>
          </div>
        </mock:shadow-root>
      </z-chip>
    `);
  });

  it("Test render ZChip with label", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip label="label" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip label="label" icon-position="left" type="default">
          <mock:shadow-root>
            <div class="default left">
              <span class="bold label">label</span>
              <span>
                <slot></slot>
              </span>
            </div>
          </mock:shadow-root>
          text
        </z-chip>
    `);
  });

  it("Test render ZChip with text bold", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip bold label="label" icon-position="left" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip bold="" label="label" icon-position="left" type="default">
          <mock:shadow-root>
            <div class="default left">
              <span class="bold label">label</span>
              <span class="bold">
                <slot></slot>
              </span>
            </div>
          </mock:shadow-root>
          text
        </z-chip>
    `);
  });

  it("Test render ZChip icon-position right type medium", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip bold label="label" icon-position="right" type="medium">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip bold="" label="label" icon-position="right" type="medium">
          <mock:shadow-root>
            <div class="medium right">
              <span class="bold label">label</span>
              <span class="bold">
                <slot></slot>
              </span>
            </div>
          </mock:shadow-root>
          text
        </z-chip>
    `);
  });

  it("Test render ZChip icon-position right type medium no bold", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip label="label" icon-position="right" type="medium">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip label="label" icon-position="right" type="medium">
          <mock:shadow-root>
            <div class="medium right">
              <span class="bold label">label</span>
              <span>
                <slot></slot>
              </span>
            </div>
          </mock:shadow-root>
          text
        </z-chip>
    `);
  });

  it("Test render ZChip interaction", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip interaction icon-position="left" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip icon-position="left" interaction="" type="default">
          <mock:shadow-root>
            <button class="default" tabindex="0">
                <slot></slot>
              <z-icon height="14" name="multiply-circled" tabindex="0" width="14"></z-icon>
            </button>
          </mock:shadow-root>
          text
        </z-chip>
    `);
  });

  it("Test render ZChip interaction disabled", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip disabled interaction icon-position="left" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip disabled="" icon-position="left" interaction="" type="default">
          <mock:shadow-root>
            <button class="default" disabled="" tabindex="0">
                <slot></slot>
              <z-icon height="14" name="multiply-circled" tabindex="0" width="14"></z-icon>
            </button>
          </mock:shadow-root>
          text
        </z-chip>
    `);
  });

  it("Test render ZChip interaction with icon", async () => {
    const page = await newSpecPage({
      components: [ZChip],
      html: `<z-chip icon="pdf" interaction icon-position="left" type="default">text</z-chip>`,
    });

    expect(page.root).toEqualHtml(`
        <z-chip icon="pdf" icon-position="left" interaction="" type="default">
          <mock:shadow-root>
            <button class="default"  tabindex="0">
              <z-icon height="14" name="pdf" width="14"></z-icon>
                <slot></slot>
              <z-icon height="14" name="multiply-circled" tabindex="0" width="14"></z-icon>
            </button>
          </mock:shadow-root>
          text
        </z-chip>
    `);
  });
});
