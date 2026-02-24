import {newSpecPage} from "@stencil/core/testing";
import {ZIcon} from "../z-icon";
import {ZInput} from "./index";

describe("Suite test ZInput - text", () => {
  jest.useFakeTimers({
    legacyFakeTimers: true,
  });
  it("Test render ZInput vuoto", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" htmlid="id"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" htmlid="id" size="big">
          <div class="text-wrapper">
            <div>
              <input id="id" class="has-clear-icon" type="text" />
              <span class="icons-wrapper">
                <button aria-label="cancella il contenuto dell'input" class="hidden input-icon reset-icon" type="button">
                <z-icon class="big" name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="big" message="false"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput vuoto small", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" htmlid="id" size="small"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" htmlid="id" size="small">
          <div class="text-wrapper">
            <div>
              <input id="id" class="has-clear-icon" type="text" />
              <span class="icons-wrapper">
                <button aria-label="cancella il contenuto dell'input" class="hidden input-icon reset-icon" type="button">
                  <z-icon class="small" name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="small" message="false"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput vuoto x-small", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" htmlid="id" size="x-small"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" htmlid="id" size="x-small">
          <div class="text-wrapper">
            <div>
              <input id="id" class="has-clear-icon" type="text" />
              <span class="icons-wrapper">
                <button aria-label="cancella il contenuto dell'input" class="hidden input-icon reset-icon" type="button">
                  <z-icon class="x-small" name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="x-small" message="false"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput con attributi", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type="text" htmlid="test" placeholder="placeholder" value="value" label="label"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" type="text" htmlid="test" placeholder="placeholder" size="big" value="value" label="label">
          <div class="text-wrapper">
            <label class="body-5-sb z-label" htmlfor="test" id="test_label">label</label>
            <div>
              <input class="has-clear-icon" type="text" id="test" placeholder="placeholder" value="value" />
              <span class="icons-wrapper">
                <button type="button" class="input-icon reset-icon" aria-label="cancella il contenuto dell'input">
                  <z-icon class="big" name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="big" message="false"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput senza attributo label", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type="text" htmlid="test" placeholder="placeholder" value="value" aria-label="label"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" type="text" htmlid="test" placeholder="placeholder" size="big" value="value" aria-label="label">
          <div class="text-wrapper">
            <div>
              <input class="has-clear-icon" type="text" id="test" placeholder="placeholder" value="value" aria-label="label" />
              <span class="icons-wrapper">
                <button type="button" class="input-icon reset-icon" aria-label="cancella il contenuto dell'input">
                  <z-icon class="big" name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="big" message="false"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput con attributi disabled", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type="text" htmlid="test" placeholder="placeholder" value="value" label="label" disabled></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" type="text" htmlid="test" placeholder="placeholder" size="big" value="value" label="label" disabled>
          <div class="text-wrapper">
            <label class="body-5-sb z-label" htmlfor="test" id="test_label">label</label>
            <div>
              <input disabled class="has-clear-icon" type="text" id="test" placeholder="placeholder" value="value" />
              <span class="icons-wrapper">
                <button aria-label="cancella il contenuto dell'input" class="hidden input-icon reset-icon" type="button">
                  <z-icon class="big" name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="big" disabled="" message="false"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput con attributi readonly", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type="text" htmlid="test" placeholder="placeholder" value="value" label="label" readonly></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input message="false" type="text" htmlid="test" placeholder="placeholder" value="value" label="label" readonly size="big">
          <div class="text-wrapper">
            <label class="body-5-sb z-label" htmlfor="test" id="test_label">label</label>
            <div>
              <input readonly class="has-clear-icon" type="text" id="test" placeholder="placeholder" value="value" />
              <span class="icons-wrapper">
                <button aria-label="cancella il contenuto dell'input" class="hidden input-icon reset-icon" type="button">
                    <z-icon class="big" name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="big" message="false"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput con helper message", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input type="text" htmlid="test" placeholder="placeholder" value="value" label="label" message="helper message"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input type="text" htmlid="test" placeholder="placeholder" size="big" value="value" label="label" message="helper message">
          <div class="text-wrapper">
            <label class="body-5-sb z-label" htmlfor="test" id="test_label">label</label>
            <div>
              <input class="has-clear-icon" type="text" id="test" placeholder="placeholder" value="value" />
              <span class="icons-wrapper">
                <button type="button" class="input-icon reset-icon" aria-label="cancella il contenuto dell'input">
                  <z-icon class="big" name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="big" message="helper message"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput con status e message", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input type="text" htmlid="test" placeholder="placeholder" value="value" label="label" status="success" message="success message"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input type="text" htmlid="test" placeholder="placeholder" size="big" value="value" label="label" status="success" message="success message">
          <div class="text-wrapper">
            <label class="body-5-sb z-label" htmlfor="test" id="test_label">label</label>
            <div>
              <input class="input-success has-clear-icon" type="text" id="test" placeholder="placeholder" value="value" />
              <span class="icons-wrapper">
                <button type="button" class="input-icon reset-icon" aria-label="cancella il contenuto dell'input">
                  <z-icon class="big" name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="big" message="success message" status="success"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test ZInput clear", async () => {
    const page = await newSpecPage({
      components: [ZInput, ZIcon],
      html: `<z-input type="text" htmlid="test" placeholder="placeholder" value="value" label="label"></z-input>`,
    });
    const icon: HTMLZIconElement = page.body.querySelector(".reset-icon z-icon");
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
      <z-input message="false" htmlid="id" size="big" type="password">
          <div class="text-wrapper">
            <div>
              <input id="id" class="has-clear-icon has-icon" type="password" />
              <span class="icons-wrapper">
                <button aria-label="cancella il contenuto dell'input" class="hidden input-icon reset-icon" type="button">
                  <z-icon class="big" name="multiply"></z-icon>
                </button>
                <button type="button" class="input-icon toggle-password-icon" aria-label="mostra password">
                  <z-icon class="big" name="view-filled"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="big" message="false"></z-input-message>
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
      <z-input message="false" htmlid="id" size="big" type="password">
          <div class="text-wrapper">
            <div>
              <input id="id" class="has-clear-icon has-icon" type="text" />
              <span class="icons-wrapper">
                <button aria-label="cancella il contenuto dell'input" class="hidden input-icon reset-icon" type="button">
                  <z-icon class="big" name="multiply"></z-icon>
                </button>
                <button type="button" class="input-icon toggle-password-icon" aria-label="nascondi password">
                  <z-icon class="big" name="view-off-filled"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="big" message="false"></z-input-message>
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
      <z-input htmlid="id" hasclearicon="true" size="big" value="value">
          <div class="text-wrapper">
            <div>
              <input id="id" class="has-clear-icon" type="text" value="value" />
              <span class="icons-wrapper">
                <button type="button" class="input-icon reset-icon" aria-label="cancella il contenuto dell'input">
                  <z-icon class="big" name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="big"></z-input-message>
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
      <z-input htmlid="id" hasclearicon="false" size="big" value="value">
          <div class="text-wrapper">
            <div>
              <input id="id" type="text" value="value" />
              <span class="icons-wrapper">
                <button aria-label="cancella il contenuto dell'input" class="hidden input-icon reset-icon" type="button">
                  <z-icon class="big" name="multiply"></z-icon>
                </button>
              </span>
            </div>
            <z-input-message class="big"></z-input-message>
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
      <z-input htmlid="id" icon="pdf" size="big">
          <div class="text-wrapper">
            <div>
              <input id="id" class="has-icon has-clear-icon" type="text" />
              <span class="icons-wrapper">
                <button aria-label="cancella il contenuto dell'input" class="hidden input-icon reset-icon" type="button">
                  <z-icon class="big" name="multiply"></z-icon>
                </button>
                <z-icon class="big input-icon" name="pdf"></z-icon>
              </span>
            </div>
            <z-input-message class="big"></z-input-message>
          </div>
      </z-input>
    `);
  });

  it("Test render ZInput type=number", async () => {
    const page = await newSpecPage({
      components: [ZInput],
      html: `<z-input message="false" type="number" min="1" max="10" step="2" htmlid="test"></z-input>`,
    });
    expect(page.root).toEqualHtml(`
      <z-input htmlid="test" max="10" message="false" min="1" size="big" step="2" type="number">
        <div class="text-wrapper">
          <div>
            <input id="test" max="10" min="1" step="2" type="number">
            <span class="icons-wrapper">
              <button aria-label="cancella il contenuto dell'input" class="hidden input-icon reset-icon" type="button">
                <z-icon class="big" name="multiply"></z-icon>
              </button>
            </span>
          </div>
          <z-input-message class="big" message="false"></z-input-message>
        </div>
      </z-input>
    `);
  });
});
