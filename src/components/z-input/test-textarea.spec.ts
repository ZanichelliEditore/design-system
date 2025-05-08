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
        <label class="body-5-sb z-label" htmlfor="test" id="test_label">label</label>
        <div class="textarea-wrapper">
          <textarea id="test" placeholder="placeholder" value="value" class="z-scrollbar"></textarea>
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
        <label class="body-5-sb z-label" htmlfor="test" id="test_label">label</label>
        <div class="textarea-wrapper readonly">
          <textarea disabled readonly id="test" placeholder="placeholder" value="value" class="z-scrollbar"></textarea>
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
        <label class="body-5-sb z-label" htmlfor="test" id="test_label">label</label>
        <div class="textarea-wrapper input-error">
          <textarea class="input-error z-scrollbar" id="test" placeholder="placeholder" value="value"></textarea>
        </div>
        <z-input-message class="big" message="error message" status="error"></z-input-message>
      </z-input>
    `);
  });
});
