import { newSpecPage } from "@stencil/core/testing";

import { ZLink } from "./index";

describe("Suite test ZLink", () => {
  it("Test render ZLink vuoto", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link>
        <mock:shadow-root>
          <a class="false false" target="_self"></a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink con link", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link url="http://www.google.com/"></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link url="http://www.google.com/">
        <mock:shadow-root>
          <a href="http://www.google.com/" class="false false" target="_self"></a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink con label", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link label="label"></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link label="label">
        <mock:shadow-root>
          <a class="false false" target="_self">label</a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink con icon", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link icon="icon"></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link icon="icon">
        <mock:shadow-root>
          <a class="false false" target="_self">
            <z-icon height="12" name="icon" width="12"></z-icon>
          </a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink disabled", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link isdisabled></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link isdisabled>
        <mock:shadow-root>
          <a class="disabled false" target="_self"></a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink white", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link iswhite></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link iswhite>
        <mock:shadow-root>
          <a class="white false" target="_self"></a>
        </mock:shadow-root>
      </z-link>
    `);
  });

  it("Test render ZLink target", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link target="_blank"></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link target="_blank">
        <mock:shadow-root>
          <a class="false false" target="_blank"></a>
        </mock:shadow-root>
      </z-link>
    `);
  });
});
