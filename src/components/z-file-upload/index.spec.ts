import { newSpecPage } from "@stencil/core/testing";

import { ZFileUpload } from "./index";

describe("Suite test ZFileUpload", () => {
  it("Test render ZFileUpload vuoto", async () => {

    const page = await newSpecPage({
      components: [ZFileUpload],
      html: `<z-file-upload></z-file-upload>`
    });

    expect(page.root).toEqualHtml(`
      <z-file-upload>
        <mock:shadow-root>
          <div>
            This is your z-file-upload component
            This is your default prop:
          </div>
        </mock:shadow-root>
      </z-file-upload>
    `)
  });
});

