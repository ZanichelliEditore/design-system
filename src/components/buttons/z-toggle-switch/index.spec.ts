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
        <input id="toggle-id" type="checkbox">
        <label class="left" htmlfor="toggle-id">
          <span class="left"></span>
          <div class="container false">
            <div class="circle false"></div>
          </div>
        </label>
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
        <input id="toggle-id" type="checkbox">
        <label class="right" htmlfor="toggle-id">
          <span class="right"></span>
          <div class="container false">
            <div class="circle false"></div>
          </div>
        </label>
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
        <input disabled id="toggle-id" type="checkbox">
        <label class="left" htmlfor="toggle-id">
          <span class="left"></span>
          <div class="container disabled false">
            <div class="circle disabled false"></div>
          </div>
        </label>
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
      <input disabled id="toggle-id" type="checkbox">
        <label class="right" htmlfor="toggle-id">
          <span class="right"></span>
          <div class="container disabled false">
            <div class="circle disabled false"></div>
          </div>
        </label>
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
        <input checked="" id="toggle-id" type="checkbox">
        <label class="left" htmlfor="toggle-id">
          <span class="left"></span>
          <div class="container false active">
            <div class="circle false checked">
              <z-icon height="12" name="checkmark" width="12"></z-icon>
            </div>
          </div>
        </label>
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
        <input checked="" id="toggle-id" type="checkbox">
        <label class="right" htmlfor="toggle-id">
          <span class="right"></span>
          <div class="container false active">
            <div class="circle false checked">
              <z-icon height="12" name="checkmark" width="12"></z-icon>
            </div>
          </div>
        </label>
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
        <input disabled="" checked="" id="toggle-id" type="checkbox">
        <label class="left" htmlfor="toggle-id">
          <span class="left"></span>
          <div class="container active disabled">
            <div class="circle disabled checked">
              <z-icon height="12" name="checkmark" width="12"></z-icon>
            </div>
          </div>
        </label>
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
        <input disabled="" checked="" id="toggle-id" type="checkbox">
        <label class="right" htmlfor="toggle-id">
          <span class="right"></span>
          <div class="container active disabled">
            <div class="circle disabled checked">
              <z-icon height="12" name="checkmark" width="12"></z-icon>
            </div>
          </div>
        </label>
      </z-toggle-switch>
    `);
  });
});
