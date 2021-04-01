import { newSpecPage } from "@stencil/core/testing";

import { ZFooterLink } from "./index";

describe("Suite test ZFooterLink", () => {
  it("Test render ZFooterLink vuoto", async () => {

    const page = await newSpecPage({
      components: [ZFooterLink],
      html: `<z-footer-link></z-footer-link>`
    });

    expect(page.root).toEqualHtml(`
      <z-footer-link>
        <mock:shadow-root>
          <div>
            This is your z-footer-link component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-footer-link>
    `)
  });
});

