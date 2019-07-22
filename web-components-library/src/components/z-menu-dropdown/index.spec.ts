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
            <img src="assets/images/png/user.png" />
            <span class="user">
              Dario docente
            </span>
            <span class="arrow">
              <img src="assets/images/png/arrowDown.png" />
            </span>
          </div>
        </div>
      </mock:shadow-root>
    </z-menu-dropdown>
    `);
  });

  it("Test  ZMenuDropdown con lista on click", async () => {
    const page = await newSpecPage({
      components: [ZMenuDropdown],
      html: `<z-menu-dropdown menucontent='[{"text":"Profilo", "link":"http://www.zanichelli.it"},{"text":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente"></z-menu-dropdown>`
    });
    expect(page.root).toEqualHtml(`
    <z-menu-dropdown menucontent='[{"text":"Profilo", "link":"http://www.zanichelli.it"},{"text":"Esci", "link":"http://www.google.it"}]' nomeutente="Dario docente">
      <mock:shadow-root>
      <div tabindex="0">
        <div class=\"container\">
          <img src="assets/images/png/user.png" />
          <span class="user">
            Dario docente
          </span>
          <span class="arrow">
            <img src="assets/images/png/arrowDown.png" />
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
        <div tabindex="0" class=\"menuOpened\">
          <div class=\"container\">
            <img src=\"assets/images/png/user.png\">
            <span class="user">
              Dario docente
            </span>
            <span class="arrow">
              <img src="assets/images/png/arrowUp.png" />
            </span>
          </div>
          <ul>
            <li>
              <a href=\"http://www.zanichelli.it\">
                Profilo
              </a>
            </li>
            <li>
              <a href=\"http://www.google.it\">
                Esci
              </a>
            </li>
          </ul>
        </div>
      </mock:shadow-root>
    </z-menu-dropdown>
    `);
  });
});
