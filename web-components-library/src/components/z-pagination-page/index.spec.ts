import { newSpecPage } from "@stencil/core/testing";

import { ZPaginationPage } from "./index";

describe("Suite test ZPaginationPage", () => {
  it("Test render ZPaginationPage vuoto", async () => {

    const page = await newSpecPage({
      components: [ZPaginationPage],
      html: `<z-pagination-page></z-pagination-page>`
    });

    expect(page.root).toEqualHtml(`
      <z-pagination-page>
        <mock:shadow-root>
          <div>
            This is your z-pagination-page component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-pagination-page>
    `)
  });
});

