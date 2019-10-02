import { newSpecPage } from "@stencil/core/testing";

import { ZPaginationBar } from "./index";

describe("Suite test ZPaginationBar", () => {
  it("Test render ZPaginationBar vuoto", async () => {

    const page = await newSpecPage({
      components: [ZPaginationBar],
      html: `<z-pagination-bar></z-pagination-bar>`
    });

    expect(page.root).toEqualHtml(`
      <z-pagination-bar>
        <mock:shadow-root>
          <div>
            This is your z-pagination-bar component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-pagination-bar>
    `)
  });
});

