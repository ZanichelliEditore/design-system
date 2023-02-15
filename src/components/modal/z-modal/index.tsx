import {Component, Prop, h, Event, EventEmitter, Method, Element, Listen} from "@stencil/core";
import {KeyboardCode} from "../../../beans";

const FOCUSABLE_ELEMENTS_SELECTOR =
  ':is(button, input, select, textarea, [contenteditable=""], [contenteditable="true"], a[href], [tabindex], summary):not([disabled], [disabled=""] [tabindex="-1"])';

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

  private dialog: HTMLDialogElement;

  @Element() host: HTMLZModalElement;

  /** emitted on close button click, returns modalid */
  @Event()
  modalClose: EventEmitter;

  private emitModalClose(): void {
    this.modalClose.emit({modalid: this.modalid});
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
    this.modalBackgroundClick.emit({modalid: this.modalid});
  }

  componentDidLoad(): void {
    this.open();
  }

  /** open modal */
  @Method()
  async open(): Promise<void> {
    this.dialog?.showModal();
  }

  /** close modal */
  @Method()
  async close(): Promise<void> {
    this.dialog?.close();
  }

  /**
   * Get a list of focusable elements in the dialog.
   * The list is built on the assumption that the elements inside shadow root are placed ALL before the `modalContent` slot.
   * Adding focusable elements after the `modalContent` slot would break the order of elements in the list.
   */
  private get focusableElements(): HTMLElement[] {
    return [
      ...Array.from(this.host.shadowRoot.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS_SELECTOR)),
      ...Array.from(this.host.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS_SELECTOR)),
    ];
  }

  @Listen("keydown")
  handleKeyDown(e: KeyboardEvent): void {
    if (e.code !== KeyboardCode.TAB) {
      return;
    }

    const focusableElements = this.focusableElements;
    // shift + tab was pressed and current active element is first focusable elements
    if (
      e.shiftKey &&
      (this.host.shadowRoot.activeElement == focusableElements[0] ||
        this.host.ownerDocument.activeElement == focusableElements[0])
    ) {
      e.preventDefault();
      // give the focus to the last focusable element
      focusableElements[focusableElements.length - 1].focus();
    } else if (
      !e.shiftKey &&
      (this.host.shadowRoot.activeElement == focusableElements[focusableElements.length - 1] ||
        this.host.ownerDocument.activeElement == focusableElements[focusableElements.length - 1])
    ) {
      e.preventDefault();
      // give the focus to the first focusable element
      focusableElements[0].focus();
    }
  }

  render(): HTMLZModalElement {
    return (
      <dialog
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
        role={this.alertdialog ? "alertdialog" : undefined}
        ref={(el) => (this.dialog = el as HTMLDialogElement)}
        onClose={() => this.emitModalClose()}
      >
        <div
          class="modal-container"
          id={this.modalid}
        >
          <header onClick={this.emitModalHeaderActive.bind(this)}>
            <div>
              {this.modaltitle && <h1 id="modal-title">{this.modaltitle}</h1>}
              {this.modalsubtitle && <h2 id="modal-subtitle">{this.modalsubtitle}</h2>}
            </div>
            <slot name="modalCloseButton">
              <button
                aria-label={this.closeButtonLabel}
                onClick={() => this.close()}
              >
                <z-icon name="multiply-circle-filled"></z-icon>
              </button>
            </slot>
          </header>

          <div
            class="modal-content"
            id="modal-content"
          >
            <slot name="modalContent"></slot>
          </div>
        </div>

        <div
          class="modal-background"
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
