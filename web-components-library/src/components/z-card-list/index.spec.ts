import { newSpecPage } from "@stencil/core/testing";

import { ZCardList } from "./index";

describe("Suite test ZCardList", () => {
  it("Test render ZCardList vuoto", async () => {
    const page = await newSpecPage({
      components: [ZCardList],
      html: `<z-card-list listdata='[{"isLink":true,"value":"Leggi sul browser","url":"https://booktab.it/"},{"isLink":true,"value":"Sito e risorse del libro","url":"http://online.scuola.zanichelli.it/curtisinvitoblu/"},{"isLink":false,"value":"Prove di verifica"},{"isLink":true,"value":"ZTE","url":"https://zte.zanichelli.it/"}]'></z-card-list>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-list listdata="[{&quot;isLink&quot;:true,&quot;value&quot;:&quot;Leggi sul browser&quot;,&quot;url&quot;:&quot;https://booktab.it/&quot;},{&quot;isLink&quot;:true,&quot;value&quot;:&quot;Sito e risorse del libro&quot;,&quot;url&quot;:&quot;http://online.scuola.zanichelli.it/curtisinvitoblu/&quot;},{&quot;isLink&quot;:false,&quot;value&quot;:&quot;Prove di verifica&quot;},{&quot;isLink&quot;:true,&quot;value&quot;:&quot;ZTE&quot;,&quot;url&quot;:&quot;https://zte.zanichelli.it/&quot;}]">
      <mock:shadow-root>
        <ul>
          <li>
            <a href="https://booktab.it/" target="_blank">
              Leggi sul browser
            </a>
          </li>
          <li>
            <a href="http://online.scuola.zanichelli.it/curtisinvitoblu/" target="_blank">
              Sito e risorse del libro
            </a>
          </li>
          <li>
            <span>
              Prove di verifica
            </span>
          </li>
          <li>
            <a href="https://zte.zanichelli.it/" target="_blank">
              ZTE
            </a>
          </li>
        </ul>
      </mock:shadow-root>
    </z-card-list>
    `);
  });
});
