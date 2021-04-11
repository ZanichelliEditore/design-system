import { newSpecPage } from "@stencil/core/testing";

import { ZUserDropdown } from "./index";

describe("Suite test ZUserDropdown", () => {
  it("Test render ZUserDropdown default", async () => {

    const page = await newSpecPage({
      components: [ZUserDropdown],
      html: `<z-user-dropdown></z-user-dropdown>`
    });

    expect(page.root).toEqualHtml(`
      <z-user-dropdown>
        <mock:shadow-root>
            <span>
              <z-link big="" icon="enter" textcolor="white">
                Entra
              </z-link>
            </span>
        </mock:shadow-root>
      </z-user-dropdown>
    `)
  });

  it("Test render ZUserDropdown not logged", async () => {

    const page = await newSpecPage({
      components: [ZUserDropdown],
      html: `<z-user-dropdown
              userfullname="docente di calabresi per italiani"
              islogged="false"
              slot="login"
            ></z-user-dropdown>`
    });

    expect(page.root).toEqualHtml(`
      <z-user-dropdown>
        <mock:shadow-root>
            <span>
              <z-link big="" icon="enter" textcolor="white">
                Entra
              </z-link>
            </span>
        </mock:shadow-root>
      </z-user-dropdown>
    `)
  });

  it("Test render ZUserDropdown logged", async () => {

    const page = await newSpecPage({
      components: [ZUserDropdown],
      html: `<z-user-dropdown
              userfullname="docente di italiano per calabresi"
              islogged="true"
              slot="login"
              menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
            ></z-user-dropdown>`
    });

    expect(page.root).toEqualHtml(`
      <z-user-dropdown>
        <mock:shadow-root>
            <span>
              <z-link big="" icon="enter" textcolor="white">
                Entra
              </z-link>
            </span>
        </mock:shadow-root>
      </z-user-dropdown>
    `)
  });
  it("Test render ZUserDropdown logged", async () => {

    const page = await newSpecPage({
      components: [ZUserDropdown],
      html: `<z-user-dropdown
              variant="light"
              userfullname="docente di italiano per calabresi"
              islogged="true"
              slot="login"
              menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
            ></z-user-dropdown>`
    });

    expect(page.root).toEqualHtml(`
      <z-user-dropdown>
        <mock:shadow-root>
            <span>
              <z-link big="" icon="enter" textcolor="white">
                Entra
              </z-link>
            </span>
        </mock:shadow-root>
      </z-user-dropdown>
    `)
  });
});

