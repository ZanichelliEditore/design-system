import {newSpecPage} from "@stencil/core/testing";

import {ZLogo} from "./index";

describe("Suite test ZLogo", () => {
  it("Test render ZLogo", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo></z-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <z-logo>
        <mock:shadow-root>
          <img></img>
        </mock:shadow-root>
      </z-logo>
    `);
  });

  it("Test render ZLogo with img alt and size", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo image-alt="zlogo" width=128 height=32></z-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <z-logo width="128" height="32" image-alt="zlogo" style="max-width: 128px; width: 128px; max-height: 32px; height: 32px;">
        <mock:shadow-root>
          <img alt="zlogo">
        </mock:shadow-root>
      </z-logo>
    `);
  });

  it("Test render ZLogo with link", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo link="http://www.zanichelli.it/"></z-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <z-logo link="http://www.zanichelli.it/">
        <mock:shadow-root>
          <a href="http://www.zanichelli.it/" target="_self">
            <img>
          </a>
        </mock:shadow-root>
      </z-logo>
    `);
  });

  it("Test render ZLogo with link, targetblank and size", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo link="http://www.zanichelli.it/" target-blank width="128" height="32"></z-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <z-logo width="128" height="32" link="http://www.zanichelli.it/" target-blank style="max-width: 128px; width: 128px; max-height: 32px; height: 32px;">
        <mock:shadow-root>
          <a href="http://www.zanichelli.it/" target="_blank">
            <img>
          </a>
        </mock:shadow-root>
      </z-logo>
    `);
  });

  it("Test render mobile ZLogo", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo mobile-logo></z-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <z-logo mobile-logo class="mobile">
        <mock:shadow-root>
            <img></img>
        </mock:shadow-root>
      </z-logo>
    `);
  });
});
