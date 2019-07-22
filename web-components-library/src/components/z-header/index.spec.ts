import { newSpecPage } from "@stencil/core/testing";

import { ZHeader } from "./index";

describe("Suite test ZHeader", () => {
  /*
  TEST MOBILE
   */
  it("Test render ZHeader myz utente non loggato", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(false, false, true, false, false)
    });

    //Set mobile state
    page.rootInstance.isMobile = true;
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-header extlinkdata=\"[]\" intlinkdata=\"[]\" ismyz=\"true\">
      <mock:shadow-root>
        <header>
          <div class=\"false mobile-header\" id=\"mobile-header\">
            <div class=\"logo\">
              <z-logo imagealt=\"logo zanichelli\" imageurl=\"../../assets/images/png/zanichelli-logo-2.png\" link=\"https://www.zanichelli.it\" targetblank=\"\"></z-logo>
            </div>
            <z-button buttonid=\"login-button\" label=\"entra\" type=\"secondary\"></z-button>
          </div>
        </header>
      </mock:shadow-root>
    </z-header>
  `);
  });

  it("Test render ZHeader non myz utente non loggato", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(true, false, true, false, false)
    });

    //Set mobile state
    page.rootInstance.isMobile = true;
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-header extlinkdata=\"[]\" intlinkdata=\"[]\" ismyz=\"true\">
    <mock:shadow-root>
      <header>
        <div class=\"false mobile-header\" id=\"mobile-header\">
          <div class=\"logo\">
            <z-logo imagealt=\"logo zanichelli\" imageurl=\"../../assets/images/png/zanichelli-logo-2.png\" link=\"https://www.zanichelli.it\" targetblank=\"\"></z-logo>
          </div>
          <z-button buttonid=\"login-button\" label=\"entra\" type=\"secondary\"></z-button>
        </div>
      </header>
    </mock:shadow-root>
  </z-header>
  `);
  });

  it("Test render ZHeader myz loggato", async () => {
    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(true, true, false)
    });

    expect(page.root).toEqualHtml(`
      <z-header>
        <mock:shadow-root>
          <div>
            This is your z-header component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-header>
    `);
  });

  /*
  TEST MOBILE END
  */
});

//Init header
function initHeader(
  userPresent: boolean,
  userLogged: boolean,
  myz: boolean,
  intlinkdataBool: boolean,
  extlinkdataBool: boolean
) {
  const userNotLogged = { islogged: false, usergroup: 4 };
  const user = {
    islogged: true,
    id: 123456,
    name: "Dario Docente e Professore",
    usergroup: 15
  };
  const emptyArray = "[]";
  let userTag = "";
  if (userPresent) {
    userTag = userLogged
      ? "userdata='" + JSON.stringify(user) + "'"
      : "userdata='" + JSON.stringify(userNotLogged) + "'";
  }

  const intlinkdata = JSON.stringify([
    {
      id: "home",
      name: "Home",
      url: "#home",
      subMenu: [
        {
          id: "libreria",
          name: "la mia libreria",
          url: "#libreria"
        }
      ]
    },
    {
      id: "Dizionari",
      name: "Dizionari",
      url: "https://www.zanichelli.it/dizionari/in-primo-piano"
    }
  ]);
  const extlinkdata = JSON.stringify([
    {
      id: "supporto",
      name: "Supporto",
      url: "https://www.zanichelli.it/contatti-e-recapiti",
      icon: "question-mark.png"
    }
  ]);

  return `<z-header intlinkdata='${intlinkdataBool ? intlinkdata : emptyArray}'
  extlinkdata='${extlinkdataBool ? extlinkdata : emptyArray}'
  ${userTag}
  ismyz=${myz}></z-header>`;
}
