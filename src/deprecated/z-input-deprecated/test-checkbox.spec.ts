import { newSpecPage } from "@stencil/core/testing";

import { ZInputDeprecated } from "./index";

describe("Suite test ZInputDeprecated - checkbox", () => {
  it("Test render ZInputDeprecated vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" type="checkbox"></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated htmlid="checkid" type="checkbox">

          <div class="checkboxWrapper">
            <input id="checkid" type="checkbox" />
            <label htmlFor="checkid" class="checkboxLabel after">
              <z-icon name="checkbox" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated with attributes", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" type="checkbox" name="name" label="checkbox label" value="value"></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated htmlid="checkid" type="checkbox" name="name" label="checkbox label" value="value">

          <div class="checkboxWrapper">
            <input id="checkid" type="checkbox" name="name" value="value" />
            <label htmlFor="checkid" class="checkboxLabel after">
              <z-icon name="checkbox" aria-hidden="true"></z-icon>
              <span>checkbox label</span>
            </label>
          </div>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated checked", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" type="checkbox" checked></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated htmlid="checkid" type="checkbox" checked>

          <div class="checkboxWrapper">
            <input id="checkid" type="checkbox" checked />
            <label htmlFor="checkid" class="checkboxLabel after">
              <z-icon name="checkbox-checked" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated label before", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" type="checkbox" labelafter="false"></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated htmlid="checkid" type="checkbox" labelafter="false">

          <div class="checkboxWrapper">
            <input id="checkid" type="checkbox" />
            <label htmlFor="checkid" class="checkboxLabel before">
              <z-icon name="checkbox" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated disabled", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" type="checkbox" disabled></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated htmlid="checkid" type="checkbox" disabled>

          <div class="checkboxWrapper">
            <input id="checkid" type="checkbox" disabled />
            <label htmlFor="checkid" class="checkboxLabel after">
              <z-icon name="checkbox" aria-hidden="true"></z-icon>
            </label>
          </div>

      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated readonly", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated htmlid="checkid" type="checkbox" readonly></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
        <z-input-deprecated htmlid="checkid" type="checkbox" readonly>

            <div class="checkboxWrapper">
              <input id="checkid" type="checkbox" readonly />
              <label htmlFor="checkid" class="checkboxLabel after">
                <z-icon name="checkbox" aria-hidden="true"></z-icon>
              </label>
            </div>

        </z-input-deprecated>
      `);
  });
});
