import {newSpecPage} from "@stencil/core/testing";

import {ZBookCard} from "./index";

describe("Suite test ZBookCard", () => {
  it("Test render ZBookCard - EXPANDED - empty", async () => {
    const page = await newSpecPage({
      components: [ZBookCard],
      html: `<z-book-card variant="expanded"></z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card variant="expanded">
        <mock:shadow-root>
          <article class="expanded">
          <div class="wrapper">
            <div class="cover">
              <img aria-hidden="true" />
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
                <div class="resources" id="resources-${page.rootInstance.id}" tabindex="-1">
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
    const page = await newSpecPage({
      components: [ZBookCard],
      html: `<z-book-card
        variant="expanded"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
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
        ribbon="ADOTTATO"
        opera-title-tag="h1"
      >
        <mock:shadow-root>
          <article class="expanded">
          <div class="wrapper">
            <div class="cover">
              <div class="ribbon"><span>ADOTTATO</span></div>
              <img aria-hidden="true" src="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg" />
            </div>
            <div class="content">
              <div class="top">
                <div class="info">
                  <div class="left">
                    <div class="authors" aria-description="Autori">Massimo Bergamini, Anna Trifone, Graziella Barozzi</div>
                    <div class="title"><h1>Matematica.azzurro</h1></div>
                    <div class="subtitle">Volume 3 con Tutor</div>
                    <div class="isbn">
                      <span class="code" aria-description="ISBN edizione cartacea">9788808930552</span>
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
                <div class="resources" id="resources-${page.rootInstance.id}" tabindex="-1">
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
    const page = await newSpecPage({
      components: [ZBookCard],
      html: `<z-book-card variant="expanded">
        <z-icon slot="header-cta" name="star-empty"></z-icon>
        <z-tag slot="tags">EDI</z-tag>
        <z-link slot="resources">Resource link</z-link>
      </z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card variant="expanded">
        <mock:shadow-root>
          <article class="expanded">
          <div class="wrapper">
            <div class="cover">
              <img aria-hidden="true" />
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
                <div class="resources" id="resources-${page.rootInstance.id}" tabindex="-1">
                  <slot name="resources"></slot>
                </div>
              </div>
            </div>
          </div>
          </article>
        </mock:shadow-root>
        <z-icon slot="header-cta" name="star-empty"></z-icon>
        <z-tag slot="tags">EDI</z-tag>
        <z-link slot="resources">Resource link</z-link>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - EXPANDED - MOBILE - with props", async () => {
    const page = await newSpecPage({
      components: [ZBookCard],
      html: `<z-book-card
        variant="expanded"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
        ribbon="ADOTTATO"
        opera-title-tag="h1"
      ></z-book-card>`,
    });
    page.rootInstance.isMobile = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-book-card
        variant="expanded"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
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
                <img aria-hidden="true" src="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg" />
              </div>
              <div class="content">
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
                <div class="authors" aria-description="Autori">Massimo Bergamini, Anna Trifone, Graziella Barozzi</div>
                <div class="subtitle">Volume 3 con Tutor</div>
                <div class="isbn">
                  <span class="code" aria-description="ISBN edizione cartacea">9788808930552</span>
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
    const page = await newSpecPage({
      components: [ZBookCard],
      html: `<z-book-card variant="expanded" opera-title="Matematica.azzurro">
        <z-link slot="resources">Resource link</z-link>
      </z-book-card>`,
    });
    page.rootInstance.isMobile = true;
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
                <img aria-hidden="true" />
              </div>
              <div class="content">
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
              </div>
              <div class="footer close">
                <div class="resources" id="resources-${page.rootInstance.id}" tabindex="-1">
                  <slot name="resources"></slot>
                </div>
                <z-link
                  icon="chevron-down"
                  iconposition="right"
                  role="button"
                  class="show-resources"
                  aria-label="Risorse del libro Matematica.azzurro"
                  aria-expanded="false"
                  aria-haspopup="menu"
                  aria-controls="resources-${page.rootInstance.id}"
                >Vedi tutto</z-link>
              </div>
            </div>
          </article>
        </mock:shadow-root>
        <z-link slot="resources">Resource link</z-link>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - EXPANDED - MOBILE - with resources - open", async () => {
    const page = await newSpecPage({
      components: [ZBookCard],
      html: `<z-book-card variant="expanded" opera-title="Matematica.azzurro">
        <z-link slot="resources">Resource link</z-link>
      </z-book-card>`,
    });
    page.rootInstance.isMobile = true;
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
                <img aria-hidden="true" />
              </div>
              <div class="content">
                <div class="tags">
                  <slot name="tags"></slot>
                </div>
              </div>
              <div class="footer open">
                <div class="resources" id="resources-${page.rootInstance.id}" tabindex="0">
                  <slot name="resources"></slot>
                </div>
                <z-link
                  icon="chevron-up"
                  iconposition="right"
                  role="button"
                  class="show-resources"
                  aria-label="Risorse del libro Matematica.azzurro"
                  aria-expanded="true"
                  aria-haspopup="menu"
                  aria-controls="resources-${page.rootInstance.id}"
                >Chiudi</z-link>
              </div>
            </div>
          </article>
        </mock:shadow-root>
        <z-link slot="resources">Resource link</z-link>
      </z-book-card>
    `);
  });

  it("Test render ZBookCard - SEARCH - empty", async () => {
    const page = await newSpecPage({
      components: [ZBookCard],
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
                <img aria-hidden="true" />
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
    const page = await newSpecPage({
      components: [ZBookCard],
      html: `<z-book-card
        variant="search"
        cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
        opera-title="Matematica.azzurro"
        volume-title="Volume 3 con Tutor"
        authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
        isbn="9788808930552"
        ribbon="ADOTTATO"
        opera-title-tag="h1"
      ></z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi" cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg" isbn="9788808930552" opera-title="Matematica.azzurro" opera-title-tag="h1" ribbon="ADOTTATO" variant="search" volume-title="Volume 3 con Tutor">
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
                <img aria-hidden="true" src="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"/>
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
                  <span aria-description="ISBN edizione cartacea" class="code">
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
    const page = await newSpecPage({
      components: [ZBookCard],
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
                <img aria-hidden="true" />
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
    const page = await newSpecPage({
      components: [ZBookCard],
      html: `<z-book-card variant="compact"></z-book-card>`,
    });
    expect(page.root).toEqualHtml(`
      <z-book-card variant="compact">
        <mock:shadow-root>
          <article class="compact">
            <div class="wrapper">
              <div class="cover">
                <img aria-hidden="true" />
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
    const page = await newSpecPage({
      components: [ZBookCard],
      html: `<z-book-card
              variant="compact"
              cover="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg"
              opera-title="Matematica.azzurro"
              volume-title="Volume 3 con Tutor"
              authors="Massimo Bergamini, Anna Trifone, Graziella Barozzi"
              isbn="9788808930552"
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
        opera-title-tag="h1"
        borderless="true"
      >
        <mock:shadow-root>
          <article class="compact borderless">
            <div class="wrapper">
              <div class="cover">
                <img aria-hidden="true" src="https://s3-eu-west-1.amazonaws.com/staticmy.zanichelli.it/copertine/dashboard/m40066.9788808930552.jpg" />
              </div>
              <div class="content">
                <div class="authors" aria-description="Autori">Massimo Bergamini, Anna Trifone, Graziella Barozzi</div>
                <div class="title"><h1>Matematica.azzurro</h1></div>
                <div class="subtitle">Volume 3 con Tutor</div>
                <div class="isbn">
                  <span class="code" aria-description="ISBN edizione cartacea">9788808930552</span>
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
    const page = await newSpecPage({
      components: [ZBookCard],
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
                <img aria-hidden="true" />
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
