import {newSpecPage} from "@stencil/core/testing";
import {ZSkipToContent} from "./index";

describe("Suite test ZSkipToContent", () => {
  it("Test render ZSkipToContent empty", async () => {
    const page = await newSpecPage({
      components: [ZSkipToContent],
      html: `<z-skip-to-content variant></z-skip-to-content>`,
    });

    expect(page.root).toEqualHtml(`
        <z-skip-to-content variant=""></z-skip-to-content>
    `);
  });

  it("Test render ZSkipToContent with variant and links", async () => {
    const page = await newSpecPage({
      components: [ZSkipToContent],
      html: `<z-skip-to-content variant="dark" links='[{"ariaLabel": "vai al link1", "label":"vai al link1", "href":"#link1"}]'></z-skip-to-content>`,
    });

    expect(page.root).toEqualHtml(`
      <z-skip-to-content class="dark" links="[{&quot;ariaLabel&quot;: &quot;vai al link1&quot;, &quot;label&quot;:&quot;vai al link1&quot;, &quot;href&quot;:&quot;#link1&quot;}]" variant="dark">
        <div class="link-container">
          <a aria-label="vai al link1" class="body-1-sb link-invisible z-link z-link-underline z-link-inverse" href="#link1" id="skip-to-content-0">
            vai al link1
          </a>
      </z-skip-to-content>
    `);
  });
});
