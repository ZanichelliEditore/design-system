import {newSpecPage} from "@stencil/core/testing";
import {ZToastNotification} from "./index";

describe("Suite test ZToastNotification", () => {
  it("Test render ZToastNotification vuoto", async () => {
    const page = await newSpecPage({
      components: [ZToastNotification],
      html: `<z-toast-notification isdraggable="false"></z-toast-notification>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toast-notification aria-atomic="true" aria-live="polite" isdraggable="false" role="status" style="--percentuale: 0%;">
        <mock:shadow-root>
          <div class="toast-notification-container">
            <div class="toast-notification-content">
              <div class="toast-notification-text">
                <span class="message">
                  <slot name="message"></slot>
                </span>
              </div>
              <div class="button-container" hidden>
                <slot name="button"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-toast-notification>
    `);
  });

  it("Test render ZToastNotification con props e closebutton", async () => {
    const page = await newSpecPage({
      components: [ZToastNotification],
      html: `<z-toast-notification
        heading="Titolo"
        type="dark"
        message="descrizione della notifica"
        isdraggable="false"
        closebutton="true"
        transition="slide-in-down"
        draggablepercentage="10"
      ></z-toast-notification>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toast-notification
        aria-atomic="true"
        aria-live="polite"
        class="slide-in-down dark"
        closebutton="true"
        draggablepercentage="10"
        heading="Titolo"
        isdraggable="false"
        message="descrizione della notifica"
        role="status"
        transition="slide-in-down"
        type="dark"
        style="--percentuale: 0%;"
      >
        <mock:shadow-root>
          <div class="toast-notification-container">
            <div class="toast-notification-content">
              <div class="toast-notification-text">
                <span class="title">
                  Titolo
                </span>
                <span class="message">
                  <slot name="message">
                    <span>
                      descrizione della notifica
                    </span>
                  </slot>
                </span>
              </div>
              <div class="button-container" hidden>
                <slot name="button"></slot>
              </div>
            </div>
            <button class="close-button" aria-label="Chiudi notifica">
              <z-icon name="multiply-circled"></z-icon>
            </button>
          </div>
        </mock:shadow-root>
      </z-toast-notification>
    `);
  });

  it("Test render ZToastNotification con props e slot", async () => {
    const page = await newSpecPage({
      components: [ZToastNotification],
      html: `<z-toast-notification
        heading="Titolo"
        type="dark"
        message="descrizione della notifica"
        closebutton="true"
        transition="slide-in-down"
        isdraggable="false"
        draggablepercentage="10"
      >
        <z-button slot="button">button</z-button>
      </z-toast-notification>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toast-notification
        aria-atomic="true"
        aria-live="polite"
        class="slide-in-down dark"
        closebutton="true"
        draggablepercentage="10"
        heading="Titolo"
        isdraggable="false"
        message="descrizione della notifica"
        role="status"
        transition="slide-in-down"
        type="dark"
        style="--percentuale: 0%;"
      >
        <mock:shadow-root>
          <div class="toast-notification-container">
            <div class="toast-notification-content">
              <div class="toast-notification-text">
                <span class="title">
                  Titolo
                </span>
                <span class="message">
                  <slot name="message">
                    <span>
                      descrizione della notifica
                    </span>
                  </slot>
                </span>
              </div>
              <div class="button-container">
                <slot name="button"></slot>
              </div>
            </div>
            <button class="close-button" aria-label="Chiudi notifica">
              <z-icon name="multiply-circled"></z-icon>
            </button>
          </div>
        </mock:shadow-root>
        <z-button slot="button">
          button
        </z-button>
      </z-toast-notification>
    `);
  });

  it("Test render ZToastNotification error type uses role alert", async () => {
    const page = await newSpecPage({
      components: [ZToastNotification],
      html: `<z-toast-notification
        type="error"
        message="Errore"
        isdraggable="false"
      ></z-toast-notification>`,
    });

    expect(page.root).toEqualHtml(`
      <z-toast-notification
        aria-atomic="true"
        aria-live="assertive"
        class="error"
        isdraggable="false"
        message="Errore"
        role="alert"
        type="error"
        style="--percentuale: 0%;"
      >
        <mock:shadow-root>
          <div class="toast-notification-container">
            <div class="toast-notification-content">
              <div class="toast-notification-text">
                <span class="message">
                  <slot name="message">
                    <span>
                      Errore
                    </span>
                  </slot>
                </span>
              </div>
              <div class="button-container" hidden>
                <slot name="button"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </z-toast-notification>
    `);
  });
});
