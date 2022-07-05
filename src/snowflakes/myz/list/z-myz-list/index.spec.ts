import { newSpecPage } from "@stencil/core/testing";

import { ZMyzListItem } from "../z-myz-list-item/index";

import { ZMyzList } from "./index";

describe("Suite test z-myz-list", () => {
  it("Test render lista vuota", async () => {
    const page = await newSpecPage({
      components: [ZMyzList, ZMyzListItem],
      html: `<z-myz-list></z-myz-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-myz-list>
        <mock:shadow-root>
          <ul>
          </ul>
        </mock:shadow-root>
      </z-myz-list>
    `);
  });

  it("Test render lista con un elemento testuale", async () => {
    const page = await newSpecPage({
      components: [ZMyzList, ZMyzListItem],
      html: `<z-myz-list></z-myz-list>`
    });

    page.root.inputrawdata = '[{"text":"elemento lista"}]';
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-myz-list>
        <mock:shadow-root>
          <ul>
            <z-myz-list-item>
              <mock:shadow-root>
                <li role="button">
                  <span>
                      <span>elemento lista</span>
                      <slot></slot>
                  </span>
                </li>
              </mock:shadow-root>
            </z-myz-list-item>
          </ul>
        </mock:shadow-root>
      </z-myz-list>
    `);
  });

  it("Test render lista con un elemento link", async () => {
    const page = await newSpecPage({
      components: [ZMyzList, ZMyzListItem],
      html: `<z-myz-list inputrawdata='[{"text":"elemento lista","link":"http://www.google.it"}]'></z-myz-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-myz-list inputrawdata='[{"text":"elemento lista","link":"http://www.google.it"}]'>
        <mock:shadow-root>
          <ul>
            <z-myz-list-item>
              <mock:shadow-root>
                <li role="button">
                  <span>
                    <a href="http://www.google.it" target="_self" role="link" tabindex="0"> elemento lista</a>
                    <slot></slot>
                  </span>
                </li>
              </mock:shadow-root>
            </z-myz-list-item>
          </ul>
        </mock:shadow-root>
      </z-myz-list>
    `);
  });

  it("Test render lista 2 un elemento, testo e link", async () => {
    const page = await newSpecPage({
      components: [ZMyzList, ZMyzListItem],
      html: `<z-myz-list inputrawdata='[{"text":"elemento lista"},{"text":"link lista","link":"http://www.google.it"}]'></z-myz-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-myz-list inputrawdata="[{&quot;text&quot;:&quot;elemento lista&quot;},{&quot;text&quot;:&quot;link lista&quot;,&quot;link&quot;:&quot;http://www.google.it&quot;}]">
      <mock:shadow-root>
        <ul>
          <z-myz-list-item>
            <mock:shadow-root>
              <li role="button">
                <span class="border">
                  <span>elemento lista</span>
                  <slot></slot>
                </span>
              </li>
            </mock:shadow-root>
          </z-myz-list-item>
          <z-myz-list-item>
            <mock:shadow-root>
              <li role="button">
                <span>
                  <a href="http://www.google.it" tabindex="0" target="_self" role="link">
                    link lista
                  </a>
                  <slot></slot>
                </span>
              </li>
            </mock:shadow-root>
          </z-myz-list-item>
        </ul>
      </mock:shadow-root>
    </z-myz-list>
    `);
  });

  it("Test aggiornamento lista da proprietà raw", async () => {
    const page = await newSpecPage({
      components: [ZMyzList, ZMyzListItem],
      html: `<z-myz-list></z-myz-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-myz-list>
        <mock:shadow-root>
          <ul>
          </ul>
        </mock:shadow-root>
      </z-myz-list>
    `);

    page.rootInstance.inputrawdata = '[{"text":"testo di esempio"}]';
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-myz-list>
        <mock:shadow-root>
          <ul>
            <z-myz-list-item>
              <mock:shadow-root>
                <li role="button">
                  <span>
                      <span>testo di esempio</span>
                      <slot></slot>
                  </span>
                </li>
              </mock:shadow-root>
            </z-myz-list-item>
          </ul>
        </mock:shadow-root>
      </z-myz-list>
    `);
  });
});
