import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTable } from "./index";

describe("Suite test ZRegistroTable", () => {
  it("Test render ZRegistroTable with empty content", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table empty="true"></z-registro-table>`,
    });
    expect(page.root)
      .toEqualHtml(`<z-registro-table empty=\"true\" role=\"table\">
    <div class=\"table\"></div>
    <z-registro-table-empty-box message=\"Siamo spicenti, al momento non sono presenti dati da visualizzare\" subtitle=\"Eventuale testo\"></z-registro-table-empty-box>
  </z-registro-table>`);
  });

  it("Test render ZRegistroTable with empty content and header", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table empty="true">      <z-registro-table-head>
      <z-registro-table-header-row>
        <z-registro-table-header>
          <span>Titolo 1</span>
        </z-registro-table-header>
        <z-registro-table-header>
          <span>Titolo 2</span>
        </z-registro-table-header>
        <z-registro-table-header>
          <span>Titolo 3</span>
        </z-registro-table-header>
        <z-registro-table-header>
          <span>Titolo 4</span>
        </z-registro-table-header>
      </z-registro-table-header-row>
    </z-registro-table-head></z-registro-table>`,
    });
    expect(page.root)
      .toEqualHtml(`<z-registro-table empty=\"true\" role=\"table\">
    <div class=\"table\">
      <z-registro-table-head>
        <z-registro-table-header-row>
          <z-registro-table-header>
            <span>
              Titolo 1
            </span>
          </z-registro-table-header>
          <z-registro-table-header>
            <span>
              Titolo 2
            </span>
          </z-registro-table-header>
          <z-registro-table-header>
            <span>
              Titolo 3
            </span>
          </z-registro-table-header>
          <z-registro-table-header>
            <span>
              Titolo 4
            </span>
          </z-registro-table-header>
        </z-registro-table-header-row>
      </z-registro-table-head>
    </div>
    <z-registro-table-empty-box message=\"Siamo spicenti, al momento non sono presenti dati da visualizzare\" subtitle=\"Eventuale testo\"></z-registro-table-empty-box>
  </z-registro-table>`);
  });

  it("Test render ZRegistroTable with empty content and one call to action", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table empty="true" call-to-action-label="Call To Action"></z-registro-table>`,
    });
    expect(page.root)
      .toEqualHtml(`<z-registro-table call-to-action-label=\"Call To Action\" empty=\"true\" role=\"table\">
    <div class=\"table\"></div>
    <z-registro-table-empty-box message=\"Siamo spicenti, al momento non sono presenti dati da visualizzare\" subtitle=\"Eventuale testo\">
      <z-button size=\"big\" slot=\"cta1\" variant=\"tertiary\">
        Call To Action
      </z-button>
    </z-registro-table-empty-box>
  </z-registro-table>`);
  });

  it("Test render ZRegistroTable with empty content and two call to action", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table empty="true" call-to-action-label="Call To Action" call-to-action-two-label="Call To Action 2" ></z-registro-table>`,
    });
    expect(page.root)
      .toEqualHtml(`<z-registro-table call-to-action-label=\"Call To Action\" call-to-action-two-label=\"Call To Action 2\" empty=\"true\" role=\"table\">
    <div class=\"table\"></div>
    <z-registro-table-empty-box message=\"Siamo spicenti, al momento non sono presenti dati da visualizzare\" subtitle=\"Eventuale testo\">
      <z-button size=\"big\" slot=\"cta1\" variant=\"tertiary\">
        Call To Action
      </z-button>
      <z-button size=\"big\" slot=\"cta2\" variant=\"tertiary\">
        Call To Action 2
      </z-button>
    </z-registro-table-empty-box>
  </z-registro-table>`);
  });

  it("Test render ZRegistroTable con slot", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table><z-registro-table-head></z-registro-table-head></z-registro-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-registro-table role="table">
        <div class="table">
            <z-registro-table-head></z-registro-table-head>
        </div>
      </z-registro-table>`
    );
  });

  it("Test render ZRegistroTable con slot sticky-footer", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table>
                <z-registro-table-head></z-registro-table-head>
                <z-registro-table-sticky-footer slot="sticky-footer"></z-registro-table-sticky-footer>
            </z-registro-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-registro-table role="table">
        <div class="table">
            <z-registro-table-head></z-registro-table-head>
        </div>
        <z-registro-table-sticky-footer slot="sticky-footer"></z-registro-table-sticky-footer>
      </z-registro-table>`
    );
  });

  it("Test render ZRegistroTable con role table", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table></z-registro-table>`,
    });

    expect(page.root.getAttribute("role")).toEqual("table");
  });

  it("Test render ZRegistroTable con bordi", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table bordered="true"></z-registro-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-registro-table bordered="true" role="table">
        <div class="table table-bordered">
            
        </div>
      </z-registro-table>`
    );
  });

  it("Test render ZRegistroTable con colonna sticky", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table column-sticky="true"></z-registro-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-registro-table column-sticky="true" role="table">
        <div class="table table-column-sticky">
            
        </div>
      </z-registro-table>`
    );
  });

  it("Test render ZRegistroTable con header sticky", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTable],
      html: `<z-registro-table header-sticky="true"></z-registro-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-registro-table header-sticky="true" role="table">
        <div class="table table-header-sticky">
            
        </div>
      </z-registro-table>`
    );
  });
});
