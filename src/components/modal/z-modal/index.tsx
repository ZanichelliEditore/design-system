import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

import { handleKeyboardSubmit } from "../../../utils/utils";
import { AlertData } from "../../../beans";

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
  /** modal alert data (optional) */
  @Prop() alertdata?: AlertData;

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

  renderAlert() {
    const alertdata = this.alertdata;
    if (!alertdata || !alertdata.show) return null;
    return (
      <z-modal-alert
        iconname={alertdata.iconname}
        contenttext={alertdata.contenttext}
        type={alertdata.type}
        actiontext={alertdata.actiontext}
      />
    );
  }

  render() {
    return (
      <div data-action="modalBackground" data-modal={this.modalid}>
        <div id={this.modalid}>
          <header onClick={this.emitModalHeaderActive}>
            <div>
              {this.modaltitle && <h1>{this.modaltitle}</h1>}
              {this.modalsubtitle && <h2>{this.modalsubtitle}</h2>}
            </div>
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
          </header>
          <main>
            {this.renderAlert()}
            <slot name="modalContent" />
          </main>
          <div
            class="bottomBackground"
            data-action="modalBackground"
            data-modal={this.modalid}
          />
        </div>
      </div>
    );
  }
}
