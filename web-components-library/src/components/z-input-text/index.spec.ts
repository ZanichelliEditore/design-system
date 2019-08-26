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
            <label></label>
            <input />
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
            <input type='text' id='test' name='test' placeholder='placeholder' value='value' />
            <z-icon name="answer-wrong-icon"></z-icon>
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
