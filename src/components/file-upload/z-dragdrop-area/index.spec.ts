import {newSpecPage} from "@stencil/core/testing";
import {ZDragdropArea} from "./index";

describe("Suite test ZDragdropArea", () => {
  it("Test render ZDragdropArea senza contenuto slottato", async () => {
    const page = await newSpecPage({
      components: [ZDragdropArea],
      html: `<z-dragdrop-area drag-and-drop-label="Rilascia i file in questa area per allegarli."></z-dragdrop-area>`,
    });

    expect(page.root).toEqualHtml(`
      <z-dragdrop-area drag-and-drop-label="Rilascia i file in questa area per allegarli.">
        <mock:shadow-root>
          <div class="dragdrop" tabindex="0">
            <div class="dragover-container">
              <div class="dragover-message">
                <span class="body-2-sb">Rilascia i file in questa area per allegarli.</span>
              </div>
            </div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </z-dragdrop-area>
    `);
  });

  it("Test render ZDragdropArea con contenuto slottato", async () => {
    const page = await newSpecPage({
      components: [ZDragdropArea],
      html: `<z-dragdrop-area drag-and-drop-label="Rilascia i file in questa area per allegarli.">
        <span slot="description">Vuoi allegare un file per chiarire meglio la tua richiesta?</span>
        <span slot="file-format">Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un massimo di 50Mb di peso.</span>
      </z-dragdrop-area>`,
    });

    expect(page.root).toEqualHtml(`
      <z-dragdrop-area drag-and-drop-label="Rilascia i file in questa area per allegarli.">
        <mock:shadow-root>
          <div class="dragdrop" tabindex="0">
            <div class="dragover-container">
              <div class="dragover-message">
                <span class="body-2-sb">Rilascia i file in questa area per allegarli.</span>
              </div>
            </div>
            <slot></slot>
          </div>
        </mock:shadow-root>
        <span slot="description">
          Vuoi allegare un file per chiarire meglio la tua richiesta?
        </span>
        <span slot="file-format">
          Puoi allegare file nei formati PDF, PNG, JPG, TIFF, DOC, per un massimo di 50Mb di peso.
        </span>
      </z-dragdrop-area>
    `);
  });
});
