import { newSpecPage } from "@stencil/core/testing";

import { ZCardIcon } from "./index";

describe("Suite test ZCardIcon", () => {
  it("Test render ZCardIcon vuoto", async () => {
    const page = await newSpecPage({
      components: [ZCardIcon],
      html: `<z-card-icon icon="icon"></z-card-icon>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-icon icon=\"icon\">
      <mock:shadow-root>
        <span>
          <span>
            <z-icon height=\"18\" name=\"icon\" width=\"18\"></z-icon>
          </span>
        </span>
      </mock:shadow-root>
    </z-card-icon>
    `);
  });
});
