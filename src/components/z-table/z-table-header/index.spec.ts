import { newSpecPage } from "@stencil/core/testing";

import { ZTableHeader } from "./index";

describe("Suite test ZTableHeader", () => {
  it("Test render ZTableHeader con slot", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header><span>Test</span></z-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-header padding="size-medium" role="columnheader">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
        <span>
          Test
        </span>
      </z-table-header>
    `);
  });

  it("Test render ZTableHeader con role columnheader", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header></z-table-header>`,
    });

    expect(page.root.getAttribute("role")).toEqual("columnheader");
  });

  it("Test render without icon when sortable is true and sort-direction is not defined", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header sortable="true"></z-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-header class="sortable" padding="medium" role="columnheader" sortable="true">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-table-header>
    `);
  });

  it("Test render z-popover icon when showButton is true", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header show-button="true"></z-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-header padding="medium" role="columnheader" show-button="true">
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
      </z-table-header>
    `);
  });

  it("Test render ZTableHeader with correct size when size is x-small", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header padding="x-small"></z-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-header padding="x-small" role="columnheader">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-table-header>
    `);
  });

  it("Test render ZTableHeader with correct size when size is small", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-registro-table-header padding="small"></z-registro-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header padding="small" role="columnheader">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-table-header>
    `);
  });

  it("Test render ZTableHeader with correct size when size is medium", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header size="medium"></z-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-header padding="medium" role="columnheader" size="medium">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-table-header>
    `);
  });

  it("Test render ZTableHeader with correct size when size is large", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header padding="large"></z-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header padding="large" role="columnheader">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-table-header>
    `);
  });

  it("Test render ZTableHeader with correct size when size is special", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header padding="special"></z-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-header padding="special" role="columnheader">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-table-header>
    `);
  });

  it("Test render correct arrow after click on header", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header sortable="true" column-id="col-1"></z-table-header>`,
    });

    page.root.click();
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <z-table-header class="sortable" padding="medium" role="columnheader" sortable="true"  column-id="col-1">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
            <z-icon class="arrow" name="arrow-up"></z-icon>
          </div>
        </mock:shadow-root>
      </z-table-header>
    `);
  });

  it("Test render correct arrow after click twice on header", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header sortable="true" column-id="col-1"></z-table-header>`,
    });

    page.root.click();
    await page.waitForChanges();
    page.root.click();
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <z-table-header class="sortable" padding="medium" role="columnheader" sortable="true" column-id="col-1">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
            <z-icon class="arrow" name="arrow-down"></z-icon>
          </div>
        </mock:shadow-root>
      </z-table-header>
    `);
  });

  it("Test render without arrow when sort-direction is none", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header sortable="true" sort-direction="none" column-id="col-1"></z-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-header class="sortable" padding="medium" role="columnheader" sortable="true" sort-direction="none"  column-id="col-1">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-table-header>
    `);
  });

  it("Test render correct arrow when sort-direction is asc", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header sortable="true" sort-direction="asc" column-id="col-1"></z-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-header class="sortable" padding="medium" role="columnheader" sortable="true" sort-direction="asc" column-id="col-1">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
            <z-icon class="arrow" name="arrow-up"></z-icon>
          </div>
        </mock:shadow-root>
      </z-table-header>
    `);
  });

  it("Test render correct arrow when sort-direction is desc", async () => {
    const page = await newSpecPage({
      components: [ZTableHeader],
      html: `<z-table-header sortable="true" sort-direction="desc" column-id="col-1"></z-table-header>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-header class="sortable" padding="medium" role="columnheader" sortable="true" sort-direction="desc" column-id="col-1">
        <mock:shadow-root>
          <div class="container">
            <slot></slot>
            <z-icon class="arrow" name="arrow-down"></z-icon>
          </div>
        </mock:shadow-root>
      </z-table-header>
    `);
  });
});
