import { newSpecPage } from "@stencil/core/testing";
import { ZFileUpload } from "./index";
describe("Suite test ZFileUpload", () => {
    it("Test render ZFileUpload default", async () => {
        const page = await newSpecPage({
            components: [ZFileUpload],
            html: `<z-file-upload type="default"
                            variant="primary"
                            main-title="Allega un file"
                            description="Vuoi allegare un file per chiarire meglio la tua richiesta?"
                            accepted-format= ".pdf, .doc, .tiff, .png, .jpg, .jpeg"
                            file-max-size="50">>
             </z-file-upload>`,
        });
        expect(page.root).toEqualHtml(`
    <z-file-upload accepted-format=".pdf, .doc, .tiff, .png, .jpg, .jpeg" description="Vuoi allegare un file per chiarire meglio la tua richiesta?" file-max-size="50" main-title="Allega un file" type="default" variant="primary">
      <mock:shadow-root>
       <div class="container default">
         <span id="title">
           Allega un file
         </span>
         <span class="body-3-sb">
           Vuoi allegare un file per chiarire meglio la tua richiesta?
         </span>
         <span class="body-3">
           Puoi allegare file nei formati PDF, DOC, TIFF, PNG, JPG, JPEG per un massimo di 50MB di peso.
         </span>
         <section class="files-container hidden">
          <span class="heading-4-sb">
            File appena caricati
          </span>
          <div class="files-wrapper">
            <slot name="files"></slot>
          </div>
          <z-divider size="medium"></z-divider>
         </section>
         <input accept=".pdf, .doc, .tiff, .png, .jpg, .jpeg" id="file-elem" multiple="" type="file">
         <z-button icon="upload" id="fileSelect">
           allega
         </z-button>
       </div>
      </mock:shadow-root>
      &gt;
    </z-file-upload>`);
    });
    it("Test render ZFileUpload dragdrop", async () => {
        const page = await newSpecPage({
            components: [ZFileUpload],
            html: `<z-file-upload type="dragdrop"
                            main-title="Allega un file"
                            description="Vuoi allegare un file per chiarire meglio la tua richiesta?"
                            accepted-format= ".pdf, .doc, .tiff, .png, .jpg, .jpeg"
                            file-max-size="50">>
             </z-file-upload>`,
        });
        expect(page.root)
            .toEqualHtml(`     <z-file-upload accepted-format=".pdf, .doc, .tiff, .png, .jpg, .jpeg" description="Vuoi allegare un file per chiarire meglio la tua richiesta?" file-max-size="50" main-title="Allega un file" type="dragdrop">
       <mock:shadow-root>
       <div class="container dragdrop">
         <span id="title">
           Allega un file
         </span>
         <section class="files-container hidden">
          <span class="heading-4-sb">
            File appena caricati
          </span>
          <div class="files-wrapper">
            <slot name="files"></slot>
          </div>
          <z-divider size="medium"></z-divider>
         </section>
         <z-dragdrop-area drag-and-drop-label="Rilascia i file in questa area per allegarli.">
           <div class="text-container">
             <span class="body-1">
               Vuoi allegare un file per chiarire meglio la tua richiesta?
             </span>
             <input accept=".pdf, .doc, .tiff, .png, .jpg, .jpeg" id="file-elem" multiple="" type="file">
             <span class="body-1 upload-link-text">
               <span class="body-1-sb upload-link" tabindex="0">
                 Carica
               </span>
               o trascina dal tuo computer
             </span>
             <span class="body-3">
               Puoi allegare file nei formati PDF, DOC, TIFF, PNG, JPG, JPEG per un massimo di 50MB di peso.
             </span>
           </div>
         </z-dragdrop-area>
       </div>
      </mock:shadow-root>
      &gt;
      </z-file-upload>`);
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
                            file-max-size="50">>
             </z-file-upload>`,
        });
        expect(page.root).toEqualHtml(`
    <z-file-upload accepted-format=".pdf, .doc, .tiff, .png, .jpg, .jpeg" description="Vuoi allegare un file per chiarire meglio la tua richiesta?" file-max-size="50" upload-btn-label="testo custom" drag-and-drop-label="drag and drop custom label" type="default" variant="primary">
      <mock:shadow-root>
       <div class="container default">
         <span class="body-3-sb">
           Vuoi allegare un file per chiarire meglio la tua richiesta?
         </span>
         <span class="body-3">
           Puoi allegare file nei formati PDF, DOC, TIFF, PNG, JPG, JPEG per un massimo di 50MB di peso.
         </span>
         <section class="files-container hidden">
          <span class="heading-4-sb">
            File appena caricati
          </span>
          <div class="files-wrapper">
            <slot name="files"></slot>
          </div>
          <z-divider size="medium"></z-divider>
         </section>
         <input accept=".pdf, .doc, .tiff, .png, .jpg, .jpeg" id="file-elem" multiple="" type="file">
         <z-button icon="upload" id="fileSelect">
           testo custom
         </z-button>
       </div>
      </mock:shadow-root>
      &gt;
    </z-file-upload>`);
    });
});
//# sourceMappingURL=index.spec.js.map
