import {newSpecPage} from "@stencil/core/testing";

import {ZInput} from "./index";

describe("Suite test ZInput - textarea", () => {
  it("Test render ZInput textarea", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type="textarea" htmlid="test" placeholder="placeholder" value="value" label="label"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" type="textarea" htmlid="test" placeholder="placeholder" value="value" label="label" size="big">
        <div class="text-wrapper">
          <label class="body-5-sb input-label" htmlfor="test" id="test_label">label</label>
          <div class="textarea-wrapper filled">
            <textarea class="filled" id="test" placeholder="placeholder" value="value"></textarea>
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
      <z-input message="false" type="textarea" htmlid="test" placeholder="placeholder" value="value" label="label" disabled readonly size="big">
        <div class="text-wrapper">
          <label class="body-5-sb input-label" htmlfor="test" id="test_label">label</label>
          <div class="textarea-wrapper filled readonly">
            <textarea disabled readonly class="filled" id="test" placeholder="placeholder" value="value"></textarea>
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
      <z-input type="textarea" htmlid="test" placeholder="placeholder" label="label" size="big" status="error" message="error message" value="value">
        <div class="text-wrapper">
          <label class="body-5-sb input-label" htmlfor="test" id="test_label">label</label>
          <div class="textarea-wrapper filled input-error">
            <textarea class="filled input-error" id="test" placeholder="placeholder" value="value"></textarea>
          </div>
          <z-input-message class="big" message="error message" status="error"></z-input-message>
        </div>
      </z-input>
    `);
  });
});
