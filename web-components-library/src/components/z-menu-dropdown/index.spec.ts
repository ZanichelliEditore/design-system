import { newSpecPage } from "@stencil/core/testing";

import { ZMenuDropdown } from "./index";

describe("Suite test ZMenuDropdown", () => {
  it("Test render ZMenuDropdown vuoto", async () => {
    expect(() => {
      newSpecPage({
        components: [ZMenuDropdown],
        html: `<z-menu-dropdown menucontent=''></z-menu-dropdown>`
      });
    }).toThrowError;
  });

  it("Test  ZMenuDropdown con lista", async () => {
    const page = await newSpecPage({
      components: [ZMenuDropdown],
      html: `<z-menu-dropdown menucontent='[{"text":"Profilo", "link":"http://www.zanichelli.it"},{"text":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente"></z-menu-dropdown>`
    });
    expect(page.root).toEqualHtml(`
    <z-menu-dropdown menucontent='[{"text":"Profilo", "link":"http://www.zanichelli.it"},{"text":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente">
      <mock:shadow-root>
        <div tabindex="0">
          <div class=\"container\">
            <z-icon name="profilo-icon-stroked" width="14" height="14"></z-icon>
            <span class="user">
              Dario docente
            </span>
            <span class="arrow">
              <z-icon name="select-icon-stroked" width="14" height="14"></z-icon>
            </span>
          </div>
        </div>
      </mock:shadow-root>
    </z-menu-dropdown>
    `);
  });

  it("Test ZMenuDropdown con lista on click", async () => {
    const page = await newSpecPage({
      components: [ZMenuDropdown],
      html: `<z-menu-dropdown menucontent='[{"text":"Profilo", "link":"http://www.zanichelli.it"},{"text":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente"></z-menu-dropdown>`
    });
    expect(page.root).toEqualHtml(`
    <z-menu-dropdown menucontent='[{"text":"Profilo", "link":"http://www.zanichelli.it"},{"text":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente">
      <mock:shadow-root>
      <div tabindex="0">
        <div class="container">
          <z-icon width="14" name="profilo-icon-stroked" height="14"></z-icon>
          <span class="user">
            Dario docente
          </span>
          <span class="arrow">
            <z-icon  height="14" name="select-icon-stroked" width="14"></z-icon>
          </span>
        </div>
      </div>
    </mock:shadow-root>
  </z-menu-dropdown>`);
    expect(page.rootInstance.ismenuopen).toBeFalsy;

    let image = page.root.shadowRoot
      .querySelector("div")
      .querySelector("div")
      .querySelector("span.arrow");
    image.click();
    await page.waitForChanges();

    expect(page.rootInstance.ismenuopen).toBeTruthy;

    expect(page.root).toEqualHtml(`
    <z-menu-dropdown menucontent='[{"text":"Profilo", "link":"http://www.zanichelli.it"},{"text":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente">
      <mock:shadow-root>
        <div class="menu-opened" tabindex="0">
          <div class=\"container\">
            <z-icon height="14" name="profilo-icon-stroked" width="14"></z-icon>
            <span class="user">
              Dario docente
            </span>
            <span class="arrow">
              <z-icon height="14" name="select-icon-stroked" width="14"></z-icon>
            </span>
          </div>
          <ul>
            <li>
              <z-link url=\"http://www.zanichelli.it\" label="Profilo"></z-link>
            </li>
            <li>
              <z-link url=\"http://www.google.it\" label="Esci"></z-link>
            </li>
          </ul>
        </div>
      </mock:shadow-root>
    </z-menu-dropdown>
    `);
  });
});
