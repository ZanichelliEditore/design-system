import { newSpecPage } from "@stencil/core/testing";

import { ZMyzCardCover } from "./index";

describe("Suite test ZMyzCardCover", () => {
  it("Test render ZMyzCardCover vuota", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardCover],
      html: `<z-myz-card-cover></z-myz-card-cover>`
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-cover>
      <mock:shadow-root>
        <img></img>
      </mock:shadow-root>
    </z-myz-card-cover>
    `);
  });
  it("Test render ZMyzCardCover con alt e img", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardCover],
      html: `
      <z-myz-card-cover slot="cover" titolo="Il nuovo invito alla biologia blu" img="http://media.curtisinvitoblu.bedita.net/a1/40/curti_a140cb3359b7611d84f80e384d2fb49b/curtis_plus-1A_320x_71bc3567ace1ff728caef1b381d7535b.png"/>
      `
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-cover slot="cover" titolo="Il nuovo invito alla biologia blu" img="http://media.curtisinvitoblu.bedita.net/a1/40/curti_a140cb3359b7611d84f80e384d2fb49b/curtis_plus-1A_320x_71bc3567ace1ff728caef1b381d7535b.png">
        <mock:shadow-root>
          <img alt="Il nuovo invito alla biologia blu" src="http://media.curtisinvitoblu.bedita.net/a1/40/curti_a140cb3359b7611d84f80e384d2fb49b/curtis_plus-1A_320x_71bc3567ace1ff728caef1b381d7535b.png">
        </mock:shadow-root>
    </z-myz-card-cover>
    `);
  });
});
