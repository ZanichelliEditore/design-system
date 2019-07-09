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
          <a></a>
        </mock:shadow-root>
      </z-link>
    `)
  });

  it("Test render ZLink con link", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link url="http://www.google.com/"></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link url="http://www.google.com/">
        <mock:shadow-root>
          <a href="http://www.google.com/"></a>
        </mock:shadow-root>
      </z-link>
    `)
  });

  it("Test render ZLink con label", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link label="label"></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link label="label">
        <mock:shadow-root>
          <a>label</a>
        </mock:shadow-root>
      </z-link>
    `)
  });

  it("Test render ZLink con icon", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link icon="icon.png"></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link icon="icon.png">
        <mock:shadow-root>
          <a>
            <img src="../../../assets/images/png/icon.png" />
          </a>
        </mock:shadow-root>
      </z-link>
    `)
  });

  it("Test render ZLink disabled", async () => {
    const page = await newSpecPage({
      components: [ZLink],
      html: `<z-link isdisabled></z-link>`
    });
    expect(page.root).toEqualHtml(`
      <z-link isdisabled>
        <mock:shadow-root>
          <a class="disabled"></a>
        </mock:shadow-root>
      </z-link>
    `)
  });

});

