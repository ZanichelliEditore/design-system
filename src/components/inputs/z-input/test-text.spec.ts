import { newSpecPage } from "@stencil/core/testing";

import { ZIcon } from "../../icons/z-icon";

import { ZInput } from "./index";

describe("Suite test ZInput - text", () => {
  jest.useFakeTimers();
  it("Test render ZInput vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" htmlid="id"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" htmlid="id">
          <div class="textWrapper">
            <div>
              <input id="id" class="input_default hasClearIcon" type="text" />
              <span class="iconsWrapper"></span>
            </div>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput con attributi", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label'></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label'>
          <div class="textWrapper">
            <label class="body-5-sb inputLabel" aria-label="label" htmlfor="test" id="test_label">label</label>
            <div>
              <input aria-label="label" class="input_default filled hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' />
              <span class="iconsWrapper">
                <button type="button" class="iconButton resetIcon" aria-label="cancella il contenuto dell'input">
                  <z-icon name="multiply"></z-icon>
                </button>
              </span>
            </div>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput con attributi disabled", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' disabled></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' disabled>
          <div class="textWrapper">
            <label class="body-5-sb inputLabel" aria-label="label" htmlfor="test" id="test_label">label</label>
            <div>
              <input disabled class="filled input_default hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
              <span class="iconsWrapper"></span>
            </div>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput con attributi readonly", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' readonly></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" type='text' htmlid='test' placeholder='placeholder' value='value' label='label' readonly>
          <div class="textWrapper">
            <label class="body-5-sb inputLabel" aria-label="label" htmlfor="test" id="test_label">label</label>
            <div>
              <input readonly class="filled input_default hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
              <span class="iconsWrapper"></span>
            </div>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput con helper message", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input type='text' htmlid='test' placeholder='placeholder' value='value' label='label' message='helper message'></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input type='text' htmlid='test' placeholder='placeholder' value='value' label='label' message='helper message'>
          <div class="textWrapper">
            <label class="body-5-sb inputLabel" aria-label="label" htmlfor="test" id="test_label">label</label>
            <div>
              <input class="filled input_default hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
              <span class="iconsWrapper">
                <button type="button" class="iconButton resetIcon" aria-label="cancella il contenuto dell'input">
                  <z-icon name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message message="helper message"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput con status e message", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input type='text' htmlid='test' placeholder='placeholder' value='value' label='label' status='success' message='success message'></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input type='text' htmlid='test' placeholder='placeholder' value='value' label='label' status='success' message='success message'>
          <div class="textWrapper">
            <label class="body-5-sb inputLabel" aria-label="label" htmlfor="test" id="test_label">label</label>
            <div>
              <input class="filled input_success hasClearIcon" type='text' id='test' placeholder='placeholder' value='value' aria-label="label" />
              <span class="iconsWrapper">
                <button type="button" class="iconButton resetIcon" aria-label="cancella il contenuto dell'input">
                  <z-icon name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message message="success message" status="success"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test ZInput clear", async () => {
    const page = await newSpecPage({
      components: [ZInput, ZIcon],
      html: `<z-input type='text' htmlid='test' placeholder='placeholder' value='value' label='label'></z-input>`,
    });
    const icon = page.body.querySelector("div").querySelector("z-icon");
    expect(page.rootInstance.value).toEqual("value");
    icon.click();
    await page.waitForChanges();
    expect(page.rootInstance.value).toEqual("");
  });

  it("Test render ZInput vuoto - password nascosta", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" htmlid="id" type="password"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" htmlid="id" type="password">
          <div class="textWrapper">
            <div>
              <input id="id" class="input_default hasClearIcon hasIcon" type="password" />
              <span class="iconsWrapper">
                <button type="button" class="iconButton showHidePasswordIcon" aria-label="mostra password">
                  <z-icon name="view-filled"></z-icon>
                </button>
              </span>
            </div>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput vuoto - password visibile", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" htmlid="id" type="password"></z-input>`,
    });
    page.rootInstance.passwordHidden = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-input message="false" htmlid="id" type="password">
          <div class="textWrapper">
            <div>
              <input id="id" class="input_default hasClearIcon hasIcon" type="text" />
              <span class="iconsWrapper">
                <button type="button" class="iconButton showHidePasswordIcon" aria-label="nascondi password">
                  <z-icon name="view-off-filled"></z-icon>
                </button>
              </span>
            </div>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput - with clear icon", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="id" hasclearicon="true" value="value"></z-input>`,
    });
    page.rootInstance.passwordHidden = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-input htmlid="id" hasclearicon="true" value="value">
          <div class="textWrapper">
            <div>
              <input id="id" class="input_default filled hasClearIcon" type="text" value="value" />
              <span class="iconsWrapper">
                <button type="button" class="iconButton resetIcon" aria-label="cancella il contenuto dell'input">
                  <z-icon name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput - without clear icon", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="id" hasclearicon="false" value="value"></z-input>`,
    });
    page.rootInstance.passwordHidden = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-input htmlid="id" hasclearicon="false" value="value">
          <div class="textWrapper">
            <div>
              <input id="id" class="input_default filled" type="text" value="value" />
              <span class="iconsWrapper"></span>
            </div>
            <z-input-message></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput - with icon", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input htmlid="id" icon="pdf"></z-input>`,
    });
    page.rootInstance.passwordHidden = false;
    await page.waitForChanges();
    expect(page.root).toEqualHtml(`
      <z-input htmlid="id" icon="pdf">
          <div class="textWrapper">
            <div>
              <input id="id" class="input_default hasIcon hasClearIcon" type="text" />
              <span class="iconsWrapper">
                <button type="button" class="iconButton inputIcon" tabindex="-1">
                  <z-icon name="pdf"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput type=number", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type='number' min='1' max='10' step='2' htmlid='test'></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="test" max="10" message="false" min="1" step="2" type="number">
        <div class="textWrapper">
          <div>
            <input class="input_default" id="test" max="10" min="1" step="2" type="number">
            <span class="iconsWrapper"></span>
          </div>
        </div>
      </z-input>
    `);
  });
});
