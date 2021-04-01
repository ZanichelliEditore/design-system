import { newSpecPage } from "@stencil/core/testing";

import { ZFooterSocial } from "./index";

describe("Suite test ZFooterSocial", () => {
  it("Test render ZFooterSocial vuoto", async () => {

    const page = await newSpecPage({
      components: [ZFooterSocial],
      html: `<z-footer-social></z-footer-social>`
    });

    expect(page.root).toEqualHtml(`
      <z-footer-social>
        <mock:shadow-root>
          <div>
            This is your z-footer-social component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-footer-social>
    `)
  });
});

