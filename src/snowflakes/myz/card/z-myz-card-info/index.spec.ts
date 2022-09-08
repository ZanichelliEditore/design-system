import {newSpecPage} from "@stencil/core/testing";

import {ZMyzCardInfo} from "./index";

describe("Suite test ZMyzCardInfo", () => {
  it("Test render ZMyzCardInfo - empty", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardInfo],
      html: `<z-myz-card-info></z-card-info>`,
    });

    expect(page.root).toEqualHtml(`
      <z-myz-card-info>
        <mock:shadow-root>
          <div>
            <z-icon name="multiply-circled-filled" height="18" width="18" tabindex="0"></z-icon>
            <div class="content-wrapper">
              <section class="info-wrapper">
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

  it("Test render ZMyzCardInfo - with data", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardInfo],
      html: `<z-myz-card-info data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'></z-card-info>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-info data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'>
      <mock:shadow-root>
        <div>
          <z-icon name="multiply-circled-filled" height="18" width="18" tabindex="0"></z-icon>
          <div class="content-wrapper">

            <section class="info-wrapper">
              <span>
                Autore: <b>Nicola Zingarelli</b>
                <br />
              </span>
              <span>
                Anno: <b>2021</b>
                <br />
              </span>
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
            </section>

            <section>
              <span class="license-heading">
                <span>Licenza offline</span>
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

  it("Test render ZMyzCardInfo - htmltabindex", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardInfo],
      html: `<z-myz-card-info htmltabindex='-1' data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'></z-card-info>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-info htmltabindex='-1' data='{"author":"Nicola Zingarelli","year":"2021","title":"Vocabolario della lingua italiana","description":"A cura di Mario Cannella, Beata Lazzarini","onlineLicense":{"expiration":"31/12/2021","expired":true},"offlineLicense":{"expiration":"30/06/2021","installations":"2","expired":false}}'>
      <mock:shadow-root>
        <div>
          <z-icon name="multiply-circled-filled" height="18" width="18" tabindex="-1"></z-icon>
          <div class="content-wrapper">

            <section class="info-wrapper">
              <span>
                Autore: <b>Nicola Zingarelli</b>
                <br />
              </span>
              <span>
                Anno: <b>2021</b>
                <br />
              </span>
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
            </section>

            <section>
              <span class="license-heading">
                <span>Licenza offline</span>
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
