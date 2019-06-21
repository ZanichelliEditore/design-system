import { newSpecPage } from "@stencil/core/testing";
import { ZListItem } from "./index";

describe("Suite test z-list-item", () => {
  it("Empty list item no shadow dom", async () => {
    const page = await newSpecPage({
      components: [ZListItem],
      html: `<z-list-item></z-list-item>`,
      supportsShadowDom: false
    });
    expect(page.root).toEqualHtml(`
      <z-list-item><li><span><span></span></span></li></z-list-item>
    `);
  });

  it("Empty list item with shadow dom", async () => {
    const page = await newSpecPage({
      components: [ZListItem],
      html: `<z-list-item></z-list-item>`,
      supportsShadowDom: true
    });
    expect(page.root).toEqualHtml(`
      <z-list-item><mock:shadow-root><li><span><span></span></span></li></mock:shadow-root></z-list-item>
    `);
  });

  it("has separator", async () => {
    const page = await newSpecPage({
      components: [ZListItem],
      html: `<z-list-item text='testo' link =='http://www.google.it' hasseparator={true}></z-list-item>`,
      supportsShadowDom: true
    });
    expect(page.root).toEqualHtml(`
     <z-list-item hasseparator=\"{true}\" link=\"='http://www.google.it'\" text=\"testo\">
      <mock:shadow-root>
        <li>
          <span class=\"separatedList\">
            <z-link label=\"testo\" type=\"internal\" url=\"='http://www.google.it'\"></z-link>
          </span>
        </li>
      </mock:shadow-root>
    </z-list-item>
    `);

    expect(
      page.root.shadowRoot.querySelector("li").querySelector("span").className
    ).toEqual("separatedList");
  });

  it("Does not have separator", async () => {
    const page = await newSpecPage({
      components: [ZListItem],
      html: `<z-list-item text='testo' link =='http://www.google.it' ></z-list-item>`,
      supportsShadowDom: true
    });

    expect(
      page.root.shadowRoot.querySelector("li").querySelector("span").className
    ).not.toEqual("separatedList");
  });

  it("Is nested in a component with link", async () => {
    const page = await newSpecPage({
      components: [ZListItem],
      html: `<z-list-item text='testo' link =='http://www.google.it' isnestedcomponent ></z-list-item>`,
      supportsShadowDom: true
    });

    expect(
      page.root.shadowRoot
        .querySelector("li")
        .querySelector("span")
        .querySelector("z-link")
        .attributes.getNamedItem("type").value
    ).toEqual("internal");
  });
});
