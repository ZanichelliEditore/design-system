import { newSpecPage } from "@stencil/core/testing";

// import { ZIcon } from "../../icons/z-icon";

import { ZInput } from "./index";

describe("Suite test ZInput - password", () => {
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
              <input id="id" class="false input_default undefined" type="password" aria-labelledby="id_label" />
              <z-icon name="hide-password"></z-icon>
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
              <input id="id" class="false input_default undefined" type="text" aria-labelledby="id_label" />
              <z-icon name="show-password"></z-icon>
            </div>
          </div>
        </mock:shadow-root>
      </z-input>
    `);
  });
});