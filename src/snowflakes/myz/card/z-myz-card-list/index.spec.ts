import { newSpecPage } from "@stencil/core/testing";

import { ZMyzCardList } from "./index";

describe("Suite test ZMyzCardList", () => {
  it("Test render ZMyzCardList vuoto", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardList],
      html: `<z-myz-card-list listdata='[{"isLink":true,"value":"Leggi sul browser","url":"https://booktab.it/"},{"isLink":true,"value":"Sito e risorse del libro","url":"http://online.scuola.zanichelli.it/curtisinvitoblu/"},{"isLink":false,"value":"Prove di verifica"},{"isLink":true,"value":"ZTE","url":"https://zte.zanichelli.it/"}]'></z-myz-card-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-list listdata="[{&quot;isLink&quot;:true,&quot;value&quot;:&quot;Leggi sul browser&quot;,&quot;url&quot;:&quot;https://booktab.it/&quot;},{&quot;isLink&quot;:true,&quot;value&quot;:&quot;Sito e risorse del libro&quot;,&quot;url&quot;:&quot;http://online.scuola.zanichelli.it/curtisinvitoblu/&quot;},{&quot;isLink&quot;:false,&quot;value&quot;:&quot;Prove di verifica&quot;},{&quot;isLink&quot;:true,&quot;value&quot;:&quot;ZTE&quot;,&quot;url&quot;:&quot;https://zte.zanichelli.it/&quot;}]">
      <mock:shadow-root>
        <ul>
          <li>
            <a href="https://booktab.it/" role="button" target="_blank">
              Leggi sul browser
            </a>
          </li>
          <li>
            <a href="http://online.scuola.zanichelli.it/curtisinvitoblu/" role="button" target="_blank">
              Sito e risorse del libro
            </a>
          </li>
          <li>
            <span>
              Prove di verifica
            </span>
          </li>
          <li>
            <a href="https://zte.zanichelli.it/" role="button" target="_blank">
              ZTE
            </a>
          </li>
        </ul>
      </mock:shadow-root>
    </z-myz-card-list>
    `);
  });
});
