import { newSpecPage } from "@stencil/core/testing";

import { ZFileUpload } from "./index";

describe("Suite test ZFileUpload", () => {
  it("Test render ZFileUpload default", async () => {
    const page = await newSpecPage({
      components: [ZFileUpload],
      html: `<z-file-upload></z-file-upload>`,
    });

    expect(page.root).toEqualHtml(`
      <z-file-upload type="default">
        <mock:shadow-root>
            <div class="container default">
              <z-heading id="title" level="2" variant="semibold">
                <slot name="title"></slot>
              </z-heading>
              <z-body level="3" variant="semibold">
                <slot name="description"></slot>
              </z-body>
              <z-body level="3">
                <slot name="file-format"></slot>
              </z-body>
              <input accept=".pdf, .doc, .tiff, .png, .jpg" id="fileElem" multiple="" type="file">
              <z-button icon="plus" id="fileSelect">
                Allega
              </z-button>
              </div>
            </mock:shadow-root>
          </z-file-upload>
          </div>
        </mock:shadow-root>
      </z-file-upload>
    `);
  });

  it("Test render ZFileUpload dragdrop", async () => {
    const page = await newSpecPage({
      components: [ZFileUpload],
      html: `<z-file-upload type="dragdrop"></z-file-upload>`,
    });

    expect(page.root).toEqualHtml(`
      <z-file-upload type="dragdrop">
        <mock:shadow-root>
          <div class="container dragdrop">
            <z-heading id="title" level="2" variant="semibold">
              <slot name="title"></slot>
            </z-heading>
            <z-dragdrop-area>
              <div class="text-container">
                <z-body level="1" variant="regular">
                  <slot name="description"></slot>
                </z-body>
                <input accept=".pdf, .doc, .tiff, .png, .jpg" id="fileElem" multiple="" type="file">
                  <z-body level="1" variant="regular">
                  Trascinalo qui o
                    <z-body class="upload-link" level="1" variant="semibold">
                      caricalo
                    </z-body>
                  dal tuo computer
                </z-body>
                <z-body level="3">
                  <slot name="file-format"></slot>
                </z-body>
              </div>
            </z-dragdrop-area>
          </div>
        </mock:shadow-root>
      </z-file-upload>
    `);
  });

});
