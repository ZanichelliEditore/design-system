import { newSpecPage } from "@stencil/core/testing";

import { ZOtp } from "./index";

describe("Suite test ZOtp", () => {
  it("Test render ZOtp vuoto", async () => {

    const page = await newSpecPage({
      components: [ZOtp],
      html: `<z-otp></z-otp>`
    });

    expect(page.root).toEqualHtml(`
      <z-otp>
        <mock:shadow-root>
          <div>
            This is your z-otp component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-otp>
    `)
  });
});

