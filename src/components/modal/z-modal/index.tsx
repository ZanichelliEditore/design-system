import {Component, Prop, h, Event, EventEmitter, Host} from "@stencil/core";

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
  closeButtonLabel?: string = "close modal";

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

  render(): HTMLZModalElement {
    return (
      <Host>
        <div
          class="modal-container"
          id={this.modalid}
          role="dialog"
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
              >
                <z-icon name="multiply-circle-filled"></z-icon>
              </button>
            </slot>
          </header>
          <div class="modal-content">
            <slot name="modalContent"></slot>
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
