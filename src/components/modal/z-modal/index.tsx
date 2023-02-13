import {Component, Prop, h, Event, EventEmitter, Host, Method} from "@stencil/core";
import {KeyboardCode} from "../../../beans";

/**
 * @slot modalContent - set the content of the modal
 * @slot modalCloseButton - accept custom close button
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
  closeButtonLabel?: string = "chiudi modale";

  /** add role "alertdialog" to dialog (optional, default is false) */
  @Prop()
  alertdialog?: boolean = false;

  private dialog: HTMLDialogElement;

  private modalEnd: HTMLSpanElement;

  private closeButton: HTMLButtonElement;

  private shift = false;

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

  /** open modal */
  @Method()
  async openModal(): Promise<void> {
    this.open();
  }

  /** close modal */
  @Method()
  async closeModal(): Promise<void> {
    this.close();
  }

  componentDidLoad(): void {
    this.open();
  }

  private open(): void {
    this.dialog?.showModal();
  }

  private close(): void {
    this.dialog?.close();
  }

  private handleForwardNav(e: KeyboardEvent): void {
    if (e.code !== KeyboardCode.TAB || this.shift) {
      return;
    }
    if (e.target === this.modalEnd) {
      this.closeButton?.focus();
    }
  }

  private handleBackwardsNav(e: KeyboardEvent): void {
    if (e.code !== KeyboardCode.TAB || !this.shift) {
      return;
    }
    if (e.target === this.closeButton) {
      this.modalEnd.focus();
    }
  }

  render(): HTMLZModalElement {
    return (
      <Host>
        <dialog
          aria-labelledby="modal-title"
          aria-describedby="modal-content"
          role={this.alertdialog ? "alertdialog" : undefined}
          ref={(el) => (this.dialog = el as HTMLDialogElement)}
          onClose={() => this.emitModalClose()}
          onKeyDown={(e: KeyboardEvent) => {
            this.shift = !!e.shiftKey;
            this.handleBackwardsNav(e);
          }}
          onKeyUp={(e: KeyboardEvent) => {
            this.handleForwardNav(e);
          }}
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
                  ref={(el) => (this.closeButton = el)}
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
              <span
                tabindex={0}
                class="modal-end"
                ref={(el) => (this.modalEnd = el)}
              />
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
      </Host>
    );
  }
}
