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
      html: `<z-menu-dropdown menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it"},{"label":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente"></z-menu-dropdown>`
    });
    expect(page.root).toEqualHtml(`
    <z-menu-dropdown menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it"},{"label":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente">
      <mock:shadow-root>
        <a role="button">
          <div class=\"container\" tabindex="0">
            <z-icon name="user" width="14" height="14"></z-icon>
            <span class="user">
              Dario docente
            </span>
            <span class="arrow">
              <z-icon name="drop-down" width="14" height="14"></z-icon>
            </span>
          </div>
        </a>
      </mock:shadow-root>
    </z-menu-dropdown>
    `);
  });

  it("Test ZMenuDropdown con lista on click", async () => {
    const page = await newSpecPage({
      components: [ZMenuDropdown],
      html: `<z-menu-dropdown menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it"},{"label":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente"></z-menu-dropdown>`
    });
    expect(page.root).toEqualHtml(`
    <z-menu-dropdown menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it"},{"label":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente">
      <mock:shadow-root>
      <a role="button">
        <div class="container" tabindex="0">
          <z-icon width="14" name="user" height="14"></z-icon>
          <span class="user">
            Dario docente
          </span>
          <span class="arrow">
            <z-icon  height="14" name="drop-down" width="14"></z-icon>
          </span>
        </div>
      </a>
    </mock:shadow-root>
  </z-menu-dropdown>`);
    expect(page.rootInstance.ismenuopen).toBeFalsy;

    let image = page.root.shadowRoot
      .querySelector("a")
      .querySelector("div")
      .querySelector("span.arrow");
    image.click();
    await page.waitForChanges();

    expect(page.rootInstance.ismenuopen).toBeTruthy;

    expect(page.root).toEqualHtml(`
    <z-menu-dropdown menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it"},{"label":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente">
      <mock:shadow-root>
        <a class="menu-opened" role="button">
          <div class=\"container\"  tabindex="0">
            <z-icon height="14" name="user" width="14"></z-icon>
            <span class="user">
              Dario docente
            </span>
            <span class="arrow">
              <z-icon height="14" name="drop-down" width="14"></z-icon>
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
        </a>
      </mock:shadow-root>
    </z-menu-dropdown>
    `);
  });
});
