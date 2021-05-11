import { newSpecPage } from "@stencil/core/testing";

import { ZUserDropdown } from "./index";

describe("Suite test ZUserDropdown", () => {
  it("Test render ZUserDropdown default", async () => {
    const page = await newSpecPage({
      components: [ZUserDropdown],
      html: `<z-user-dropdown></z-user-dropdown>`,
    });

    expect(page.root).toEqualHtml(`
      <z-user-dropdown>
        <mock:shadow-root>
            <div>
              <div>
                <z-link big="" icon="enter" textcolor="white">
                  Entra
                </z-link>
              </div>
            </div>
        </mock:shadow-root>
      </z-user-dropdown>
    `);
  });

  it("Test render ZUserDropdown not logged", async () => {
    const page = await newSpecPage({
      components: [ZUserDropdown],
      html: `<z-user-dropdown
              userfullname="Sandro Studente"
              menucontent='[{"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
            >
            </z-user-dropdown>`,
    });

    expect(page.root).toEqualHtml(`
      <z-user-dropdown
        userfullname="Sandro Studente"
        menucontent='[{"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
      >
        <mock:shadow-root>
            <div>
              <div>
                <z-link big="" icon="enter" textcolor="white">
                  Entra
                </z-link>
              </div>
            </div>
        </mock:shadow-root>
      </z-user-dropdown>
    `);
  });

  it("Test render ZUserDropdown logged", async () => {
    const page = await newSpecPage({
      components: [ZUserDropdown],
      html: `<z-user-dropdown
              userfullname="Sandro Studente"
              logged="true"
              menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
            ></z-user-dropdown>`,
    });

    expect(page.root).toEqualHtml(`
      <z-user-dropdown
        userfullname="Sandro Studente"
        logged="true"
        menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
      >
        <mock:shadow-root>
            <div>
              <div></div>
              <div>
                <button class="dark" title="Sandro Studente">
                  <z-icon height="18" name="user-avatar-filled" width="18"></z-icon>
                  <span class="userfullname">
                    Sandro Studente
                  </span>
                  <z-icon height="18" name="caret-down-filled" width="18"></z-icon>
                </button>
              </div>
            </div>
        </mock:shadow-root>
      </z-user-dropdown>
    `);
  });
  it("Test render ZUserDropdown light not logged", async () => {
    const page = await newSpecPage({
      components: [ZUserDropdown],
      html: `<z-user-dropdown
              theme="light"
              userfullname="Sandro Studente"
              menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
            ></z-user-dropdown>`,
    });

    expect(page.root).toEqualHtml(`
      <z-user-dropdown
        theme="light"
        userfullname="Sandro Studente"
        menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
      >
        <mock:shadow-root>
            <div>
              <div>
                <z-link big="" icon="enter" textcolor="black">
                  Entra
                </z-link>
              </div>
            </div>
        </mock:shadow-root>
      </z-user-dropdown>
    `);
  });
  it("Test render ZUserDropdown light logged", async () => {
    const page = await newSpecPage({
      components: [ZUserDropdown],
      html: `<z-user-dropdown
              theme="light"
              userfullname="Sandro Studente"
              logged="true"
              menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
            ></z-user-dropdown>`,
    });

    expect(page.root).toEqualHtml(`
      <z-user-dropdown
        theme="light"
        userfullname="Sandro Studente"
        logged="true"
        menucontent='[{"label":"Profilo", "link":"http://www.zanichelli.it", "icon":"arrow-quad-north-east"}, {"label":"I Tuoi Ordini", "link":"http://www.zanichelli.it", "icon":"exit"},{"label":"Esci", "link":"http://www.google.it", "icon":"enter"}]'
      >
        <mock:shadow-root>
            <div>
              <div></div>
              <div>
                <button class="light" title="Sandro Studente">
                  <z-icon height="18" name="user-avatar-filled" width="18"></z-icon>
                  <span class="userfullname">
                    Sandro Studente
                  </span>
                  <z-icon height="18" name="caret-down-filled" width="18"></z-icon>
                </button>
              </div>
            </div>
        </mock:shadow-root>
      </z-user-dropdown>
    `);
  });
});
