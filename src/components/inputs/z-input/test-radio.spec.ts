import {newSpecPage} from "@stencil/core/testing";

import {ZInput} from "./index";

describe("Suite test ZInput - radio", () => {
  it("Test render ZInput vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="radioid" type="radio">

          <div class="radioWrapper">
            <input id="radioid" type="radio" />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input>
    `);
  });

  it("Test render ZInput with attributes", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio" name="name" value="value" label="radio label"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="radioid" type="radio" name="name" value="value" label="radio label">

          <div class="radioWrapper">
            <input id="radioid" type="radio" name="name" value="value" />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button" aria-hidden="true"></z-icon>
              <span>radio label</span>
            </label>
          </div>

      </z-input>
    `);
  });

  it("Test render ZInput checked", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio" checked></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="radioid" type="radio" checked>

          <div class="radioWrapper">
            <input id="radioid" type="radio" checked />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button-checked" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input>
    `);
  });

  it("Test render ZInput label before", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio" label-position="left"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="radioid" type="radio" label-position="left">

          <div class="radioWrapper">
            <input id="radioid" type="radio" />
            <label htmlFor="radioid" class="radioLabel before">
              <z-icon name="radio-button" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input>
    `);
  });

  it("Test render ZInput disabled", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio" disabled></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="radioid" type="radio" disabled>

          <div class="radioWrapper">
            <input id="radioid" type="radio" disabled />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input>
    `);
  });

  it("Test render ZInput readonly", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio" readonly></z-input>`,
    });
    expect(page.root).toEqualHtml(`
        <z-input htmlid="radioid" type="radio" readonly>

            <div class="radioWrapper">
              <input id="radioid" type="radio" readonly />
              <label htmlFor="radioid" class="radioLabel after">
                <z-icon name="radio-button" aria-hidden="true"></z-icon>
              </label>
            </div>

        </z-input>
      `);
  });
});
