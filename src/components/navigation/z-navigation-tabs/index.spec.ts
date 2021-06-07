import { newSpecPage } from "@stencil/core/testing";

import { ZNavigationTabs } from "./index";

describe("Suite test ZNavigationTabs", () => {
  it("Test render ZNavigationTabs vuoto", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTabs],
      html: `<z-navigation-tabs></z-navigation-tabs>`
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tabs>
        <mock:shadow-root>
          <div style="undefined: rgba(0,0,0,0);">
            <z-icon class=\"disabled\" name=\"chevron-left" tabindex="-1"></z-icon>
            <z-icon class=\"disabled\" name=\"chevron-right\" tabindex="-1"></z-icon>
          </div>
        </mock:shadow-root>
      </z-navigation-tabs>
    `);
  });

  it("Test render ZNavigationTabs pieno", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTabs],
      html: `<z-navigation-tabs pages="20" visiblepages="10" currentpage="1"></z-navigation-tabs>`
    });

    expect(page.root).toEqualHtml(`
    <z-navigation-tabs currentpage=\"1\" pages=\"20\" visiblepages=\"10\">
      <mock:shadow-root>
        <div style="undefined: rgba(0,0,0,0);">
          <z-icon class=\"disabled\" name=\"chevron-left\" tabindex="-1"></z-icon>
          <z-navigation-tab icon=\"book-minus\" isselected=\"\" value=\"1\"></z-navigation-tab>
          <z-navigation-tab value=\"2\"></z-navigation-tab>
          <z-navigation-tab value=\"3\"></z-navigation-tab>
          <z-navigation-tab value=\"4\"></z-navigation-tab>
          <z-navigation-tab value=\"5\"></z-navigation-tab>
          <z-navigation-tab value=\"6\"></z-navigation-tab>
          <z-icon name=\"chevron-right\" tabindex="0"></z-icon>
        </div>
      </mock:shadow-root>
    </z-navigation-tabs>
    `);
  });

  it("Test render ZNavigationTabs pieno", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTabs],
      html: `<z-navigation-tabs pages="20" visiblepages="10" currentpage="5"></z-navigation-tabs>`
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tabs currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
        <mock:shadow-root>
          <div style="undefined: rgba(0,0,0,0);">
            <z-icon class=\"disabled\" name=\"chevron-left\" tabindex="-1"></z-icon>
            <z-navigation-tab value=\"1\"></z-navigation-tab>
            <z-navigation-tab value=\"2\"></z-navigation-tab>
            <z-navigation-tab value=\"3\"></z-navigation-tab>
            <z-navigation-tab value=\"4\"></z-navigation-tab>
            <z-navigation-tab isselected=\"\" value=\"5\"></z-navigation-tab>
            <z-navigation-tab value=\"6\"></z-navigation-tab>
            <z-icon name=\"chevron-right\" tabindex="0"></z-icon>
          </div>
        </mock:shadow-root>
      </z-navigation-tabs>
    `);
  });

  it("Test render ZNavigationTabs pieno click avanti", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTabs],
      html: `<z-navigation-tabs pages="20" visiblepages="10" currentpage="5"></z-navigation-tabs>`
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tabs currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
        <mock:shadow-root>
          <div style="undefined: rgba(0,0,0,0);">
            <z-icon class=\"disabled\" name=\"chevron-left\" tabindex="-1"></z-icon>
            <z-navigation-tab value=\"1\"></z-navigation-tab>
            <z-navigation-tab value=\"2\"></z-navigation-tab>
            <z-navigation-tab value=\"3\"></z-navigation-tab>
            <z-navigation-tab value=\"4\"></z-navigation-tab>
            <z-navigation-tab isselected=\"\" value=\"5\"></z-navigation-tab>
            <z-navigation-tab value=\"6\"></z-navigation-tab>
            <z-icon name=\"chevron-right\" tabindex="0"></z-icon>
          </div>
        </mock:shadow-root>
      </z-navigation-tabs>
    `);

    let chevrons = page.root.shadowRoot
      .querySelector("div")
      .querySelectorAll("z-icon");

    chevrons[1].click();
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <z-navigation-tabs currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
      <mock:shadow-root>
        <div style="undefined: rgba(0,0,0,0);">
          <z-icon name=\"chevron-left\" tabindex="0"></z-icon>
          <z-navigation-tab value=\"2\"></z-navigation-tab>
          <z-navigation-tab value=\"3\"></z-navigation-tab>
          <z-navigation-tab value=\"4\"></z-navigation-tab>
          <z-navigation-tab isselected=\"\" value=\"5\"></z-navigation-tab>
          <z-navigation-tab value=\"6\"></z-navigation-tab>
          <z-icon name=\"chevron-right\" tabindex="0"></z-icon>
        </div>
      </mock:shadow-root>
    </z-navigation-tabs>
    `);
  });

  it("Test render ZNavigationTabs start click indietro", async () => {
    const page = await newSpecPage({
      components: [ZNavigationTabs],
      html: `<z-navigation-tabs pages="20" visiblepages="10" currentpage="5"></z-navigation-tabs>`
    });

    expect(page.root).toEqualHtml(`
      <z-navigation-tabs currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
        <mock:shadow-root>
          <div style="undefined: rgba(0,0,0,0);">
            <z-icon class=\"disabled\" name=\"chevron-left\" tabindex="-1"></z-icon>
            <z-navigation-tab value=\"1\"></z-navigation-tab>
            <z-navigation-tab value=\"2\"></z-navigation-tab>
            <z-navigation-tab value=\"3\"></z-navigation-tab>
            <z-navigation-tab value=\"4\"></z-navigation-tab>
            <z-navigation-tab isselected=\"\" value=\"5\"></z-navigation-tab>
            <z-navigation-tab value=\"6\"></z-navigation-tab>
            <z-icon name=\"chevron-right\" tabindex="0"></z-icon>
          </div>
        </mock:shadow-root>
      </z-navigation-tabs>
    `);

    let chevrons = page.root.shadowRoot
      .querySelector("div")
      .querySelectorAll("z-icon");

    //Mi sposto avanti di una pagina
    chevrons[1].click();
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <z-navigation-tabs currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
      <mock:shadow-root>
        <div style="undefined: rgba(0,0,0,0);">
          <z-icon name=\"chevron-left\" tabindex="0"></z-icon>
          <z-navigation-tab value=\"2\"></z-navigation-tab>
          <z-navigation-tab value=\"3\"></z-navigation-tab>
          <z-navigation-tab value=\"4\"></z-navigation-tab>
          <z-navigation-tab isselected=\"\" value=\"5\"></z-navigation-tab>
          <z-navigation-tab value=\"6\"></z-navigation-tab>
          <z-icon name=\"chevron-right\" tabindex="0"></z-icon>
        </div>
      </mock:shadow-root>
    </z-navigation-tabs>
    `);

    //Torno indietro
    chevrons[0].click();
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
    <z-navigation-tabs currentpage=\"5\" pages=\"20\" visiblepages=\"10\">
      <mock:shadow-root>
        <div style="undefined: rgba(0,0,0,0);">
          <z-icon  class="disabled"  name=\"chevron-left\" tabindex="-1"></z-icon>
          <z-navigation-tab value=\"1\"></z-navigation-tab>
          <z-navigation-tab value=\"2\"></z-navigation-tab>
          <z-navigation-tab value=\"3\"></z-navigation-tab>
          <z-navigation-tab value=\"4\"></z-navigation-tab>
          <z-navigation-tab isselected=\"\" value=\"5\"></z-navigation-tab>
          <z-navigation-tab value=\"6\"></z-navigation-tab>
          <z-icon name=\"chevron-right\" tabindex="0"></z-icon>
        </div>
      </mock:shadow-root>
    </z-navigation-tabs>
    `);
  });
});
