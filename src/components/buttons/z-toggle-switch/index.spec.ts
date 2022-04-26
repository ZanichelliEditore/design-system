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
        <label class="left" htmlfor="toggle-id">
          <span class="left"></span>
          <div class="container false" tabindex="0">
            <div class="circle false"></div>
          </div>
        </label>
        <input id="toggle-id" tabindex="-1" type="checkbox">
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
        <label class="right" htmlfor="toggle-id">
          <span class="right"></span>
          <div class="container false" tabindex="0">
            <div class="circle false"></div>
          </div>
        </label>
        <input id="toggle-id" tabindex="-1" type="checkbox">
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
        <label class="left" htmlfor="toggle-id">
          <span class="left"></span>
          <div class="container disabled false" tabindex="0">
            <div class="circle disabled false"></div>
          </div>
        </label>
        <input disabled id="toggle-id" tabindex="-1" type="checkbox">
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
        <label class="right" htmlfor="toggle-id">
          <span class="right"></span>
          <div class="container disabled false" tabindex="0">
            <div class="circle disabled false"></div>
          </div>
        </label>
        <input disabled id="toggle-id" tabindex="-1" type="checkbox">
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
        <label class="left" htmlfor="toggle-id">
          <span class="left"></span>
          <div class="container false active" tabindex="0">
            <div class="circle false checked">
              <z-icon height="12" name="checkmark" width="12"></z-icon>
            </div>
          </div>
        </label>
        <input checked="" id="toggle-id" tabindex="-1" type="checkbox">
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
        <label class="right" htmlfor="toggle-id">
          <span class="right"></span>
          <div class="container false active" tabindex="0">
            <div class="circle false checked">
              <z-icon height="12" name="checkmark" width="12"></z-icon>
            </div>
          </div>
        </label>
        <input checked="" id="toggle-id" tabindex="-1" type="checkbox">
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
        <label class="left" htmlfor="toggle-id">
          <span class="left"></span>
          <div class="container active disabled" tabindex="0">
            <div class="circle disabled checked">
              <z-icon height="12" name="checkmark" width="12"></z-icon>
            </div>
          </div>
        </label>
        <input disabled="" checked="" id="toggle-id" tabindex="-1" type="checkbox">
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
        <label class="right" htmlfor="toggle-id">
          <span class="right"></span>
          <div class="container active disabled" tabindex="0">
            <div class="circle disabled checked">
              <z-icon height="12" name="checkmark" width="12"></z-icon>
            </div>
          </div>
        </label>
        <input disabled="" checked="" id="toggle-id" tabindex="-1" type="checkbox">
      </z-toggle-switch>
    `);
  });
});
