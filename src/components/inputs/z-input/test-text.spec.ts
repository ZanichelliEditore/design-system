import { newSpecPage } from "@stencil/core/testing";

import { ZIcon } from "../../icons/z-icon";

import { ZInput } from "./index";

describe("Suite test ZInput - text", () => {
  it("Test render ZInput vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" htmlid="id"></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input hasmessage="false" htmlid="id">
        <mock:shadow-root>
          <div class="textWrapper">
            <div>
              <input id="id" class="false input_default undefined hasClearIcon" type="text" aria-labelledby="id_label" />
              <span class="iconsWrapper"></span>
            </div>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput con attributi", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label'></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label'>
        <mock:shadow-root>
          <div class="textWrapper">
            <z-input-label aria-label="label" id="test_label" value="label"></z-input-label>
            <div>
              <input class="false input_default filled hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-labelledby="test_label" />
              <span class="iconsWrapper">
                <z-icon name="multiply" class="resetIcon"></z-icon>
              </span>
            </div>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput con attributi disabled", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' disabled></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' disabled>
        <mock:shadow-root>
          <div class="textWrapper">
            <z-input-label aria-label="label" id="test_label" value="label" disabled=""></z-input-label>
            <div>
              <input disabled class="false filled input_default hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-labelledby="test_label" />
              <span class="iconsWrapper disabled"></span>
            </div>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput con attributi readonly", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' readonly></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' readonly>
        <mock:shadow-root>
          <div class="textWrapper">
            <z-input-label aria-label="label" id="test_label" value="label"></z-input-label>
            <div>
              <input readonly class="false filled input_default hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-labelledby="test_label" />
              <span class="iconsWrapper"></span>
            </div>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput con helper message", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input type='text' htmlid='test' placeholder='placeholder' value='value' label='label' message='helper message'></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input type='text' htmlid='test' placeholder='placeholder' value='value' label='label' message='helper message'>
        <mock:shadow-root>
          <div class="textWrapper">
            <z-input-label aria-label="label" id="test_label" value="label"></z-input-label>
            <div>
              <input class="false filled input_default hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-labelledby="test_label" />
              <span class="iconsWrapper">
                <z-icon name="multiply" class="resetIcon"></z-icon>
              </span>
            </div>
            <z-input-message message="helper message"></z-input-message>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput con status e message", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input type='text' htmlid='test' placeholder='placeholder' value='value' label='label' status='success' message='success message'></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input type='text' htmlid='test' placeholder='placeholder' value='value' label='label' status='success' message='success message'>
        <mock:shadow-root>
          <div class="textWrapper">
            <z-input-label aria-label="label" id="test_label" value="label"></z-input-label>
            <div>
              <input class="false filled input_success hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-labelledby="test_label" />
              <span class="iconsWrapper">
                <z-icon name="multiply" class="resetIcon"></z-icon>
              </span>
            </div>
            <z-input-message message="success message" status="success"></z-input-message>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test ZInput clear", async () => {
    const page = await newSpecPage({
      components: [ZInput, ZIcon],
      html: `<z-input type='text' htmlid='test' placeholder='placeholder' value='value' label='label'></z-input>`
    });
    const icon = page.root.shadowRoot
      .querySelector("div")
      .querySelector("z-icon");
    expect(page.rootInstance.value).toEqual("value");
    icon.click();
    await page.waitForChanges();
    expect(page.rootInstance.value).toEqual("");
  });

  it("Test render ZInput vuoto - password nascosta", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" htmlid="id" type="password"></z-input>`
    });
    expect(page.root).toEqualHtml(`
      <z-input hasmessage="false" htmlid="id" type="password">
        <mock:shadow-root>
          <div class="textWrapper">
            <div>
              <input id="id" class="false input_default undefined hasClearIcon hasIcon" type="password" aria-labelledby="id_label" />
              <span class="iconsWrapper">
                <z-icon name="view-filled" class="inputIcon"></z-icon>
              </span>
            </div>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });

  it("Test render ZInput vuoto - password visibile", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input hasmessage="false" htmlid="id" type="password"></z-input>`
    });
    page.rootInstance.passwordHidden = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-input hasmessage="false" htmlid="id" type="password">
        <mock:shadow-root>
          <div class="textWrapper">
            <div>
              <input id="id" class="false input_default undefined hasClearIcon hasIcon" type="text" aria-labelledby="id_label" />
              <span class="iconsWrapper">
                <z-icon name="view-off-filled" class="inputIcon"></z-icon>
              </span>
            </div>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });
});
