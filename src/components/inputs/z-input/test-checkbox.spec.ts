import {newSpecPage} from "@stencil/core/testing";

import {ZInput} from "./index";

describe("Suite test ZInput - checkbox", () => {
  it("Test render ZInput vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox">

          <div class="checkbox-wrapper">
            <input id="checkid" type="checkbox" />
            <label htmlFor="checkid" class="checkbox-label after">
              <z-icon name="checkbox" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input>
    `);
  });

  it("Test render ZInput with attributes", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox" name="name" label="checkbox label" value="value"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox" name="name" label="checkbox label" value="value">

          <div class="checkbox-wrapper">
            <input id="checkid" type="checkbox" name="name" value="value" />
            <label htmlFor="checkid" class="checkbox-label after">
              <z-icon name="checkbox" aria-hidden="true"></z-icon>
              <span>checkbox label</span>
            </label>
          </div>

      </z-input>
    `);
  });

  it("Test render ZInput checked", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox" checked></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox" checked>

          <div class="checkbox-wrapper">
            <input id="checkid" type="checkbox" checked />
            <label htmlFor="checkid" class="checkbox-label after">
              <z-icon name="checkbox-checked" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input>
    `);
  });

  it("Test render ZInput label before", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox" label-position="left"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox" label-position="left">

          <div class="checkbox-wrapper">
            <input id="checkid" type="checkbox" />
            <label htmlFor="checkid" class="checkbox-label before">
              <z-icon name="checkbox" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input>
    `);
  });

  it("Test render ZInput disabled", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox" disabled></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox" disabled>

          <div class="checkbox-wrapper">
            <input id="checkid" type="checkbox" disabled />
            <label htmlFor="checkid" class="checkbox-label after">
              <z-icon name="checkbox" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input>
    `);
  });

  it("Test render ZInput readonly", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox" readonly></z-input>`,
    });
    expect(page.root).toEqualHtml(`
        <z-input htmlid="checkid" type="checkbox" readonly>

            <div class="checkbox-wrapper">
              <input id="checkid" type="checkbox" readonly />
              <label htmlFor="checkid" class="checkbox-label after">
                <z-icon name="checkbox" aria-hidden="true"></z-icon>
              </label>
            </div>

        </z-input>
      `);
  });
});