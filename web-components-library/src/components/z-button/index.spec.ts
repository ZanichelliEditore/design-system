import { newSpecPage } from "@stencil/core/testing";

import { ZButton } from "./index";

describe("Suite test ZButton", () => {

  it("Test render ZButton", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button></z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button>
        <mock:shadow-root>
          <button>
          </button>
        </mock:shadow-root>
      </z-button>
    `)
  });

  it("Test render ZButton con label", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button label="label"></z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button label="label">
        <mock:shadow-root>
          <button>
            label
          </button>
        </mock:shadow-root>
      </z-button>
    `)
  });

  it("Test render ZButton con icon", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button icon="icon.png"></z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button icon="icon.png">
        <mock:shadow-root>
          <button>
            <img src="../../../assets/images/png/icon.png" />
          </button>
        </mock:shadow-root>
      </z-button>
    `)
  });

  it("Test render ZButton type", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button type="primary"></z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button type="primary">
        <mock:shadow-root>
          <button class="primary">
          </button>
        </mock:shadow-root>
      </z-button>
    `)
  });

  it("Test render ZButton small", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button type="primary" issmall="true"></z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button type="primary" issmall="true">
        <mock:shadow-root>
          <button class="primary small">
          </button>
        </mock:shadow-root>
      </z-button>
    `)
  });

  it("Test render ZButton disabled", async () => {
    const page = await newSpecPage({
      components: [ZButton],
      html: `<z-button isdisabled="true"></z-button>`
    });
    expect(page.root).toEqualHtml(`
      <z-button isdisabled="true">
        <mock:shadow-root>
          <button disabled>
          </button>
        </mock:shadow-root>
      </z-button>
    `)
  });

});
