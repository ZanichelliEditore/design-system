import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableHeader } from "./index";

describe("Suite test ZRegistroTableHeader", () => {
  it("Test render ZRegistroTableHeader con slot", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header><span>Test</span></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="size-medium" role="columnheader">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
        <span>
          Test
        </span>
      </z-registro-table-header>
    `);
  });

  it("Test render ZRegistroTableHeader con role columnheader", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header></z-registro-table-header>`,
    });

    expect(page.root.getAttribute("role")).toEqual("columnheader");
  });

  it("Test render sortable icon when sortable is true", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header sortable="true"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="size-medium sortable" role="columnheader" sortable="true">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
            <z-icon class="arrow hidden" name="arrow-down"></z-icon>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });

  it("Test render z-popover icon when showButton is true", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header show-button="true"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="size-medium" role="columnheader" show-button="true">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
          <div class="popover-container">
            <z-popover background-color= "gray200" position="below-center">
              <z-button icon="contextual-menu" size="x-small" slot="trigger" square="" variant="tertiary"></z-button>
              <div slot="popover">
                <slot name="contextual-menu"></slot>
              </div>
            </z-popover>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });

  it("Test render ZRegistroTableHeader with correct size when size is x-small", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header size="x-small"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="size-x-small" role="columnheader" size="x-small">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });

  it("Test render ZRegistroTableHeader with correct size when size is small", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header size="small"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="size-small" role="columnheader" size="small">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });

  it("Test render ZRegistroTableHeader with correct size when size is medium", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header size="medium"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="size-medium" role="columnheader" size="medium">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });

  it("Test render ZRegistroTableHeader with correct size when size is large", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header size="large"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="size-large" role="columnheader" size="large">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });

  it("Test render ZRegistroTableHeader with correct size when size is special", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header size="special"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="size-special" role="columnheader" size="special">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });

  it("Test render correct arrow after click on header", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header sortable="true" column-id="col-1"></z-registro-table-header>`,
    });

    page.root.click();
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="size-medium sortable" role="columnheader" sortable="true"  column-id="col-1">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
            <z-icon class="arrow" name="arrow-up"></z-icon>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });

  it("Test render correct arrow after click twice on header", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header sortable="true" column-id="col-1"></z-registro-table-header>`,
    });

    page.root.click();
    await page.waitForChanges();
    page.root.click();
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="size-medium sortable" role="columnheader" sortable="true" column-id="col-1">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
            <z-icon class="arrow" name="arrow-down"></z-icon>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });
});
