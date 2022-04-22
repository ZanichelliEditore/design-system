import { newSpecPage } from "@stencil/core/testing";

import { ZToggleSwitch } from "./index";

describe("Suite test ZToggleSwitch", () => {
  it("Test render ZToggleSwitch label position left", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id"></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id">
        <mock:shadow-root>
          <label class="left" htmlfor="toggle-id">
            <z-body class="left" level="3">
              <slot></slot>
            </z-body>
            <div class="container false" tabindex="0">
              <div class="circle false"></div>
            </div>
          </label>
          <input id="toggle-id" type="checkbox">
        </mock:shadow-root>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position right", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" reverselabel></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" reverselabel="">
        <mock:shadow-root>
          <label class="right" htmlfor="toggle-id">
            <z-body class="right" level="3">
              <slot></slot>
            </z-body>
            <div class="container false" tabindex="0">
              <div class="circle false"></div>
            </div>
          </label>
          <input id="toggle-id" type="checkbox">
        </mock:shadow-root>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position left disabled", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" disabled></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" disabled="">
        <mock:shadow-root>
          <label class="left" htmlfor="toggle-id">
            <z-body class="left" level="3">
              <slot></slot>
            </z-body>
            <div class="container disabled false" tabindex="0">
              <div class="circle disabled false"></div>
            </div>
          </label>
          <input disabled id="toggle-id" type="checkbox">
        </mock:shadow-root>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position right disabled", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" reverselabel disabled></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" reverselabel="" disabled="">
        <mock:shadow-root>
          <label class="right" htmlfor="toggle-id">
            <z-body class="right" level="3">
              <slot></slot>
            </z-body>
            <div class="container disabled false" tabindex="0">
              <div class="circle disabled false"></div>
            </div>
          </label>
          <input disabled id="toggle-id" type="checkbox">
        </mock:shadow-root>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position left active", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" checked></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" checked="">
        <mock:shadow-root>
          <label class="left" htmlfor="toggle-id">
            <z-body class="left" level="3">
              <slot></slot>
            </z-body>
            <div class="container false active" tabindex="0">
              <div class="circle false checked">
                <z-icon height="12" name="checkmark" width="12"></z-icon>
              </div>
            </div>
          </label>
          <input checked="" id="toggle-id" type="checkbox">
        </mock:shadow-root>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position right active", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" reverselabel checked></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" checked="" reverselabel="">
        <mock:shadow-root>
          <label class="right" htmlfor="toggle-id">
            <z-body class="right" level="3">
              <slot></slot>
            </z-body>
            <div class="container false active" tabindex="0">
              <div class="circle false checked">
                <z-icon height="12" name="checkmark" width="12"></z-icon>
              </div>
            </div>
          </label>
          <input checked="" id="toggle-id" type="checkbox">
        </mock:shadow-root>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position left active disabled", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" disabled checked></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" disabled="" checked="">
        <mock:shadow-root>
          <label class="left" htmlfor="toggle-id">
            <z-body class="left" level="3">
              <slot></slot>
            </z-body>
            <div class="container active disabled" tabindex="0">
              <div class="circle disabled checked">
                <z-icon height="12" name="checkmark" width="12"></z-icon>
              </div>
            </div>
          </label>
          <input disabled="" checked="" id="toggle-id" type="checkbox">
        </mock:shadow-root>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position right active disabled", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" reverselabel disabled checked></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" disabled="" checked="" reverselabel="">
        <mock:shadow-root>
          <label class="right" htmlfor="toggle-id">
            <z-body class="right" level="3">
              <slot></slot>
            </z-body>
            <div class="container active disabled" tabindex="0">
              <div class="circle disabled checked">
                <z-icon height="12" name="checkmark" width="12"></z-icon>
              </div>
            </div>
          </label>
          <input disabled="" checked="" id="toggle-id" type="checkbox">
        </mock:shadow-root>
      </z-toggle-switch>
    `);
  });
});
