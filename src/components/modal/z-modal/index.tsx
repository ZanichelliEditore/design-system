import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

import { handleKeyboardSubmit } from "../../../utils/utils";

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
  /** has header (optional) */
  @Prop() hasheader?: boolean = true;

  constructor() {
    this.emitModalClose = this.emitModalClose.bind(this);
    this.emitModalHeaderActive = this.emitModalHeaderActive.bind(this);
  }

  /** emitted on close icon click, returns modalid */
  @Event() modalClose: EventEmitter;
  emitModalClose() {
    this.modalClose.emit({ modalid: this.modalid });
  }

  /** emitted on modal header click, returns modalid */
  @Event() modalHeaderActive: EventEmitter;
  emitModalHeaderActive() {
    this.modalHeaderActive.emit({ modalid: this.modalid });
  }

  renderHeader() {
    if (!this.hasheader) {
      return <div class="iconWrapper">{this.renderCloseIcon()}</div>;
    }

    return (
      <header onClick={this.emitModalHeaderActive}>
        <div>
          {this.modaltitle && <h1>{this.modaltitle}</h1>}
          {this.modalsubtitle && <h2>{this.modalsubtitle}</h2>}
        </div>
        {this.renderCloseIcon()}
      </header>
    );
  }

  renderCloseIcon() {
    return (
      <z-icon
        name="circle-cross-fill"
        width={24}
        height={24}
        onClick={() => this.emitModalClose()}
        data-action="modalClose"
        data-modal={this.modalid}
        onKeyPress={(ev: KeyboardEvent) =>
          handleKeyboardSubmit(ev, this.emitModalClose)
        }
        tabindex="0"
      />
    );
  }

  render() {
    return (
      <div data-action="modalBackground" data-modal={this.modalid}>
        <div
          class="scrollWrapper"
          data-action="modalBackground"
          data-modal={this.modalid}
        >
          <div id={this.modalid}>
            {this.renderHeader()}
            <main class={!this.hasheader && "noHeader"}>
              <slot name="modalContent" />
            </main>
            <div
              class="bottomBackground"
              data-action="modalBackground"
              data-modal={this.modalid}
            />
          </div>
        </div>
      </div>
    );
  }
}
