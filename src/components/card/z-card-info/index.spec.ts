import { newSpecPage } from "@stencil/core/testing";

import { zCardInfo } from "./index";

describe("Suite test zCardInfo", () => {
  it("Test render zCardInfo - empty", async () => {
    const page = await newSpecPage({
      components: [zCardInfo],
      html: `<z-card-info></z-card-info>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-info>
        <mock:shadow-root>
          <div>
            <z-icon name="multiply-circled-filled" height="18" width="18" tabindex="-1"></z-icon>
            <div class="content-wrapper">
              <section>
                Autore: <b></b>
                <br />
                Anno: <b></b>
                <br />
                <br />
              </section>
            </div>
            <div class="cta-wrapper">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </z-card-info>
    `);
  });

  it("Test render zCardInfo - with data", async () => {
    const page = await newSpecPage({
      components: [zCardInfo],
      html: `<z-card-info data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'></z-card-info>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-info data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'>
      <mock:shadow-root>
        <div>
          <z-icon name="multiply-circled-filled" height="18" width="18" tabindex="-1"></z-icon>
          <div class="content-wrapper">

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

          <div class="cta-wrapper">
            <slot></slot>
          </div>
        </div>
      </mock:shadow-root>
    </z-card-info>
  `);
});

  it("Test render zCardInfo - accessibility", async () => {
    const page = await newSpecPage({
      components: [zCardInfo],
      html: `<z-card-info accessibility='true' data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'></z-card-info>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-info accessibility='true' data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","installations":"1","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'>
      <mock:shadow-root>
        <div>
          <z-icon name="multiply-circled-filled" height="18" width="18" tabindex="0"></z-icon>
          <div class="content-wrapper">

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

          <div class="cta-wrapper">
            <slot></slot>
          </div>
        </div>
      </mock:shadow-root>
    </z-card-info>
  `);
  });
});
