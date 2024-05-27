import {newSpecPage} from "@stencil/core/testing";

import {ZToggleSwitch} from "./index";

describe("Suite test ZToggleSwitch", () => {
  it("Test render ZToggleSwitch label position left", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" label-position="left"></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" label-position="left">
        <input id="toggle-id" type="checkbox">
        <label class="left" htmlfor="toggle-id">
          <span></span>
          <span class="container">
            <span class="circle"></span>
          </span>
        </label>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position right", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" label-position="right"></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" label-position="right">
          <input id="toggle-id" type="checkbox">
          <label class="right" htmlfor="toggle-id">
            <span></span>
            <span class="container">
              <span class="circle"></span>
            </span>
          </label>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position left disabled", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" label-position="left" disabled></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" label-position="left" disabled="">
          <input disabled id="toggle-id" type="checkbox">
          <label class="disabled left" htmlfor="toggle-id">
            <span></span>
            <span class="container disabled">
              <span class="circle"></span>
            </span>
          </label>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position right disabled", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" label-position="right" disabled></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" label-position="right" disabled="">
        <input disabled id="toggle-id" type="checkbox">
        <label class="disabled right" htmlfor="toggle-id">
          <span></span>
          <span class="container disabled">
            <span class="circle"></span>
          </span>
        </label>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position left active", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" label-position="left" checked></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" label-position="left" checked="">
          <input checked="" id="toggle-id" type="checkbox">
          <label class="left" htmlfor="toggle-id">
            <span></span>
            <span class="container checked">
              <span class="circle">
                <z-icon height="12" name="checkmark" width="12"></z-icon>
              </span>
            </span>
          </label>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position right active", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" label-position="right" checked></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" label-position="right" checked="">
        <input checked="" id="toggle-id" type="checkbox">
        <label class="right" htmlfor="toggle-id">
          <span></span>
          <span class="container checked">
            <span class="circle">
              <z-icon height="12" name="checkmark" width="12"></z-icon>
            </span>
          </span>
        </label>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position left active disabled", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" label-position="left" disabled checked></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" label-position="left" disabled="" checked="">
        <input disabled="" checked="" id="toggle-id" type="checkbox">
        <label class="disabled left" htmlfor="toggle-id">
          <span></span>
          <span class="container disabled checked">
            <span class="circle">
              <z-icon height="12" name="checkmark" width="12"></z-icon>
            </span>
          </span>
        </label>
      </z-toggle-switch>
    `);
  });

  it("Test render ZToggleSwitch label position right active disabled", async () => {
    const page = await newSpecPage({
      components: [ZToggleSwitch],
      html: `<z-toggle-switch htmlid="toggle-id" label-position="right" disabled checked></z-toggle-switch>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toggle-switch htmlid="toggle-id" disabled="" label-position="right" checked="">
        <input disabled="" checked="" id="toggle-id" type="checkbox">
        <label class="disabled right" htmlfor="toggle-id">
          <span></span>
          <span class="container checked disabled">
            <span class="circle">
              <z-icon height="12" name="checkmark" width="12"></z-icon>
            </span>
          </span>
        </label>
      </z-toggle-switch>
    `);
  });
});
