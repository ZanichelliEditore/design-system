import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

/**
 * @slot modalContent - set the content of the modal
 */
@Component({
  tag: "z-modal",
  styleUrl: "styles.css",
  shadow: true
})
export class ZModal {
  /** unique id */
  @Prop() modalid: string;
  /** title text (optional) */
  @Prop() modaltitle?: string;
  /** subtitle (optional) */
  @Prop() modalsubtitle?: string;

  /** emitted on close button click, returns modalid */
  @Event() modalClose: EventEmitter;
  emitModalClose() {
    this.modalClose.emit({ modalid: this.modalid });
  }

  /** emitted on modal header click, returns modalid */
  @Event() modalHeaderActive: EventEmitter;
  emitModalHeaderActive() {
    this.modalHeaderActive.emit({ modalid: this.modalid });
  }

  render() {
    return [
      <div class="modal-container" id={this.modalid}>
        <header onClick={this.emitModalHeaderActive.bind(this)}>
          <div>
            {this.modaltitle && <h1>{this.modaltitle}</h1>}
            {this.modalsubtitle && <h2>{this.modalsubtitle}</h2>}
          </div>
          <button onClick={this.emitModalClose.bind(this)}>
            <z-icon name="multiply-circle-filled"></z-icon>
          </button>
        </header>
        <main>
          <slot name="modalContent"></slot>
        </main>
      </div>,
      <div class="modal-background"></div>
    ];
  }
}
