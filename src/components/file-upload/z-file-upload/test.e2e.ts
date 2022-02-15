import { newE2EPage } from "@stencil/core/testing";

describe("z-file-upload test end2end", () => {

  it("Test z-file-upload -> add z-file", async () => {



  });

  
  it("Test z-file-upload -> remove z-file", async () => {

    const page = await newE2EPage();

    await page.setContent(`
      <z-file-upload type="dragdrop" variant="primary" class="hydrated">
        <span slot="title">Allega un file</span>
        <span slot="description">Vuoi allegare un file per chiarire meglio la tua richiesta?</span>
        <span slot="file-format">Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un
            massimo di 50Mb di peso.</span>
        <z-file slot="files" filetype="application/pdf" class="hydrated">Spike - Condivisione pagine Kitaboo-OK.pdf</z-file>
      </z-file-upload>
    `);

    const zfu = await page.find("z-file-upload");
    const zf = await page.find("z-file-upload z-file");

    expect(zf).not.toBeNull();

    expect(zfu).toEqualHtml(`
    <z-file-upload class=\"hydrated\" type=\"default\" variant=\"primary\">
      <mock:shadow-root>
        <div class=\"container default\">
          <z-heading class=\"hydrated\" id=\"title\">
            <slot name=\"title\"></slot>
          </z-heading>
          <z-body class=\"hydrated\">
            <slot name=\"description\"></slot>
          </z-body>
          <z-body class=\"hydrated\">
            <slot name=\"file-format\"></slot>
          </z-body>
          <input accept=\".pdf, .doc, .tiff, .png, .jpg\" id=\"fileElem\" multiple=\"\" type=\"file\">
          <z-button class=\"hydrated\" id=\"fileSelect\" size=\"big\" variant=\"primary\" style=\"pointer-events: auto;\">
            Allega
          </z-button>
        </div>
      </mock:shadow-root>
      <span slot=\"title\">
        Allega un file
      </span>
      <span slot=\"description\">
        Vuoi allegare un file per chiarire meglio la tua richiesta?
      </span>
      <span slot=\"file-format\">
        Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un massimo di 50Mb di peso.
      </span>
      <z-file class=\"hydrated\" filetype=\"application/pdf\" slot=\"files\">
        Spike - Condivisione pagine Kitaboo-OK.pdf
      </z-file>
    </z-file-upload>
    `);
    page.evaluate(() => (document.querySelector('z-file-upload z-file').shadowRoot.querySelector(" z-chip div z-icon:last-child") as HTMLElement).click())
    await page.waitForChanges();

    const checkZf = await page.find("z-file-upload z-file");
    
    expect(checkZf).toBeNull();
    expect(zfu).toEqualHtml(`
    <z-file-upload class=\"hydrated\" type=\"default\" variant=\"primary\">
      <mock:shadow-root>
        <div class=\"container default\">
          <z-heading class=\"hydrated\" id=\"title\">
            <slot name=\"title\"></slot>
          </z-heading>
          <z-body class=\"hydrated\">
            <slot name=\"description\"></slot>
          </z-body>
          <z-body class=\"hydrated\">
            <slot name=\"file-format\"></slot>
          </z-body>
          <input accept=\".pdf, .doc, .tiff, .png, .jpg\" id=\"fileElem\" multiple=\"\" type=\"file\">
          <z-button class=\"hydrated\" id=\"fileSelect\" size=\"big\" variant=\"primary\" style=\"pointer-events: auto;\">
            Allega
          </z-button>
        </div>
      </mock:shadow-root>
      <span slot=\"title\">
        Allega un file
      </span>
      <span slot=\"description\">
        Vuoi allegare un file per chiarire meglio la tua richiesta?
      </span>
      <span slot=\"file-format\">
        Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un massimo di 50Mb di peso.
      </span>
    </z-file-upload>
    `);

  });



    // EMIT EVENT OF ADDING FILE
    // CHECK IF FILE PROP CHANGED
});

