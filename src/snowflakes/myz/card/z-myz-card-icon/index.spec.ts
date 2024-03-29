import {newSpecPage} from "@stencil/core/testing";

import {ZMyzCardIcon} from "./index";

describe("Suite test ZMyzCardIcon", () => {
  it("Test render ZMyzCardIcon vuoto", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardIcon],
      html: `<z-myz-card-icon icon="icon"></z-myz-card-icon>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-icon icon="icon">
      <mock:shadow-root>
        <button aria-label="">
          <span>
            <z-icon height="16" name="icon" width="16"></z-icon>
          </span>
        </button>
      </mock:shadow-root>
    </z-myz-card-icon>
    `);
  });
  it("Test render ZMyzCardIcon with aria-label", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardIcon],
      html: `<z-myz-card-icon icon="icon" aria-label="test label"></z-myz-card-icon>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-icon icon="icon" aria-label="test label">
      <mock:shadow-root>
        <button aria-label="test label">
          <span>
            <z-icon height="16" name="icon" width="16"></z-icon>
          </span>
        </button>
      </mock:shadow-root>
    </z-myz-card-icon>
    `);
  });
  it("Test render ZMyzCardIcon disabled", async () => {
    const page = await newSpecPage({
      components: [ZMyzCardIcon],
      html: `<z-myz-card-icon icon="icon" isdisabled></z-myz-card-icon>`,
    });

    expect(page.root).toEqualHtml(`
    <z-myz-card-icon icon="icon" isdisabled>
      <mock:shadow-root>
        <button aria-label="" disabled>
          <span>
            <z-icon height="16" name="icon" width="16"></z-icon>
          </span>
        </button>
      </mock:shadow-root>
    </z-myz-card-icon>
    `);
  });
});
