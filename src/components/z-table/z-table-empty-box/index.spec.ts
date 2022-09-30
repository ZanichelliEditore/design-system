import {newSpecPage} from "@stencil/core/testing";

import {ZTableEmptyBox} from "./index";

describe("ZTableEmptyBox", () => {
  it("renders default `ZTableEmptyBox`", async () => {
    const page = await newSpecPage({
      components: [ZTableEmptyBox],
      html: `<z-table-empty-box></z-table-empty-box>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-empty-box>
        <z-body level="3" variant="semibold">Siamo spiacenti, al momento non sono presenti dati da visualizzare.</z-body><br />
      </z-table-empty-box>
    `);
  });

  it("renders default `ZTableEmptyBox` with custom `message` and `subtitle`", async () => {
    const page = await newSpecPage({
      components: [ZTableEmptyBox],
      html: `<z-table-empty-box message="Custom message" subtitle="Custom subtitle"></z-table-empty-box>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-empty-box message="Custom message" subtitle="Custom subtitle">
        <z-body level="3" variant="semibold">Custom message</z-body><br />
        <z-body level="4" variant="regular">Custom subtitle</z-body>
      </z-table-empty-box>
    `);
  });

  it("renders default `ZTableEmptyBox` with custom `cta1` and `cta2` slots", async () => {
    const page = await newSpecPage({
      components: [ZTableEmptyBox],
      html: `<z-table-empty-box>
              <z-button slot="cta1">CTA 1</z-button>
              <z-button slot="cta2">CTA 2</z-button>
            </z-table-empty-box>`,
    });

    expect(page.root).toEqualHtml(`
      <z-table-empty-box>
        <z-body level="3" variant="semibold">Siamo spiacenti, al momento non sono presenti dati da visualizzare.</z-body><br />
        <div class="cta has-2-cta">
          <z-button slot="cta1">CTA 1</z-button>
          <z-button slot="cta2">CTA 2</z-button>
        </div>
      </z-table-empty-box>
    `);
  });
});
