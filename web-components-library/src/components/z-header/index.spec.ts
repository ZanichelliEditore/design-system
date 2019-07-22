import { newSpecPage } from "@stencil/core/testing";

import { ZHeader } from "./index";



describe("Suite test ZHeader", () => {
  it("Test render ZHeader vuoto", async () => {

    const page = await newSpecPage({
      components: [ZHeader],
      html: initHeader(true,true)
    });


    console.log("prima "+page.rootInstance.isMobile);
    page.rootInstance.isMobile = true;
    console.log("dopo "+page.rootInstance.isMobile);
    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <z-header>
        <mock:shadow-root>
          <div>
            This is your z-header component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-header>
    `)
  });
});


//Init header
function initHeader(log,myz){
  const user = {islogged: true, id: 123456, name: "Dario Docente e Professore", usergroup: 15};
  const userTag = log? "userdata='"+JSON.stringify(user)+"'":"";



  return `<z-header intlinkdata='[
    {
      "id": "home",
      "name": "Home",
      "url": "#home",
      "subMenu": [
        {
          "id": "libreria",
          "name": "la mia libreria",
          "url": "#libreria"
        }
      ]
    },
    {
      "id": "Dizionari",
      "name": "Dizionari",
      "url": "http://www.dizionari.it"
    }
  ]'
  extlinkdata='[
    {
      "id": "supporto",
      "name": "Supporto",
      "url": "https://www.support.com/",
      "icon" : "question-mark.png"
    }
  ]'
  ${userTag}
  ismyz=${myz}></z-header>`
}
