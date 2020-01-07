import { newSpecPage } from "@stencil/core/testing";

import { ZCardAlert } from "./index";

describe("Suite test ZCardAlert", () => {
  it("Test render ZCardAlert add", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert slot="alert" iconName="circle-check" contenttext="Libro aggiunto ai miei libri" actiontext="Annulla" type="add"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert actiontext=\"Annulla\" contenttext=\"Libro aggiunto ai miei libri\" iconname=\"circle-check\" slot=\"alert\" type=\"add\">
      <mock:shadow-root>
        <div class=\"addAlert relativeContainer\" tabindex="2">
          <z-icon class=\"addAlert\" height=\"18\" name=\"circle-check\" width=\"18\"></z-icon>
          <span class=\"contentText\">
            Libro aggiunto ai miei libri
          </span>
          <span class=\"contentAction\">
            Annulla
          </span>
        </div>
      </mock:shadow-root>
    </z-card-alert>
    `);
  });

  it("Test render ZCardAlert add no undo", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert slot="alert" iconName="circle-check" contenttext="Libro aggiunto ai miei libri" type="add"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert contenttext=\"Libro aggiunto ai miei libri\" iconname=\"circle-check\" slot=\"alert\" type=\"add\">
      <mock:shadow-root>
        <div class=\"addAlert relativeContainer\" tabindex="2">
          <z-icon class=\"addAlert\" height=\"18\" name=\"circle-check\" width=\"18\"></z-icon>
          <span class=\"contentText\">
            Libro aggiunto ai miei libri
          </span>
          <span class=\"contentAction\"></span>
        </div>
      </mock:shadow-root>
    </z-card-alert>
    `);
  });

  it("Test render ZCardAlert remove", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert slot="alert" iconName="circle-check" contenttext="Libro rimosso dai tuoi libri" actiontext="Annulla" type="remove"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert actiontext=\"Annulla\" contenttext=\"Libro rimosso dai tuoi libri\" iconname=\"circle-check\" slot=\"alert\" type=\"remove\">
      <mock:shadow-root>
        <div class=\"relativeContainer removeAlert\" tabindex="2">
          <z-icon class=\"removeAlert\" height=\"18\" name=\"circle-check\" width=\"18\"></z-icon>
          <span class=\"contentText\">
            Libro rimosso dai tuoi libri
          </span>
          <span class=\"contentAction\">
            Annulla
          </span>
        </div>
      </mock:shadow-root>
    </z-card-alert>
    `);
  });

  it("Test render ZCardAlert remove no undo", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert slot="alert" iconName="circle-check" contenttext="Libro rimosso dai tuoi libri" type="remove"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert contenttext=\"Libro rimosso dai tuoi libri\" iconname=\"circle-check\" slot=\"alert\" type=\"remove\">
      <mock:shadow-root>
        <div class=\"relativeContainer removeAlert\" tabindex="2">
          <z-icon class=\"removeAlert\" height=\"18\" name=\"circle-check\" width=\"18\"></z-icon>
          <span class=\"contentText\">
            Libro rimosso dai tuoi libri
          </span>
          <span class=\"contentAction\"></span>
        </div>
      </mock:shadow-root>
    </z-card-alert>
    `);
  });
});
