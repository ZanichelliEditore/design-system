import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";
import { ButtonVariantEnum } from "../../../beans";

@Component({
  tag: "z-cookiebar",
  styleUrl: "styles.css",
  shadow: true
})
export class ZCookiebar {
  /** cookie policy link url  */
  @Prop() cookiepolicyurl: string;
  /** hide cookie bar (optional)  */
  @Prop() hide?: boolean;
  /** callback to handle ok button action (optional) */
  @Prop() callback?: () => any;

  /** emitted on OK button click, returns event */
  @Event() okButtonClick: EventEmitter;
  emitOkButtonClick(ev: MouseEvent) {
    this.okButtonClick.emit({ev});
  }

  handleOkButtonClick(ev: MouseEvent) {
    this.emitOkButtonClick(ev);
    if (
      typeof this.callback !== "undefined" &&
      typeof this.callback === "function"
    ) {
      this.callback();
    }
  }

  /** emitted on OK button keyUp, returns event */
  @Event() okButtonKeyUp: EventEmitter;
  emitOkButtonKeyUp(ev: KeyboardEvent) {
    this.okButtonKeyUp.emit({ev});
  }

  handleOkButtonKeyUp(ev: KeyboardEvent) {
    this.emitOkButtonKeyUp(ev);
    if (ev.code === "Enter") {
      if (
        typeof this.callback !== "undefined" &&
        typeof this.callback === "function"
      ) {
        this.callback();
      }
    }
  }

  renderContentSlot() {
    return (
      <div class="content" slot="content">
        <div>
          <h2>Su questo sito usiamo i cookie.</h2>
          <div>
            <p>
              Se continui a navigare ci permetti di farlo secondo le regole
              spiegate nella nostra informativa sulla privacy relativa ai &nbsp;
              <a href={this.cookiepolicyurl} target="_blank">
                cookie
              </a>
              .
            </p>
          </div>
        </div>
        <z-button
          variant={ButtonVariantEnum.primary}
          onClick={(ev: MouseEvent) => this.handleOkButtonClick(ev)}
          onKeyUp={(ev: KeyboardEvent) => this.handleOkButtonKeyUp(ev)}
        >
          OK
        </z-button>
      </div>
    );
  }
  render() {
    return <z-candybar class={`${this.hide ? "hidden" : ""}`}>{this.renderContentSlot()}</z-candybar>;
  }
}
