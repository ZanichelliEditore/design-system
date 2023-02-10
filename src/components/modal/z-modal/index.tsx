import {Component, Prop, h, Event, EventEmitter, Host} from "@stencil/core";
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

  /** modal role: "dialog" or "alertdialog" (optional, default is "dialog") */
  @Prop({reflect: true})
  role?: "dialog" | "alertdialog" = "dialog";

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

  private modalEnd: HTMLSpanElement;

  private closeButton: HTMLButtonElement;

  private shift = false;

  private emitBackgroundClick(): void {
    this.modalBackgroundClick.emit({modalid: this.modalid});
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
      <Host
        aria-modal="true"
        tabindex={0}
        onKeyUp={(e: KeyboardEvent) => {
          if (e.code === KeyboardCode.ESC) {
            this.emitModalClose();
            e.stopPropagation();
          }
        }}
      >
        <div
          class="modal-container"
          id={this.modalid}
          onKeyDown={(e: KeyboardEvent) => {
            this.shift = !!e.shiftKey;
            this.handleBackwardsNav(e);
          }}
          onKeyUp={(e: KeyboardEvent) => {
            this.handleForwardNav(e);
          }}
        >
          <header onClick={this.emitModalHeaderActive.bind(this)}>
            <div>
              {this.modaltitle && <h1>{this.modaltitle}</h1>}
              {this.modalsubtitle && <h2>{this.modalsubtitle}</h2>}
            </div>
            <slot name="modalCloseButton">
              <button
                aria-label={this.closeButtonLabel}
                onClick={this.emitModalClose.bind(this)}
                ref={(el) => (this.closeButton = el as HTMLButtonElement)}
              >
                <z-icon name="multiply-circle-filled"></z-icon>
              </button>
            </slot>
          </header>
          <div class="modal-content">
            <slot name="modalContent"></slot>
            <span
              tabindex={0}
              class="modal-end"
              ref={(el) => (this.modalEnd = el as HTMLSpanElement)}
            />
          </div>
        </div>
        <div
          class="modal-background"
          data-action="modalBackground"
          data-modal={this.modalid}
          onClick={this.emitBackgroundClick.bind(this)}
        ></div>
      </Host>
    );
  }
}
