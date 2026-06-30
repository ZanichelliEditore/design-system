import {Component, Element, Event, EventEmitter, Listen, Method, Prop, h} from "@stencil/core";
import dialogPolyfill from "dialog-polyfill";
import {KeyboardCode} from "../../beans";
import {FocusTrapController} from "../../utils/focus-trap-controller";
import {ReactiveControllerHost} from "../../utils/reactive-controller";

/**
 * @slot modalCloseButton - slot for custom close button
 * @slot modalContent - slot for the content of the modal
 */
@Component({
  tag: "z-modal",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZModal extends ReactiveControllerHost {
  /** unique id */
  @Prop()
  modalid: string;

  /** title text (optional) */
  @Prop()
  modaltitle?: string;

  /** subtitle (optional) */
  @Prop()
  modalsubtitle?: string;

  /** aria-label for close button (optional) */
  @Prop()
  closeButtonLabel = "chiudi modale";

  /** add role "alertdialog" to dialog (optional, default is false) */
  @Prop()
  alertdialog?: boolean = false;

  /** if true, the modal is closable (optional, default is true) */
  @Prop()
  closable?: boolean = true;

  /** if true, the modal can scroll inside, if false the viewport can scroll */
  @Prop()
  scrollInside?: boolean = true;

  /** if true, the page scroll is locked when the modal is open (optional, default is true) */
  @Prop()
  lockPageScroll?: boolean = true;

  private dialog: HTMLDialogElement;

  private focusTrapController = new FocusTrapController(this, {
    isActive: () => !!this.dialog?.open,
  });

  @Element() host: HTMLZModalElement;

  /** emitted on close button click, returns modalid */
  @Event()
  modalClose: EventEmitter;

  private emitModalClose(): void {
    if (this.closable) {
      this.modalClose.emit({modalid: this.modalid});
      this.resetPageScroll();
    }
  }

  /** emitted on modal header click, returns modalid */
  @Event()
  modalHeaderActive: EventEmitter;

  private emitModalHeaderActive(): void {
    this.modalHeaderActive.emit({modalid: this.modalid});
  }

  /** emitted on background click, returns modalid */
  @Event()
  modalBackgroundClick: EventEmitter;

  private emitBackgroundClick(): void {
    if (this.closable) {
      this.modalBackgroundClick.emit({modalid: this.modalid});
      this.resetPageScroll();
    }
  }

  private resetPageScroll(): void {
    if (this.lockPageScroll && document.body.style.overflowY === "hidden") {
      document.body.style.overflowY = "";
    }
  }

  componentDidLoad(): void {
    if (typeof window.HTMLDialogElement !== "function") {
      /* workaround to fix `registerDialog` in test environment:
      stencil converts html elements to MockHTMLElement but this element is missing the `localName` property,
      which is used by `registerDialog` to recognize the element as dialog */
      if (!this.dialog.localName) {
        Object.defineProperty(this.dialog, "localName", {value: "dialog"});
      }
      dialogPolyfill.registerDialog(this.dialog);
      this.dialog.setAttribute("open", "true");
    } else {
      this.open();
    }
    if (this.lockPageScroll) {
      requestAnimationFrame(() => (document.body.style.overflowY = "hidden"));
    }

    super.componentDidLoad();
  }

  disconnectedCallback(): void {
    this.resetPageScroll();
    super.disconnectedCallback();
  }

  /** open modal */
  @Method()
  async open(): Promise<void> {
    this.dialog?.showModal();
    this.focusTrapController.sync();
    if (this.lockPageScroll) {
      document.body.style.overflowY = "hidden";
    }
  }

  /** close modal */
  @Method()
  async close(): Promise<void> {
    if (this.closable) {
      this.dialog?.close();
      this.focusTrapController.sync();
      this.resetPageScroll();
    }
  }

  @Listen("keydown")
  handleKeyDown(e: KeyboardEvent): void {
    if (e.code === KeyboardCode.ESC && !this.closable) {
      e.preventDefault();

      return;
    }

    this.focusTrapController.handleWrapTab(e);
  }

  private closeButtonSlot(): HTMLElement | void {
    if (this.closable) {
      return (
        <slot name="modalCloseButton">
          <button
            aria-label={this.closeButtonLabel}
            onClick={() => this.close()}
          >
            <z-icon name="multiply-circle-filled"></z-icon>
          </button>
        </slot>
      );
    }
  }

  private handleEscape(e: Event): void {
    if (this.closable) {
      return;
    }
    e.preventDefault();
  }

  render(): HTMLZModalElement {
    return (
      <dialog
        class={{
          "modal-dialog": !this.scrollInside,
        }}
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
        role={this.alertdialog ? "alertdialog" : undefined}
        ref={(el) => (this.dialog = el as HTMLDialogElement)}
        onClose={() => this.emitModalClose()}
        onCancel={(e) => this.handleEscape(e)}
      >
        <div
          class={{
            "modal-container": true,
            "modal-container-scroll-inside": this.scrollInside,
            "modal-container-scroll-outside": !this.scrollInside,
          }}
          id={this.modalid}
        >
          <header onClick={this.emitModalHeaderActive.bind(this)}>
            <div>
              {this.modaltitle && <h1 id="modal-title">{this.modaltitle}</h1>}
              {this.closeButtonSlot()}
            </div>
            {this.modalsubtitle && (
              <div
                class="subtitle"
                id="modal-subtitle"
              >
                {this.modalsubtitle}
              </div>
            )}
          </header>

          <div
            class={{
              "modal-content-scroll-inside": this.scrollInside,
              "modal-content-scroll-outside": !this.scrollInside,
            }}
            id="modal-content"
          >
            <slot name="modalContent"></slot>
          </div>
        </div>
        <div
          class={{
            "modal-background": true,
            "modal-background-scroll-outside": !this.scrollInside,
          }}
          data-action="modalBackground"
          data-modal={this.modalid}
          onClick={() => {
            this.emitBackgroundClick();
            this.close();
          }}
        ></div>
      </dialog>
    );
  }
}
