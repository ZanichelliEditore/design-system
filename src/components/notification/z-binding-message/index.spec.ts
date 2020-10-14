import { newSpecPage } from "@stencil/core/testing";

import { ZBindingMessage } from "./index";

describe("Suite test ZBindingMessage", () => {
  it("Test render ZBindingMessage base", async () => {

    const page = await newSpecPage({
      components: [ZBindingMessage],
      html: `  <z-binding-message
                  bartitle="Su questo sito usiamo i cookie."
                  preventcookieset="true"
                  cookiepolicyurl="https://my.zanichelli.it/privacy#Cookie"
                  hide="false"></z-binding-message>`
    });

    expect(page.root).toEqualHtml(`
    <z-binding-message
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
      </z-binding-message>
    `)
  });

  it("Test render ZBindingMessage senza titolo", async () => {

    const page = await newSpecPage({
      components: [ZBindingMessage],
      html: `  <z-binding-message
                  preventcookieset="true"
                  cookiepolicyurl="https://my.zanichelli.it/privacy#Cookie"
                  hide="false"></z-binding-message>`
    });

    expect(page.root).toEqualHtml(`
    <z-binding-message
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
      </z-binding-message>
    `)
  });

  it("Test render ZBindingMessage nascosto", async () => {

    const page = await newSpecPage({
      components: [ZBindingMessage],
      html: `  <z-binding-message
                  preventcookieset="true"
                  cookiepolicyurl="https://my.zanichelli.it/privacy#Cookie"
                  hide="true"></z-binding-message>`
    });

    expect(page.root).toEqualHtml(`
    <z-binding-message
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
      </z-binding-message>
    `)
  });
});

