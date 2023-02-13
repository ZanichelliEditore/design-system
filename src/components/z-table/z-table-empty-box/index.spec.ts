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
        <span class="body-3-sb">Siamo spiacenti, al momento non sono presenti dati da visualizzare.</span><br />
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
        <span class="body-3-sb">Custom message</span><br />
        <span class="body-4">Custom subtitle</span>
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
        <span class="body-3-sb">Siamo spiacenti, al momento non sono presenti dati da visualizzare.</span><br />
        <div class="cta has-2-cta">
          <z-button slot="cta1">CTA 1</z-button>
          <z-button slot="cta2">CTA 2</z-button>
        </div>
      </z-table-empty-box>
    `);
  });
});
