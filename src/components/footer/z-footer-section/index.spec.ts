import {newSpecPage} from "@stencil/core/testing";

import {ZFooterSection} from "./index";

describe("Suite test ZFooterSection", () => {
  it("Test render ZFooterSection - empty", async () => {
    const page = await newSpecPage({
      components: [ZFooterSection],
      html: `<z-footer-section></z-footer-section>`,
    });
    expect(page.root).toEqualHtml(`
      <z-footer-section>
        <mock:shadow-root>
          <nav>
            <div class="header">
              <h2></h2>
              <button class="toggle-button">
                <z-icon name="chevron-down" width="16" height="16"></z-icon>
              </button>
            </div>
            <div class="content">
              <slot></slot>
            </div>
          </nav>
        </mock:shadow-root>
      </z-footer-section>
    `);
  });

  it("Test render ZFooterSection - with props", async () => {
    const page = await newSpecPage({
      components: [ZFooterSection],
      html: `<z-footer-section name="section name"></z-footer-section>`,
    });
    expect(page.root).toEqualHtml(`
      <z-footer-section name="section name">
        <mock:shadow-root>
          <nav>
            <div class="header">
              <h2>section name</h2>
              <button class="toggle-button">
                <z-icon name="chevron-down" width="16" height="16"></z-icon>
              </button>
            </div>
            <div class="content">
              <slot></slot>
            </div>
          </nav>
        </mock:shadow-root>
      </z-footer-section>
    `);
  });

  it("Test render ZFooterSection - with content", async () => {
    const page = await newSpecPage({
      components: [ZFooterSection],
      html: `<z-footer-section name="section name">
        <z-footer-link>first section link</z-footer-link>
        <z-footer-link>second section link</z-footer-link>
      </z-footer-section>`,
    });
    expect(page.root).toEqualHtml(`
      <z-footer-section name="section name">
        <mock:shadow-root>
          <nav>
            <div class="header">
              <h2>section name</h2>
              <button class="toggle-button">
                <z-icon name="chevron-down" width="16" height="16"></z-icon>
              </button>
            </div>
            <div class="content">
              <slot></slot>
            </div>
          </nav>
        </mock:shadow-root>
        <z-footer-link>first section link</z-footer-link>
        <z-footer-link>second section link</z-footer-link>
      </z-footer-section>
    `);
  });

  it("Test render ZFooterSection - opened", async () => {
    const page = await newSpecPage({
      components: [ZFooterSection],
      html: `<z-footer-section name="section name"></z-footer-section>`,
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-footer-section name="section name">
        <mock:shadow-root>
          <nav>
            <div class="header">
              <h2>section name</h2>
              <button class="toggle-button">
                <z-icon name="chevron-up" width="16" height="16"></z-icon>
              </button>
            </div>
            <div class="content show">
              <slot></slot>
            </div>
          </nav>
        </mock:shadow-root>
      </z-footer-section>
    `);
  });
});
