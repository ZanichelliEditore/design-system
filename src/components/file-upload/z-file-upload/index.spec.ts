import {newSpecPage} from "@stencil/core/testing";

import {ZFileUpload} from "./index";

describe("Suite test ZFileUpload", () => {
  it("Test render ZFileUpload default", async () => {
    const page = await newSpecPage({
      components: [ZFileUpload],
      html: `<z-file-upload type="default"
        variant="primary"
        main-title="Allega un file"
        description="Vuoi allegare un file per chiarire meglio la tua richiesta?"
        accepted-format= ".pdf, .doc, .tiff, .png, .jpg, .jpeg"
        file-max-size="50"></z-file-upload>`,
    });
    expect(page.root).toEqualHtml(`
      <z-file-upload accepted-format=".pdf, .doc, .tiff, .png, .jpg, .jpeg" description="Vuoi allegare un file per chiarire meglio la tua richiesta?" file-max-size="50" main-title="Allega un file" type="default" variant="primary">
        <div class="heading-3-sb" id="title">
          Allega un file
        </div>
        <span class="body-3-sb" id="description">
          Vuoi allegare un file per chiarire meglio la tua richiesta?
        </span>
        <span class="allowed-files-message body-3">
          Puoi allegare file nei formati PDF, DOC, TIFF, PNG, JPG, JPEG per un massimo di 50MB di peso.
        </span>
        <section class="files-container hidden">
          <div class="heading-3-sb uploaded-files-label">
            File appena caricati
          </div>
          <div class="files-wrapper"></div>
        </section>
        <z-button icon="upload" id="fileSelect">
          allega
        </z-button>
        <input accept=".pdf, .doc, .tiff, .png, .jpg, .jpeg" multiple="" name="z-file-upload" type="file">
      </z-file-upload>
    `);
  });

  it("Test render ZFileUpload dragdrop", async () => {
    const page = await newSpecPage({
      components: [ZFileUpload],
      html: `<z-file-upload type="dragdrop"
        main-title="Allega un file"
        description="Vuoi allegare un file per chiarire meglio la tua richiesta?"
        accepted-format= ".pdf, .doc, .tiff, .png, .jpg, .jpeg"
        file-max-size="50"></z-file-upload>`,
    });
    expect(page.root).toEqualHtml(`
      <z-file-upload accepted-format=".pdf, .doc, .tiff, .png, .jpg, .jpeg" description="Vuoi allegare un file per chiarire meglio la tua richiesta?" file-max-size="50" main-title="Allega un file" type="dragdrop">
        <div class="heading-3-sb" id="title">Allega un file</div>
        <section class="files-container hidden">
          <div class="heading-3-sb uploaded-files-label">
            File appena caricati
          </div>
          <div class="files-wrapper"></div>
        </section>
        <z-dragdrop-area drag-and-drop-label="Rilascia i file in questa area per allegarli.">
          <div class="text-container">
            <span class="body-1" id="description">
              Vuoi allegare un file per chiarire meglio la tua richiesta?
            </span>
            <input accept=".pdf, .doc, .tiff, .png, .jpg, .jpeg" multiple="" name="z-file-upload" type="file">
            <span class="body-1 upload-link-text">
              <span class="body-1-sb upload-link" tabindex="0">Carica</span> o trascina dal tuo computer
            </span>
            <span class="allowed-files-message body-3">
              Puoi allegare file nei formati PDF, DOC, TIFF, PNG, JPG, JPEG per un massimo di 50MB di peso.
            </span>
          </div>
        </z-dragdrop-area>
      </z-file-upload>
    `);
  });

  it("Test render ZFileUpload with custom label and not main-title", async () => {
    const page = await newSpecPage({
      components: [ZFileUpload],
      html: `<z-file-upload type="default"
        variant="primary"
        description="Vuoi allegare un file per chiarire meglio la tua richiesta?"
        accepted-format=".pdf, .doc, .tiff, .png, .jpg, .jpeg"
        upload-btn-label="testo custom"
        drag-and-drop-label="drag and drop custom label"
        file-max-size="50"></z-file-upload>`,
    });
    expect(page.root).toEqualHtml(`
      <z-file-upload accepted-format=".pdf, .doc, .tiff, .png, .jpg, .jpeg" description="Vuoi allegare un file per chiarire meglio la tua richiesta?" file-max-size="50" upload-btn-label="testo custom" drag-and-drop-label="drag and drop custom label" type="default" variant="primary">
        <span class="body-3-sb" id="description">
          Vuoi allegare un file per chiarire meglio la tua richiesta?
        </span>
        <span class="allowed-files-message body-3">
          Puoi allegare file nei formati PDF, DOC, TIFF, PNG, JPG, JPEG per un massimo di 50MB di peso.
        </span>
        <section class="files-container hidden">
          <div class="heading-3-sb uploaded-files-label">
            File appena caricati
          </div>
          <div class="files-wrapper"></div>
        </section>
        <z-button icon="upload" id="fileSelect">
          testo custom
        </z-button>
        <input accept=".pdf, .doc, .tiff, .png, .jpg, .jpeg" multiple="" name="z-file-upload" type="file">
      </z-file-upload>
    `);
  });
});
