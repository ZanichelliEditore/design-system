import { newSpecPage } from "@stencil/core/testing";

import { shallow, mount, render } from "enzyme";

import { ZCardFooter } from "./index";

describe("Suite test ZCardFooter", () => {
  it("Test render ZCardFooter con props", async () => {
    const page = await newSpecPage({
      components: [ZCardFooter],
      html: `<z-card-footer titolo="titolo" autori="Mario Rossi, Paolo Bianchi" anno="2019" isbn="123456"></z-card-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-footer anno=\"2019\" autori=\"Mario Rossi, Paolo Bianchi\" isbn=\"123456\" titolo=\"titolo\">
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
                  Autore:
                  <b>
                    Mario Rossi, Paolo Bianchi
                  </b>
                </p>
                <p class="year_isbn">
                  <span class=\"year\">
                    Edizione:
                    <b>
                      2019
                    </b>
                  </span>
                  <span class=\"isbn\">
                    ISBN:
                    <b>
                      123456
                    </b>
                  </span>
                </p>
              </div>
              <slot name=\"list\"></slot>
            </footer>
          </div>
        </mock:shadow-root>
      </z-card-footer>
    `);
  });

  it("Test render ZCardFooter senza bottone", async () => {
    const page = await newSpecPage({
      components: [ZCardFooter],
      html: `<z-card-footer titolo="titolo" autori="Mario Rossi, Paolo Bianchi" anno="2019"></z-card-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-footer anno=\"2019\" autori=\"Mario Rossi, Paolo Bianchi\" titolo=\"titolo\">
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
                  Autore:
                  <b>
                    Mario Rossi, Paolo Bianchi
                  </b>
                </p>
                <p class="year_isbn">
                  <span class=\"year\">
                    Edizione:
                    <b>
                      2019
                    </b>
                  </span>
                  <span class=\"isbn\">
                    ISBN:
                    <b></b>
                  </span>
                </p>
              </div>
              <slot name=\"list\"></slot>
            </footer>
          </div>
        </mock:shadow-root>
      </z-card-footer>
    `);
  });

  it("Test render ZCardFooter senza dati", async () => {
    const page = await newSpecPage({
      components: [ZCardFooter],
      html: `<z-card-footer></z-card-footer>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-footer>
        <mock:shadow-root>
          <div>
            <footer>
              <span class=\"toggle\">
                <slot name=\"toggle\"></slot>
              </span>
              <h2></h2>
              <div>
                <p class="authors">
                  Autore:
                  <b></b>
                </p>
                <p class="year_isbn">
                  <span class=\"year\">
                    Edizione:
                    <b></b>
                  </span>
                  <span class=\"isbn\">
                    ISBN:
                    <b></b>
                  </span>
                </p>
              </div>
              <slot name=\"list\"></slot>
            </footer>
          </div>
        </mock:shadow-root>
      </z-card-footer>
    `);
  });
});
