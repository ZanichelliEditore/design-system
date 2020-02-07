import { newSpecPage } from "@stencil/core/testing";

import { ZListItem } from "../z-list-item/index";

import { ZList } from "./index";

describe("Suite test z-list", () => {
  it("Test render lista vuota", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListItem],
      html: `<z-list></z-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-list>
        <mock:shadow-root>
          <ul>
          </ul>
        </mock:shadow-root>
      </z-list>
    `);
  });

  it("Test render lista con un elemento testuale", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListItem],
      html: `<z-list></z-list>`
    });

    page.root.inputrawdata = '[{"text":"elemento lista"}]';
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-list>
        <mock:shadow-root>
          <ul>
            <z-list-item>
              <mock:shadow-root>
                <button>
                  <span>
                      <span>elemento lista</span>
                  </span>
                </button>
              </mock:shadow-root>
            </z-list-item>
          </ul>
        </mock:shadow-root>
      </z-list>
    `);
  });

  it("Test render lista con un elemento link", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListItem],
      html: `<z-list inputrawdata='[{"text":"elemento lista","link":"http://www.google.it"}]'></z-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-list inputrawdata='[{"text":"elemento lista","link":"http://www.google.it"}]'>
        <mock:shadow-root>
          <ul>
            <z-list-item>
              <mock:shadow-root>
                <button>
                  <span>
                    <a href=\"http://www.google.it\" target="_self" role="link" tabindex="0"> elemento lista</a>
                  </span>
                </button>
              </mock:shadow-root>
            </z-list-item>
          </ul>
        </mock:shadow-root>
      </z-list>
    `);
  });

  it("Test render lista 2 un elemento, testo e link", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListItem],
      html: `<z-list inputrawdata='[{"text":"elemento lista"},{"text":"link lista","link":"http://www.google.it"}]'></z-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-list inputrawdata=\"[{&quot;text&quot;:&quot;elemento lista&quot;},{&quot;text&quot;:&quot;link lista&quot;,&quot;link&quot;:&quot;http://www.google.it&quot;}]\">
      <mock:shadow-root>
        <ul>
          <z-list-item>
            <mock:shadow-root>
              <button>
                <span class="border">
                  <span>elemento lista</span>
                </span>
              </button>
            </mock:shadow-root>
          </z-list-item>
          <z-list-item>
            <mock:shadow-root>
              <button>
                <span>
                  <a href=\"http://www.google.it\" tabindex="0" target="_self" role="link">
                    link lista
                  </a>
                </span>
              </button>
            </mock:shadow-root>
          </z-list-item>
        </ul>
      </mock:shadow-root>
    </z-list>
    `);
  });

  it("Test aggiornamento lista da proprietà raw", async () => {
    const page = await newSpecPage({
      components: [ZList, ZListItem],
      html: `<z-list></z-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-list>
        <mock:shadow-root>
          <ul>
          </ul>
        </mock:shadow-root>
      </z-list>
    `);

    page.rootInstance.inputrawdata = '[{"text":"testo di esempio"}]';
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-list>
        <mock:shadow-root>
          <ul>
            <z-list-item>
              <mock:shadow-root>
                <button>
                  <span>
                      <span>testo di esempio</span>
                  </span>
                </button>
              </mock:shadow-root>
            </z-list-item>
          </ul>
        </mock:shadow-root>
      </z-list>
    `);
  });
});
