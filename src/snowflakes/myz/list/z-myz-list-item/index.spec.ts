import { newSpecPage } from "@stencil/core/testing";

import { ZMyzListItem } from "./index";

describe("Suite test z-myz-list-item", () => {
  it("Empty list item with shadow dom", async () => {
    const page = await newSpecPage({
      components: [ZMyzListItem],
      html: `<z-myz-list-item></z-myz-list-item>`
    });
    expect(page.root).toEqualHtml(`
      <z-myz-list-item>
        <mock:shadow-root>
          <li role="button">
            <span class="border">
              <span></span>
              <slot></slot>
            </span>
          </li>
        </mock:shadow-root>
      </z-myz-list-item>
    `);
  });

  it("Text element", async () => {
    const page = await newSpecPage({
      components: [ZMyzListItem],
      html: `<z-myz-list-item text='testo'></z-myz-list-item>`
    });
    expect(page.root).toEqualHtml(`
     <z-myz-list-item text="testo">
      <mock:shadow-root>
        <li role="button">
          <span class="border">
            <span>testo</span>
            <slot></slot>
          </span>
        </li>
      </mock:shadow-root>
    </z-myz-list-item>
    `);
  });

  it("Link element", async () => {
    const page = await newSpecPage({
      components: [ZMyzListItem],
      html: `<z-myz-list-item text='testo' link =='http://www.google.it'></z-myz-list-item>`
    });
    expect(page.root).toEqualHtml(`
     <z-myz-list-item link="='http://www.google.it'" text="testo">
      <mock:shadow-root>
        <li role="button">
          <span class="border">
            <a href="='http://www.google.it'" target="_self" tabindex="0" role="link">
              testo
            </a>
            <slot></slot>
          </span>
        </li>
      </mock:shadow-root>
    </z-myz-list-item>
    `);
  });

  it("Slot element", async () => {
    const page = await newSpecPage({
      components: [ZMyzListItem],
      html: `<z-myz-list-item>z list inner content</z-myz-list-item>`
    });
    expect(page.root).toEqualHtml(`
     <z-myz-list-item>
      <mock:shadow-root>
        <li role="button">
          <span class="border">
            <span></span>
            <slot></slot>
          </span>
        </li>
      </mock:shadow-root>
      z list inner content
    </z-myz-list-item>
    `);
  });
});
