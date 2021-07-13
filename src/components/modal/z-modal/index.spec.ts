import { newSpecPage } from "@stencil/core/testing";
import { ZModal } from "./index";

describe("Suite test ZModal", () => {
  it("Test render empty ZModal", async () => {
    const page = await newSpecPage({
      components: [ZModal],
      html: `<z-modal></z-modal>`,
    });

    expect(page.root).toEqualHtml(`
      <z-modal>
        <mock:shadow-root>
          <div class="modal-container">
            <header>
              <div></div>
              <button>
                <z-icon name="multiply-circle-filled"></z-icon>
              </button>
            </header>
            <main>
              <slot name="modalContent"></slot>
            </main>
          </div>
          <div class="modal-background" data-action="modalBackground"></div>
        </mock:shadow-root>
      </z-modal>
    `);
  });

  it("Test render ZModal with props", async () => {
    const page = await newSpecPage({
      components: [ZModal],
      html: `<z-modal modalid="modal" modaltitle="title" modalsubtitle="subtitle"></z-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <z-modal modalid="modal" modaltitle="title" modalsubtitle="subtitle">
        <mock:shadow-root>
          <div class="modal-container" id="modal">
            <header>
              <div>
                <h1>title</h1>
                <h2>subtitle</h2>
              </div>
              <button>
                <z-icon name="multiply-circle-filled"></z-icon>
              </button>
            </header>
            <main>
              <slot name="modalContent"></slot>
            </main>
          </div>
          <div class="modal-background" data-action="modalBackground" data-modal="modal"></div>
        </mock:shadow-root>
      </z-modal>
    `);
  });

  it("Test render ZModal with slotted content", async () => {
    const page = await newSpecPage({
      components: [ZModal],
      html: `<z-modal><div slot="modalContent">Contenuto dello <b>slot</b></div></z-modal>`,
    });

    expect(page.root).toEqualHtml(`
      <z-modal>
        <mock:shadow-root>
          <div class="modal-container">
            <header>
              <div></div>
              <button>
                <z-icon name="multiply-circle-filled"></z-icon>
              </button>
            </header>
            <main>
              <slot name="modalContent"></slot>
            </main>
          </div>
          <div class="modal-background" data-action="modalBackground"></div>
        </mock:shadow-root>
        <div slot="modalContent">Contenuto dello <b>slot</b></div>
      </z-modal>
    `);
  });
});
