import {newSpecPage} from "@stencil/core/testing";

import {ZBreadcrumb} from "./index";

describe("Suite test ZBreadcrumb", () => {
  it("Test render ZBreadcrumb with path prop", async () => {
    const page = await newSpecPage({
      components: [ZBreadcrumb],
      html: `<z-breadcrumb paths='[{"text": "Primo path", "path": "/path1"}, {"text": "Secondo path", "path": "/path2"}, {"text": "Terzo path", "path": "/path3"}]'></z-breadcrumb>`,
    });

    expect(page.root)
      .toEqualHtml(`<z-breadcrumb path-style="underlined" paths="[{&quot;text&quot;: &quot;Primo path&quot;, &quot;path&quot;: &quot;/path1&quot;}, {&quot;text&quot;: &quot;Secondo path&quot;, &quot;path&quot;: &quot;/path2&quot;}, {&quot;text&quot;: &quot;Terzo path&quot;, &quot;path&quot;: &quot;/path3&quot;}]" style="--line-clamp: 0;">
      <mock:shadow-root>
        <nav aria-label="Breadcrumb" class="underlined">
          <ol>
            <li>
              <a class="homepage-icon" href="/path1">
                <z-icon fill="color-link-primary" height="16" name="home" width="16"></z-icon>
              </a>
            </li>
            <li>
              <a href="/path2">
                Secondo path
              </a>
            </li>
            <li>
              <a href="/path3">
                Terzo path
              </a>
            </li>
          </ol>
        </nav>
      </mock:shadow-root>
    </z-breadcrumb>`);
  });

  it("Test render ZBreadcrumb with passed children", async () => {
    const page = await newSpecPage({
      components: [ZBreadcrumb],
      html: `<z-breadcrumb>
        <a href="./link1">Link 1</a>
        <a href="./link2">Link 2</a>
      </z-breadcrumb>`,
    });

    expect(page.root).toEqualHtml(`<z-breadcrumb path-style="underlined" style="--line-clamp: 0;">
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
