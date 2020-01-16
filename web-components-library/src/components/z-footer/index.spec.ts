import { newSpecPage } from "@stencil/core/testing";

import { ZFooter } from "./index";

describe("Suite test ZFooter", () => {
  it("Test render ZFooter vuoto", async () => {
    const page = await newSpecPage({
      components: [ZFooter],
      html: `<z-footer data='{
        "zanichelliLinks": [],
        "myzLink": {},
        "social": [],
        "bottomLinks": []
      }'></z-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-footer data='{
        "zanichelliLinks": [],
        "myzLink": {},
        "social": [],
        "bottomLinks": []
      }'>
        <mock:shadow-root>
          <footer>
            <section class="top"></section>
            <section class="bottom">
              <div class="item logo">
                <z-logo targetblank height="38" width="144"></z-logo>
                <p></p>
              </div>
              <div class="item">
                <p></p>
                <ul class="social"></ul>
              </div>
              <div class="item bottom-links">
                <ul></ul>
              </div>
            </section>
          </footer>
        </mock:shadow-root>
      </z-footer>
    `);
  });

  it("Test render ZFooter con zanichelli link", async () => {
    const page = await newSpecPage({
      components: [ZFooter],
      html: `<z-footer data='{
        "zanichelliLinks": [
          {
            "title": "Zanichelli.it",
            "items": [
              {
                "label": "Home zanichelli.it",
                "link": "https://www.zanichelli.it"
              },
              {
                "label": "Ricerca in catalogo",
                "link": "https://www.zanichelli.it/ricerca",
                "target": "_self"
              }
            ]
          },
          {
            "title": "Scuola",
            "items": [
              {
                "label": "Home scuola",
                "link": "https://www.zanichelli.it/scuola/in-primo-piano"
              },
              {
                "label": "Catalogo scuola",
                "link": "https://www.zanichelli.it/scuola/novita-e-proposte"
              }
            ]
          }
        ],
        "myzLink": {},
        "social": [],
        "bottomLinks": []
      }' copyrightuser='Zanichelli'></z-footer>`
    });

    expect(page.root).toEqualHtml(
      `
      <z-footer  copyrightuser="Zanichelli" data='{
        "zanichelliLinks": [
          {
            "title": "Zanichelli.it",
            "items": [
              {
                "label": "Home zanichelli.it",
                "link": "https://www.zanichelli.it"
              },
              {
                "label": "Ricerca in catalogo",
                "link": "https://www.zanichelli.it/ricerca",
                "target": "_self"
              }
            ]
          },
          {
            "title": "Scuola",
            "items": [
              {
                "label": "Home scuola",
                "link": "https://www.zanichelli.it/scuola/in-primo-piano"
              },
              {
                "label": "Catalogo scuola",
                "link": "https://www.zanichelli.it/scuola/novita-e-proposte"
              }
            ]
          }
        ],
        "myzLink": {},
        "social": [],
        "bottomLinks": []
      }'>
        <mock:shadow-root>
          <footer>
            <section class="top">
              <nav>
                <div class="header">
                  <h2>Zanichelli.it</h2>
                </div>
                <div class="content">
                  <ul>
                    <li>
                      <a href='https://www.zanichelli.it' target='_blank'>Home zanichelli.it</a>
                    </li>
                    <li>
                      <a href='https://www.zanichelli.it/ricerca' target='_self'>Ricerca in catalogo</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <nav>
                <div class="header">
                  <h2>Scuola</h2>
                </div>
                <div class="content">
                  <ul>
                    <li>
                      <a href='https://www.zanichelli.it/scuola/in-primo-piano' target='_blank'>Home scuola</a>
                    </li>
                    <li>
                      <a href='https://www.zanichelli.it/scuola/novita-e-proposte' target='_blank'>Catalogo scuola</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </section>
            <section class="bottom">
              <div class="item logo">
                <z-logo targetblank height="38" width="144"></z-logo>
                <p>Copyright – ` +
        new Date().getFullYear() +
        ` Zanichelli All rights reserved</p>
                <p></p>
              </div>
              <div class="item">
                <p></p>
                <ul class="social"></ul>
              </div>
              <div class="item bottom-links">
                <ul></ul>
              </div>
            </section>
          </footer>
        </mock:shadow-root>
      </z-footer>
    `
    );
  });

  it("Test render ZFooter con myz link", async () => {
    const page = await newSpecPage({
      components: [ZFooter],
      html: `<z-footer data='{
        "zanichelliLinks": [],
        "myzLink": {"label": "MyZ", "link": "https://my.zanichelli.it", "img": "logo.png"},
        "social": [],
        "bottomLinks": []
      }' copyrightuser='Zanichelli'></z-footer>`
    });

    expect(page.root).toEqualHtml(
      `
      <z-footer copyrightuser='Zanichelli' data='{
        "zanichelliLinks": [],
        "myzLink": {"label": "MyZ", "link": "https://my.zanichelli.it", "img": "logo.png"},
        "social": [],
        "bottomLinks": []
      }'>
        <mock:shadow-root>
          <footer>
            <section class="top"></section>
            <section class="bottom">
              <div class="item logo">
                <z-logo link='https://my.zanichelli.it' height="38" width="144" imagealt='MyZ' targetblank /></z-logo>
                <p>Copyright – ` +
        new Date().getFullYear() +
        ` Zanichelli All rights reserved</p>
                <p></p>
              </div>
              <div class="item">
                <p></p>
                <ul class="social"></ul>
              </div>
              <div class="item bottom-links">
                <ul></ul>
              </div>
            </section>
          </footer>
        </mock:shadow-root>
      </z-footer>
    `
    );
  });

  it("Test render ZFooter con social", async () => {
    const page = await newSpecPage({
      components: [ZFooter],
      html: `<z-footer data='{
        "zanichelliLinks": [],
        "myzLink": {},
        "social": [
          {"icon": "facebook.png", "link": "https://it-it.facebook.com/zanichelliscuola", "description" : "facebook"},
          {"icon": "youtube.png", "link": "https://www.youtube.com/user/zanichellieditore", "description" : "youtube"}
        ],
        "bottomLinks": []
      }' copyrightuser='Zanichelli'></z-footer>`
    });

    expect(page.root).toEqualHtml(
      `
      <z-footer copyrightuser='Zanichelli' data='{
        "zanichelliLinks": [],
        "myzLink": {},
        "social": [
          {"icon": "facebook.png", "link": "https://it-it.facebook.com/zanichelliscuola", "description" : "facebook"},
          {"icon": "youtube.png", "link": "https://www.youtube.com/user/zanichellieditore", "description" : "youtube"}
        ],
        "bottomLinks": []
      }'>
        <mock:shadow-root>
          <footer>
            <section class="top"></section>
            <section class="bottom">
              <div class="item logo">
                <z-logo targetblank></z-logo>
                <p>Copyright – ` +
        new Date().getFullYear() +
        ` Zanichelli All rights reserved</p>
                <p></p>
              </div>
              <div class="item">
                <p></p>
                <ul class="social">
                  <li>
                    <a href='https://it-it.facebook.com/zanichelliscuola' target='_blank'>
                      <img src='facebook.png' alt='facebook'/>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/user/zanichellieditore' target='_blank'>
                      <img src='youtube.png' alt='youtube'/>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="item bottom-links">
                <ul></ul>
              </div>
            </section>
          </footer>
        </mock:shadow-root>
      </z-footer>
    `
    );
  });

  it("Test render ZFooter con social, ma senza il parametro 'description' ", async () => {
    const page = await newSpecPage({
      components: [ZFooter],
      html: `<z-footer data='{
        "zanichelliLinks": [],
        "myzLink": {},
        "social": [
          {"icon": "facebook.png", "link": "https://it-it.facebook.com/zanichelliscuola"},
          {"icon": "youtube.png", "link": "https://www.youtube.com/user/zanichellieditore"}
        ],
        "bottomLinks": []
      }' copyrightuser='Zanichelli'></z-footer>`
    });

    expect(page.root).toEqualHtml(
      `
      <z-footer copyrightuser='Zanichelli' data='{
        "zanichelliLinks": [],
        "myzLink": {},
        "social": [
          {"icon": "facebook.png", "link": "https://it-it.facebook.com/zanichelliscuola"},
          {"icon": "youtube.png", "link": "https://www.youtube.com/user/zanichellieditore"}
        ],
        "bottomLinks": []
      }'>
        <mock:shadow-root>
          <footer>
            <section class="top"></section>
            <section class="bottom">
              <div class="item logo">
                <z-logo targetblank height="38" width="144"></z-logo>
                <p>Copyright – ` +
        new Date().getFullYear() +
        ` Zanichelli All rights reserved</p>
                <p></p>
              </div>
              <div class="item">
                <p></p>
                <ul class="social">
                  <li>
                    <a href='https://it-it.facebook.com/zanichelliscuola' target='_blank'>
                      <img src='facebook.png'/>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.youtube.com/user/zanichellieditore' target='_blank'>
                      <img src='youtube.png' />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="item bottom-links">
                <ul></ul>
              </div>
            </section>
          </footer>
        </mock:shadow-root>
      </z-footer>
    `
    );
  });

  it("Test render ZFooter con bottom link", async () => {
    const page = await newSpecPage({
      components: [ZFooter],
      html: `<z-footer data='{
        "zanichelliLinks": [],
        "myzLink": {},
        "social": [],
        "bottomLinks": [
          {"label": "Chi siamo", "link": "https://www.zanichelli.it/chi-siamo/via-irnerio-34"},
          {"label": "Contatti e recapiti", "link": "https://www.zanichelli.it/contatti-e-recapiti", "target": "_self"}
        ]
      }' copyrightuser='Zanichelli'></z-footer>`
    });

    expect(page.root).toEqualHtml(
      `
      <z-footer copyrightuser='Zanichelli' data='{
        "zanichelliLinks": [],
        "myzLink": {},
        "social": [],
        "bottomLinks": [
          {"label": "Chi siamo", "link": "https://www.zanichelli.it/chi-siamo/via-irnerio-34"},
          {"label": "Contatti e recapiti", "link": "https://www.zanichelli.it/contatti-e-recapiti", "target": "_self"}
        ]
      }'>
        <mock:shadow-root>
          <footer>
            <section class="top"></section>
            <section class="bottom">
              <div class="item logo">
                <z-logo targetblank height="38" width="144"></z-logo>
                <p>Copyright – ` +
        new Date().getFullYear() +
        ` Zanichelli All rights reserved</p>
                <p></p>
              </div>
              <div class="item">
                <p></p>
                <ul class="social"></ul>
              </div>
              <div class="item bottom-links">
                <ul>
                  <li>
                    <a href='https://www.zanichelli.it/chi-siamo/via-irnerio-34' target='_blank'>Chi siamo</a>
                  </li>
                  <li>
                    <a href='https://www.zanichelli.it/contatti-e-recapiti' target='_self'>Contatti e recapiti</a>
                  </li>
                </ul>
              </div>
            </section>
          </footer>
        </mock:shadow-root>
      </z-footer>
    `
    );
  });
});
