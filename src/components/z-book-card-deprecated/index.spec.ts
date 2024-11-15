import {newSpecPage} from "@stencil/core/testing";

import {ZBookCardDeprecated} from "./index";

describe("Suite test ZBookCard", () => {
  it("Test render ZBookCard - EXPANDED - empty", async () => {
    mockMatchMedia();
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card variant="expanded"></z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card variant="expanded">
        <mock:shadow-root>
          <article class="expanded">
          <div class="wrapper">
            <div class="cover">
              <div class="img-wrapper">
                <img aria-hidden="true" />
              </div>
            </div>
            <div class="content">
              <div class="top">
                <div class="info">
                  <div class="left">
                    <div class="title"></div>
                  </div>
                  <div class="right">
                    <slot name="header-cta"></slot>
                  </div>
                </div>
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
              </div>
              <div class="bottom">
                <div class="resources" id="resources-${page.rootInstance.id}">
                  <slot name="resources"></slot>
                </div>
              </div>
            </div>
          </div>
          </article>
        </mock:shadow-root>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - EXPANDED - with props", async () => {
    mockMatchMedia();
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card
        variant="expanded"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
        isbn-label="(ed. cartacea)"
        ribbon="ADOTTATO"
        ribbon-icon="info"
        ribbon-interactive="true"
        opera-title-tag="h1"
      ></z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card
        variant="expanded"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
        isbn-label="(ed. cartacea)"
        ribbon="ADOTTATO"
        ribbon-icon="info"
        ribbon-interactive="true"
        opera-title-tag="h1"
      >
        <mock:shadow-root>
          <article class="expanded">
          <div class="wrapper">
            <div class="cover">
              <button class="ribbon interactive"><z-icon fill="color-inverse-icon" height="16" name="info" width="16"></z-icon><span>ADOTTATO</span></button>
              <div class="img-wrapper">
                <img aria-hidden="true" src="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg" />
              </div>
            </div>
            <div class="content">
              <div class="top">
                <div class="info">
                  <div class="left">
                    <div class="authors" aria-description="Autori">Massimo Bergamini, Anna Trifone, Graziella Barozzi</div>
                    <div class="title"><h1>Matematica.azzurro</h1></div>
                    <div class="subtitle">Volume 3 con Tutor</div>
                    <div class="isbn">
                      <span class="code" aria-description="ISBN (ed. cartacea)">9788808930552</span>
                      <span class="label"> (ed. cartacea)</span>
                    </div>
                  </div>
                  <div class="right">
                    <slot name="header-cta"></slot>
                  </div>
                </div>
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
              </div>
              <div class="bottom">
                <div class="resources" id="resources-${page.rootInstance.id}">
                  <slot name="resources"></slot>
                </div>
              </div>
            </div>
          </div>
          </article>
        </mock:shadow-root>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - EXPANDED - with props", async () => {
    mockMatchMedia();
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card
        variant="expanded"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
        isbn-label="(ed. cartacea)"
        ribbon-icon="info"
        ribbon-interactive="true"
        opera-title-tag="h1"
      ></z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card
        variant="expanded"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
        isbn-label="(ed. cartacea)"
        ribbon-icon="info"
        ribbon-interactive="true"
        opera-title-tag="h1"
      >
        <mock:shadow-root>
          <article class="expanded">
          <div class="wrapper">
            <div class="cover">
              <div class="img-wrapper">
                <img aria-hidden="true" src="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg" />
              </div>
            </div>
            <div class="content">
              <div class="top">
                <div class="info">
                  <div class="left">
                    <div class="authors" aria-description="Autori">Massimo Bergamini, Anna Trifone, Graziella Barozzi</div>
                    <div class="title"><h1>Matematica.azzurro</h1></div>
                    <div class="subtitle">Volume 3 con Tutor</div>
                    <div class="isbn">
                      <span class="code" aria-description="ISBN (ed. cartacea)">9788808930552</span>
                      <span class="label"> (ed. cartacea)</span>
                    </div>
                  </div>
                  <div class="right">
                    <slot name="header-cta"></slot>
                  </div>
                </div>
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
              </div>
              <div class="bottom">
                <div class="resources" id="resources-${page.rootInstance.id}">
                  <slot name="resources"></slot>
                </div>
              </div>
            </div>
          </div>
          </article>
        </mock:shadow-root>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - EXPANDED - with slots", async () => {
    mockMatchMedia();
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card variant="expanded">
        <z-icon slot="header-cta" name="star-empty"></z-icon>
        <z-tag slot="tags">EDI</z-tag>
        <a class="z-link" slot="resources">Resource link</a>
      </z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card variant="expanded">
        <mock:shadow-root>
          <article class="expanded">
          <div class="wrapper">
            <div class="cover">
              <div class="img-wrapper">
                <img aria-hidden="true" />
              </div>
            </div>
            <div class="content">
              <div class="top">
                <div class="info">
                  <div class="left">
                    <div class="title"></div>
                  </div>
                  <div class="right">
                    <slot name="header-cta"></slot>
                  </div>
                </div>
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
              </div>
              <div class="bottom">
                <div class="resources" id="resources-${page.rootInstance.id}">
                  <slot name="resources"></slot>
                </div>
              </div>
            </div>
          </div>
          </article>
        </mock:shadow-root>
        <z-icon slot="header-cta" name="star-empty"></z-icon>
        <z-tag slot="tags">EDI</z-tag>
        <a class="z-link" slot="resources">Resource link</a>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - EXPANDED - MOBILE - with props", async () => {
    mockMatchMedia(true);
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card
        variant="expanded"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
        isbn-label="(ed. cartacea)"
        ribbon="ADOTTATO"
        opera-title-tag="h1"
      ></z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card
        variant="expanded"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
        isbn-label="(ed. cartacea)"
        ribbon="ADOTTATO"
        opera-title-tag="h1"
      >
        <mock:shadow-root>
          <article class="expanded">
            <div class="wrapper">
              <div class="header">
                <div class="title"><h1>Matematica.azzurro</h1></div>
                <slot name="header-cta"></slot>
              </div>
              <div class="cover">
                <div class="ribbon"><span>ADOTTATO</span></div>
                <div class="img-wrapper">
                  <img aria-hidden="true" src="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg" />
                </div>
              </div>
              <div class="content">
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
                <div class="authors" aria-description="Autori">Massimo Bergamini, Anna Trifone, Graziella Barozzi</div>
                <div class="subtitle">Volume 3 con Tutor</div>
                <div class="isbn">
                  <span class="code" aria-description="ISBN (ed. cartacea)">9788808930552</span>
                  <span class="label"> (ed. cartacea)</span>
                </div>
              </div>
            </div>
          </article>
        </mock:shadow-root>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - EXPANDED - MOBILE - with resources - close", async () => {
    mockMatchMedia(true);
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card variant="expanded" opera-title="Matematica.azzurro">
        <a class="z-link" slot="resources">Resource link</a>
      </z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card variant="expanded" opera-title="Matematica.azzurro">
        <mock:shadow-root>
          <article class="expanded">
            <div class="wrapper">
              <div class="header">
                <div class="title">Matematica.azzurro</div>
                <slot name="header-cta"></slot>
              </div>
              <div class="cover">
                <div class="img-wrapper">
                  <img aria-hidden="true" />
                </div>
              </div>
              <div class="content">
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
              </div>
              <div class="footer close">
                <button
                  class="show-resources"
                  aria-label="Risorse del libro Matematica.azzurro"
                  aria-expanded="false"
                  aria-controls="resources-${page.rootInstance.id}"
                >
                  Vedi tutto
                  <z-icon name="chevron-down"></z-icon>
                </button>
                <div class="resources" id="resources-${page.rootInstance.id}">
                  <slot name="resources"></slot>
                </div>
              </div>
            </div>
          </article>
        </mock:shadow-root>
        <a class="z-link"slot="resources">Resource link</a>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - EXPANDED - MOBILE - with resources - open", async () => {
    mockMatchMedia(true);
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card variant="expanded" opera-title="Matematica.azzurro">
        <a class="z-link" slot="resources">Resource link</a>
      </z-book-card>`,
    });
    page.rootInstance.showResources = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-book-card variant="expanded" opera-title="Matematica.azzurro">
        <mock:shadow-root>
          <article class="expanded">
            <div class="wrapper">
              <div class="header">
                <div class="title">Matematica.azzurro</div>
                <slot name="header-cta"></slot>
              </div>
              <div class="cover">
                <div class="img-wrapper">
                  <img aria-hidden="true" />
                </div>
              </div>
              <div class="content">
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
              </div>
              <div class="footer open">
                <div class="resources" id="resources-${page.rootInstance.id}">
                  <slot name="resources"></slot>
                </div>
                <button
                  class="show-resources"
                  aria-label="Risorse del libro Matematica.azzurro"
                  aria-expanded="true"
                  aria-controls="resources-${page.rootInstance.id}"
                >
                  Chiudi
                  <z-icon name="chevron-up"></z-icon>
                </button>
              </div>
            </div>
          </article>
        </mock:shadow-root>
        <a class="z-link" slot="resources">Resource link</a>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - SEARCH - empty", async () => {
    mockMatchMedia();
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card variant="search"></z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card variant="search">
        <mock:shadow-root>
          <article class="search">
          <div class="wrapper-container">
            <div class="wrapper">
              <div class="header">
              <div class="title"></div>
                <slot name="header-cta"></slot>
              </div>
              <div class="cover">
                <div class="img-wrapper">
                  <img aria-hidden="true" />
                </div>
              </div>
              <div class="content">
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
              </div>
            </div>
            <div class="action-container">
                <slot name="footer-cta"></slot>
              </div>
          </div>
          </article>
        </mock:shadow-root>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - SEARCH - with props", async () => {
    mockMatchMedia();
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card
        variant="search"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
        isbn-label="(ed. cartacea)"
        ribbon="ADOTTATO"
        opera-title-tag="h1"
      ></z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi" cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg" isbn="9788808930552" isbn-label="(ed. cartacea)" opera-title="Matematica.azzurro" opera-title-tag="h1" ribbon="ADOTTATO" variant="search" volume-title="Volume 3 con Tutor">
        <mock:shadow-root>
          <article class="search">
          <div class="wrapper-container">
            <div class="wrapper">
              <div class="header">
                <div class="title">
                  <h1>Matematica.azzurro</h1>
                </div>
                <slot name="header-cta"></slot>
              </div>
              <div class="cover">
                <div class="ribbon">
                  <span>ADOTTATO</span>
                </div>
                <div class="img-wrapper">
                  <img aria-hidden="true" src="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"/>
                </div>
              </div>
              <div class="content">
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
                <div aria-description="Autori" class="authors">
                  Massimo Bergamini, Anna Trifone, Graziella Barozzi
                </div>
                <div class="subtitle">
                  Volume 3 con Tutor
                </div>
                <div class="isbn">
                  <span aria-description="ISBN (ed. cartacea)" class="code">
                    9788808930552
                  </span>
                  <span class="label">
                  (ed. cartacea)
                  </span>
                </div>
              </div>
            </div>
            <div class="action-container">
                <slot name="footer-cta"></slot>
              </div>
          </div>
          </article>
        </mock:shadow-root>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - SEARCH - with slots", async () => {
    mockMatchMedia();
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card variant="search">
        <z-icon slot="header-cta" name="star-empty"></z-icon>
        <z-tag slot="tags">EDI</z-tag>
        <div slot="footer-cta">
          <z-button href="http://dizionari.zanichelli.it" target="_blank" variant="secondary" size="small">
            Leggi il libro online
          </z-button>
        </div>
      </z-book-card>`,
    });

    expect(page.root).toEqualHtml(`
      <z-book-card variant="search">
        <mock:shadow-root>
          <article class="search">
          <div class="wrapper-container">
            <div class="wrapper">
              <div class="header">
                <div class="title"></div>
                <slot name="header-cta"></slot>
              </div>
              <div class="cover">
                <div class="img-wrapper">
                  <img aria-hidden="true" />
                </div>
              </div>
              <div class="content">
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
              </div>
            </div>
            <div class="action-container">
                <slot name="footer-cta"></slot>
            </div>
          </div>
          </article>
        </mock:shadow-root>
        <z-icon name="star-empty" slot="header-cta"></z-icon>
        <z-tag slot="tags">
          EDI
        </z-tag>
        <div slot="footer-cta">
          <z-button href="http://dizionari.zanichelli.it" size="small" target="_blank" variant="secondary">
            Leggi il libro online
          </z-button>
        </div>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - COMPACT - empty", async () => {
    mockMatchMedia();
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card variant="compact"></z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card variant="compact">
        <mock:shadow-root>
          <article class="compact">
            <div class="wrapper">
              <div class="cover">
                <div class="img-wrapper">
                  <img aria-hidden="true" />
                </div>
              </div>
              <div class="content">
                <div class="title"></div>
              </div>
              <div class="action-container">
                <slot name="footer-cta"></slot>
              </div>
            </div>
          </article>
        </mock:shadow-root>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - COMPACT - with props", async () => {
    mockMatchMedia();
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card
              variant="compact"
              cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
              opera-title="Matematica.azzurro"
              volume-title="Volume 3 con Tutor"
              authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
              isbn="9788808930552"
              isbn-label="(ed. cartacea)"
              opera-title-tag="h1"
              borderless="true"
      ></z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card
        variant="compact"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
        isbn-label="(ed. cartacea)"
        opera-title-tag="h1"
        borderless="true"
      >
        <mock:shadow-root>
          <article class="compact borderless">
            <div class="wrapper">
              <div class="cover">
                <div class="img-wrapper">
                  <img aria-hidden="true" src="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg" />
                </div>
              </div>
              <div class="content">
                <div class="authors" aria-description="Autori">Massimo Bergamini, Anna Trifone, Graziella Barozzi</div>
                <div class="title"><h1>Matematica.azzurro</h1></div>
                <div class="subtitle">Volume 3 con Tutor</div>
                <div class="isbn">
                  <span class="code" aria-description="ISBN (ed. cartacea)">9788808930552</span>
                  <span class="label"> (ed. cartacea)</span>
                </div>
              </div>
              <div class="action-container">
                <slot name="footer-cta"></slot>
              </div>
            </div>
          </article>
        </mock:shadow-root>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - COMPACT - with slots", async () => {
    mockMatchMedia();
    const page = await newSpecPage({
      components: [ZBookCardDeprecated],
      html: `<z-book-card variant="compact">
        <z-button slot="footer-cta">cta 1</z-button>
        <z-button slot="footer-cta">cta 2</z-button>
      </z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card variant="compact">
        <mock:shadow-root>
          <article class="compact">
            <div class="wrapper">
              <div class="cover">
                <div class="img-wrapper">
                  <img aria-hidden="true" />
                </div>
              </div>
              <div class="content">
                <div class="title"></div>
              </div>
              <div class="action-container">
                <slot name="footer-cta"></slot>
              </div>
            </div>
          </article>
        </mock:shadow-root>
        <z-button slot="footer-cta">cta 1</z-button>
        <z-button slot="footer-cta">cta 2</z-button>
      </z-book-card>
    `);
  });
});

const mockMatchMedia = (matches: boolean = false) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};
