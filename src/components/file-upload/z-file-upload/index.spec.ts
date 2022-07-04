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
       &gt;
       <div class="container default" tabindex="0">
         <z-heading id="title" level="2" variant="semibold">
           Allega un file
         </z-heading>
         <z-body level="3" variant="semibold">
           Vuoi allegare un file per chiarire meglio la tua richiesta?
         </z-body>
       <z-body level="3">
           Puoi allegare file nei formati PDF, DOC, TIFF, PNG, JPG, JPEG per un massimo di 50MB di peso.
         </z-body>
         <input accept=".pdf, .doc, .tiff, .png, .jpg, .jpeg" id="fileElem" multiple="" type="file">
         <z-button-deprecated icon="upload" id="fileSelect">
           Allega
         </z-button-deprecated>
       </div>
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
       &gt;
       <div class="container dragdrop" tabindex="0">
         <z-heading id="title" level="2" variant="semibold">
           Allega un file
         </z-heading>
         <z-dragdrop-area>
           <div class="text-container">
             <z-body level="1" variant="regular">
               Vuoi allegare un file per chiarire meglio la tua richiesta?
             </z-body>
             <input accept=".pdf, .doc, .tiff, .png, .jpg, .jpeg" id="fileElem" multiple="" type="file">
             <z-body class="upload-link-text" level="1" variant="regular">
               Trascinalo qui o
               <z-body class="upload-link" level="1" tabindex="0" variant="semibold">
                 caricalo
               </z-body>
               dal tuo computer
             </z-body>
             <z-body level="3">
               Puoi allegare file nei formati PDF, DOC, TIFF, PNG, JPG, JPEG per un massimo di 50MB di peso.
             </z-body>
           </div>
         </z-dragdrop-area>
       </div>
      </z-file-upload>`);
  });
});
