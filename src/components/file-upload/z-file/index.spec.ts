import { newSpecPage } from "@stencil/core/testing";

import { ZFile } from "./index";

describe("Suite test ZFile", () => {
  it("Test render ZFile vuoto", async () => {

    const page = await newSpecPage({
      components: [ZFile],
      html: `<z-file></z-file>`
    });

    expect(page.root).toEqualHtml(`
      <z-file>
        <mock:shadow-root>
        <z-chip>
          <div class="chip-content">
            <z-icon name="document-with-text"></z-icon>
            <slot></slot>
            <z-icon height="15" name="multiply-circled" width="15"></z-icon>
          </div>
        </z-chip>
        </mock:shadow-root>
      </z-file>
    `)
  });

  it("Test render ZFile with filetype prop", async () => {

    const page = await newSpecPage({
      components: [ZFile],
      html: `<z-file filetype="image/jpeg"></z-file>`
    });

    expect(page.root).toEqualHtml(`
      <z-file filetype="image/jpeg">
        <mock:shadow-root>
        <z-chip>
          <div class="chip-content">
            <z-icon name="image-jpg"></z-icon>
            <slot></slot>
            <z-icon height="15" name="multiply-circled" width="15"></z-icon>
          </div>
        </z-chip>
        </mock:shadow-root>
      </z-file>
    `)
  });

  /**
   * test 5 types of possibile zfile
   *
      case "application/pdf":
        return "pdf";
      case "application/doc":
        return "document-with-text";
      case "image/tiff":
        return "image-tiff";
      case "image/png":
        return "image-png";
      case "image/jpeg":
      case "image/jpg":
        return "image-jpg";
   */
});

