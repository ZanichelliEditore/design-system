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
        <div class="text-wrapper">
          <div>
            <input id="id" class="has-clear-icon" type="text" />
            <span class="icons-wrapper"></span>
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
        <div class="text-wrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label"></z-input-label>
          <div>
            <input aria-label="label" class="filled has-clear-icon" type='text' id='test' placeholder='placeholder' value='value' />
            <span class="icons-wrapper">
              <z-icon name="multiply" class="reset-icon"></z-icon>
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
        <div class="text-wrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label" disabled=""></z-input-label>
          <div>
            <input disabled class="filled has-clear-icon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
            <span class="icons-wrapper disabled"></span>
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
        <div class="text-wrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label"></z-input-label>
          <div>
            <input readonly class="filled has-clear-icon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
            <span class="icons-wrapper"></span>
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
        <div class="text-wrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label"></z-input-label>
          <div>
            <input class="filled has-clear-icon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
            <span class="icons-wrapper">
              <z-icon name="multiply" class="reset-icon"></z-icon>
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
        <div class="text-wrapper">
          <z-input-label aria-label="label" htmlfor="test" id="test_label" value="label"></z-input-label>
          <div>
            <input class="filled input-success has-clear-icon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
            <span class="icons-wrapper">
              <z-icon name="multiply" class="reset-icon"></z-icon>
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
        <div class="text-wrapper">
          <div>
            <input id="id" class="has-clear-icon has-icon" type="password" />
            <span class="icons-wrapper">
              <z-icon name="view-filled" class="toggle-password-icon"></z-icon>
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
        <div class="text-wrapper">
          <div>
            <input id="id" class="has-clear-icon has-icon" type="text" />
            <span class="icons-wrapper">
              <z-icon name="view-off-filled" class="toggle-password-icon"></z-icon>
            </span>
          </div>
        </div>
      </z-input-deprecated>
    `);
  });
});
