import {newSpecPage} from "@stencil/core/testing";

import {ZDragdropArea} from "./index";

describe("Suite test ZDragdropArea", () => {
  it("Test render ZDragdropArea senza contenuto slottato", async () => {
    const page = await newSpecPage({
      components: [ZDragdropArea],
      html: `<z-dragdrop-area></z-dragdrop-area>`,
    });

    expect(page.root).toEqualHtml(`
    <z-dragdrop-area>
       <div class="dragdrop" tabindex="0">
         <div class="dragover-container">
           <div class="dragover-message">
             <z-body level="2" variant="semibold">
               Rilascia i file in questa area per allegarli.
             </z-body>
           </div>
         </div>
       </div>
      </z-dragdrop-area>
    `);
  });

  it("Test render ZDragdropArea con contenuto slottato", async () => {
    const page = await newSpecPage({
      components: [ZDragdropArea],
      html: `<z-dragdrop-area>
              <span slot="description">Vuoi allegare un file per chiarire meglio la tua richiesta?</span>
              <span slot="file-format">Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un
                  massimo di 50Mb di peso.</span>
             </z-dragdrop-area>`,
    });

    expect(page.root).toEqualHtml(`
    <z-dragdrop-area>
       <span hidden="" slot="description">
         Vuoi allegare un file per chiarire meglio la tua richiesta?
       </span>
       <span hidden="" slot="file-format">
         Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un massimo di 50Mb di peso.
       </span>
       <div class="dragdrop" tabindex="0">
         <div class="dragover-container">
           <div class="dragover-message">
             <z-body level="2" variant="semibold">
               Rilascia i file in questa area per allegarli.
             </z-body>
           </div>
         </div>
       </div>
      </z-dragdrop-area>
    `);
  });
});
