import {newSpecPage} from "@stencil/core/testing";

import {ZMyzCardAlert} from "./index";

describe("Suite test ZMyzCardAlert", () => {
  it("Test render ZMyzCardAlert add", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardAlert],
      html: `<z-myz-card-alert slot="alert" iconName="circle-check" contenttext="Libro aggiunto ai miei libri" actiontext="Annulla" type="add"></z-myz-card-alert>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-alert actiontext="Annulla" contenttext="Libro aggiunto ai miei libri" iconname="circle-check" slot="alert" type="add">
      <mock:shadow-root>
        <div class="add-alert alert-external-wrapper">
            <z-alert type="success">
              <div class="relative-container">
                <z-icon class="add-alert" height="18" name="circle-check" width="18"></z-icon>
                  <span class="content-text">
                    Libro aggiunto ai miei libri
                  </span>
                  <span class="content-action" role="button" tabindex="0">
                    Annulla
                  </span>
              </div>
            </z-alert>
        </mock:shadow-root>
      </div>
    </z-card-alert>
    `);
  });

  it("Test render ZMyzCardAlert (type add)", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardAlert],
      html: `<z-myz-card-alert iconName="circle-check" contenttext="Libro aggiunto ai miei libri" actiontext="Annulla" type="add"></z-card-alert>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-alert iconName="circle-check" contenttext="Libro aggiunto ai miei libri" actiontext="Annulla" type="add">
      <mock:shadow-root>
        <div class="add-alert alert-external-wrapper">
            <z-alert type="success">
              <div class="relative-container">
                <z-icon class="add-alert" name="circle-check" height="18" width="18"></z-icon>
                <span class="content-text">
                  Libro aggiunto ai miei libri
                </span>
                <span class="content-action" role="button" tabindex="0">
                  Annulla
                </span>
              </div>
            </z-alert>
          </mock:shadow-root>
        </div>
      </mock:shadow-root>
    </z-myz-card-alert>
    `);
  });

  it("Test render ZMyzCardAlert add no undo", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardAlert],
      html: `<z-myz-card-alert slot="alert" iconName="circle-check" contenttext="Libro aggiunto ai miei libri" type="add"></z-myz-card-alert>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-alert contenttext="Libro aggiunto ai miei libri" iconname="circle-check" slot="alert" type="add">
      <mock:shadow-root>
        <div class="add-alert alert-external-wrapper">
            <z-alert type="success">
              <div class="relative-container">
                <z-icon class="add-alert" name="circle-check" height="18" width="18"></z-icon>
                <span class="content-text">
                  Libro aggiunto ai miei libri
                </span>
              </div>
            </z-alert>
          </mock:shadow-root>
        </div>
      </mock:shadow-root>
    </z-myz-card-alert>
    `);
  });

  it("Test render ZMyzCardAlert remove", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardAlert],
      html: `<z-myz-card-alert slot="alert" iconName="circle-check" contenttext="Libro rimosso dai miei libri" actiontext="Annulla" type="remove"></z-myz-card-alert>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-alert actiontext="Annulla" contenttext="Libro rimosso dai miei libri" iconname="circle-check" slot="alert" type="remove">
      <mock:shadow-root>
        <div class="remove-alert alert-external-wrapper">
            <z-alert type="warning">
              <div class="relative-container">
                <z-icon class="remove-alert" name="circle-check" height="18" width="18"></z-icon>
                <span class="content-text">
                  Libro rimosso dai miei libri
                </span>
                <span class="content-action" role="button" tabindex="0">
                  Annulla
                </span>
              </div>
            </z-alert>
          </mock:shadow-root>
        </div>
      </mock:shadow-root>
    </z-myz-card-alert>
    `);
  });

  it("Test render ZMyzCardAlert remove no undo", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardAlert],
      html: `<z-myz-card-alert slot="alert" iconName="circle-check" contenttext="Libro rimosso dai miei libri" type="remove"></z-myz-card-alert>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-alert contenttext="Libro rimosso dai miei libri" iconname="circle-check" slot="alert" type="remove">
      <mock:shadow-root>
        <div class="remove-alert alert-external-wrapper">
            <z-alert type="warning">
              <div class="relative-container">
                <z-icon class="remove-alert" name="circle-check" height="18" width="18"></z-icon>
                <span class="content-text">
                  Libro rimosso dai miei libri
                </span>
              </div>
            </z-alert>
          </mock:shadow-root>
        </div>
      </mock:shadow-root>
    </z-myz-card-alert>
    `);
  });
});
