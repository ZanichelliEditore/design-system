import {Component, Prop, h, Event, EventEmitter, Method, Element, Listen} from "@stencil/core";
import dialogPolyfill from "dialog-polyfill";
import {KeyboardCode} from "../../../beans";

const FOCUSABLE_ELEMENTS_SELECTOR =
  ':is(button, input, select, textarea, [contenteditable=""], [contenteditable="true"], a[href], [tabindex], summary):not([disabled], [disabled=""], [tabindex="-1"], [aria-hidden="true"], [hidden])';

/**
 * @slot modalCloseButton - accept custom close button
 * @slot modalContent - set the content of the modal
 */
@Component({
  tag: "z-modal",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZModal {
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

  /** if true, the modal content is scrollable */
  @Prop()
  scrollable?: boolean = true;

  private dialog: HTMLDialogElement;

  @Element() host: HTMLZModalElement;

  /** emitted on close button click, returns modalid */
  @Event()
  modalClose: EventEmitter;

  private emitModalClose(): void {
    if (this.closable) {
      this.modalClose.emit({modalid: this.modalid});
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
    }
  }

  componentDidLoad(): void {
    if (typeof HTMLDialogElement !== "function") {
      dialogPolyfill.registerDialog(this.dialog);
      this.dialog.setAttribute("open", "true");
    } else {
      this.open();
    }
  }

  /** open modal */
  @Method()
  async open(): Promise<void> {
    this.dialog?.showModal();
  }

  /** close modal */
  @Method()
  async close(): Promise<void> {
    if (this.closable) {
      this.dialog?.close();
    }
  }

  /**
   * Get a list of focusable elements in the dialog.
   * Remove elements with `display: none` from the list, because they're not focusable.
   *
   * N.B. The list is built on the assumption that elements inside shadow root are placed ALL before the `modalContent` slot.
   * Adding focusable elements after the `modalContent` slot would break the order of elements in the list.
   */
  private get focusableElements(): HTMLElement[] {
    return [
      ...Array.from(this.host.shadowRoot.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS_SELECTOR)),
      ...Array.from(this.host.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS_SELECTOR)),
    ].filter((element) => getComputedStyle(element).display !== "none");
  }

  @Listen("keydown")
  handleKeyDown(e: KeyboardEvent): void {
    if (e.code !== KeyboardCode.TAB) {
      return;
    }

    const focusableElements = this.focusableElements;
    const shadowActiveElement = this.host.shadowRoot.activeElement;
    const activeElement = this.host.ownerDocument.activeElement;
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    if (e.shiftKey && (shadowActiveElement == firstFocusableElement || activeElement == firstFocusableElement)) {
      // shift + tab was pressed and current active element is the first focusable element
      e.preventDefault();
      lastFocusableElement.focus();
    } else if (!e.shiftKey && (shadowActiveElement == lastFocusableElement || activeElement == lastFocusableElement)) {
      // shift + tab was pressed and current active element is the first focusable element
      e.preventDefault();
      firstFocusableElement.focus();
    }
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

  private handleEscape(e: KeyboardEvent): void {
    if (this.closable) {
      return;
    }
    e.preventDefault();
  }

  render(): HTMLZModalElement {
    return (
      <dialog
        class={{
          "modal-dialog": !this.scrollable,
        }}
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
        role={this.alertdialog ? "alertdialog" : undefined}
        ref={(el) => (this.dialog = el as HTMLDialogElement)}
        onClose={() => this.emitModalClose()}
        // @ts-ignore
        onCancel={(e) => this.handleEscape(e)}
        onClick={() => {
          this.emitBackgroundClick();
          this.close();
        }}
      >
        <div
          class={{
            "modal-container": true,
            "modal-container-variant": !this.scrollable,
          }}
          style={{overflow: this.scrollable ? "hidden" : "initial"}}
          id={this.modalid}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <header
            class="modal-header"
            onClick={this.emitModalHeaderActive.bind(this)}
          >
            <div>
              {this.modaltitle && <h1 id="modal-title">{this.modaltitle}</h1>}
              {this.closeButtonSlot()}
            </div>
            {this.modalsubtitle && <h2 id="modal-subtitle">{this.modalsubtitle}</h2>}
          </header>

          <div
            class="modal-content"
            id="modal-content"
            style={{"--overflow-value": this.scrollable ? "hidden auto" : "initial"}}
          >
            <slot name="modalContent"></slot>
          </div>
          {!this.scrollable && <div class="modal-spacer"></div>}
        </div>
        <div
          class={{
            "modal-background": this.scrollable,
            "modal-background-variant": !this.scrollable,
          }}
          data-action="modalBackground"
          data-modal={this.modalid}
        ></div>
      </dialog>
    );
  }
}
