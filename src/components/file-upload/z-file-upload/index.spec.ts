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
                            file-max-size="50">>
             </z-file-upload>`,
    });
    expect(page.root).toEqualHtml(`
    <z-file-upload accepted-format=".pdf, .doc, .tiff, .png, .jpg, .jpeg" description="Vuoi allegare un file per chiarire meglio la tua richiesta?" file-max-size="50" main-title="Allega un file" type="default" variant="primary">
      <mock:shadow-root>
       <div class="container default" tabindex="0">
         <h2 class="heading-2-sb" id="title">
           Allega un file
         </h2>
         <span class="body-3-sb">
           Vuoi allegare un file per chiarire meglio la tua richiesta?
         </span>
         <span class="body-3">
           Puoi allegare file nei formati PDF, DOC, TIFF, PNG, JPG, JPEG per un massimo di 50MB di peso.
         </span>
         <section class="files-container hidden">
          <h4 class="heading-4-sb">
            File appena caricati
          </h4>
          <div class="files-wrapper">
            <slot name="files"></slot>
          </div>
          <z-divider size="medium"></z-divider>
         </section>
         <input accept=".pdf, .doc, .tiff, .png, .jpg, .jpeg" id="file-elem" multiple="" type="file">
         <z-button icon="upload" id="fileSelect">
           Allega
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
       <div class="container dragdrop" tabindex="0">
         <h2 class="heading-2-sb" id="title">
           Allega un file
         </h2>
         <section class="files-container hidden">
          <h4 class="heading-4-sb">
            File appena caricati
          </h4>
          <div class="files-wrapper">
            <slot name="files"></slot>
          </div>
          <z-divider size="medium"></z-divider>
         </section>
         <z-dragdrop-area>
           <div class="text-container">
             <span class="body-1">
               Vuoi allegare un file per chiarire meglio la tua richiesta?
             </span>
             <input accept=".pdf, .doc, .tiff, .png, .jpg, .jpeg" id="file-elem" multiple="" type="file">
             <span class="body-1 upload-link-text">
               Trascinalo qui o
               <span class="body-1-sb upload-link" tabindex="0">
                 caricalo
               </span>
               dal tuo computer
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
});
