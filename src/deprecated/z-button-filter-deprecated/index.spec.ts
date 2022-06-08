import { newSpecPage } from "@stencil/core/testing";

import { ZButtonFilterDeprecated } from "./index";

describe("Suite test ZButtonFilterDeprecated", () => {
  it("Test render ZButtonFilterDeprecated vuoto", async () => {
    const page = await newSpecPage({
      components: [ZButtonFilterDeprecated],
      html: `<z-button-filter-deprecated filtername=""></z-button-filter-deprecated>`
    });
    expect(page.root).toEqualHtml(`
      <z-button-filter-deprecated filtername="">
        <mock:shadow-root>
          <button class="container isactive">
            <z-icon class="close-icon-container" name="multiply" height="12" width="12"></z-icon>
            <span class="text-container"></span>
          </button>
        </mock:shadow-root>
      </z-button-filter-deprecated>
    `);
  });

  it("Test render ZButtonFilterDeprecated con label", async () => {
    const page = await newSpecPage({
      components: [ZButtonFilterDeprecated],
      html: `<z-button-filter-deprecated filtername="FILTRO"></z-button-filter-deprecated>`
    });
    expect(page.root).toEqualHtml(`
      <z-button-filter-deprecated filtername="FILTRO">
        <mock:shadow-root>
          <button class="container isactive">
            <z-icon class="close-icon-container" name="multiply" height="12" width="12"></z-icon>
            <span class="text-container">FILTRO</span>
          </button>
        </mock:shadow-root>
      </z-button-filter-deprecated>
    `);
  });

  it("Test render ZButtonFilterDeprecated fixed", async () => {
    const page = await newSpecPage({
      components: [ZButtonFilterDeprecated],
      html: `<z-button-filter-deprecated filtername="" isfixed></z-button-filter-deprecated>`
    });
    expect(page.root).toEqualHtml(`
      <z-button-filter-deprecated filtername="" isfixed>
        <mock:shadow-root>
          <button class="container">
            <z-icon class="close-icon-container" name="multiply" height="12" width="12"></z-icon>
            <span class="text-container"></span>
          </button>
        </mock:shadow-root>
      </z-button-filter-deprecated>
    `);
  });

  it("Test render ZButtonFilterDeprecated small", async () => {
    const page = await newSpecPage({
      components: [ZButtonFilterDeprecated],
      html: `<z-button-filter-deprecated filtername="FILTRO" issmall></z-button-filter-deprecated>`
    });
    expect(page.root).toEqualHtml(`
      <z-button-filter-deprecated filtername="FILTRO" issmall>
        <mock:shadow-root>
          <button class="container isactive small">
            <z-icon class="close-icon-container" name="multiply" height="12" width="12"></z-icon>
            <span class="text-container">FILTRO</span>
          </button>
        </mock:shadow-root>
      </z-button-filter-deprecated>
    `);
  });
});
