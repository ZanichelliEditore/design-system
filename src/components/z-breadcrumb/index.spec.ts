import {newSpecPage} from "@stencil/core/testing";

import {ZBreadcrumb} from "./index";

describe("Suite test ZBreadcrumb", () => {
  it("Test render ZBreadcrumb with passed children", async () => {
    const page = await newSpecPage({
      components: [ZBreadcrumb],
      html: `<z-breadcrumb>
        <a href="./link1">Link 1</a>
        <a href="./link2">Link 2</a>
      </z-breadcrumb>`,
    });

    expect(page.root).toEqualHtml(`<z-breadcrumb path-style="underlined" style="--line-clamp-popover: 0;">
      <mock:shadow-root>
        <nav aria-label="Breadcrumb" class="underlined">
          <ol>
            <li>
              <a class="homepage-icon" href="http://testing.stenciljs.com/link1">
                <z-icon fill="color-link-primary" height="16" name="home" width="16"></z-icon>
              </a>
            </li>
            <li>
              <a href="http://testing.stenciljs.com/link2">
                Link 2
              </a>
            </li>
          </ol>
        </nav>
      </mock:shadow-root>
      <a href="./link1">
        Link 1
      </a>
      <a href="./link2">
        Link 2
      </a>
    </z-breadcrumb>`);
  });
});
