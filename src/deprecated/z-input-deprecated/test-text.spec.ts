import {newSpecPage} from "@stencil/core/testing";

import {ZIcon} from "../../components/icons/z-icon";

import {ZInputDeprecated} from "./index";

describe("Suite test ZInputDeprecated - text", () => {
  jest.useFakeTimers();
  it("Test render ZInputDeprecated vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated hasmessage="false" htmlid="id"></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated hasmessage="false" htmlid="id">
        <div class="textWrapper">
          <div>
            <input id="id" class="hasClearIcon" type="text" />
            <span class="iconsWrapper"></span>
          </div>
        </div>
      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated con attributi", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label'></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label'>
        <div class="textWrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label"></z-input-label>
          <div>
            <input aria-label="label" class="filled hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' />
            <span class="iconsWrapper">
              <z-icon name="multiply" class="resetIcon"></z-icon>
            </span>
          </div>
        </div>
      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated con attributi disabled", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' disabled></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' disabled>
        <div class="textWrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label" disabled=""></z-input-label>
          <div>
            <input disabled class="filled hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
            <span class="iconsWrapper disabled"></span>
          </div>
        </div>
      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated con attributi readonly", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' readonly></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated hasmessage="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' readonly>
        <div class="textWrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label"></z-input-label>
          <div>
            <input readonly class="filled hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
            <span class="iconsWrapper"></span>
          </div>
        </div>
      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated con helper message", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated type='text' htmlid='test' placeholder='placeholder' value='value' label='label' message='helper message'></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated type='text' htmlid='test' placeholder='placeholder' value='value' label='label' message='helper message'>
        <div class="textWrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label"></z-input-label>
          <div>
            <input class="filled hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
            <span class="iconsWrapper">
              <z-icon name="multiply" class="resetIcon"></z-icon>
            </span>
          </div>
          <z-input-message message="helper message"></z-input-message>
        </div>
      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated con status e message", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated type='text' htmlid='test' placeholder='placeholder' value='value' label='label' status='success' message='success message'></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated type='text' htmlid='test' placeholder='placeholder' value='value' label='label' status='success' message='success message'>
        <div class="textWrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label"></z-input-label>
          <div>
            <input class="filled input_success hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
            <span class="iconsWrapper">
              <z-icon name="multiply" class="resetIcon"></z-icon>
            </span>
          </div>
          <z-input-message message="success message" status="success"></z-input-message>
        </div>
      </z-input-deprecated>
    `);
  });

  it("Test ZInputDeprecated clear", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated, ZIcon],
      html: `<z-input-deprecated type='text' htmlid='test' placeholder='placeholder' value='value' label='label'></z-input-deprecated>`,
    });
    const icon = page.body.querySelector("div").querySelector("z-icon");
    expect(page.rootInstance.value).toEqual("value");
    icon.click();
    await page.waitForChanges();
    expect(page.rootInstance.value).toEqual("");
  });

  it("Test render ZInputDeprecated vuoto - password nascosta", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated hasmessage="false" htmlid="id" type="password"></z-input-deprecated>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input-deprecated hasmessage="false" htmlid="id" type="password">
        <div class="textWrapper">
          <div>
            <input id="id" class="hasClearIcon hasIcon" type="password" />
            <span class="iconsWrapper">
              <z-icon name="view-filled" class="showHidePasswordIcon"></z-icon>
            </span>
          </div>
        </div>
      </z-input-deprecated>
    `);
  });

  it("Test render ZInputDeprecated vuoto - password visibile", async () => {
    const page = await newSpecPage({
      components: [ZInputDeprecated],
      html: `<z-input-deprecated hasmessage="false" htmlid="id" type="password"></z-input-deprecated>`,
    });
    page.rootInstance.passwordHidden = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-input-deprecated hasmessage="false" htmlid="id" type="password">
        <div class="textWrapper">
          <div>
            <input id="id" class="hasClearIcon hasIcon" type="text" />
            <span class="iconsWrapper">
              <z-icon name="view-off-filled" class="showHidePasswordIcon"></z-icon>
            </span>
          </div>
        </div>
      </z-input-deprecated>
    `);
  });
});
