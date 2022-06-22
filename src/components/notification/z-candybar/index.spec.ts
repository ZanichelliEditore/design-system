import { newSpecPage } from "@stencil/core/testing";

import { ZCandybar } from "./index";

describe("Suite test ZCandybar", () => {
  it("Test render empty ZCandybar", async () => {
    const page = await newSpecPage({
      components: [ZCandybar],
      html: `  <z-candybar></z-candybar>`,
    });

    expect(page.root).toEqualHtml(`
    <z-candybar>
      <mock:shadow-root>
        <div>
          <slot name="content"></slot>
        </div>
      </mock:shadow-root>
    </z-candybar>
    `);
  });

  it("Test render ZCandybar with slotted content", async () => {
    const page = await newSpecPage({
      components: [ZCandybar],
      html: `<z-candybar>
                <div class="content" slot="content">
                  <div>
                    <h2>Titolo</h2>
                    <div>
                      <p>
                        Se continui a navigare ci permetti di farlo secondo le regole
                        spiegate nella nostra informativa sulla privacy relativa ai
                        &nbsp;
                        <a href="#" target="_blank">cookie</a>.
                      </p>
                    </div>
                  </div>
                  <z-button-deprecated variant="primary" style="pointer-events: auto;">OK</z-button-deprecated>
                </div>
              </z-candybar>`,
    });

    expect(page.root).toEqualHtml(`
    <z-candybar>
      <mock:shadow-root>
        <div>
          <slot name="content"></slot>
        </div>
      </mock:shadow-root>
      <div class="content" slot="content">
        <div>
        <h2>Titolo</h2>
          <div>
            <p> Se continui a navigare ci permetti di farlo secondo le regole
              spiegate nella nostra informativa sulla privacy relativa ai <a href="#" target="_blank">cookie</a>.
            </p>
          </div>
        </div>
        <z-button-deprecated variant="primary" style="pointer-events: auto;">OK</z-button-deprecated>
      </div>
    </z-candybar>
    `);
  });
});
