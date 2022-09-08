import {newSpecPage} from "@stencil/core/testing";

import {ZOtp} from "./index";

describe("Suite test ZOtp", () => {
  it("Test render ZOtp senza prop", async () => {
    const page = await newSpecPage({
      components: [ZOtp],
      html: `<z-otp></z-otp>`,
    });

    expect(page.root).toEqualHtml(`
      <z-otp>
        <mock:shadow-root>
          <div class='otp-container'>
            <div class="digits-container">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
            </div>
            <z-input-message></z-input-message>
          </div>
        </mock:shadow-root>
      </z-otp>
    `);
  });

  it("Test render ZOtp con prop inputNum", async () => {
    const page = await newSpecPage({
      components: [ZOtp],
      html: `<z-otp inputNum='3'></z-otp>`,
    });

    expect(page.root).toEqualHtml(`
      <z-otp inputNum='3'>
        <mock:shadow-root>
          <div class='otp-container'>
            <div class="digits-container">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
              <input type="text" autocomplete="off" minlength="1" maxlength="1">
            </div>
            <z-input-message></z-input-message>
          </div>
        </mock:shadow-root>
      </z-otp>
    `);
  });

  it("Test render ZOtp con messaggio errore", async () => {
    const page = await newSpecPage({
      components: [ZOtp],
      html: `<z-otp status='error' message='Otp non valido'></z-otp>`,
    });

    expect(page.root).toEqualHtml(`
      <z-otp status='error' message='Otp non valido'>
        <mock:shadow-root>
          <div class='otp-container'>
            <div class="digits-container">
              <input class="error" type="text" autocomplete="off" minlength="1" maxlength="1">
              <input class="error" type="text" autocomplete="off" minlength="1" maxlength="1">
              <input class="error" type="text" autocomplete="off" minlength="1" maxlength="1">
              <input class="error" type="text" autocomplete="off" minlength="1" maxlength="1">
              <input class="error" type="text" autocomplete="off" minlength="1" maxlength="1">
              <input class="error" type="text" autocomplete="off" minlength="1" maxlength="1">
            </div>
            <z-input-message status='error' message='Otp non valido'></z-input-message>
          </div>
        </mock:shadow-root>
      </z-otp>
    `);
  });
});
