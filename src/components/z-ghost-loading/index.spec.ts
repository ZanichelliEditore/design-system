import { newSpecPage } from "@stencil/core/testing";

import { ZGhostLoading } from "./index";

describe("Suite test ZGhostLoading", () => {
  it("Test render ZGhostLoading", async () => {

    const page = await newSpecPage({
      components: [ZGhostLoading],
      html: `<z-ghost-loading></z-ghost-loading>`
    });

    expect(page.root).toEqualHtml(`
    <z-ghost-loading>
      <mock:shadow-root></mock:shadow-root>
    </z-ghost-loading>
    `)
  });
});

