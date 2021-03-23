import { newSpecPage } from "@stencil/core/testing";

import { ZInput } from "./index";

describe("Suite test ZInput - textarea", () => {
  it("Test render ZInput textarea", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" type='textarea' htmlid='test' placeholder='placeholder' value='value' label='label'></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input hasmessage="false" type='textarea' htmlid='test' placeholder='placeholder' value='value' label='label'>
        <mock:shadow-root>
          <div class="textWrapper">
            <z-input-label aria-label="label" id="test_label" value="label"></z-input-label>
            <div>
              <div class="textareaWrapper false filled input_default">
                <textarea class="false filled input_default" id='test' placeholder='placeholder' value='value'></textarea>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput textarea disabled/readonly", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" type='textarea' htmlid='test' placeholder='placeholder' value='value' label='label' disabled readonly></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input hasmessage="false" type='textarea' htmlid='test' placeholder='placeholder' value='value' label='label' disabled readonly>
        <mock:shadow-root>
          <div class="textWrapper">
            <z-input-label aria-label="label" id="test_label" value="label" disabled=""></z-input-label>
            <div>
              <div class="textareaWrapper false filled input_default disabled readonly">
                <textarea disabled readonly class="false filled input_default" id='test' placeholder='placeholder' value='value'></textarea>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput textarea status/messages", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input type='textarea' htmlid='test' placeholder='placeholder' label='label' status='error' message='error message' value='value'></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input type='textarea' htmlid='test' placeholder='placeholder' label='label' status='error' message='error message' value='value'>
        <mock:shadow-root>
          <div class="textWrapper">
            <z-input-label aria-label="label" id="test_label" value="label"></z-input-label>
            <div>
              <div class="textareaWrapper false filled input_error">
                <textarea class="false filled input_error" id='test' placeholder='placeholder' value='value'></textarea>
              </div>
            </div>
            <z-input-message message="error message" status="error"></z-input-message>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });
});
