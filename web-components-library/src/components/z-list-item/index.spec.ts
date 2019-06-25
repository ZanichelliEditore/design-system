import { newSpecPage } from "@stencil/core/testing";
import { ZListItem } from "./index";

describe("Suite test z-list-item", () => {
  it("Empty list item with shadow dom", async () => {
    const page = await newSpecPage({
      components: [ZListItem],
      html: `<z-list-item></z-list-item>`
    });
    expect(page.root).toEqualHtml(`
      <z-list-item><mock:shadow-root><li><span></span></li></mock:shadow-root></z-list-item>
    `);
  });

  it("Text element", async () => {
    const page = await newSpecPage({
      components: [ZListItem],
      html: `<z-list-item text='testo'></z-list-item>`
    });
    expect(page.root).toEqualHtml(`
     <z-list-item text=\"testo\">
      <mock:shadow-root>
        <li>
          <span>
            testo
          </span>
        </li>
      </mock:shadow-root>
    </z-list-item>
    `);
  });

  it("Link element", async () => {
    const page = await newSpecPage({
      components: [ZListItem],
      html: `<z-list-item text='testo' link =='http://www.google.it'></z-list-item>`
    });
    expect(page.root).toEqualHtml(`
     <z-list-item link=\"='http://www.google.it'\" text=\"testo\">
      <mock:shadow-root>
        <li>
          <span>
            <a href=\"='http://www.google.it'\">
              testo
            </a>
          </span>
        </li>
      </mock:shadow-root>
    </z-list-item>
    `);
  });
});
