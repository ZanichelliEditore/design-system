import {newSpecPage} from "@stencil/core/testing";

import {ZBreadcrumb} from "./index";

describe("Suite test ZBreadcrumb", () => {
  it("Test render ZBreadcrumb vuoto", async () => {
    const page = await newSpecPage({
      components: [ZBreadcrumb],
      html: `<z-breadcrumb></z-breadcrumb>`,
    });

    expect(page.root).toEqualHtml(`
     <z-breadcrumb type="underlined">
      <mock:shadow-root></mock:shadow-root>
    </z-breadcrumb>
    `);
  });
});
