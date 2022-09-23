import {newSpecPage} from "@stencil/core/testing";

import {ZInputDeprecated} from "./index";

describe("Suite test ZInputDeprecated - textarea", () => {
  it("Test render ZInputDeprecated textarea", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated hasmessage="false" type="textarea" htmlid="test" placeholder="placeholder" value="value" label="label"></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated hasmessage="false" type="textarea" htmlid="test" placeholder="placeholder" value="value" label="label">
        <div class="textWrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label"></z-input-label>
          <div class="textareaWrapper filled">
            <textarea aria-label="label" class="filled" id="test" placeholder="placeholder" value="value"></textarea>
          </div>
        </div>
      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated textarea disabled/readonly", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated hasmessage="false" type="textarea" htmlid="test" placeholder="placeholder" value="value" label="label" disabled readonly></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated hasmessage="false" type="textarea" htmlid="test" placeholder="placeholder" value="value" label="label" disabled readonly>
        <div class="textWrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label" disabled></z-input-label>
          <div class="textareaWrapper filled disabled readonly">
            <textarea aria-label="label" disabled readonly class="filled" id="test" placeholder="placeholder" value="value"></textarea>
          </div>
        </div>
      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated textarea status/messages", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated type="textarea" htmlid="test" placeholder="placeholder" label="label" status="error" message="error message" value="value"></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated type="textarea" htmlid="test" placeholder="placeholder" label="label" status="error" message="error message" value="value">
        <div class="textWrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label"></z-input-label>
          <div class="textareaWrapper filled input_error">
            <textarea aria-label="label" class="filled input_error" id="test" placeholder="placeholder" value="value"></textarea>
          </div>
          <z-input-message message="error message" status="error"></z-input-message>
        </div>
      </z-input-deprecated>
    `);
  });
});
