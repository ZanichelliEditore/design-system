import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

import { handleKeyboardSubmit } from "../../utils/utils";

@Component({
  tag: "z-modal",
  styleUrl: "styles.css",
  shadow: true
})
export class ZModal {
  @Prop() modalid: string;
  @Prop() modaltitle?: string;
  @Prop() modalsubtitle?: string;

  constructor() {
    this.emitModalClose = this.emitModalClose.bind(this);
    this.emitModalHeaderActive = this.emitModalHeaderActive.bind(this);
  }

  @Event() modalClose: EventEmitter;
  emitModalClose() {
    this.modalClose.emit({ modalid: this.modalid });
  }

  @Event() modalHeaderActive: EventEmitter;
  emitModalHeaderActive() {
    this.modalHeaderActive.emit({ modalid: this.modalid });
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
              onMouseUp={() => this.emitModalClose()}
              data-action="modalClose"
              data-modal={this.modalid}
              onKeyPress={(ev: KeyboardEvent) =>
                handleKeyboardSubmit(ev, this.emitModalClose)
              }
              tabindex="0"
            />
          </header>
          <main>
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
