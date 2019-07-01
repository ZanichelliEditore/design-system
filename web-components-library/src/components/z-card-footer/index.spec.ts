import { newSpecPage } from "@stencil/core/testing";

import { shallow, mount, render } from "enzyme";

import { ZCardFooter } from "./index";

describe("Suite test ZCardFooter", () => {
  it("Test render ZCardFooter con props", async () => {
    const page = await newSpecPage({
      components: [ZCardFooter],
      html: `<z-card-footer hasbutton titolo="titolo" autori="Mario Rossi, Paolo Bianchi" anno="2019"></z-card-footer>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-footer hasbutton titolo="titolo" autori="Mario Rossi, Paolo Bianchi" anno="2019">
      <mock:shadow-root>
        <footer >
          <button>
            <i></i> Risorse
          </button>

          <h2>titolo</h2>
          <div>
            <p>
              Autore: <b>Mario Rossi, Paolo Bianchi</b>
            </p>
            <p>
              Edizione: <b>2019</b>
            </p>
          </div>
          <slot name="list" />
        </footer>
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
    <z-card-footer titolo="titolo" autori="Mario Rossi, Paolo Bianchi" anno="2019">
      <mock:shadow-root>
        <footer >

          <h2>titolo</h2>
          <div>
            <p>
              Autore: <b>Mario Rossi, Paolo Bianchi</b>
            </p>
            <p>
              Edizione: <b>2019</b>
            </p>
          </div>
          <slot name="list" />
        </footer>
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
        <footer >

          <h2></h2>
          <div>
            <p>
              Autore: <b></b>
            </p>
            <p>
              Edizione: <b></b>
            </p>
          </div>
          <slot name="list" />
        </footer>
      </mock:shadow-root>
    </z-card-footer>
    `);
  });


  it("Test click on button resource", async () => {
    const page = await newSpecPage({
      components: [ZCardFooter],
      html: `<z-card-footer hasbutton ></z-card-footer>`,
    });

    let button = page.root.shadowRoot.querySelector('footer').querySelector('button');

    expect(page.rootInstance.isOpen).toEqual(false);
    button.click();
    await page.waitForChanges();

    expect(page.rootInstance.isOpen).toEqual(true);

  });
});
