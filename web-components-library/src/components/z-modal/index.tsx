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
  }

  @Event() modalClose: EventEmitter;
  emitModalClose() {
    console.log("emit", this.modalid);
    this.modalClose.emit({ modalid: this.modalid });
  }

  render() {
    return (
      <div data-action="modalBackground" data-modal={this.modalid}>
        <div id={this.modalid}>
          <header>
            <div>
              {this.modaltitle && <h1>{this.modaltitle}</h1>}
              {this.modalsubtitle && <h2>{this.modalsubtitle}</h2>}
            </div>
            <z-icon
              name="circle-cross-fill"
              width={24}
              height={24}
              data-action="modalClose"
              data-modal={this.modalid}
              onClick={() => this.emitModalClose()}
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
