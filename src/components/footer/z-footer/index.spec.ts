import { newSpecPage } from "@stencil/core/testing";

import { ZFooter } from "./index";

describe("Suite test ZFooter", () => {
  it("Test render ZFooter - empty", async () => {
    const page = await newSpecPage({
      components: [ZFooter],
      html: `<z-footer></z-footer>`,
    });
    expect(page.root).toEqualHtml(
      `
        <z-footer>
          <mock:shadow-root>
            <footer>
              <section class="top">
                <slot></slot>
              </section>
              <section class="bottom">
                <div class="item logo">
                  ${expectedLogo()}
                  <p>${expectedCopyright()}</p>
                  <p>${expectedCertifications()}</p>
                </div>
                <div class="item">
                  <p>${expectedAddress()}</p>
                  <div class="social">
                    <slot name="social"></slot>
                  </div>
                </div>
                <div class="item bottom-links">
                  <slot name="links"></slot>
                </div>
              </section>
            </footer>
          </mock:shadow-root>
        </z-footer>
      `
    );
  });

  it("Test render ZFooter - main slot", async () => {
    const page = await newSpecPage({
      components: [ZFooter],
      html: `<z-footer>
          <div>main section content</div>
        </z-footer>`,
    });
    expect(page.root).toEqualHtml(
      `
        <z-footer>
          <mock:shadow-root>
            <footer>
              <section class="top">
                <slot></slot>
              </section>
              <section class="bottom">
                <div class="item logo">
                  ${expectedLogo()}
                  <p>${expectedCopyright()}</p>
                  <p>${expectedCertifications()}</p>
                </div>
                <div class="item">
                  <p>${expectedAddress()}</p>
                  <div class="social">
                    <slot name="social"></slot>
                  </div>
                </div>
                <div class="item bottom-links">
                  <slot name="links"></slot>
                </div>
              </section>
            </footer>
          </mock:shadow-root>
          <div>main section content</div>
        </z-footer>
      `
    );
  });

  it("Test render ZFooter - links slot", async () => {
    const page = await newSpecPage({
      components: [ZFooter],
      html: `<z-footer>
          <div slot="links">links section content</div>
        </z-footer>`,
    });
    expect(page.root).toEqualHtml(
      `
        <z-footer>
          <mock:shadow-root>
            <footer>
              <section class="top">
                <slot></slot>
              </section>
              <section class="bottom">
                <div class="item logo">
                  ${expectedLogo()}
                  <p>${expectedCopyright()}</p>
                  <p>${expectedCertifications()}</p>
                </div>
                <div class="item">
                  <p>${expectedAddress()}</p>
                  <div class="social">
                    <slot name="social"></slot>
                  </div>
                </div>
                <div class="item bottom-links">
                  <slot name="links"></slot>
                </div>
              </section>
            </footer>
          </mock:shadow-root>
          <div slot="links">links section content</div>
        </z-footer>
      `
    );
  });

  it("Test render ZFooter - social slot", async () => {
    const page = await newSpecPage({
      components: [ZFooter],
      html: `<z-footer>
          <div slot="social">social section content</div>
        </z-footer>`,
    });
    expect(page.root).toEqualHtml(
      `
        <z-footer>
          <mock:shadow-root>
            <footer>
              <section class="top">
                <slot></slot>
              </section>
              <section class="bottom">
                <div class="item logo">
                  ${expectedLogo()}
                  <p>${expectedCopyright()}</p>
                  <p>${expectedCertifications()}</p>
                </div>
                <div class="item">
                  <p>${expectedAddress()}</p>
                  <div class="social">
                    <slot name="social"></slot>
                  </div>
                </div>
                <div class="item bottom-links">
                  <slot name="links"></slot>
                </div>
              </section>
            </footer>
          </mock:shadow-root>
          <div slot="social">social section content</div>
        </z-footer>
      `
    );
  });

  it("Test render ZFooter - JSON data backward compatibility", async () => {
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
              }
            ]
          }
        ],
        "myzLink": {},
        "social": [
          {"icon": "facebook.png", "link": "https://it-it.facebook.com/zanichelliscuola", "description" : "facebook"},
          {"icon": "youtube.png", "link": "https://www.youtube.com/user/zanichellieditore", "description" : "youtube"}
        ],
        "bottomLinks": [
          {"label": "Chi siamo", "link": "https://www.zanichelli.it/chi-siamo/via-irnerio-34"},
          {"label": "Contatti e recapiti", "link": "https://www.zanichelli.it/contatti-e-recapiti", "target": "_self"}
        ]
      }'></z-footer>`,
    });
    expect(page.root).toEqualHtml(
      `
        <z-footer data='{
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
              }
            ]
          }
        ],
        "myzLink": {},
        "social": [
          {"icon": "facebook.png", "link": "https://it-it.facebook.com/zanichelliscuola", "description" : "facebook"},
          {"icon": "youtube.png", "link": "https://www.youtube.com/user/zanichellieditore", "description" : "youtube"}
        ],
        "bottomLinks": [
          {"label": "Chi siamo", "link": "https://www.zanichelli.it/chi-siamo/via-irnerio-34"},
          {"label": "Contatti e recapiti", "link": "https://www.zanichelli.it/contatti-e-recapiti", "target": "_self"}
        ]
      }'>
          <mock:shadow-root>
            <footer>
              <section class="top">
                <slot></slot>
                <z-footer-section name="Zanichelli.it">
                  <z-footer-link href="https://www.zanichelli.it">Home zanichelli.it</z-footer-link>
                  <z-footer-link href="https://www.zanichelli.it/ricerca">Ricerca in catalogo</z-footer-link>
                </z-footer-section>
                <z-footer-section name="Scuola">
                  <z-footer-link href="https://www.zanichelli.it/scuola/in-primo-piano">Home scuola</z-footer-link>
                </z-footer-section>
                <z-footer-section name="Altre informazioni">
                  <z-footer-link href="https://www.zanichelli.it/chi-siamo/via-irnerio-34">
                    Chi siamo
                  </z-footer-link>
                  <z-footer-link href="https://www.zanichelli.it/contatti-e-recapiti">
                    Contatti e recapiti
                  </z-footer-link>
                </z-footer-section>
              </section>
              <section class="bottom">
                <div class="item logo">
                  ${expectedLogo()}
                  <p>${expectedCopyright()}</p>
                  <p>${expectedCertifications()}</p>
                </div>
                <div class="item">
                  <p>${expectedAddress()}</p>
                  <div class="social">
                    <slot name="social"></slot>
                    <z-footer-social icon="facebook.png" href="https://it-it.facebook.com/zanichelliscuola" description="facebook"></z-footer-social>
                    <z-footer-social icon="youtube.png" href="https://www.youtube.com/user/zanichellieditore" description="youtube"></z-footer-social>
                  </div>
                </div>
                <div class="item bottom-links">
                  <slot name="links"></slot>
                  <z-footer-link href="https://www.zanichelli.it/chi-siamo/via-irnerio-34">Chi siamo</z-footer-link>
                  <z-footer-link href="https://www.zanichelli.it/contatti-e-recapiti">Contatti e recapiti</z-footer-link>
                </div>
              </section>
            </footer>
          </mock:shadow-root>
        </z-footer>
      `
    );
  });
});

const expectedLogo = () => `
  <z-logo link="https://www.zanichelli.it" imagealt="Home Zanichelli" targetblank height="38" width="144"></z-logo>
`;

const expectedCopyright = () => `
  Copyright – 2018-${new Date().getFullYear()} Zanichelli
  <span>All rights reserved </span>
`;

const expectedCertifications = () => `
  Zanichelli editore S.p.A. opera con sistema qualità certificato CertiCarGraf n. 477
  <br />
  secondo la norma UNI EN ISO 9001:2015
`;

const expectedAddress = () => `
  Zanichelli editore S.p.A. via Irnerio 34, 40126 Bologna
  <br />
  Fax 051 - 249.782 / 293.224 | Tel. 051 - 293.111 / 245.024
  <br />
  Partita IVA 03978000374
`;
