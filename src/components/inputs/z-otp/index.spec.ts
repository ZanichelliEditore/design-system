import { newSpecPage } from "@stencil/core/testing";

import { ZOtp } from "./index";

describe("Suite test ZOtp", () => {
  it("Test render ZOtp senza prop", async () => {
    const page = await newSpecPage({
      components: [ZOtp],
      html: `<z-otp></z-otp>`
    });

    expect(page.root).toEqualHtml(`
      <z-otp>
        <mock:shadow-root>
          <div>
            <input type="tel" autocomplete="off" maxlength="1">
            <input type="tel" autocomplete="off" maxlength="1">
            <input type="tel" autocomplete="off" maxlength="1">
            <input type="tel" autocomplete="off" maxlength="1">
            <input type="tel" autocomplete="off" maxlength="1">
            <input type="tel" autocomplete="off" maxlength="1">
          </div>
        </mock:shadow-root>
      </z-otp>
    `);
  });

  it("Test render ZOtp con prop inputNum", async () => {
    const page = await newSpecPage({
      components: [ZOtp],
      html: `<z-otp inputNum='3'></z-otp>`
    });

    expect(page.root).toEqualHtml(`
      <z-otp>
        <mock:shadow-root>
          <div>
            <input type="tel" autocomplete="off" maxlength="1">
            <input type="tel" autocomplete="off" maxlength="1">
            <input type="tel" autocomplete="off" maxlength="1">
          </div>
        </mock:shadow-root>
      </z-otp>
    `);
  });
});
