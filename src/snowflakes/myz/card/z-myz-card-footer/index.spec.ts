import { newSpecPage } from "@stencil/core/testing";

import { ZMyzCardFooter } from "./index";

describe("Suite test ZMyzCardFooter", () => {
  it("Test render ZMyzCardFooter con props", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardFooter],
      html: `<z-myz-card-footer titolo="titolo" autori="Mario Rossi, Paolo Bianchi" anno="2019" isbn="123456"></z-myz-card-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-myz-card-footer anno=\"2019\" autori=\"Mario Rossi, Paolo Bianchi\" isbn=\"123456\" titolo=\"titolo\">
        <mock:shadow-root>
          <div>
            <footer>
              <span class=\"toggle\">
                <slot name=\"toggle\"></slot>
              </span>
              <h2>
                titolo
              </h2>
              <div>
                <p class="authors">
                  <span><span class="bold">
                    Mario Rossi, Paolo Bianchi
                  </span></span>
                </p>
                <p class="year_isbn">
                  <span class=\"isbn\">
                    <span><span class="bold">
                      123456
                    </span> (ed. cartacea)</span>
                  </span>
                </p>
              </div>
              <div class="hidden slot-handler">
                <slot name="list"></slot>
              </div>
            </footer>
          </div>
        </mock:shadow-root>
      </z-myz-card-footer>
    `);
  });

  it("Test render ZMyzCardFooter senza bottone", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardFooter],
      html: `<z-myz-card-footer titolo="titolo" autori="Mario Rossi, Paolo Bianchi" anno="2019"></z-myz-card-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-myz-card-footer anno=\"2019\" autori=\"Mario Rossi, Paolo Bianchi\" titolo=\"titolo\">
        <mock:shadow-root>
          <div>
            <footer>
              <span class=\"toggle\">
                <slot name=\"toggle\"></slot>
              </span>
              <h2>
                titolo
              </h2>
              <div>
                <p class="authors">
                  <span><span class="bold">
                    Mario Rossi, Paolo Bianchi
                  </span></span>
                </p>
                <p class="year_isbn">
                  <span class=\"isbn\">
                    <span><span class="bold"></span> (ed. cartacea)</span>
                  </span>
                </p>
              </div>
              <div class="hidden slot-handler">
                <slot name="list"></slot>
              </div>
            </footer>
          </div>
        </mock:shadow-root>
      </z-myz-card-footer>
    `);
  });

  it("Test render ZMyzCardFooter senza dati", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardFooter],
      html: `<z-myz-card-footer></z-myz-card-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-myz-card-footer>
        <mock:shadow-root>
          <div>
            <footer>
              <span class=\"toggle\">
                <slot name=\"toggle\"></slot>
              </span>
              <h2></h2>
              <div>
                <p class="authors">
                  <span><span class="bold"></span></span>
                </p>
                <p class="year_isbn">
                  <span class=\"isbn\">
                    <span><span class="bold"></span> (ed. cartacea)</span>
                  </span>
                </p>
              </div>
              <div class="hidden slot-handler">
                <slot name="list"></slot>
              </div>
            </footer>
          </div>
        </mock:shadow-root>
      </z-myz-card-footer>
    `);
  });

  it("Test render ZMyzCardFooter aperto", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardFooter],
      html: `<z-myz-card-footer titolo="titolo" autori="Mario Rossi, Paolo Bianchi" anno="2019"></z-myz-card-footer>`
    });
    page.rootInstance.isOpen = true;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-myz-card-footer anno=\"2019\" autori=\"Mario Rossi, Paolo Bianchi\" titolo=\"titolo\">
        <mock:shadow-root>
          <div>
            <footer class="isopen">
              <span class=\"toggle\">
                <slot name=\"toggle\"></slot>
              </span>
              <h2>
                titolo
              </h2>
              <div>
                <p class="authors">
                  <span><span class="bold">
                    Mario Rossi, Paolo Bianchi
                  </span></span>
                </p>
                <p class="year_isbn">
                  <span class=\"isbn\">
                    <span><span class="bold"></span> (ed. cartacea)</span>
                  </span>
                </p>
              </div>
              <div class="slot-handler visible">
                <slot name="list"></slot>
              </div>
            </footer>
          </div>
        </mock:shadow-root>
      </z-myz-card-footer>
    `);
  });
});
