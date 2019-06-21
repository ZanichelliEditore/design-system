import { newSpecPage } from "@stencil/core/testing";
import { ZList } from "./index";
import { ZListItem } from "../z-list-item/index";

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
                <li>
                  <span>
                    <span>
                      elemento lista
                    </span>
                  </span>
                </li>
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
                <li>
                  <span>
                    <z-link label="elemento lista" type="internal" url="http://www.google.it"></z-link>
                  </span>
                </li>
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
                <li>
                  <span>
                    <span>
                      testo di esempio
                    </span>
                  </span>
                </li>
              </mock:shadow-root>
            </z-list-item>
          </ul>
        </mock:shadow-root>
      </z-list>
    `);
  });
});
