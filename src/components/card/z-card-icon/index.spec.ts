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
        <button>
          <span>
            <z-icon height=\"16\" name=\"icon\" width=\"16\"></z-icon>
          </span>
        </button>
      </mock:shadow-root>
    </z-card-icon>
    `);
  });

  it("Test render ZCardIcon disabled", async () => {
    const page = await newSpecPage({
      components: [ZCardIcon],
      html: `<z-card-icon icon="icon" isdisabled></z-card-icon>`
    });

    expect(page.root).toEqualHtml(`
    <z-card-icon icon=\"icon\" isdisabled>
      <mock:shadow-root>
        <button disabled>
          <span>
            <z-icon height=\"16\" name=\"icon\" width=\"16\"></z-icon>
          </span>
        </button>
      </mock:shadow-root>
    </z-card-icon>
    `);
  });
});
