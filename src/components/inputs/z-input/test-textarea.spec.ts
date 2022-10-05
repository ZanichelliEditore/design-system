import {newSpecPage} from "@stencil/core/testing";

import {ZInput} from "./index";

describe("Suite test ZInput - textarea", () => {
  it("Test render ZInput textarea", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type="textarea" htmlid="test" placeholder="placeholder" value="value" label="label"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" type="textarea" htmlid="test" placeholder="placeholder" value="value" label="label">
        <div class="text-wrapper">
          <label class="body-5-sb input-label" aria-label="label" htmlfor="test" id="test_label">label</label>
          <div class="textarea-wrapper filled">
            <textarea aria-label="label" class="filled" id="test" placeholder="placeholder" value="value"></textarea>
          </div>
        </div>
      </z-input>
    `);
  });

  it("Test render ZInput textarea disabled/readonly", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type="textarea" htmlid="test" placeholder="placeholder" value="value" label="label" disabled readonly></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" type="textarea" htmlid="test" placeholder="placeholder" value="value" label="label" disabled readonly>
        <div class="text-wrapper">
          <label class="body-5-sb input-label" aria-label="label" htmlfor="test" id="test_label">label</label>
          <div class="textarea-wrapper filled readonly">
            <textarea aria-label="label" disabled readonly class="filled" id="test" placeholder="placeholder" value="value"></textarea>
          </div>
        </div>
      </z-input>
    `);
  });

  it("Test render ZInput textarea status/messages", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input type="textarea" htmlid="test" placeholder="placeholder" label="label" status="error" message="error message" value="value"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input type="textarea" htmlid="test" placeholder="placeholder" label="label" status="error" message="error message" value="value">
        <div class="text-wrapper">
          <label class="body-5-sb input-label" aria-label="label" htmlfor="test" id="test_label">label</label>
          <div class="textarea-wrapper filled input-error">
            <textarea aria-label="label" class="filled input-error" id="test" placeholder="placeholder" value="value"></textarea>
          </div>
          <z-input-message message="error message" status="error"></z-input-message>
        </div>
      </z-input>
    `);
  });
});