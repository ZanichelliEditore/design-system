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
              <a href="http://testing.stenciljs.com/link1">
                <z-icon name="home"></z-icon>
              </a>
              <z-icon class="separator" name="chevron-right"></z-icon>
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
