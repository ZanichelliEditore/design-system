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
            <label htmlfor="test">label</label>
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
            <label htmlfor="test" class="disabledLabel">label</label>
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
      html: `<z-input type='textarea' htmlid='test' placeholder='placeholder' value='value' label='label' status='error' message='error message'></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input type='textarea' htmlid='test' placeholder='placeholder' value='value' label='label' status='error' message='error message'>
        <mock:shadow-root>
          <div class="textWrapper">
            <label htmlfor="test">label</label>
            <div>
              <div class="textareaWrapper false filled input_error">
                <textarea class="false filled input_error" id='test' placeholder='placeholder' value='value'></textarea>
              </div>
            </div>
            <span class="statusMsg msg_error">
              <z-icon name="circle-cross" width="14" height="14"></z-icon>
              <span>error message</span>
            </span>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });
});
