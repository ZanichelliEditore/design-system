import {newSpecPage} from "@stencil/core/testing";
import {ZInput} from "./index";

describe("Suite test ZInput - checkbox", () => {
  it("Test render ZInput vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox" size="big">
        <div class="checkbox-wrapper">
          <input id="checkid" type="checkbox" />
          <label htmlFor="checkid" class="checkbox-label after">
            <z-icon name="checkbox" class="big"></z-icon>
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
      <z-input htmlid="checkid" type="checkbox" name="name" label="checkbox label" value="value" size="big">
        <div class="checkbox-wrapper">
          <input id="checkid" type="checkbox" name="name" value="value" />
          <label htmlFor="checkid" class="checkbox-label after">
            <z-icon name="checkbox" class="big"></z-icon>
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
      <z-input htmlid="checkid" type="checkbox" checked size="big">
        <div class="checkbox-wrapper">
          <input id="checkid" type="checkbox" checked />
          <label htmlFor="checkid" class="checkbox-label after">
            <z-icon name="checkbox-checked" class="big"></z-icon>
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
      <z-input htmlid="checkid" type="checkbox" label-position="left" size="big">
        <div class="checkbox-wrapper">
          <input id="checkid" type="checkbox" />
          <label htmlFor="checkid" class="checkbox-label before">
            <z-icon name="checkbox" class="big"></z-icon>
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
      <z-input htmlid="checkid" type="checkbox" disabled size="big">
        <div class="checkbox-wrapper">
          <input id="checkid" type="checkbox" disabled />
          <label htmlFor="checkid" class="checkbox-label after">
            <z-icon name="checkbox" class="big"></z-icon>
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
        <z-input htmlid="checkid" type="checkbox" readonly size="big">
          <div class="checkbox-wrapper">
            <input id="checkid" type="checkbox" readonly />
            <label htmlFor="checkid" class="checkbox-label after">
              <z-icon class="big" name="checkbox"></z-icon>
            </label>
          </div>
        </z-input>
      `);
  });

  it("Test render ZInput required with aria-required", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="checkid" type="checkbox" required label="Required checkbox"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="checkid" type="checkbox" required label="Required checkbox" size="big">
        <div class="checkbox-wrapper">
          <input id="checkid" type="checkbox" required aria-required="true" />
          <label htmlFor="checkid" class="checkbox-label after">
            <z-icon name="checkbox" class="big"></z-icon>
            <span>Required checkbox</span>
          </label>
        </div>
      </z-input>
    `);
  });
});
