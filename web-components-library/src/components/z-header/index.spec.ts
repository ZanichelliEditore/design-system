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
    <z-header extlinkdata=\"[]\" intlinkdata=\"[]\" ismyz=\"true\" userdata=\"{&quot;islogged&quot;:false,&quot;usergroup&quot;:4}\">
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
      html: initHeader(true, true, true, false, false)
    });

    //Set mobile state
    page.rootInstance.isMobile = true;
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <z-header extlinkdata=\"[]\" intlinkdata=\"[]\" ismyz=\"true\" userdata=\"{&quot;islogged&quot;:true,&quot;id&quot;:123456,&quot;name&quot;:&quot;Dario Docente e Professore&quot;,&quot;usergroup&quot;:15}\">
    <mock:shadow-root>
      <header>
        <div class=\"false mobile-header\" id=\"mobile-header\">
          <div class=\"logo\">
            <z-logo imagealt=\"logo zanichelli\" imageurl=\"../../assets/images/png/zanichelli-logo-2.png\" link=\"https://www.zanichelli.it\" targetblank=\"\"></z-logo>
          </div>
          <div class=\"menu-mobile\" id=\"mobile-menu-wrapper\">
            <div class=\"false menu-toggle\" id=\"mobile-menu\">
              <span class=\"bar\"></span>
              <span class=\"bar\"></span>
              <span class=\"bar\"></span>
            </div>
            <span>
              Menu
            </span>
          </div>
        </div>
        <div class=\"false false mobile-content\" id=\"mobile-content\">
          <div class=\"mobile-login\" id=\"mobile-login\">
            <span>
              <a class=\"menu-item\" href=\"#home\" id=\"user-data\">
                <span>
                  <img src=\"../assets/images/png/user_transparent.png\">
                  Dario Docente e Professore
                </span>
                <i></i>
              </a>
              <span class=\"mobile-dropdown\" id=\"mobile-dropdown-user-data\">
                <z-list></z-list>
              </span>
            </span>
          </div>
          <hr>
          <div class=\"link-int\" id=\"link-int\"></div>
          <hr>
          <div class=\"link-ext\" id=\"link-ext\"></div>
          <div class=\"booktab-button\" id=\"booktab-button\">
            <z-button icon=\"download.png\" label=\"Scarica la app BookTab\" type=\"primary\"></z-button>
          </div>
        </div>
      </header>
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
