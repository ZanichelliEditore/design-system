import { newSpecPage } from "@stencil/core/testing";

import { ZListElement } from "./index";

describe("Suite test ZListElement", () => {
  it("Test render ZListElement", async () => {
    const page = await newSpecPage({
      components: [ZListElement],
      html: `<z-list-element><span>Test</span></z-list-element>`,
    });

    expect(page.root).toEqualHtml(`
    <z-list-element align-button="left" color="none" role="listitem" size="medium" tabindex="0">
        <mock:shadow-root>
          <div class="container" id="z-list-element-id-undefined" tabindex="-1"  style="color: none;">
            <div class="z-list-element-container">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
        <span>
          Test
        </span>
      </z-list-element>
    `);
  });

  it("Test render ZListElement expandable", async () => {
    const page = await newSpecPage({
      components: [ZListElement],
      html: `<z-list-element expandable="true"><span>Test</span><div slot="inner-content">Test</div></z-list-element>`,
    });

    expect(page.root).toEqualHtml(`
      <z-list-element align-button="left" color="none" expandable="" role="listitem" size="medium" tabindex="0">
        <mock:shadow-root>
          <div class="container" id="z-list-element-id-undefined" tabindex="-1" style="color: none;">
            <div class="z-list-element-container">
              <z-icon name="plus-circled"></z-icon>
              <slot></slot>
            </div>
            <div class="z-list-element-inner-container">
              <slot name="inner-content"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <span>
          Test
        </span>
        <div slot="inner-content">
          Test
        </div>
      </z-list-element>
    `);
  });

  it("Test render ZListElement expanded content", async () => {
    const page = await newSpecPage({
      components: [ZListElement],
      html: `<z-list-element expandable="true"><span>Test</span><div slot="inner-content">Test</div></z-list-element>`,
    });

    page.root.click();
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <z-list-element align-button="left" color="none" aria-expanded="" expandable="" role="listitem" size="medium" tabindex="0">
        <mock:shadow-root>
          <div class="container" id="z-list-element-id-undefined" tabindex="-1" style="color: none;">
            <div class="z-list-element-container">
              <z-icon name="minus-circled"></z-icon>
              <slot></slot>
            </div>
            <div class="expanded z-list-element-inner-container">
              <slot name="inner-content"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <span>
          Test
        </span>
        <div slot="inner-content">
          Test
        </div>
      </z-list-element>
    `);
  });

  it("Test render ZListElement expandable style", async () => {
    const page = await newSpecPage({
      components: [ZListElement],
      html: `<z-list-element expandable-style="menu" expandable="true"><span>Test</span><div slot="inner-content">Test</div></z-list-element>`,
    });

    expect(page.root).toEqualHtml(`
      <z-list-element align-button="left" color="none" expandable="" expandable-style="menu" role="listitem" size="medium" tabindex="0">
        <mock:shadow-root>
          <div class="container" id="z-list-element-id-undefined" tabindex="-1" style="color: none;">
            <div class="z-list-element-container">
              <z-icon name="chevron-down"></z-icon>
              <slot></slot>
            </div>
            <div class="z-list-element-inner-container">
              <slot name="inner-content"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <span>
          Test
        </span>
        <div slot="inner-content">
          Test
        </div>
      </z-list-element>
    `);
  });

  it("Test render ZListElement align button right", async () => {
    const page = await newSpecPage({
      components: [ZListElement],
      html: `<z-list-element expandable="true" align-button="right"><span>Test</span><div slot="inner-content">Test</div></z-list-element>`,
    });

    expect(page.root).toEqualHtml(`
      <z-list-element align-button="right"  color="none" expandable="" role="listitem" size="medium" tabindex="0">
        <mock:shadow-root>
          <div class="container" id="z-list-element-id-undefined" tabindex="-1" style="color: none;">
            <div class="z-list-element-container">
              <z-icon name="plus-circled"></z-icon>
              <slot></slot>
            </div>
            <div class="z-list-element-inner-container">
              <slot name="inner-content"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <span>
          Test
        </span>
        <div slot="inner-content">
          Test
        </div>
      </z-list-element>
    `);
  });
});
