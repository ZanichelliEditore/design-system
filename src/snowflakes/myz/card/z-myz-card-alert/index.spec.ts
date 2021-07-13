import { newSpecPage } from "@stencil/core/testing";

import { ZMyzCardAlert } from "./index";

describe("Suite test ZMyzCardAlert", () => {
  it("Test render ZMyzCardAlert add", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardAlert],
      html: `<z-myz-card-alert slot="alert" iconName="checkmark-circle" contenttext="Libro aggiunto ai miei libri" actiontext="Annulla" type="add"></z-myz-card-alert>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-alert actiontext=\"Annulla\" contenttext=\"Libro aggiunto ai miei libri\" iconname=\"checkmark-circle" slot=\"alert\" type=\"add\">
      <mock:shadow-root>
        <div class=\"addAlert relativeContainer\">
          <z-icon class=\"addAlert\" height=\"18\" name=\"checkmark-circle\" width=\"18\"></z-icon>
          <span class=\"contentText\">
            Libro aggiunto ai miei libri
          </span>
          <span class=\"contentAction\" role=\"button\" tabindex=\"0\">
            Annulla
          </span>
        </div>
      </mock:shadow-root>
    </z-myz-card-alert>
    `);
  });

  it("Test render ZMyzCardAlert add no undo", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardAlert],
      html: `<z-myz-card-alert slot="alert" iconName="checkmark-circle" contenttext="Libro aggiunto ai miei libri" type="add"></z-myz-card-alert>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-alert contenttext=\"Libro aggiunto ai miei libri\" iconname=\"checkmark-circle\" slot=\"alert\" type=\"add\">
      <mock:shadow-root>
        <div class=\"addAlert relativeContainer\">
          <z-icon class=\"addAlert\" height=\"18\" name=\"checkmark-circle\" width=\"18\"></z-icon>
          <span class=\"contentText\" >
            Libro aggiunto ai miei libri
          </span>
        </div>
      </mock:shadow-root>
    </z-myz-card-alert>
    `);
  });

  it("Test render ZMyzCardAlert remove", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardAlert],
      html: `<z-myz-card-alert slot="alert" iconName="checkmark-circle" contenttext="Libro rimosso dai tuoi libri" actiontext="Annulla" type="remove"></z-myz-card-alert>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-alert actiontext=\"Annulla\" contenttext=\"Libro rimosso dai tuoi libri\" iconname=\"checkmark-circle\" slot=\"alert\" type=\"remove\">
      <mock:shadow-root>
        <div class=\"relativeContainer removeAlert\">
          <z-icon class=\"removeAlert\" height=\"18\" name=\"checkmark-circle\" width=\"18\"></z-icon>
          <span class=\"contentText\">
            Libro rimosso dai tuoi libri
          </span>
          <span class=\"contentAction\" role=\"button\" tabindex=\"0\">
            Annulla
          </span>
        </div>
      </mock:shadow-root>
    </z-myz-card-alert>
    `);
  });

  it("Test render ZMyzCardAlert remove no undo", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardAlert],
      html: `<z-myz-card-alert slot="alert" iconName="checkmark-circle" contenttext="Libro rimosso dai tuoi libri" type="remove"></z-myz-card-alert>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-alert contenttext=\"Libro rimosso dai tuoi libri\" iconname=\"checkmark-circle\" slot=\"alert\" type=\"remove\">
      <mock:shadow-root>
        <div class=\"relativeContainer removeAlert\" >
          <z-icon class=\"removeAlert\" height=\"18\" name=\"checkmark-circle\" width=\"18\"></z-icon>
          <span class=\"contentText\">
            Libro rimosso dai tuoi libri
          </span>
        </div>
      </mock:shadow-root>
    </z-myz-card-alert>
    `);
  });
});
