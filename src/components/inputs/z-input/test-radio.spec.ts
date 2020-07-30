import { newSpecPage } from "@stencil/core/testing";

import { ZInput } from "./index";

describe("Suite test ZInput - radio", () => {
  it("Test render ZInput vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio"></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="radioid" type="radio">
        <mock:shadow-root>
          <div class="radioWrapper">
            <input id="radioid" type="radio" />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button" aria-hidden></z-icon>
            </label>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput with attributes", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio" name="name" value="value" label="radio label"></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="radioid" type="radio" name="name" value="value" label="radio label">
        <mock:shadow-root>
          <div class="radioWrapper">
            <input id="radioid" type="radio" name="name" value="value" />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button" aria-hidden></z-icon>
              <span>radio label</span>
            </label>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput checked", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio" checked></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="radioid" type="radio" checked>
        <mock:shadow-root>
          <div class="radioWrapper">
            <input id="radioid" type="radio" checked />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button-checked" aria-hidden></z-icon>
            </label>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput label before", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio" labelafter="false"></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="radioid" type="radio" labelafter="false">
        <mock:shadow-root>
          <div class="radioWrapper">
            <input id="radioid" type="radio" />
            <label htmlFor="radioid" class="radioLabel before">
              <z-icon name="radio-button" aria-hidden></z-icon>
            </label>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput disabled", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio" disabled></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="radioid" type="radio" disabled>
        <mock:shadow-root>
          <div class="radioWrapper">
            <input id="radioid" type="radio" disabled />
            <label htmlFor="radioid" class="radioLabel after">
              <z-icon name="radio-button" aria-hidden></z-icon>
            </label>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput readonly", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="radioid" type="radio" readonly></z-input>`
    });
    expect(page.root).toEqualHtml(`
        <z-input htmlid="radioid" type="radio" readonly>
          <mock:shadow-root>
            <div class="radioWrapper">
              <input id="radioid" type="radio" readonly />
              <label htmlFor="radioid" class="radioLabel after">
                <z-icon name="radio-button" aria-hidden></z-icon>
              </label>
            </div>
          </mock:shadow-root>
        </z-input>
      `);
  });
});
