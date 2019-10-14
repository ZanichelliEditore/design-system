import { newSpecPage } from "@stencil/core/testing";

import { ZPaginationBar } from "./index";

describe("Suite test ZPaginationBar", () => {
  it("Test render ZPaginationBar vuoto", async () => {
    const page = await newSpecPage({
      components: [ZPaginationBar],
      html: `<z-pagination-bar></z-pagination-bar>`
    });

    expect(page.root).toEqualHtml(`
      <z-pagination-bar>
        <mock:shadow-root>
          <div>
            <z-icon class=\"disabled\" name=\"chevron-left\"></z-icon>
            <z-icon class=\"disabled\" name=\"chevron-right\"></z-icon>
          </div>
        </mock:shadow-root>
      </z-pagination-bar>
    `);
  });

  it("Test render ZPaginationBar pieno", async () => {
    const page = await newSpecPage({
      components: [ZPaginationBar],
      html: `<z-pagination-bar pages="20" visiblepages="10" currentpage="1"></z-pagination-bar>`
    });

    expect(page.root).toEqualHtml(`
    <z-pagination-bar currentpage=\"1\" pages=\"20\" visiblepages=\"10\">
      <mock:shadow-root>
        <div>
          <z-icon class=\"disabled\" name=\"chevron-left\"></z-icon>
          <z-pagination-page isselected=\"\" value=\"1\"></z-pagination-page>
          <z-pagination-page value=\"2\"></z-pagination-page>
          <z-pagination-page value=\"3\"></z-pagination-page>
          <z-pagination-page value=\"4\"></z-pagination-page>
          <z-pagination-page value=\"5\"></z-pagination-page>
          <z-pagination-page value=\"6\"></z-pagination-page>
          <z-pagination-page value=\"7\"></z-pagination-page>
          <z-pagination-page value=\"8\"></z-pagination-page>
          <z-pagination-page value=\"9\"></z-pagination-page>
          <z-pagination-page value=\"10\"></z-pagination-page>
          <z-icon name=\"chevron-right\"></z-icon>
        </div>
      </mock:shadow-root>
    </z-pagination-bar>
    `);
  });

  it("Test render ZPaginationBar pieno", async () => {
    const page = await newSpecPage({
      components: [ZPaginationBar],
      html: `<z-pagination-bar pages="20" visiblepages="10" currentpage="5"></z-pagination-bar>`
    });

    expect(page.root).toEqualHtml(`
      <z-pagination-bar currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
        <mock:shadow-root>
          <div>
            <z-icon class=\"disabled\" name=\"chevron-left\"></z-icon>
            <z-pagination-page value=\"1\"></z-pagination-page>
            <z-pagination-page value=\"2\"></z-pagination-page>
            <z-pagination-page value=\"3\"></z-pagination-page>
            <z-pagination-page value=\"4\"></z-pagination-page>
            <z-pagination-page isselected=\"\" value=\"5\"></z-pagination-page>
            <z-pagination-page value=\"6\"></z-pagination-page>
            <z-pagination-page value=\"7\"></z-pagination-page>
            <z-pagination-page value=\"8\"></z-pagination-page>
            <z-pagination-page value=\"9\"></z-pagination-page>
            <z-pagination-page value=\"10\"></z-pagination-page>
            <z-icon name=\"chevron-right\"></z-icon>
          </div>
        </mock:shadow-root>
      </z-pagination-bar>
    `);
  });

  it("Test render ZPaginationBar pieno click avanti", async () => {
    const page = await newSpecPage({
      components: [ZPaginationBar],
      html: `<z-pagination-bar pages="20" visiblepages="10" currentpage="5"></z-pagination-bar>`
    });

    expect(page.root).toEqualHtml(`
      <z-pagination-bar currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
        <mock:shadow-root>
          <div>
            <z-icon class=\"disabled\" name=\"chevron-left\"></z-icon>
            <z-pagination-page value=\"1\"></z-pagination-page>
            <z-pagination-page value=\"2\"></z-pagination-page>
            <z-pagination-page value=\"3\"></z-pagination-page>
            <z-pagination-page value=\"4\"></z-pagination-page>
            <z-pagination-page isselected=\"\" value=\"5\"></z-pagination-page>
            <z-pagination-page value=\"6\"></z-pagination-page>
            <z-pagination-page value=\"7\"></z-pagination-page>
            <z-pagination-page value=\"8\"></z-pagination-page>
            <z-pagination-page value=\"9\"></z-pagination-page>
            <z-pagination-page value=\"10\"></z-pagination-page>
            <z-icon name=\"chevron-right\"></z-icon>
          </div>
        </mock:shadow-root>
      </z-pagination-bar>
    `);

    let chevrons = page.root.shadowRoot
      .querySelector("div")
      .querySelectorAll("z-icon");

    chevrons[1].click();
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <z-pagination-bar currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
      <mock:shadow-root>
        <div>
          <z-icon name=\"chevron-left\"></z-icon>
          <z-pagination-page value=\"2\"></z-pagination-page>
          <z-pagination-page value=\"3\"></z-pagination-page>
          <z-pagination-page value=\"4\"></z-pagination-page>
          <z-pagination-page isselected=\"\" value=\"5\"></z-pagination-page>
          <z-pagination-page value=\"6\"></z-pagination-page>
          <z-pagination-page value=\"7\"></z-pagination-page>
          <z-pagination-page value=\"8\"></z-pagination-page>
          <z-pagination-page value=\"9\"></z-pagination-page>
          <z-pagination-page value=\"10\"></z-pagination-page>
          <z-pagination-page value=\"11\"></z-pagination-page>
          <z-icon name=\"chevron-right\"></z-icon>
        </div>
      </mock:shadow-root>
    </z-pagination-bar>
    `);
  });

  it("Test render ZPaginationBar start click indietro", async () => {
    const page = await newSpecPage({
      components: [ZPaginationBar],
      html: `<z-pagination-bar pages="20" visiblepages="10" currentpage="5"></z-pagination-bar>`
    });

    expect(page.root).toEqualHtml(`
      <z-pagination-bar currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
        <mock:shadow-root>
          <div>
            <z-icon class=\"disabled\" name=\"chevron-left\"></z-icon>
            <z-pagination-page value=\"1\"></z-pagination-page>
            <z-pagination-page value=\"2\"></z-pagination-page>
            <z-pagination-page value=\"3\"></z-pagination-page>
            <z-pagination-page value=\"4\"></z-pagination-page>
            <z-pagination-page isselected=\"\" value=\"5\"></z-pagination-page>
            <z-pagination-page value=\"6\"></z-pagination-page>
            <z-pagination-page value=\"7\"></z-pagination-page>
            <z-pagination-page value=\"8\"></z-pagination-page>
            <z-pagination-page value=\"9\"></z-pagination-page>
            <z-pagination-page value=\"10\"></z-pagination-page>
            <z-icon name=\"chevron-right\"></z-icon>
          </div>
        </mock:shadow-root>
      </z-pagination-bar>
    `);

    let chevrons = page.root.shadowRoot
      .querySelector("div")
      .querySelectorAll("z-icon");

    //Mi sposto avanti di una pagina
    chevrons[1].click();
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <z-pagination-bar currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
      <mock:shadow-root>
        <div>
          <z-icon name=\"chevron-left\"></z-icon>
          <z-pagination-page value=\"2\"></z-pagination-page>
          <z-pagination-page value=\"3\"></z-pagination-page>
          <z-pagination-page value=\"4\"></z-pagination-page>
          <z-pagination-page isselected=\"\" value=\"5\"></z-pagination-page>
          <z-pagination-page value=\"6\"></z-pagination-page>
          <z-pagination-page value=\"7\"></z-pagination-page>
          <z-pagination-page value=\"8\"></z-pagination-page>
          <z-pagination-page value=\"9\"></z-pagination-page>
          <z-pagination-page value=\"10\"></z-pagination-page>
          <z-pagination-page value=\"11\"></z-pagination-page>
          <z-icon name=\"chevron-right\"></z-icon>
        </div>
      </mock:shadow-root>
    </z-pagination-bar>
    `);

    //Torno indietro
    chevrons[0].click();
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <z-pagination-bar currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
      <mock:shadow-root>
        <div>
          <z-icon  class="disabled"  name=\"chevron-left\"></z-icon>
          <z-pagination-page value=\"1\"></z-pagination-page>
          <z-pagination-page value=\"2\"></z-pagination-page>
          <z-pagination-page value=\"3\"></z-pagination-page>
          <z-pagination-page value=\"4\"></z-pagination-page>
          <z-pagination-page isselected=\"\" value=\"5\"></z-pagination-page>
          <z-pagination-page value=\"6\"></z-pagination-page>
          <z-pagination-page value=\"7\"></z-pagination-page>
          <z-pagination-page value=\"8\"></z-pagination-page>
          <z-pagination-page value=\"9\"></z-pagination-page>
          <z-pagination-page value=\"10\"></z-pagination-page>
          <z-icon name=\"chevron-right\"></z-icon>
        </div>
      </mock:shadow-root>
    </z-pagination-bar>
    `);
  });
});
