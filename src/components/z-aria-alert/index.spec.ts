import { newSpecPage } from "@stencil/core/testing";

import { ZAriaAlert } from "./index";

describe("Suite test ZAriaAlert", () => {
  it("Test render ZAriaAlert vuoto", async () => {
    const page = await newSpecPage({
      components: [ZAriaAlert],
      html: `<z-aria-alert>testo</z-aria-alert>`,
    });

    expect(page.root).toEqualHtml(
      `<z-aria-alert aria-atomic="true" aria-live="polite" aria-relevant="additions">
         testo
       </z-aria-alert>`
    );
  });
});
