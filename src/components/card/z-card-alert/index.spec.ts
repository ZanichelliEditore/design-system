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
        <div class="alert-external-wrapper">
            <z-alert>
              <div class="relativeContainer">
                <z-icon height="18" width="18"></z-icon>
                <span class="contentText"></span>
              </div>
            </z-alert>
        </mock:shadow-root>
      </div>
    </z-card-alert>
    `);
  });

  it("Test render ZCardAlert (type add)", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert iconName="circle-check" contenttext="Libro aggiunto ai miei libri" actiontext="Annulla" type="add"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert iconName="circle-check" contenttext="Libro aggiunto ai miei libri" actiontext="Annulla" type="add">
      <mock:shadow-root>
        <div class="addAlert alert-external-wrapper">
            <z-alert type="success">
              <div class="relativeContainer">
                <z-icon class="addAlert" name="circle-check" height="18" width="18"></z-icon>
                <span class="contentText">
                  Libro aggiunto ai miei libri
                </span>
                <span class="contentAction" role="button" tabindex="0">
                  Annulla
                </span>
              </div>
            </z-alert>
          </mock:shadow-root>
        </div>
      </mock:shadow-root>
    </z-card-alert iconName="circle-check" contenttext="Libro aggiunto ai miei libri" actiontext="Annulla" type="add">
    `);
  });

  it("Test render ZCardAlert no undo (type add)", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert iconName="circle-check" contenttext="Libro aggiunto ai miei libri" type="add"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert iconName="circle-check" contenttext="Libro aggiunto ai miei libri" type="add">
      <mock:shadow-root>
        <div class="addAlert alert-external-wrapper">
            <z-alert type="success">
              <div class="relativeContainer">
                <z-icon class="addAlert" name="circle-check" height="18" width="18"></z-icon>
                <span class="contentText">
                  Libro aggiunto ai miei libri
                </span>
              </div>
            </z-alert>
          </mock:shadow-root>
        </div>
      </mock:shadow-root>
    </z-card-alert iconName="circle-check" contenttext="Libro aggiunto ai miei libri" actiontext="Annulla" type="add">
    `);
  });

  it("Test render ZCardAlert (type remove)", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert iconName="circle-check" contenttext="Libro rimosso dai miei libri" actiontext="Annulla" type="remove"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert iconName="circle-check" contenttext="Libro rimosso dai miei libri" actiontext="Annulla" type="remove">
      <mock:shadow-root>
        <div class="removeAlert alert-external-wrapper">
            <z-alert type="warning">
              <div class="relativeContainer">
                <z-icon class="removeAlert" name="circle-check" height="18" width="18"></z-icon>
                <span class="contentText">
                  Libro rimosso dai miei libri
                </span>
                <span class="contentAction" role="button" tabindex="0">
                  Annulla
                </span>
              </div>
            </z-alert>
          </mock:shadow-root>
        </div>
      </mock:shadow-root>
    </z-card-alert iconName="circle-check" contenttext="Libro rimosso dai miei libri" actiontext="Annulla" type="remove">
    `);
  });

  it("Test render ZCardAlert no undo (type remove)", async () => {
    const page = await newSpecPage({
      components: [ZCardAlert],
      html: `<z-card-alert iconName="circle-check" contenttext="Libro rimosso dai miei libri" type="remove"></z-card-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-alert iconName="circle-check" contenttext="Libro rimosso dai miei libri" type="remove">
      <mock:shadow-root>
        <div class="removeAlert alert-external-wrapper">
            <z-alert type="warning">
              <div class="relativeContainer">
                <z-icon class="removeAlert" name="circle-check" height="18" width="18"></z-icon>
                <span class="contentText">
                  Libro rimosso dai miei libri
                </span>
              </div>
            </z-alert>
          </mock:shadow-root>
        </div>
      </mock:shadow-root>
    </z-card-alert iconName="circle-check" contenttext="Libro rimosso dai miei libri" actiontext="Annulla" type="remove">
    `);
  });
});
