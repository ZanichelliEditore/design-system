import { newSpecPage } from "@stencil/core/testing";

import { ZCardDictionaryInfo } from "./index";

describe("Suite test ZCardDictionaryInfo", () => {
  it("Test render ZCardDictionaryInfo - empty", async () => {
    const page = await newSpecPage({
      components: [ZCardDictionaryInfo],
      html: `<z-card-dictionary-info></z-card-dictionary-info>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-dictionary-info>
        <mock:shadow-root>
          <div>
            <z-icon name="multiply-circled-filled" height="18" width="18" tabindex="0"></z-icon>
            <div>
              <section>
                Autore: <b></b>
                <br />
                Anno: <b></b>
                <br />
                <br />
              </section>
            </div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-card-dictionary-info>
    `);
  });

  it("Test render ZCardDictionaryInfo - with data", async () => {
    const page = await newSpecPage({
      components: [ZCardDictionaryInfo],
      html: `<z-card-dictionary-info data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'></z-card-dictionary-info>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-dictionary-info data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'>
      <mock:shadow-root>
        <div>
          <z-icon name="multiply-circled-filled" height="18" width="18" tabindex="0"></z-icon>
          <div>

            <section>
              Autore: <b>Nicola Zingarelli</b>
              <br />
              Anno: <b>2021</b>
              <br />
              Vocabolario della lingua italiana
              <br />
              A cura di Mario Cannella, Beata Lazzarini
            </section>

            <section>
              <span class="license-heading">
                <span>Licenza online</span>
                <span class="expired">SCADUTA</span>
              </span>
              Scadenza il <b>31/12/2021</b>
              <br />
              Installazioni disponibili: <b>1</b>
            </section>

            <section>
              <span class="license-heading">
                <span>Licenza offline</span>
                <span class="expired"></span>
              </span>
              Scadenza il <b>30/06/2021</b>
              <br />
              Installazioni disponibili: <b>2</b>
            </section>

          </div>
          <slot></slot>
        </div>
      </mock:shadow-root>
    </z-card-dictionary-info>
  `);
  });
});
