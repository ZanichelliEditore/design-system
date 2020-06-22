import { newSpecPage } from "@stencil/core/testing";

import { ZAlert } from "./index";

describe("Suite test ZAlert", () => {
  it("Test render ZAlert vuoto", async () => {
    const page = await newSpecPage({
      components: [ZAlert],
      html: `<z-alert></z-alert>`
    });

    expect(page.root).toEqualHtml(`
    <z-alert>
      <mock:shadow-root>
        <div>
          <slot></slot>
        </div>
      </mock:shadow-root>
    </z-alert>
    `);
  });
});
