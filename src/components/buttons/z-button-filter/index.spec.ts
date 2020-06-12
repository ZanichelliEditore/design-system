import { newSpecPage } from "@stencil/core/testing";

import { ZButtonFilter } from "./index";

describe("Suite test ZButtonFilter", () => {
  it("Test render ZButtonFilter vuoto", async () => {
    const page = await newSpecPage({
      components: [ZButtonFilter],
      html: `<z-button-filter filtername=""></z-button-filter>`
    });
    expect(page.root).toEqualHtml(`
      <z-button-filter filtername="">
        <mock:shadow-root>
          <button class="container isactive">
            <z-icon class="close-icon-container" name="cross" height="12" width="12"></z-icon>
            <span class="text-container"></span>
          </button>
        </mock:shadow-root>
      </z-button-filter>
    `);
  });

  it("Test render ZButtonFilter con label", async () => {
    const page = await newSpecPage({
      components: [ZButtonFilter],
      html: `<z-button-filter filtername="FILTRO"></z-button-filter>`
    });
    expect(page.root).toEqualHtml(`
      <z-button-filter filtername="FILTRO">
        <mock:shadow-root>
          <button class="container isactive">
            <z-icon class="close-icon-container" name="cross" height="12" width="12"></z-icon>
            <span class="text-container">FILTRO</span>
          </button>
        </mock:shadow-root>
      </z-button-filter>
    `);
  });

  it("Test render ZButtonFilter fixed", async () => {
    const page = await newSpecPage({
      components: [ZButtonFilter],
      html: `<z-button-filter filtername="" isfixed></z-button-filter>`
    });
    expect(page.root).toEqualHtml(`
      <z-button-filter filtername="" isfixed>
        <mock:shadow-root>
          <button class="container">
            <z-icon class="close-icon-container" name="cross" height="12" width="12"></z-icon>
            <span class="text-container"></span>
          </button>
        </mock:shadow-root>
      </z-button-filter>
    `);
  });
});
