import { newSpecPage } from "@stencil/core/testing";

import { ZRegistroTableEmptyBox } from "./index";

describe("ZRegistroTableEmptyBox", () => {
  it("renders default `ZRegistroTableEmptyBox`", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableEmptyBox],
      html: `<z-registro-table-empty-box></z-registro-table-empty-box>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-empty-box>
        <z-body level="3" variant="semibold">Siamo spiacenti, al momento non sono presenti dati da visualizzare.</z-body><br />
      </z-registro-table-empty-box>
    `);
  });

  it("renders default `ZRegistroTableEmptyBox` with custom `message` and `subtitle`", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableEmptyBox],
      html: `<z-registro-table-empty-box message="Custom message" subtitle="Custom subtitle"></z-registro-table-empty-box>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-empty-box message="Custom message" subtitle="Custom subtitle">
        <z-body level="3" variant="semibold">Custom message</z-body><br />
        <z-body level="4" variant="regular">Custom subtitle</z-body>
      </z-registro-table-empty-box>
    `);
  });

  it("renders default `ZRegistroTableEmptyBox` with custom `cta1` and `cta2` slots", async () => {
    const page = await newSpecPage({
      components: [ZRegistroTableEmptyBox],
      html: `<z-registro-table-empty-box>
              <z-button slot="cta1">CTA 1</z-button>
              <z-button slot="cta2">CTA 2</z-button>
            </z-registro-table-empty-box>`,
    });

    expect(page.root).toEqualHtml(`
      <z-registro-table-empty-box>
        <z-body level="3" variant="semibold">Siamo spiacenti, al momento non sono presenti dati da visualizzare.</z-body><br />
        <div class="cta">
          <z-button slot="cta1">CTA 1</z-button>
          <z-button slot="cta2">CTA 2</z-button>
        </div>
      </z-registro-table-empty-box>
    `);
  });
});
