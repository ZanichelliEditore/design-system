import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableHeader } from "./index";

describe("Suite test ZRegistroTableHeader", () => {
  it("Test render ZRegistroTableHeader con slot", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header><span>Test</span></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header padding="medium" role="columnheader">
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

  it("Test render without icon when sortable is true and sort-direction is not defined", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header sortable="true"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="sortable" padding="medium" role="columnheader" sortable="true">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
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
      <z-registro-table-header padding="medium" role="columnheader" show-button="true">
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
      html: `<z-registro-table-header padding="x-small"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header padding="x-small" role="columnheader">
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
      html: `<z-registro-table-header padding="small"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header padding="small" role="columnheader">
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
      <z-registro-table-header padding="medium" role="columnheader" size="medium">
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
      html: `<z-registro-table-header padding="large"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header padding="large" role="columnheader">
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
      html: `<z-registro-table-header padding="special"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header padding="special" role="columnheader">
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
      <z-registro-table-header class="sortable" padding="medium" role="columnheader" sortable="true"  column-id="col-1">
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
      <z-registro-table-header class="sortable" padding="medium" role="columnheader" sortable="true" column-id="col-1">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
            <z-icon class="arrow" name="arrow-down"></z-icon>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });

  it("Test render without arrow when sort-direction is none", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header sortable="true" sort-direction="none" column-id="col-1"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="sortable" padding="medium" role="columnheader" sortable="true" sort-direction="none"  column-id="col-1">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });

  it("Test render correct arrow when sort-direction is asc", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header sortable="true" sort-direction="asc" column-id="col-1"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="sortable" padding="medium" role="columnheader" sortable="true" sort-direction="asc" column-id="col-1">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
            <z-icon class="arrow" name="arrow-up"></z-icon>
          </div>
        </mock:shadow-root>
      </z-registro-table-header>
    `);
  });

  it("Test render correct arrow when sort-direction is desc", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableHeader],
      html: `<z-registro-table-header sortable="true" sort-direction="desc" column-id="col-1"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header class="sortable" padding="medium" role="columnheader" sortable="true" sort-direction="desc" column-id="col-1">
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
