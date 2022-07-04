import { newSpecPage } from "@stencil/core/testing";

import { ZInputDeprecated } from "./index";

describe("Suite test ZInputDeprecated - radio", () => {
  it("Test render ZInputDeprecated vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="radioid" type="radio"></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated htmlid="radioid" type="radio">

          <div class="radioWrapper">
            <input id="radioid" type="radio" />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated with attributes", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="radioid" type="radio" name="name" value="value" label="radio label"></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated htmlid="radioid" type="radio" name="name" value="value" label="radio label">

          <div class="radioWrapper">
            <input id="radioid" type="radio" name="name" value="value" />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button" aria-hidden="true"></z-icon>
              <span>radio label</span>
            </label>
          </div>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated checked", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="radioid" type="radio" checked></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated htmlid="radioid" type="radio" checked>

          <div class="radioWrapper">
            <input id="radioid" type="radio" checked />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button-checked" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated label before", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="radioid" type="radio" labelafter="false"></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated htmlid="radioid" type="radio" labelafter="false">

          <div class="radioWrapper">
            <input id="radioid" type="radio" />
            <label htmlFor="radioid" class="radioLabel before">
              <z-icon name="radio-button" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated disabled", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="radioid" type="radio" disabled></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated htmlid="radioid" type="radio" disabled>

          <div class="radioWrapper">
            <input id="radioid" type="radio" disabled />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated readonly", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="radioid" type="radio" readonly></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
        <z-input-deprecated htmlid="radioid" type="radio" readonly>

            <div class="radioWrapper">
              <input id="radioid" type="radio" readonly />
              <label htmlFor="radioid" class="radioLabel after">
                <z-icon name="radio-button" aria-hidden="true"></z-icon>
              </label>
            </div>

        </z-input-deprecated>
      `);
  });
});
