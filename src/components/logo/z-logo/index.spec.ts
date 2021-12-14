import { newSpecPage } from "@stencil/core/testing";

import { ZLogo } from "./index";

describe("Suite test ZLogo", () => {
  it("Test render ZLogo", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo></z-logo>`
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
      html: `<z-logo imagealt="zlogo" width=128 height=32></z-logo>`
    });
    expect(page.root).toEqualHtml(`
      <z-logo width="128" height="32" imagealt="zlogo" style="width: 128px; max-width: 128px; height: 32px; max-height: 32px;">
        <mock:shadow-root>
          <img alt="zlogo" style="width: 128px; max-width: 128px; height: 32px; max-height: 32px;">
        </mock:shadow-root>
      </z-logo>
    `);
  });

  it("Test render ZLogo with link", async () => {
    const page = await newSpecPage({
      components: [ZLogo],
      html: `<z-logo link="http://www.zanichelli.it/"></z-logo>`
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
      html: `<z-logo link="http://www.zanichelli.it/" targetblank width="128" height="32"></z-logo>`
    });
    expect(page.root).toEqualHtml(`
      <z-logo width="128" height="32" link="http://www.zanichelli.it/" targetblank style="width: 128px; max-width: 128px; height: 32px; max-height: 32px;">
        <mock:shadow-root>
          <a href="http://www.zanichelli.it/" target="_blank" style="width: 128px; max-width: 128px; height: 32px; max-height: 32px;">
            <img style="width: 128px; max-width: 128px; height: 32px; max-height: 32px;">
          </a>
        </mock:shadow-root>
      </z-logo>
    `);
  });
});
