import { newSpecPage } from "@stencil/core/testing";

import { ZTable } from "./index";

describe("Suite test ZTable", () => {
  it("Test render ZTable with err content", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table error="true">
      <img src="./assets/images/png/zanichelli-error-image.png" slot="error-image" />
      </z-table>`,
    });
    expect(page.root).toEqualHtml(`<z-table error=\"true\" role=\"table\">
    <div class=\"table\"></div>
    <z-table-error>
      <div class=\"error-content\" style=\"min-height: auto;\">
        <img slot=\"error-image\" src=\"./assets/images/png/zanichelli-error-image.png\">
        <div class=\"text\">
          <z-body class=\"error-message\" level=\"3\" variant=\"semibold\">
            Siamo spiacenti, non siamo riusciti a caricare il contenuto richiesto
          </z-body>
        </div>
      </div>
    </z-table-error>
  </z-table>`);
  });

  it("Test render ZTable with err content no image", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table error="true"></z-table>`,
    });
    expect(page.root).toEqualHtml(`<z-table error=\"true\" role=\"table\">
    <div class=\"table\"></div>
    <z-table-error>
      <div class=\"error-content\" style=\"min-height: auto;\">
        <div class=\"text\">
          <z-body class=\"error-message\" level=\"3\" variant=\"semibold\">
            Siamo spiacenti, non siamo riusciti a caricare il contenuto richiesto
          </z-body>
        </div>
      </div>
    </z-table-error>
  </z-table>`);
  });

  it("Test render ZTable with err content with header", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table error="true">
        <z-table-head slot="table-header">
          <z-table-header-row>
            <z-table-header>
              <span>Titolo 1</span>
            </z-table-header>
          </z-table-header-row>
        </z-table-head>
      </z-table>`,
    });
    expect(page.root).toEqualHtml(`<z-table error=\"true\" role=\"table\">
    <div class=\"table\">
      <z-table-head slot=\"table-header\">
        <z-table-header-row>
          <z-table-header>
            <span>
              Titolo 1
            </span>
          </z-table-header>
        </z-table-header-row>
      </z-table-head>
    </div>
    <z-table-error>
      <div class=\"error-content\" style=\"min-height: auto;\">
        <div class=\"text\">
          <z-body class=\"error-message\" level=\"3\" variant=\"semibold\">
            Siamo spiacenti, non siamo riusciti a caricare il contenuto richiesto
          </z-body>
        </div>
      </div>
    </z-table-error>
  </z-table>`);
  });

  it("Test render ZTable with empty content", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table empty="true"></z-table>`,
    });
    expect(page.root).toEqualHtml(`<z-table empty=\"true\" role=\"table\">
    <div class=\"table table-empty\"></div>
    <z-table-empty-box message=\"Siamo spiacenti, al momento non sono presenti dati da visualizzare\" subtitle=\"\"></z-table-empty-box>
  </z-table>`);
  });

  it("Test render ZTable with empty content and header", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table empty="true" slot="table-header">
      <z-table-head>
      <z-table-header-row>
        <z-table-header>
          <span>Titolo 1</span>
        </z-table-header>
        <z-table-header>
          <span>Titolo 2</span>
        </z-table-header>
        <z-table-header>
          <span>Titolo 3</span>
        </z-table-header>
        <z-table-header>
          <span>Titolo 4</span>
        </z-table-header>
      </z-table-header-row>
    </z-table-head></z-table>`,
    });
    expect(page.root)
      .toEqualHtml(`<z-table empty=\"true\" role=\"table\" slot=\"table-header\">
    <z-table-head hidden=\"\">
      <z-table-header-row>
        <z-table-header>
          <span>
            Titolo 1
          </span>
        </z-table-header>
        <z-table-header>
          <span>
            Titolo 2
          </span>
        </z-table-header>
        <z-table-header>
          <span>
            Titolo 3
          </span>
        </z-table-header>
        <z-table-header>
          <span>
            Titolo 4
          </span>
        </z-table-header>
      </z-table-header-row>
    </z-table-head>
    <div class=\"table table-empty\"></div>
    <z-table-empty-box message=\"Siamo spiacenti, al momento non sono presenti dati da visualizzare\" subtitle=\"\"></z-table-empty-box>
  </z-table>`);
  });

  it("Test render ZTable with empty content and one call to action", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table empty="true" call-to-action-label="Call To Action"></z-table>`,
    });
    expect(page.root)
      .toEqualHtml(`<z-table call-to-action-label=\"Call To Action\" empty=\"true\" role=\"table\">
    <div class=\"table table-empty\"></div>
    <z-table-empty-box message=\"Siamo spiacenti, al momento non sono presenti dati da visualizzare\" subtitle=\"\">
      <z-button-deprecated size=\"big\" slot=\"cta1\" variant=\"tertiary\">
        Call To Action
      </z-button-deprecated>
    </z-table-empty-box>
  </z-table>`);
  });

  it("Test render ZTable with empty content and two call to action", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table empty="true" call-to-action-label="Call To Action" call-to-action-two-label="Call To Action 2" ></z-table>`,
    });
    expect(page.root)
      .toEqualHtml(`<z-table call-to-action-label=\"Call To Action\" call-to-action-two-label=\"Call To Action 2\" empty=\"true\" role=\"table\">
    <div class=\"table table-empty\"></div>
    <z-table-empty-box message=\"Siamo spiacenti, al momento non sono presenti dati da visualizzare\" subtitle=\"\">
      <z-button-deprecated size=\"big\" slot=\"cta1\" variant=\"tertiary\">
        Call To Action
      </z-button-deprecated>
      <z-button-deprecated size=\"big\" slot=\"cta2\" variant=\"tertiary\">
        Call To Action 2
      </z-button-deprecated>
    </z-table-empty-box>
  </z-table>`);
  });

  it("Test render ZTable with empty content with first column", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table
      call-to-action-label="Call to action"
      empty="true"
      message="Siamo spiacenti, al momento non sono presenti dati da visualizzare!"
      subtitle="Eventuale testo"
    >
      <z-table-head slot="table-header">
        <z-table-header-row>
          <z-table-header>
            <span>Titolo 1</span>
          </z-table-header>
          <z-table-header>
            <span>Titolo 2</span>
          </z-table-header>
          <z-table-header>
            <span>Titolo 3</span>
          </z-table-header>
          <z-table-header>
            <span>Titolo 4</span>
          </z-table-header>
        </z-table-header-row>
      </z-table-head>
    </z-table>`,
    });

    expect(page.root)
      .toEqualHtml(`<z-table call-to-action-label=\"Call to action\" empty=\"true\" message=\"Siamo spiacenti, al momento non sono presenti dati da visualizzare!\" role=\"table\" subtitle=\"Eventuale testo\">
    <div class=\"table table-empty\">
      <z-table-head slot=\"table-header\">
        <z-table-header-row>
          <z-table-header>
            <span>
              Titolo 1
            </span>
          </z-table-header>
          <z-table-header>
            <span>
              Titolo 2
            </span>
          </z-table-header>
          <z-table-header>
            <span>
              Titolo 3
            </span>
          </z-table-header>
          <z-table-header>
            <span>
              Titolo 4
            </span>
          </z-table-header>
        </z-table-header-row>
      </z-table-head>
    </div>
    <z-table-empty-box message=\"Siamo spiacenti, al momento non sono presenti dati da visualizzare!\" subtitle=\"Eventuale testo\">
      <z-button-deprecated size=\"big\" slot=\"cta1\" variant=\"tertiary\">
        Call to action
      </z-button-deprecated>
    </z-table-empty-box>
  </z-table>`);
  });

  it("Test render ZTable with empty <z-table-body> component", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table
        empty="true"
        message="Siamo spiacenti, al momento non sono presenti dati da visualizzare!"
        subtitle="Eventuale testo"
        call-to-action-label="Call to action"
      >
        <z-table-head slot="table-header">
          <z-table-header-row>
            <z-table-header>
              <span>Titolo 1</span>
            </z-table-header>
            <z-table-header>
              <span>Titolo 2</span>
            </z-table-header>
            <z-table-header>
              <span>Titolo 3</span>
            </z-table-header>
            <z-table-header>
              <span>Titolo 4</span>
            </z-table-header>
          </z-table-header-row>
        </z-table-head>
        <z-table-body slot="table-body"></z-table-body>
      </z-table>`,
    });

    expect(page.root)
      .toEqualHtml(`<z-table call-to-action-label=\"Call to action\" empty=\"true\" message=\"Siamo spiacenti, al momento non sono presenti dati da visualizzare!\" role=\"table\" subtitle=\"Eventuale testo\">
    <div class=\"table table-empty\">
      <z-table-head slot=\"table-header\">
        <z-table-header-row>
          <z-table-header>
            <span>
              Titolo 1
            </span>
          </z-table-header>
          <z-table-header>
            <span>
              Titolo 2
            </span>
          </z-table-header>
          <z-table-header>
            <span>
              Titolo 3
            </span>
          </z-table-header>
          <z-table-header>
            <span>
              Titolo 4
            </span>
          </z-table-header>
        </z-table-header-row>
      </z-table-head>
    </div>
    <z-table-empty-box message=\"Siamo spiacenti, al momento non sono presenti dati da visualizzare!\" subtitle=\"Eventuale testo\">
      <z-button-deprecated size=\"big\" slot=\"cta1\" variant=\"tertiary\">
        Call to action
      </z-button-deprecated>
    </z-table-empty-box>
  </z-table>`);
  });

  it("Test render ZTable con slot", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table><z-table-head></z-table-head></z-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-table role="table">
        <div class="table">
            <z-table-head></z-table-head>
        </div>
      </z-table>`
    );
  });

  it("Test render ZTable con slot sticky-footer", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table>
                <z-table-head></z-table-head>
                <z-table-sticky-footer slot="sticky-footer"></z-table-sticky-footer>
            </z-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-table role="table">
        <div class="table">
            <z-table-head></z-table-head>
        </div>
        <z-table-sticky-footer slot="sticky-footer"></z-table-sticky-footer>
      </z-table>`
    );
  });

  it("Test render ZTable con role table", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table></z-table>`,
    });

    expect(page.root.getAttribute("role")).toEqual("table");
  });

  it("Test render ZTable con bordi", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table bordered="true"></z-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-table bordered="true" role="table">
        <div class="table table-bordered">

        </div>
      </z-table>`
    );
  });

  it("Test render ZTable con colonna sticky", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table column-sticky="true"></z-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-table column-sticky="true" role="table">
        <div class="table table-column-sticky">

        </div>
      </z-table>`
    );
  });

  it("Test render ZTable con header sticky", async () => {
    const page = await newSpecPage({
      components: [ZTable],
      html: `<z-table header-sticky="true"></z-table>`,
    });

    expect(page.root).toEqualHtml(
      `<z-table header-sticky="true" role="table">
        <div class="table table-header-sticky">

        </div>
      </z-table>`
    );
  });
});
