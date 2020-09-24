import { newSpecPage } from "@stencil/core/testing";

import { ZCookiebar } from "./index";

describe("Suite test ZCookiebar", () => {
  it("Test render ZCookiebar base", async () => {

    const page = await newSpecPage({
      components: [ZCookiebar],
      html: `  <z-cookiebar
                  bartitle="Su questo sito usiamo i cookie."
                  preventcookieset="true"
                  cookiepolicyurl="https://my.zanichelli.it/privacy#Cookie"
                  hide="false"></z-cookiebar>`
    });

    expect(page.root).toEqualHtml(`
    <z-cookiebar
      bartitle="Su questo sito usiamo i cookie."
      preventcookieset="true"
      cookiepolicyurl="https://my.zanichelli.it/privacy#Cookie"
      hide="false">
        <mock:shadow-root>
          <div class="">
            <div class="wrapper">
              <div class="content">
                <div>
                  <h2>Su questo sito usiamo i cookie.</h2>
                  <div>
                    <p>Se continui a navigare ci permetti di farlo secondo le regole spiegate nella nostra informativa sulla privacy relativa ai &nbsp;
                      <a href="https://my.zanichelli.it/privacy#Cookie" target="_blank">cookie</a>.
                    </p>
                  </div>
                </div>
                <z-button variant="primary">OK</z-button>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-cookiebar>
    `)
  });

  it("Test render ZCookiebar senza titolo", async () => {

    const page = await newSpecPage({
      components: [ZCookiebar],
      html: `  <z-cookiebar
                  preventcookieset="true"
                  cookiepolicyurl="https://my.zanichelli.it/privacy#Cookie"
                  hide="false"></z-cookiebar>`
    });

    expect(page.root).toEqualHtml(`
    <z-cookiebar
      preventcookieset="true"
      cookiepolicyurl="https://my.zanichelli.it/privacy#Cookie"
      hide="false">
        <mock:shadow-root>
          <div class="">
            <div class="wrapper">
              <div class="content">
                <div>
                  <h2></h2>
                  <div>
                    <p>Se continui a navigare ci permetti di farlo secondo le regole spiegate nella nostra informativa sulla privacy relativa ai &nbsp;
                      <a href="https://my.zanichelli.it/privacy#Cookie" target="_blank">cookie</a>.
                    </p>
                  </div>
                </div>
                <z-button variant="primary">OK</z-button>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-cookiebar>
    `)
  });

  it("Test render ZCookiebar nascosto", async () => {

    const page = await newSpecPage({
      components: [ZCookiebar],
      html: `  <z-cookiebar
                  preventcookieset="true"
                  cookiepolicyurl="https://my.zanichelli.it/privacy#Cookie"
                  hide="true"></z-cookiebar>`
    });

    expect(page.root).toEqualHtml(`
    <z-cookiebar
      preventcookieset="true"
      cookiepolicyurl="https://my.zanichelli.it/privacy#Cookie"
      hide="true">
        <mock:shadow-root>
          <div class="hidden">
            <div class="wrapper">
              <div class="content">
                <div>
                  <h2></h2>
                  <div>
                    <p>Se continui a navigare ci permetti di farlo secondo le regole spiegate nella nostra informativa sulla privacy relativa ai &nbsp;
                      <a href="https://my.zanichelli.it/privacy#Cookie" target="_blank">cookie</a>.
                    </p>
                  </div>
                </div>
                <z-button variant="primary">OK</z-button>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-cookiebar>
    `)
  });
});

