import { newSpecPage } from "@stencil/core/testing";

import { ZModalAlert } from "./index";

describe("Suite test ZModalAlert", () => {
  it("Test render ZModalAlert vuoto", async () => {
    const page = await newSpecPage({
      components: [ZModalAlert],
      html: `<z-modal-alert></z-modal-alert>`
    });

    expect(page.root).toEqualHtml(`
      <z-modal-alert>
        <mock:shadow-root>
          <div class="modal-alert-container undefined">
            <z-alert></z-alert>
          </div>
        </mock:shadow-root>
      </z-modal-alert>
    `);
  });

  it("Test render ZModalAlert success", async () => {
    const page = await newSpecPage({
      components: [ZModalAlert],
      html: `<z-modal-alert slot="alert" iconName="circle-check" contenttext="Libro aggiunto ai miei libri" actiontext="Annulla" type="success"></z-modal-alert>`
    });

    expect(page.root).toEqualHtml(`
     <z-modal-alert actiontext="Annulla" contenttext="Libro aggiunto ai miei libri" iconname="circle-check" slot="alert" type="success">
      <mock:shadow-root>
        <div class="modal-alert-container success">
          <z-alert actiontext="Annulla" contenttext="Libro aggiunto ai miei libri" iconname="circle-check" type="success"></z-alert>
        </div>
      </mock:shadow-root>
    </z-modal-alert>
    `);
  });

  it("Test render ZModalAlert success no undo", async () => {
    const page = await newSpecPage({
      components: [ZModalAlert],
      html: `<z-modal-alert slot="alert" iconName="circle-check" contenttext="Libro aggiunto ai miei libri" type="success"></z-modal-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-modal-alert contenttext="Libro aggiunto ai miei libri" iconname="circle-check" slot="alert" type="success">
      <mock:shadow-root>
        <div class="modal-alert-container success">
          <z-alert contenttext="Libro aggiunto ai miei libri" iconname="circle-check" type="success"></z-alert>
        </div>
      </mock:shadow-root>
    </z-modal-alert>
    `);
  });

  it("Test render ZModalAlert warning", async () => {
    const page = await newSpecPage({
      components: [ZModalAlert],
      html: `<z-modal-alert slot="alert" iconName="circle-check" contenttext="Libro rimosso dai tuoi libri" actiontext="Annulla" type="warning"></z-modal-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-modal-alert actiontext="Annulla" contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" slot="alert" type="warning">
      <mock:shadow-root>
        <div class="modal-alert-container warning">
          <z-alert actiontext="Annulla" contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" type="warning"></z-alert>
        </div>
      </mock:shadow-root>
    </z-modal-alert>
    `);
  });

  it("Test render ZModalAlert warning no undo", async () => {
    const page = await newSpecPage({
      components: [ZModalAlert],
      html: `<z-modal-alert slot="alert" iconName="circle-check" contenttext="Libro rimosso dai tuoi libri" type="warning"></z-modal-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-modal-alert contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" slot="alert" type="warning">
      <mock:shadow-root>
        <div class="modal-alert-container warning">
          <z-alert contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" type="warning"></z-alert>
        </div>
      </mock:shadow-root>
    </z-modal-alert>
    `);
  });

  it("Test render ZModalAlert error", async () => {
    const page = await newSpecPage({
      components: [ZModalAlert],
      html: `<z-modal-alert slot="alert" iconName="circle-check" contenttext="Libro rimosso dai tuoi libri" actiontext="Annulla" type="error"></z-modal-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-modal-alert actiontext="Annulla" contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" slot="alert" type="error">
      <mock:shadow-root>
        <div class="modal-alert-container error">
          <z-alert actiontext="Annulla" contenttext="Libro rimosso dai tuoi libri" iconname="circle-check" type="error"></z-alert>
        </div>
      </mock:shadow-root>
    </z-modal-alert>
    `);
  });

  it("Test render ZModalAlert error no undo", async () => {
    const page = await newSpecPage({
      components: [ZModalAlert],
      html: `<z-modal-alert slot="alert" iconName="circle-check" contenttext="Messaggio di errore generico" type="error"></z-modal-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-modal-alert contenttext="Messaggio di errore generico" iconname="circle-check" slot="alert" type="error">
      <mock:shadow-root>
        <div class="modal-alert-container error">
          <z-alert contenttext="Messaggio di errore generico" iconname="circle-check" type="error"></z-alert>
        </div>
      </mock:shadow-root>
    </z-modal-alert>
    `);
  });
});
