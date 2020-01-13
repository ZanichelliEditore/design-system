import { newSpecPage } from "@stencil/core/testing";

import { ZIcon } from "../z-icon";

import { ZInputText } from "./index";

describe("Suite test ZInputText", () => {
  it("Test render ZInputText vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInputText],
      html: `<z-input-text></z-input-text>`
    });
    expect(page.root).toEqualHtml(`
      <z-input-text>
        <mock:shadow-root>
          <div>
            <div>
              <input class="false input_default undefined" />
            </div>
          </div>
        </mock:shadow-root>
      </z-input-text>
    `);
  });

  it("Test render ZInputText con attributi", async () => {
    const page = await newSpecPage({
      components: [ZInputText],
      html: `<z-input-text type='text' inputid='test' placeholder='placeholder' value='value' label='label'></z-input-text>`
    });
    expect(page.root).toEqualHtml(`
      <z-input-text type='text' inputid='test' placeholder='placeholder' value='value' label='label'>
        <mock:shadow-root>
          <div>
            <label>label</label>
            <div>
              <input class="false input_default filled" type='text' id='test' name='test' placeholder='placeholder' value='value' />
              <z-icon name="close"></z-icon>
            </div>
          </div>
        </mock:shadow-root>
      </z-input-text>
    `);
  });

  it("Test render ZInputText con attributi disabled", async () => {
    const page = await newSpecPage({
      components: [ZInputText],
      html: `<z-input-text type='text' inputid='test' placeholder='placeholder' value='value' label='label' isdisabled></z-input-text>`
    });
    expect(page.root).toEqualHtml(`
      <z-input-text type='text' inputid='test' placeholder='placeholder' value='value' label='label' isdisabled>
        <mock:shadow-root>
          <div>
            <label>label</label>
            <div>
              <input disabled class="false filled input_default" type='text' id='test' name='test' placeholder='placeholder' value='value' />
            </div>
          </div>
        </mock:shadow-root>
      </z-input-text>
    `);
  });

  it("Test render ZInputText con attributi readonly", async () => {
    const page = await newSpecPage({
      components: [ZInputText],
      html: `<z-input-text type='text' inputid='test' placeholder='placeholder' value='value' label='label' isreadonly></z-input-text>`
    });
    expect(page.root).toEqualHtml(`
      <z-input-text type='text' inputid='test' placeholder='placeholder' value='value' label='label' isreadonly>
        <mock:shadow-root>
          <div>
            <label>label</label>
            <div>
              <input readonly class="false filled input_default" type='text' id='test' name='test' placeholder='placeholder' value='value' />
            </div>
          </div>
        </mock:shadow-root>
      </z-input-text>
    `);
  });

  it("Test render ZInputText con helper message", async () => {
    const page = await newSpecPage({
      components: [ZInputText],
      html: `<z-input-text type='text' inputid='test' placeholder='placeholder' value='value' label='label' message='helper message'></z-input-text>`
    });
    expect(page.root).toEqualHtml(`
      <z-input-text type='text' inputid='test' placeholder='placeholder' value='value' label='label' message='helper message'>
        <mock:shadow-root>
          <div>
            <label>label</label>
            <div>
              <input class="false filled input_default" type='text' id='test' name='test' placeholder='placeholder' value='value' />
              <z-icon name="close"></z-icon>
            </div>
            <span class="statusMsg msg_undefined">
              <span>helper message</span>
            </span>
          </div>
        </mock:shadow-root>
      </z-input-text>
    `);
  });

  it("Test render ZInputText con status e message", async () => {
    const page = await newSpecPage({
      components: [ZInputText],
      html: `<z-input-text type='text' inputid='test' placeholder='placeholder' value='value' label='label' status='success' message='success message'></z-input-text>`
    });
    expect(page.root).toEqualHtml(`
      <z-input-text type='text' inputid='test' placeholder='placeholder' value='value' label='label' status='success' message='success message'>
        <mock:shadow-root>
          <div>
            <label>label</label>
            <div>
              <input class="false filled input_success" type='text' id='test' name='test' placeholder='placeholder' value='value' />
              <z-icon name="close"></z-icon>
            </div>
            <span class="statusMsg msg_success">
              <z-icon name="circle-check" width="14" height="14"></z-icon>
              <span>success message</span>
            </span>
          </div>
        </mock:shadow-root>
      </z-input-text>
    `);
  });

  it("Test render ZInputText textarea", async () => {
    const page = await newSpecPage({
      components: [ZInputText],
      html: `<z-input-text type='textarea' inputid='test' placeholder='placeholder' value='value' label='label'></z-input-text>`
    });
    expect(page.root).toEqualHtml(`
      <z-input-text type='textarea' inputid='test' placeholder='placeholder' value='value' label='label'>
        <mock:shadow-root>
          <div>
            <label>label</label>
            <div>
              <div class="textareaWrapper false filled input_default">
                <textarea class="false filled input_default" id='test' name='test' placeholder='placeholder' value='value'></textarea>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-input-text>
    `);
  });

  it("Test render ZInputText textarea disabled/readonly", async () => {
    const page = await newSpecPage({
      components: [ZInputText],
      html: `<z-input-text type='textarea' inputid='test' placeholder='placeholder' value='value' label='label' isdisabled isreadonly></z-input-text>`
    });
    expect(page.root).toEqualHtml(`
      <z-input-text type='textarea' inputid='test' placeholder='placeholder' value='value' label='label' isdisabled isreadonly>
        <mock:shadow-root>
          <div>
            <label>label</label>
            <div>
              <div class="textareaWrapper false filled input_default disabled readonly">
                <textarea disabled readonly class="false filled input_default" id='test' name='test' placeholder='placeholder' value='value'></textarea>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-input-text>
    `);
  });

  it("Test render ZInputText textarea status/messages", async () => {
    const page = await newSpecPage({
      components: [ZInputText],
      html: `<z-input-text type='textarea' inputid='test' placeholder='placeholder' value='value' label='label' status='error' message='error message'></z-input-text>`
    });
    expect(page.root).toEqualHtml(`
      <z-input-text type='textarea' inputid='test' placeholder='placeholder' value='value' label='label' status='error' message='error message'>
        <mock:shadow-root>
          <div>
            <label>label</label>
            <div>
              <div class="textareaWrapper false filled input_error">
                <textarea class="false filled input_error" id='test' name='test' placeholder='placeholder' value='value'></textarea>
              </div>
            </div>
            <span class="statusMsg msg_error">
              <z-icon name="circle-cross-stroke" width="14" height="14"></z-icon>
              <span>error message</span>
            </span>
          </div>
        </mock:shadow-root>
      </z-input-text>
    `);
  });

  it("Test ZInputText clear", async () => {
    const page = await newSpecPage({
      components: [ZInputText, ZIcon],
      html: `<z-input-text type='text' inputid='test' placeholder='placeholder' value='value' label='label'></z-input-text>`
    });
    const icon = page.root.shadowRoot
      .querySelector("div")
      .querySelector("z-icon");
    expect(page.rootInstance.value).toEqual("value");
    icon.click();
    await page.waitForChanges();
    expect(page.rootInstance.value).toEqual("");
  });
});
