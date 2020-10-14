import { newSpecPage } from "@stencil/core/testing";

import { ZBindingMessage } from "./index";

describe("Suite test ZBindingMessage", () => {
  it("Test render empty ZBindingMessage", async () => {

    const page = await newSpecPage({
      components: [ZBindingMessage],
      html: `  <z-binding-message messagetitle="Su questo sito usiamo i cookie."></z-binding-message>`
    });

    expect(page.root).toEqualHtml(`
    <z-binding-message messagetitle="Su questo sito usiamo i cookie.">
      <mock:shadow-root>
        <div>
          <div>
            <h2>
              Su questo sito usiamo i cookie.
            </h2>
            <div>
              <slot name="description"></slot>
            </div>
          </div>
          <slot name="cta"></slot>
        </div>
      </mock:shadow-root>
    </z-binding-message>
    `)
  });

  it("Test render ZBindingMessage with description", async () => {

    const page = await newSpecPage({
      components: [ZBindingMessage],
      html: `
      <z-binding-message messagetitle="Su questo sito usiamo i cookie.">
        <p slot="description">Se continui a navigare ci permetti di farlo secondo le regole spiegate nella nostra informativa sulla privacy relativa ai &nbsp;
          <a href="https://my.zanichelli.it/privacy#Cookie" target="_blank">cookie</a>.
        </p>
      </z-binding-message>
      `
    });

    expect(page.root).toEqualHtml(`
    <z-binding-message messagetitle="Su questo sito usiamo i cookie.">
      <mock:shadow-root>
        <div>
          <div>
            <h2>
              Su questo sito usiamo i cookie.
            </h2>
            <div>
              <slot name="description"></slot>
            </div>
          </div>
          <slot name="cta"></slot>
        </div>
      </mock:shadow-root>
      <p slot="description">
        Se continui a navigare ci permetti di farlo secondo le regole spiegate nella nostra informativa sulla privacy relativa ai
        <a href="https://my.zanichelli.it/privacy#Cookie" target="_blank">
          cookie
        </a>
        .
      </p>
    </z-binding-message>
    `)
  });

  it("Test render empty ZBindingMessage with description and cta", async () => {
    const page = await newSpecPage({
      components: [ZBindingMessage],
      html: `
      <z-binding-message messagetitle="Su questo sito usiamo i cookie.">
        <p slot="description">Se continui a navigare ci permetti di farlo secondo le regole spiegate nella nostra informativa sulla privacy relativa ai &nbsp;
          <a href="https://my.zanichelli.it/privacy#Cookie" target="_blank">cookie</a>.
        </p>
      <z-button slot="cta" variant="primary">OK</z-button>
      </z-binding-message>`
    });

    expect(page.root).toEqualHtml(`
    <z-binding-message messagetitle="Su questo sito usiamo i cookie.">
      <mock:shadow-root>
        <div>
          <div>
            <h2>
              Su questo sito usiamo i cookie.
            </h2>
            <div>
              <slot name="description"></slot>
            </div>
          </div>
          <slot name="cta"></slot>
        </div>
      </mock:shadow-root>
      <p slot="description">
        Se continui a navigare ci permetti di farlo secondo le regole spiegate nella nostra informativa sulla privacy relativa ai
        <a href="https://my.zanichelli.it/privacy#Cookie" target="_blank">
          cookie
        </a>
        .
      </p>
      <z-button slot="cta" variant="primary">
        OK
      </z-button>
    </z-binding-message>
    `);
  });
});
