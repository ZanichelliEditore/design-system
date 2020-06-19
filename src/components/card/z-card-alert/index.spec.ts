import { newSpecPage } from "@stencil/core/testing";

import { ZCardAlert } from "./index";

describe("Suite test ZCardAlert", () => {
  it("Test render ZCardAlert vuoto", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
      <z-card-alert>
        <mock:shadow-root>
          <div class="card-alert-container undefined">
            <z-alert></z-alert>
          </div>
        </mock:shadow-root>
      </z-card-alert>
    `);
  });

  it("Test render ZCardAlert success", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert slot="alert" iconName="circle-check" contenttext="Libro aggiunto ai miei libri" actiontext="Annulla" type="success"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
     <z-card-alert actiontext="Annulla" contenttext="Libro aggiunto ai miei libri" iconname="circle-check" slot="alert" type="success">
      <mock:shadow-root>
        <div class="card-alert-container success">
          <z-alert actiontext="Annulla" contenttext="Libro aggiunto ai miei libri" iconname="circle-check" type="success"></z-alert>
        </div>
      </mock:shadow-root>
    </z-card-alert>
    `);
  });

  it("Test render ZCardAlert success no undo", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert slot="alert" iconName="circle-check" contenttext="Libro aggiunto ai miei libri" type="success"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert contenttext="Libro aggiunto ai miei libri" iconname="circle-check" slot="alert" type="success">
      <mock:shadow-root>
        <div class="card-alert-container success">
          <z-alert contenttext="Libro aggiunto ai miei libri" iconname="circle-check" type="success"></z-alert>
        </div>
      </mock:shadow-root>
    </z-card-alert>
    `);
  });

  it("Test render ZCardAlert warning", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert slot="alert" iconName="circle-check" contenttext="Libro rimosso dai tuoi libri" actiontext="Annulla" type="warning"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert actiontext="Annulla" contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" slot="alert" type="warning">
      <mock:shadow-root>
        <div class="card-alert-container warning">
          <z-alert actiontext="Annulla" contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" type="warning"></z-alert>
        </div>
      </mock:shadow-root>
    </z-card-alert>
    `);
  });

  it("Test render ZCardAlert warning no undo", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert slot="alert" iconName="circle-check" contenttext="Libro rimosso dai tuoi libri" type="warning"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" slot="alert" type="warning">
      <mock:shadow-root>
        <div class="card-alert-container warning">
          <z-alert contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" type="warning"></z-alert>
        </div>
      </mock:shadow-root>
    </z-card-alert>
    `);
  });

  it("Test render ZCardAlert error", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert slot="alert" iconName="circle-check" contenttext="Libro rimosso dai tuoi libri" actiontext="Annulla" type="error"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert actiontext="Annulla" contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" slot="alert" type="error">
      <mock:shadow-root>
        <div class="card-alert-container error">
          <z-alert actiontext="Annulla" contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" type="error"></z-alert>
        </div>
      </mock:shadow-root>
    </z-card-alert>
    `);
  });

  it("Test render ZCardAlert error no undo", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert slot="alert" iconName="circle-check" contenttext="Messaggio di errore generico" type="error"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert contenttext="Messaggio di errore generico" iconname="circle-check" slot="alert" type="error">
      <mock:shadow-root>
        <div class="card-alert-container error">
          <z-alert contenttext="Messaggio di errore generico" iconname="circle-check" type="error"></z-alert>
        </div>
      </mock:shadow-root>
    </z-card-alert>
    `);
  });
});
