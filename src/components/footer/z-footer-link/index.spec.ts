import { newSpecPage } from "@stencil/core/testing";

import { ZFooterLink } from "./index";

describe("Suite test ZFooterLink", () => {
  it("Test render ZFooterLink vuoto", async () => {
    const page = await newSpecPage({
      components: [ZFooterLink],
      html: `<z-footer-link></z-footer-link>`,
    });

    expect(page.root).toEqualHtml(`
      <z-footer-link>
        <mock:shadow-root>
          <a target="_blank"></a>
        </mock:shadow-root>
      </z-footer-link>
    `);
  });
});
